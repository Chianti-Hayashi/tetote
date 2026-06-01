"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "tetoteについて", href: "/about" },
  { label: "家族を待つ子たち", href: "/pets" },
  { label: "お迎えガイド", href: "/guide" },
  { label: "家族のストーリー", href: "/stories" },
  { label: "よくある質問", href: "/faq" },
];

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="tetote home">
      <span className="grid h-9 w-9 place-items-center rounded-full bg-apricot text-white shadow-sm">
        <Heart size={17} fill="currentColor" strokeWidth={1.8} />
      </span>
      <span className={cn("logo-script text-[29px] leading-none", inverse ? "text-white" : "text-cocoa")}>tetote</span>
    </Link>
  );
}

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn("inset-x-0 top-0 z-40", overlay ? "absolute" : "sticky border-b border-cocoa/5 bg-cream/95 backdrop-blur-md")}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <Logo />
        <nav className="hidden items-center gap-7 text-[11px] font-bold tracking-[0.1em] text-cocoa/70 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition-colors hover:text-apricot">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/#diagnosis">
              相性診断をはじめる
              <ArrowRight size={14} />
            </Link>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="grid h-10 w-10 place-items-center rounded-full bg-white/80 text-cocoa shadow-sm lg:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-cocoa/5 bg-cream/98 lg:hidden"
          >
            <nav className="mx-auto grid max-w-7xl gap-1 px-6 py-5">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-sm font-bold tracking-[0.06em] text-cocoa/75 hover:bg-milk"
                >
                  {item.label}
                </Link>
              ))}
              <Link onClick={() => setOpen(false)} href="/contact" className="mt-2 rounded-xl bg-apricot px-4 py-3 text-center text-sm font-bold text-white">
                相談する
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
