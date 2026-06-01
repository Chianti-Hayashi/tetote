import Link from "next/link";
import { ArrowRight, HeartHandshake, SearchCheck, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const values = [
  { icon: SearchCheck, title: "暮らしを起点に考える", text: "かわいさだけで決めず、在宅時間、住環境、家族構成、将来の変化まで丁寧に考えます。" },
  { icon: ShieldCheck, title: "情報を誠実に伝える", text: "性格や健康状態だけでなく、苦手なことや必要なケアも隠さずにお伝えします。" },
  { icon: HeartHandshake, title: "お迎え後も伴走する", text: "譲渡がゴールではありません。小さな不安も相談できる関係を続けます。" },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="ABOUT TETOTE" title="出会いだけで、終わらない。" description="tetoteは、保護犬・保護猫と未来の家族が、無理なく自然体で暮らし続けられるご縁を考える里親マッチングプラットフォームです。" />
        <section className="bg-cream px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-apricot"><Sparkles size={14} /> OUR BELIEF</p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.45] tracking-[-0.07em] text-cocoa">いのちと暮らしの間に、<br />丁寧な対話を。</h2>
              <p className="mt-5 text-sm font-medium leading-8 tracking-[0.05em] text-cocoa/62">家族になるという決断には、うれしさと同じくらい、考えておきたいことがあります。tetoteでは、保護団体、預かりボランティア、未来のご家族が同じ情報を共有し、納得して進められる環境をつくります。</p>
            </div>
            <img src="https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1200&q=88" alt="犬と一緒に過ごす家族" className="h-80 w-full rounded-3xl object-cover shadow-soft" />
          </div>
          <div className="mx-auto mt-16 grid max-w-6xl gap-5 md:grid-cols-3">
            {values.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-milk text-apricot"><Icon size={23} /></span>
                  <span className="text-xs font-bold tracking-[0.16em] text-cocoa/18">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-lg font-bold tracking-[-0.04em] text-cocoa">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/58">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="bg-milk px-6 py-16 text-center lg:px-10">
          <h2 className="text-3xl font-bold tracking-[-0.07em] text-cocoa">まずは、あなたの暮らしを教えてください。</h2>
          <p className="mt-4 text-sm font-medium tracking-[0.05em] text-cocoa/58">3分の診断から、心地よいご縁探しをはじめられます。</p>
          <Button asChild size="lg" className="mt-7"><Link href="/#diagnosis">相性診断をはじめる <ArrowRight size={15} /></Link></Button>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
