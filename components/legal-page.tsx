import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({ title, eyebrow, sections }: { title: string; eyebrow: string; sections: { title: string; text: string }[] }) {
  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow={eyebrow} title={title} description="安心してサービスをご利用いただくために、tetoteの方針をお伝えします。" />
        <section className="bg-cream px-6 py-16 lg:px-10">
          <div className="mx-auto max-w-4xl rounded-3xl bg-white p-7 shadow-sm sm:p-10">
            <p className="text-xs font-bold tracking-[0.06em] text-cocoa/45">最終更新日：2026年6月1日</p>
            <div className="mt-7 grid gap-7">
              {sections.map((section) => (
                <article key={section.title}>
                  <h2 className="text-lg font-bold tracking-[-0.04em] text-cocoa">{section.title}</h2>
                  <p className="mt-3 whitespace-pre-line text-xs font-medium leading-7 tracking-[0.04em] text-cocoa/62">{section.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
