"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const faqs = [
  { q: "相性診断だけでも利用できますか？", a: "はい。登録不要・無料でご利用いただけます。診断結果から気になる子が見つかった場合のみ、相談フォームへお進みください。" },
  { q: "一人暮らしでも里親になれますか？", a: "可能です。生活リズム、緊急時の預け先、動物の性格などを確認し、無理なく暮らせるご縁をご提案します。保護団体や動物によって条件が異なる場合があります。" },
  { q: "譲渡までにどれくらい時間がかかりますか？", a: "お問い合わせから正式譲渡までは、通常3〜6週間ほどです。面談、お見合い、通常2週間ほどのトライアルを経て、双方の意思を確認します。" },
  { q: "譲渡費用はかかりますか？", a: "医療費、ワクチン、マイクロチップ登録費などの実費負担をお願いしています。目安は30,000円〜70,000円です。詳細は面談前に明示します。" },
  { q: "先住犬・先住猫がいても大丈夫ですか？", a: "動物同士の性格や健康状態を確認しながら検討できます。お見合いやトライアルの方法も、担当スタッフが個別にご案内します。" },
  { q: "遠方に住んでいても応募できますか？", a: "動物の移動負担や保護団体のサポート範囲を考慮し、譲渡可能エリアを設定しています。各プロフィールをご確認いただくか、相談フォームからお問い合わせください。" },
  { q: "お迎え後に相談できますか？", a: "はい。環境に慣れるまでの過ごし方、食事、トイレ、先住動物との関係など、気になることがあればいつでもご相談いただけます。" },
];

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="FREQUENTLY ASKED QUESTIONS" title="よくある質問" description="ご縁探しやお迎えについて、よくいただく質問をまとめました。解決しないことは、スタッフへお気軽にご相談ください。" />
        <section className="bg-cream px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-3">
              {faqs.map((item, index) => (
                <article key={item.q} className="overflow-hidden rounded-2xl border border-cocoa/5 bg-white shadow-sm">
                  <button
                    type="button"
                    onClick={() => setOpen(open === index ? null : index)}
                    aria-expanded={open === index}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left"
                  >
                    <span className="flex gap-3">
                      <span className="font-bold text-apricot">Q.</span>
                      <span className="text-sm font-bold tracking-[0.03em] text-cocoa">{item.q}</span>
                    </span>
                    <ChevronDown size={18} className={cn("shrink-0 text-cocoa/35 transition-transform", open === index && "rotate-180")} />
                  </button>
                  <AnimatePresence>
                    {open === index && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
                        <p className="border-t border-cocoa/5 bg-milk/35 px-5 py-5 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/63">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-3xl bg-milk p-7 text-center">
              <MessageCircle className="mx-auto text-apricot" size={25} />
              <h2 className="mt-4 text-xl font-bold tracking-[-0.04em] text-cocoa">まだ不安なことがありますか？</h2>
              <p className="mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/58">小さな疑問でも大丈夫です。担当スタッフが丁寧にお答えします。</p>
              <Button asChild size="lg" className="mt-5"><Link href="/contact">スタッフに相談する <ArrowRight size={15} /></Link></Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
