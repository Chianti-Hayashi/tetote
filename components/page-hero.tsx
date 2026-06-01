import { Sparkles } from "lucide-react";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-milk px-6 py-16 lg:px-10 lg:py-20">
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-apricot/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/4 h-64 w-64 rounded-full bg-sage/20 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.22em] text-apricot">
          <Sparkles size={14} />
          {eyebrow}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.08em] text-cocoa sm:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-sm font-medium leading-7 tracking-[0.05em] text-cocoa/62">{description}</p>
      </div>
    </section>
  );
}
