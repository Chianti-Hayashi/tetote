"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Clock3, Mail, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { pets } from "@/lib/pets";

type FormValues = {
  name: string;
  email: string;
  pet: string;
  topic: string;
  message: string;
};

const initialValues: FormValues = { name: "", email: "", pet: "", topic: "お迎えについて相談したい", message: "" };

export default function ContactPage() {
  const [values, setValues] = useState(initialValues);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const selected = new URLSearchParams(window.location.search).get("pet");
    if (selected && pets.some((pet) => pet.slug === selected)) setValues((current) => ({ ...current, pet: selected }));
  }, []);

  const update = (key: keyof FormValues, value: string) => setValues((current) => ({ ...current, [key]: value }));

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SiteHeader />
      <main>
        <PageHero eyebrow="CONTACT & SUPPORT" title="スタッフに相談する" description="お迎えを決めていなくても大丈夫です。気になる子のこと、暮らしのこと、手続きのこと。担当スタッフが丁寧にお答えします。" />
        <section className="bg-cream px-6 py-16 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-7 lg:grid-cols-[0.68fr_1.32fr]">
            <aside className="space-y-4">
              <div className="rounded-3xl bg-milk p-6">
                <h2 className="text-lg font-bold tracking-[-0.04em] text-cocoa">相談について</h2>
                <div className="mt-5 grid gap-4">
                  <p className="flex gap-3 text-xs font-medium leading-5 text-cocoa/62"><Clock3 size={17} className="shrink-0 text-apricot" />原則2営業日以内に担当スタッフからご連絡します。</p>
                  <p className="flex gap-3 text-xs font-medium leading-5 text-cocoa/62"><Mail size={17} className="shrink-0 text-apricot" />返信はご入力いただいたメールアドレスへお送りします。</p>
                  <p className="flex gap-3 text-xs font-medium leading-5 text-cocoa/62"><ShieldCheck size={17} className="shrink-0 text-apricot" />ご相談内容は、サポート以外の目的には利用しません。</p>
                </div>
              </div>
              <Link href="/faq" className="block rounded-3xl border border-cocoa/5 bg-white p-6 text-sm font-bold text-cocoa shadow-sm transition-transform hover:-translate-y-0.5">
                よくある質問も見る <ArrowRight size={15} className="ml-1 inline text-apricot" />
              </Link>
            </aside>
            <div className="rounded-3xl border border-cocoa/5 bg-white p-6 shadow-soft sm:p-8">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div key="complete" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[430px] flex-col items-center justify-center text-center">
                    <CheckCircle2 size={52} className="text-sage" />
                    <h2 className="mt-5 text-2xl font-bold tracking-[-0.06em] text-cocoa">ご相談を受け付けました</h2>
                    <p className="mt-4 max-w-md text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/58">お問い合わせありがとうございます。内容を確認し、原則2営業日以内に担当スタッフからご連絡します。</p>
                    <Button asChild variant="outline" size="lg" className="mt-7"><Link href="/">トップページへ戻る</Link></Button>
                  </motion.div>
                ) : (
                  <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={submit} className="grid gap-5">
                    <label className="grid gap-2 text-xs font-bold tracking-[0.05em] text-cocoa/70">お名前 <span className="text-apricot">必須</span>
                      <input required value={values.name} onChange={(event) => update("name", event.target.value)} className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm font-medium outline-none focus:border-apricot" placeholder="手と手 はなこ" />
                    </label>
                    <label className="grid gap-2 text-xs font-bold tracking-[0.05em] text-cocoa/70">メールアドレス <span className="text-apricot">必須</span>
                      <input required type="email" value={values.email} onChange={(event) => update("email", event.target.value)} className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm font-medium outline-none focus:border-apricot" placeholder="hello@example.com" />
                    </label>
                    <label className="grid gap-2 text-xs font-bold tracking-[0.05em] text-cocoa/70">気になる子
                      <select value={values.pet} onChange={(event) => update("pet", event.target.value)} className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm font-medium outline-none focus:border-apricot">
                        <option value="">まだ決まっていない</option>
                        {pets.map((pet) => <option key={pet.slug} value={pet.slug}>{pet.name}（{pet.breed}）</option>)}
                      </select>
                    </label>
                    <label className="grid gap-2 text-xs font-bold tracking-[0.05em] text-cocoa/70">ご相談内容
                      <select value={values.topic} onChange={(event) => update("topic", event.target.value)} className="rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm font-medium outline-none focus:border-apricot">
                        <option>お迎えについて相談したい</option>
                        <option>相性診断について聞きたい</option>
                        <option>譲渡条件・費用を確認したい</option>
                        <option>その他</option>
                      </select>
                    </label>
                    <label className="grid gap-2 text-xs font-bold tracking-[0.05em] text-cocoa/70">メッセージ <span className="text-apricot">必須</span>
                      <textarea required rows={5} value={values.message} onChange={(event) => update("message", event.target.value)} className="resize-none rounded-xl border border-cocoa/10 bg-cream px-4 py-3 text-sm font-medium leading-6 outline-none focus:border-apricot" placeholder="現在の住環境やご質問などをご記入ください。" />
                    </label>
                    <p className="text-[10px] font-medium leading-5 tracking-[0.04em] text-cocoa/45">送信することで、<Link href="/privacy" className="underline">プライバシーポリシー</Link>に同意したものとみなされます。</p>
                    <Button size="lg" type="submit">相談内容を送信する <ArrowRight size={15} /></Button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
