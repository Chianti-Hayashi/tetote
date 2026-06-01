"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Heart, MessageCircle, MoreHorizontal, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function PetActions({
  name,
  slug,
  compact = false,
}: {
  name: string;
  slug: string;
  compact?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    };
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  const copyLink = async () => {
    await navigator.clipboard.writeText(`${window.location.origin}/pets/${slug}`);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={`${name}のその他の操作`}
        className={cn(
          "grid place-items-center rounded-full border border-cocoa/5 bg-white/90 text-cocoa/60 shadow-sm backdrop-blur-md transition-all hover:scale-105 hover:text-apricot",
          compact ? "h-10 w-10" : "h-11 w-11",
        )}
      >
        <MoreHorizontal size={19} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -5, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -5, scale: 0.96 }}
            className="absolute right-0 top-12 z-30 w-52 overflow-hidden rounded-2xl border border-cocoa/10 bg-white p-1.5 shadow-float"
          >
            <button
              type="button"
              onClick={() => setFavorite((value) => !value)}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-bold text-cocoa/70 hover:bg-milk"
            >
              <Heart size={15} className={favorite ? "fill-apricot text-apricot" : "text-apricot"} />
              {favorite ? "お気に入りから外す" : "お気に入りに保存"}
            </button>
            <button
              type="button"
              onClick={copyLink}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-xs font-bold text-cocoa/70 hover:bg-milk"
            >
              {copied ? <Check size={15} className="text-sage" /> : <Share2 size={15} className="text-sage" />}
              {copied ? "リンクをコピーしました" : "共有リンクをコピー"}
            </button>
            <Link
              href={`/contact?pet=${slug}`}
              className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-bold text-cocoa/70 hover:bg-milk"
            >
              <MessageCircle size={15} className="text-apricot" />
              この子について相談
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
