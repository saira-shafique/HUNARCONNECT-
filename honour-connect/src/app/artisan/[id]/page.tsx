"use client";

import { useEffect, useState } from "react";
import { use } from "react";

type ArtisanProfilePageProps = {
  params: Promise<{ id: string }>;
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
  const portfolioImages = toArray(item.portfolioImages ?? item.portfolio ?? item.images ?? item.gallery);
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

function unwrapArtisan(payload: unknown): ArtisanRecord | null {
  if (payload && typeof payload === "object") {
    const data = payload as Record<string, unknown>;
    if (data.artisan && typeof data.artisan === "object") {
      return normalizeArtisan(data.artisan as Record<string, unknown>);
    }
    if (data.data && typeof data.data === "object") {
      return normalizeArtisan(data.data as Record<string, unknown>);
    }
    if (Array.isArray(data.artisans) && data.artisans.length > 0) {
      return normalizeArtisan(data.artisans[0] as Record<string, unknown>);
    }
    if (Array.isArray(data.results) && data.results.length > 0) {
      return normalizeArtisan(data.results[0] as Record<string, unknown>);
    }
    return normalizeArtisan(data);
  }

  return null;
}

function buildArtisanEndpoints(id: string) {
  const baseCandidates = [
    process.env.NEXT_PUBLIC_API_URL,
    process.env.NEXT_PUBLIC_API_BASE_URL,
    process.env.NEXT_PUBLIC_BACKEND_URL,
  ].filter(Boolean) as string[];

  const urls = new Set<string>();

  baseCandidates.forEach((base) => {
    const cleanBase = base.endsWith("/") ? base.slice(0, -1) : base;
    urls.add(`${cleanBase}/artisans/${id}`);
    urls.add(`${cleanBase}/api/artisans/${id}`);
    urls.add(`${cleanBase}/artisans?id=${encodeURIComponent(id)}`);
    urls.add(`${cleanBase}/api/artisans?id=${encodeURIComponent(id)}`);
  });

  urls.add(`/api/artisans/${id}`);
  urls.add(`/artisans/${id}`);
  urls.add(`/api/artisans?id=${encodeURIComponent(id)}`);
  urls.add(`/artisans?id=${encodeURIComponent(id)}`);

  return Array.from(urls);
}

function renderStars(rating: number) {
  const safeRating = Number.isFinite(rating) ? Math.max(0, Math.min(5, Math.round(rating))) : 0;
  return "★".repeat(safeRating) + "☆".repeat(5 - safeRating);
}

export default function ArtisanProfilePage({ params }: ArtisanProfilePageProps) {
  const { id } = use(params);
  const [artisan, setArtisan] = useState<ArtisanRecord | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadArtisan() {
      setLoading(true);
      const endpoints = buildArtisanEndpoints(id);

      for (const endpoint of endpoints) {
        try {
          const response = await fetch(endpoint, { cache: "no-store" });
          if (!response.ok) {
            continue;
          }

          const payload = await response.json();
          const nextArtisan = unwrapArtisan(payload);

          if (active) {
            setArtisan(nextArtisan);
            setLoading(false);
          }
          return;
        } catch {
          continue;
        }
      }

      if (active) {
        setArtisan(null);
        setLoading(false);
      }
    }

    loadArtisan();

    return () => {
      active = false;
    };
  }, [id]);

  if (loading) {
    return (
      <main className="bg-[#FFF8F5] text-slate-900">
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10 lg:p-14">
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-[#FFF8F5] p-8 text-center shadow-sm shadow-slate-200/50">
              <p className="text-lg font-semibold text-slate-900">Loading artisan profile...</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  if (!artisan) {
    return (
      <main className="bg-[#FFF8F5] text-slate-900">
        <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-5xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10 lg:p-14">
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-[#FFF8F5] p-8 text-center shadow-sm shadow-slate-200/50">
              <p className="text-lg font-semibold text-slate-900">Artisan profile is not available.</p>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-[#FFF8F5] text-slate-900">
      <section className="px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl rounded-[36px] border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200/50 sm:p-10 lg:p-14">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="rounded-[32px] bg-[#FFF8F5] p-6 shadow-sm shadow-slate-200/50">
              <div className="flex items-center gap-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-200 text-sm font-semibold text-slate-500">
                  {artisan.profileImage ? "Image" : "Profile Picture"}
                </div>
                <div>
                  <h1 className="text-2xl font-semibold text-slate-900">{artisan.name}</h1>
                  <p className="mt-1 text-sm font-medium text-[#8B1E4D]">{artisan.category}</p>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm text-slate-600">
                <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
                  <span className="font-medium text-slate-700">City</span>
                  <span>{artisan.city}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
                  <span className="font-medium text-slate-700">Experience</span>
                  <span>{artisan.experience}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white px-3 py-2">
                  <span className="font-medium text-slate-700">Overall Rating</span>
                  <span className="text-amber-500">{renderStars(artisan.rating)}</span>
                </div>
              </div>

              <button className="mt-6 inline-flex rounded-full bg-[#8B1E4D] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#73153F]">
                Start Conversation
              </button>
            </div>

            <div className="space-y-6">
              <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <h2 className="text-xl font-semibold text-slate-900">About Artisan</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{artisan.about}</p>
              </section>

              <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <h2 className="text-xl font-semibold text-slate-900">Skills</h2>
                <div className="mt-4 flex flex-wrap gap-3">
                  {artisan.skills.map((skill) => (
                    <span key={skill} className="rounded-full bg-[#FFF8F5] px-3 py-2 text-sm font-medium text-[#8B1E4D]">
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <h2 className="text-xl font-semibold text-slate-900">Portfolio Gallery</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {artisan.portfolioImages.length > 0 ? (
                    artisan.portfolioImages.map((image) => (
                      <div key={image} className="h-40 overflow-hidden rounded-[24px] bg-slate-100">
                        <div className="flex h-full items-center justify-center text-sm text-slate-500">{image}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-slate-600">No portfolio images available.</p>
                  )}
                </div>
              </section>

              <section className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50">
                <h2 className="text-xl font-semibold text-slate-900">Customer Reviews</h2>
                {artisan.reviews.length > 0 ? (
                  <div className="mt-4 space-y-4">
                    {artisan.reviews.map((review) => (
                      <div key={review.name} className="rounded-[24px] bg-[#FFF8F5] p-4">
                        <p className="text-sm font-semibold text-slate-900">{review.name}</p>
                        <p className="mt-2 text-sm leading-7 text-slate-600">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mt-4 text-sm text-slate-600">No reviews available.</p>
                )}
              </section>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
