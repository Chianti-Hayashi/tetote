"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { PetCard } from "@/components/pet-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { pets } from "@/lib/pets";
import { cn } from "@/lib/utils";

const filters = ["すべて", "犬", "猫"];

export default function PetsPage() {
  const [filter, setFilter] = useState("すべて");
  const [query, setQuery] = useState("");
  const visiblePets = useMemo(
    () =>
      pets.filter(
        (pet) =>
          (filter === "すべて" || pet.species === filter) &&
          `${pet.name}${pet.breed}${pet.tags.join("")}${pet.area}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [filter, query],
  );

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="MEET YOUR PARTNER"
          title="家族を待つ子たち"
          description="それぞれの性格や過ごし方、ケアについて丁寧にお伝えします。気になる子がいたら、まずはスタッフにご相談ください。"
        />
        <section className="bg-cream px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-4 rounded-3xl border border-cocoa/5 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.map((item) => (
                  <button
                    type="button"
                    key={item}
                    onClick={() => setFilter(item)}
                    className={cn(
                      "rounded-full px-5 py-2.5 text-xs font-bold tracking-[0.06em] transition-colors",
                      filter === item ? "bg-cocoa text-white" : "bg-milk/70 text-cocoa/60 hover:bg-milk",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
              <label className="flex items-center gap-2 rounded-full border border-cocoa/10 bg-cream px-4 py-2.5 text-cocoa/50 sm:w-72">
                <Search size={15} />
                <input
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="名前・性格・地域から探す"
                  className="w-full bg-transparent text-xs font-medium outline-none placeholder:text-cocoa/35"
                />
              </label>
            </div>
            <div className="mt-7 flex items-center justify-between">
              <p className="text-xs font-bold tracking-[0.1em] text-cocoa/50">{visiblePets.length} PARTNERS</p>
              <p className="flex items-center gap-2 text-[11px] font-bold tracking-[0.06em] text-cocoa/45">
                <SlidersHorizontal size={14} />
                譲渡可能な子を掲載中
              </p>
            </div>
            {visiblePets.length ? (
              <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {visiblePets.map((pet, index) => (
                  <PetCard key={pet.slug} pet={pet} index={index} />
                ))}
              </div>
            ) : (
              <div className="mt-6 rounded-3xl bg-milk/60 px-6 py-16 text-center text-sm font-bold text-cocoa/60">
                条件に合う子が見つかりませんでした。検索条件を変えてお試しください。
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
