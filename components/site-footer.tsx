import Link from "next/link";
import { Heart } from "lucide-react";
import { Logo } from "@/components/site-header";

const footerLinks = [
  { label: "tetoteについて", href: "/about" },
  { label: "家族を待つ子たち", href: "/pets" },
  { label: "お迎えガイド", href: "/guide" },
  { label: "家族のストーリー", href: "/stories" },
  { label: "よくある質問", href: "/faq" },
  { label: "お問い合わせ", href: "/contact" },
];

export function SiteFooter() {
  return (
    <footer className="bg-cocoa px-6 py-12 text-white/80 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-9 border-b border-white/10 pb-9 md:grid-cols-[1fr_auto]">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-sm text-xs font-medium leading-6 tracking-[0.06em] text-white/50">
              保護犬・保護猫と未来の家族を、暮らしから丁寧につなぐ里親マッチングプラットフォーム。
            </p>
          </div>
          <nav className="grid grid-cols-2 gap-x-8 gap-y-3 text-xs font-bold tracking-[0.06em] text-white/65 sm:grid-cols-3">
            {footerLinks.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-apricot">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-7 flex flex-col gap-4 text-[10px] font-bold tracking-[0.12em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2">
            <Heart size={13} fill="currentColor" className="text-apricot" />
            © 2026 tetote. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70">プライバシーポリシー</Link>
            <Link href="/terms" className="hover:text-white/70">利用規約</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
