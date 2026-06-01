import { Quote } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const stories = [
  { title: "朝の散歩が、家族の会話になりました。", family: "Mugi と 佐藤さんご家族", image: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1100&q=88", text: "最初は少し距離がありましたが、毎朝同じ道を歩くうちに表情が柔らかくなりました。今では散歩の時間が、家族みんなの楽しみです。" },
  { title: "静かな時間を、一緒に楽しんでいます。", family: "Luna と 山本さん", image: "https://images.unsplash.com/photo-1525253086316-d0c936c814f8?auto=format&fit=crop&w=1100&q=88", text: "猫との暮らしは初めてでした。スタッフさんに相談しながら居場所を整え、今では仕事中も同じ部屋でのんびり過ごしています。" },
  { title: "できることが、少しずつ増えていく。", family: "Kai と 木村さんご家族", image: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1100&q=88", text: "お散歩の練習から始めて、今では近所の公園が大好きに。小さな成長を一緒に喜べる毎日が、とても新鮮です。" },
];

export default function StoriesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="FAMILY STORIES" title="家族のストーリー" description="出会いのあとに続いていく、毎日のこと。tetoteを通じて生まれた新しい家族の暮らしをご紹介します。" />
        <section className="bg-cream px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-6">
            {stories.map((story, index) => (
              <article key={story.family} className="grid overflow-hidden rounded-3xl border border-cocoa/5 bg-white shadow-sm md:grid-cols-2">
                <img src={story.image} alt={story.family} className="h-72 w-full object-cover md:h-full" />
                <div className="p-7 sm:p-10">
                  <Quote size={28} className="text-apricot/55" />
                  <p className="mt-4 text-[10px] font-bold tracking-[0.2em] text-apricot">STORY 0{index + 1}</p>
                  <h2 className="mt-3 text-2xl font-bold leading-10 tracking-[-0.06em] text-cocoa">{story.title}</h2>
                  <p className="mt-4 text-xs font-medium leading-7 tracking-[0.04em] text-cocoa/62">{story.text}</p>
                  <p className="mt-6 text-xs font-bold tracking-[0.08em] text-cocoa/45">{story.family}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
