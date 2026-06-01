import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, HeartHandshake, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { PetActions } from "@/components/pet-actions";
import { PetCard } from "@/components/pet-card";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { getPet, pets } from "@/lib/pets";

export function generateStaticParams() {
  return pets.map((pet) => ({ slug: pet.slug }));
}

export default function PetDetailPage({ params }: { params: { slug: string } }) {
  const pet = getPet(params.slug);
  if (!pet) notFound();
  const related = pets.filter((item) => item.slug !== pet.slug && item.species === pet.species).slice(0, 2);

  return (
    <>
      <SiteHeader />
      <main className="bg-cream">
        <section className="px-6 py-8 lg:px-10 lg:py-12">
          <div className="mx-auto max-w-6xl">
            <Link href="/pets" className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.06em] text-cocoa/55 hover:text-apricot">
              <ArrowLeft size={14} />
              家族を待つ子たちへ戻る
            </Link>
            <div className="mt-7 grid gap-6 lg:grid-cols-[1.04fr_0.96fr]">
              <div className="grid gap-3 sm:grid-cols-[1fr_0.38fr]">
                <div className="relative min-h-[430px] overflow-hidden rounded-3xl">
                  <img src={pet.image} alt={`${pet.name}のメイン写真`} className="h-full w-full object-cover" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[11px] font-bold tracking-widest text-apricot backdrop-blur-md">
                    {pet.match}% MATCH
                  </div>
                </div>
                <div className="hidden overflow-hidden rounded-3xl sm:block">
                  <img src={pet.subImage} alt={`${pet.name}の日常の写真`} className="h-full w-full object-cover" />
                </div>
              </div>
              <div className="rounded-3xl border border-cocoa/5 bg-white p-6 shadow-soft sm:p-8">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.2em] text-apricot">MEET {pet.name.toUpperCase()}</p>
                    <h1 className="logo-script mt-2 text-5xl tracking-[-0.12em] text-cocoa">{pet.name}</h1>
                  </div>
                  <PetActions name={pet.name} slug={pet.slug} />
                </div>
                <p className="mt-4 text-sm font-bold tracking-[0.07em] text-cocoa/58">
                  {pet.breed} ・ {pet.age} ・ {pet.gender}
                </p>
                <p className="mt-3 flex items-center gap-1.5 text-xs font-bold tracking-[0.06em] text-cocoa/45">
                  <MapPin size={14} />
                  {pet.area}でお迎えを待っています
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {pet.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-sage/15 px-3 py-2 text-[10px] font-bold tracking-[0.05em] text-[#74846f]">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-2xl bg-milk/60 p-5">
                  <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-apricot">
                    <Sparkles size={15} />
                    PERSONALITY
                  </p>
                  <p className="mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/68">{pet.personality}</p>
                </div>
                <Button asChild size="lg" className="mt-6 w-full">
                  <Link href={`/contact?pet=${pet.slug}`}>
                    {pet.name}について相談する
                    <ArrowRight size={15} />
                  </Link>
                </Button>
                <p className="mt-3 text-center text-[10px] font-bold tracking-[0.06em] text-cocoa/38">相談無料 ・ 無理な譲渡のおすすめはありません</p>
              </div>
            </div>
          </div>
        </section>
        <section className="px-6 py-10 lg:px-10 lg:py-16">
          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-6 shadow-sm lg:col-span-2">
              <h2 className="text-xl font-bold tracking-[-0.05em] text-cocoa">{pet.name}のストーリー</h2>
              <p className="mt-4 text-sm font-medium leading-8 tracking-[0.05em] text-cocoa/64">{pet.story}</p>
              <div className="mt-6 rounded-2xl bg-sage/15 p-5">
                <p className="flex items-center gap-2 text-xs font-bold tracking-[0.08em] text-[#74846f]">
                  <HeartHandshake size={17} />
                  お迎え後のサポートポイント
                </p>
                <p className="mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/63">{pet.support}</p>
              </div>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-sm font-bold tracking-[0.04em] text-cocoa">
                <ShieldCheck size={18} className="text-sage" />
                健康・ケア情報
              </h2>
              <ul className="mt-4 grid gap-3">
                {pet.health.map((item) => (
                  <li key={item} className="flex gap-2 text-xs font-medium leading-5 text-cocoa/62">
                    <Check size={14} className="mt-0.5 shrink-0 text-apricot" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-cocoa/8 pt-4 text-[10px] font-medium leading-5 text-cocoa/42">
                最新の診療記録や詳細な健康状態は、面談時に担当スタッフからご説明します。
              </p>
            </div>
          </div>
        </section>
        <section className="bg-milk/60 px-6 py-14 lg:px-10 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <p className="text-[10px] font-bold tracking-[0.22em] text-apricot">MORE PARTNERS</p>
            <h2 className="mt-3 text-2xl font-bold tracking-[-0.06em] text-cocoa">ほかにも家族を待っています</h2>
            <div className="mt-7 grid gap-5 md:grid-cols-2">
              {related.map((item, index) => (
                <PetCard key={item.slug} pet={item} index={index} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
