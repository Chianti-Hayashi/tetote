"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles } from "lucide-react";
import type { Pet } from "@/lib/pets";
import { PetActions } from "@/components/pet-actions";

export function PetCard({ pet, index = 0 }: { pet: Pet; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", bounce: 0.3, delay: index * 0.07 }}
      className="group overflow-hidden rounded-3xl border border-cocoa/5 bg-white shadow-[0_16px_34px_rgba(78,68,63,0.08)]"
    >
      <div className="relative h-64 overflow-hidden">
        <img src={pet.image} alt={`${pet.name}の写真`} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold tracking-widest text-apricot backdrop-blur-md">
          {pet.match}% MATCH
        </div>
        <div className="absolute right-4 top-4">
          <PetActions name={pet.name} slug={pet.slug} compact />
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="logo-script text-[30px] tracking-[-0.1em] text-cocoa">{pet.name}</h3>
            <p className="mt-1 text-[11px] font-bold tracking-[0.06em] text-cocoa/50">
              {pet.breed} ・ {pet.age} ・ {pet.gender}
            </p>
          </div>
          <Sparkles size={17} className="mt-2 shrink-0 text-apricot" />
        </div>
        <p className="mt-3 flex items-center gap-1 text-[10px] font-bold tracking-[0.06em] text-cocoa/42">
          <MapPin size={12} />
          {pet.area}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {pet.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-sage/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.04em] text-[#74846f]">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/pets/${pet.slug}`} className="mt-5 flex items-center justify-between border-t border-cocoa/8 pt-4 text-xs font-bold tracking-[0.06em] text-cocoa transition-colors hover:text-apricot">
          {pet.name}をもっと知る
          <ArrowRight size={14} />
        </Link>
      </div>
    </motion.article>
  );
}
