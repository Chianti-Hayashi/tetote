import Link from "next/link";
import { ArrowRight, CalendarCheck, FileCheck2, HeartHandshake, Home, MessageCircle, Search } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: Search, title: "出会う", text: "相性診断や一覧から気になる子を見つけます。プロフィールでは性格、健康状態、必要なケアを確認できます。" },
  { icon: MessageCircle, title: "相談する", text: "担当スタッフが生活環境やご希望を伺い、お互いに無理のないご縁かを一緒に考えます。" },
  { icon: CalendarCheck, title: "面談・お見合い", text: "保護団体と日程を調整し、実際に会います。家族全員で参加し、不安な点を確認してください。" },
  { icon: Home, title: "トライアル", text: "通常2週間ほど、一緒に暮らして相性を確かめます。期間中もスタッフがサポートします。" },
  { icon: HeartHandshake, title: "正式譲渡", text: "双方の意思を確認して正式譲渡へ。お迎え後も困ったときはいつでもご相談いただけます。" },
];

export default function GuidePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="ADOPTION GUIDE" title="お迎えまでの歩き方" description="焦らず、ひとつずつ。出会いから正式譲渡まで、担当スタッフがご家族と動物のペースに合わせて伴走します。" />
        <section className="bg-cream px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4">
              {steps.map(({ icon: Icon, title, text }, index) => (
                <article key={title} className="grid gap-4 rounded-3xl border border-cocoa/5 bg-white p-6 shadow-sm sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-milk p-3 text-apricot"><Icon size={24} /></span>
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] text-apricot">STEP 0{index + 1}</p>
                    <h2 className="mt-1 text-lg font-bold tracking-[-0.04em] text-cocoa">{title}</h2>
                    <p className="mt-2 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/58">{text}</p>
                  </div>
                  <span className="hidden text-3xl font-bold text-cocoa/10 sm:block">0{index + 1}</span>
                </article>
              ))}
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              <article className="rounded-3xl bg-milk p-6">
                <h2 className="flex items-center gap-2 text-lg font-bold tracking-[-0.04em] text-cocoa"><FileCheck2 size={20} className="text-apricot" /> 譲渡にかかる費用</h2>
                <p className="mt-3 text-xs font-medium leading-6 text-cocoa/62">医療費やマイクロチップ登録費など、保護団体ごとに実費負担をお願いしています。目安は犬・猫ともに30,000円〜70,000円です。詳細は面談前に明示します。</p>
              </article>
              <article className="rounded-3xl bg-sage/15 p-6">
                <h2 className="text-lg font-bold tracking-[-0.04em] text-cocoa">お迎えの基本条件</h2>
                <p className="mt-3 text-xs font-medium leading-6 text-cocoa/62">終生飼養、家族全員の同意、ペット飼育可能な住居、必要な医療ケア、不妊去勢への同意などをお願いしています。動物ごとに追加条件がある場合があります。</p>
              </article>
            </div>
            <div className="mt-10 text-center">
              <Button asChild size="lg"><Link href="/contact">お迎えについて相談する <ArrowRight size={15} /></Link></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
