"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { use } from "react";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

type ArtisanRecord = {
  id: string;
  name: string;
  category: string;
  city: string;
  experience: string;
  rating: number;
  about: string;
  skills: string[];
  portfolioImages: string[];
  reviews: Array<{ name: string; comment: string }>;
  profileImage?: string;
};

const categoryMap: Record<string, string> = {
  "machine-stitching": "Machine Stitching",
  embroidery: "Embroidery",
  zardozi: "Zardozi",
  applique: "Applique",
  crochet: "Crochet",
  "fabric-painting": "Fabric Painting",
  "mirror-work": "Mirror Work",
  "lace-trims": "Lace Trims",
};

function formatCategoryTitle(category: string) {
  const title = category.replace(/-/g, " ");
  return title.replace(/\b\w/g, (char) => char.toUpperCase());
}

function renderStars(rating: number) {
  const safeRating = Number.isFinite(rating) ? Math.max(0, Math.min(5, Math.round(rating))) : 0;
  return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
}

function toArray(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => (typeof item === "string" ? item : item?.name || item?.title || ""))
      .filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeArtisan(item: Record<string, unknown>): ArtisanRecord {
  const id =
    (item.id as string | undefined) ||
    (item._id as string | undefined) ||
    (item.artisanId as string | undefined) ||
    (item.artisan_id as string | undefined) ||
    "";

  const name =
    (item.fullName as string | undefined) ||
    (item.name as string | undefined) ||
    (item.full_name as string | undefined) ||
    "Artisan";

  const category =
    (item.category as string | undefined) ||
    (item.categoryName as string | undefined) ||
    (item.specialization as string | undefined) ||
    (item.serviceCategory as string | undefined) ||
    "";

  const city =
    (item.city as string | undefined) ||
    (item.location as string | undefined) ||
    (item.currentCity as string | undefined) ||
    "";

  const experience =
    (item.experience as string | undefined) ||
    (item.experienceText as string | undefined) ||
    (item.yearsOfExperience as string | undefined) ||
    (typeof item.experienceYears === "number"
      ? `${item.experienceYears} Years`
      : "") ||
    "";

  const rating = Number(
    (item.rating as number | string | undefined) ||
      (item.averageRating as number | string | undefined) ||
      (item.overallRating as number | string | undefined) ||
      (item.starRating as number | string | undefined) ||
      0
  );

  const about =
    (item.about as string | undefined) ||
    (item.aboutArtisan as string | undefined) ||
    (item.bio as string | undefined) ||
    (item.description as string | undefined) ||
    "";

  const skills = toArray(item.skills ?? item.services ?? item.servicesOffered);

  const portfolioImages = toArray(
    item.portfolioImages ?? item.portfolio ?? item.images ?? item.gallery ?? item.portfolioGallery
  );

  const reviews = Array.isArray(item.reviews)
    ? (item.reviews as Array<Record<string, unknown>>).map((review) => ({
        name: (review.name as string | undefined) || "Customer",
        comment: (review.comment as string | undefined) || (review.message as string | undefined) || "",
      }))
    : Array.isArray(item.customerReviews)
      ? (item.customerReviews as Array<Record<string, unknown>>).map((review) => ({
          name: (review.name as string | undefined) || "Customer",
          comment: (review.comment as string | undefined) || (review.message as string | undefined) || "",
        }))
      : [];

  return {
    id,
    name,
    category,
    city,
    experience,
    rating,
    about,
    skills,
    portfolioImages,
    reviews,
    profileImage: (item.profileImage as string | undefined) || (item.image as string | undefined) || "",
  };
}

function unwrapArtisanList(payload: unknown): ArtisanRecord[] {
  if (Array.isArray(payload)) {
    return payload.filter(Boolean).map((item) => normalizeArtisan(item as Record<string, unknown>));
  }

  if (payload && typeof payload === "object") {
    const data = payload as Record<string, unknown>;
    const candidates = [data.artisans, data.artists, data.data, data.results, data.items, data.records];
    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate.filter(Boolean).map((item) => normalizeArtisan(item as Record<string, unknown>));
      }
    }
  }

  return [];
}

function buildArtisanEndpoints(categoryName: string, slug: string) {
  const baseCandidates = [
    process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    process.env.NEXT_PUBLIC_BACKEND_URL,
  ].filter(Boolean) as string[];

  const urls = new Set<string>();
  const queryParams = [
    `category=${encodeURIComponent(categoryName)}`,
    `specialization=${encodeURIComponent(categoryName)}`,
    `category=${encodeURIComponent(slug)}`,
  ];

  baseCandidates.forEach((base) => {
    const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
    urls.add(`${cleanBase}/artisans?${queryParams[0]}`);
    urls.add(`${cleanBase}/artisans?${queryParams[1]}`);
    urls.add(`${cleanBase}/artisans?${queryParams[2]}`);
    urls.add(`${cleanBase}/api/artisans?${queryParams[0]}`);
    urls.add(`${cleanBase}/api/artisans?${queryParams[1]}`);
    urls.add(`${cleanBase}/api/artisans?${queryParams[2]}`);
  });

  urls.add(`/api/artisans?${queryParams[0]}`);
  urls.add(`/api/artisans?${queryParams[1]}`);
  urls.add(`/api/artisans?${queryParams[2]}`);
  urls.add(`/artisans?${queryParams[0]}`);
  urls.add(`/artisans?${queryParams[1]}`);
  urls.add(`/artisans?${queryParams[2]}`);

  return Array.from(urls);
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { category } = use(params);
  const slug = decodeURIComponent(category).toLowerCase();
  const title = formatCategoryTitle(slug);
  const categoryName = categoryMap[slug] || title;
  const [artisans, setArtisans] = useState<ArtisanRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRating, setSelectedRating] = useState("All Ratings");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedExperience, setSelectedExperience] = useState("All Experience");

  useEffect(() => {
    let active = true;

    async function loadArtisans() {
      setLoading(true);
      const endpoints = buildArtisanEndpoints(categoryName, slug);

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, { cache: "no-store" });
          if (!response.ok) {
            continue;
          }

          const payload = await response.json();
          const nextArtisans = unwrapArtisanList(payload);

          if (active) {
            setArtisans(nextArtisans);
          }

          if (active) {
            setLoading(false);
          }
          return;
        } catch {
          continue;
        }
      }

      if (active) {
        setArtisans([]);
        setLoading(false);
      }
    }

    loadArtisans();

    return () => {
      active = false;
    };
  }, [categoryName, slug]);

  const categoryArtisans = useMemo(() => {
    return artisans.filter((artisan) => {
      const artisanCategory = artisan.category.toLowerCase();
      const selectedCategory = categoryName.toLowerCase();
      return artisanCategory === selectedCategory || artisanCategory === slug;
    });
  }, [artisans, categoryName, slug]);

  const cityOptions = useMemo(
    () => Array.from(new Set(categoryArtisans.map((artisan) => artisan.city).filter(Boolean))),
    [categoryArtisans]
  );

  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filteredArtisans = useMemo(() => {
    return categoryArtisans.filter((artisan) => {
      const matchesSearch =
        normalizedSearch.length === 0 || artisan.name.toLowerCase().includes(normalizedSearch);

      const matchesRating =
        selectedRating === "All Ratings" ||
        (selectedRating === "5 Stars" && artisan.rating >= 5) ||
        (selectedRating === "4 Stars" && artisan.rating >= 4);

      const matchesCity = selectedCity === "All Cities" || artisan.city === selectedCity;

      const selectedExperienceValue = Number(selectedExperience.replace(/\D/g, ""));
      const artisanExperienceValue = Number(artisan.experience.replace(/\D/g, ""));
      const matchesExperience =
        selectedExperience === "All Experience" ||
        (selectedExperience === "5+ Years" && artisanExperienceValue >= 5) ||
        (selectedExperience === "4+ Years" && artisanExperienceValue >= 4) ||
        (selectedExperience === "3+ Years" && artisanExperienceValue >= 3);

      return matchesSearch && matchesRating && matchesCity && matchesExperience;
    });
  }, [categoryArtisans, normalizedSearch, selectedRating, selectedCity, selectedExperience]);

  const hasArtisansInCategory = categoryArtisans.length > 0;

  return (
    <main className="bg-[#FFF8F5] text-slate-900">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10 lg:p-14">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-[#8B1E4F]/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#8B1E4F]">
              Customer Discover
            </span>
            <h1
              className="mt-6 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              {title}
            </h1>

            <div className="mt-8 rounded-[28px] border border-slate-200 bg-[#FFF8F5] p-4 shadow-sm shadow-slate-200/50 sm:p-5">
              <div className="flex items-center gap-3 rounded-[22px] border border-slate-200 bg-white px-4 py-3 sm:px-5">
                <span className="text-xl text-[#8B1E4F]">🔎</span>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search artisan by name..."
                  className="w-full bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="mt-4 grid gap-3 md:grid-cols-3">
              <select
                value={selectedRating}
                onChange={(event) => setSelectedRating(event.target.value)}
                className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
              >
                <option>All Ratings</option>
                <option>5 Stars</option>
                <option>4 Stars</option>
              </select>
              <select
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
                className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
              >
                <option>All Cities</option>
                {cityOptions.map((city) => (
                  <option key={city}>{city}</option>
                ))}
              </select>
              <select
                value={selectedExperience}
                onChange={(event) => setSelectedExperience(event.target.value)}
                className="rounded-[20px] border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none"
              >
                <option>All Experience</option>
                <option>5+ Years</option>
                <option>4+ Years</option>
                <option>3+ Years</option>
              </select>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {loading ? (
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-[#FFF8F5] p-8 text-center text-slate-600 md:col-span-2 xl:col-span-3">
                Loading artisans...
              </div>
            ) : !hasArtisansInCategory ? (
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-[#FFF8F5] p-8 text-center text-slate-600 md:col-span-2 xl:col-span-3">
                No artisan is available in this category.
              </div>
            ) : filteredArtisans.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-slate-300 bg-[#FFF8F5] p-8 text-center text-slate-600 md:col-span-2 xl:col-span-3">
                No artisan found.
              </div>
            ) : (
              filteredArtisans.map((artisan) => (
                <article
                  key={artisan.id}
                  className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF8F5] text-sm font-semibold text-[#8B1E4D]">
                      {artisan.name.split(" ")[0][0]}
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-slate-900">{artisan.name}</h2>
                      <p className="mt-1 text-sm text-slate-500">{artisan.city}</p>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <div className="flex items-center justify-between rounded-2xl bg-[#FFF8F5] px-3 py-2">
                      <span className="font-medium text-slate-700">Experience</span>
                      <span className="text-[#8B1E4D]">{artisan.experience}</span>
                    </div>
                    <div className="flex items-center justify-between rounded-2xl bg-[#FFF8F5] px-3 py-2">
                      <span className="font-medium text-slate-700">Rating</span>
                      <span className="text-amber-500">{renderStars(artisan.rating)}</span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-600">{artisan.about}</p>

                  <Link
                    href={`/artisan/${artisan.id}`}
                    className="mt-6 inline-flex rounded-full bg-[#8B1E4D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#73153F]"
                  >
                    View Profile
                  </Link>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
