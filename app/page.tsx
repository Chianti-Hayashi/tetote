"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Heart,
  HeartHandshake,
  Home,
  PawPrint,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { PetActions } from "@/components/pet-actions";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type Answer = {
  label: string;
  description: string;
  icon: string;
};

type Question = {
  eyebrow: string;
  title: string;
  description: string;
  answers: Answer[];
};

type Partner = {
  slug: string;
  name: string;
  type: string;
  age: string;
  gender: string;
  image: string;
  match: number;
  tags: string[];
  reason: string;
};

const questions: Question[] = [
  {
    eyebrow: "LIFESTYLE 01",
    title: "普段、ご自宅で過ごす時間は？",
    description: "お留守番の時間は、心地よい関係づくりの大切なヒントです。",
    answers: [
      { label: "在宅が多い", description: "1日の半分以上は自宅で過ごす", icon: "01" },
      { label: "ほどよく外出", description: "日中は4〜6時間ほど外出する", icon: "02" },
      { label: "外出が多い", description: "平日は長めのお留守番になる", icon: "03" },
    ],
  },
  {
    eyebrow: "HOME 02",
    title: "今のお住まいに近いのは？",
    description: "広さよりも、安心して過ごせる居場所があるかを考えます。",
    answers: [
      { label: "戸建て・広め", description: "のびのび動ける空間がある", icon: "01" },
      { label: "マンション", description: "落ち着ける部屋を用意できる", icon: "02" },
      { label: "コンパクト", description: "一緒に過ごせる距離が近い", icon: "03" },
    ],
  },
  {
    eyebrow: "EXPERIENCE 03",
    title: "動物との暮らしの経験は？",
    description: "はじめてでも大丈夫。サポートの形を変えてご提案します。",
    answers: [
      { label: "今も一緒に暮らしている", description: "先住犬・先住猫がいる", icon: "01" },
      { label: "以前、経験がある", description: "犬や猫との暮らしを知っている", icon: "02" },
      { label: "今回がはじめて", description: "丁寧に学びながら迎えたい", icon: "03" },
    ],
  },
  {
    eyebrow: "TEMPO 04",
    title: "理想の休日の過ごし方は？",
    description: "あなたの心地よいテンポに、そっと寄り添える子を探します。",
    answers: [
      { label: "お散歩や小旅行", description: "一緒に外へ出かけたい", icon: "01" },
      { label: "家でゆっくり", description: "穏やかな時間を分け合いたい", icon: "02" },
      { label: "どちらも好き", description: "暮らしに合わせて楽しみたい", icon: "03" },
    ],
  },
];

const partners: Partner[] = [
  {
    slug: "mugi",
    name: "Mugi",
    type: "柴系ミックス",
    age: "推定 4歳",
    gender: "男の子",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=900&q=88",
    match: 96,
    tags: ["お留守番が得意", "おだやか", "散歩が好き"],
    reason:
      "自分の時間も上手に楽しめる、落ち着いた性格。ほどよい距離感を保ちながら、休日のお散歩には嬉しそうに寄り添います。",
  },
  {
    slug: "luna",
    name: "Luna",
    type: "キジトラ",
    age: "推定 2歳",
    gender: "女の子",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=900&q=88",
    match: 92,
    tags: ["甘えん坊", "静かな暮らし", "初心者向け"],
    reason:
      "安心できる場所があると、ゆっくり心を開いてくれる子。おうちで過ごす穏やかな時間を大切にしたい方と好相性です。",
  },
  {
    slug: "kai",
    name: "Kai",
    type: "テリア系ミックス",
    age: "推定 3歳",
    gender: "男の子",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=900&q=88",
    match: 89,
    tags: ["人が好き", "好奇心旺盛", "一緒におでかけ"],
    reason:
      "明るく、暮らしの変化を楽しめるタイプ。休日には一緒に新しい景色を見つけたい、アクティブなご家族にぴったりです。",
  },
];

const featureItems = [
  {
    icon: ShieldCheck,
    title: "透明性のある情報",
    text: "保護団体と連携し、性格や健康状態を丁寧にお伝えします。",
  },
  {
    icon: HeartHandshake,
    title: "暮らしから考える",
    text: "見た目だけではなく、これからの毎日に合うご縁をご提案。",
  },
  {
    icon: Smile,
    title: "迎えたあとも伴走",
    text: "トライアルから日々の悩みまで、いつでも相談できます。",
  },
];

function Hero({ onStart }: { onStart: () => void }) {
  return (
    <section className="relative min-h-[760px] overflow-hidden bg-milk">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1553322396-0c9cd410975e?auto=format&fit=crop&w=2200&q=90"
          alt="犬と暮らす穏やかな日常"
          className="h-full w-full object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5ebe0]/95 via-[#f5ebe0]/82 to-[#f5ebe0]/20" />
        <div className="absolute inset-0 noise opacity-40" />
      </div>
      <div className="relative mx-auto flex min-h-[760px] max-w-7xl items-center px-6 pb-12 pt-28 lg:px-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/55 px-4 py-2 text-[11px] font-bold tracking-[0.2em] text-cocoa/75 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-apricot" />
            FIND A LIFE-LONG PARTNER
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.65 }}
            className="text-[45px] font-bold leading-[1.33] tracking-[-0.08em] text-cocoa sm:text-[62px]"
          >
            いのちと、
            <br />
            暮らしの、
            <br />
            <span className="relative">
              最高のまじわりを。
              <span className="absolute -bottom-2 left-1 h-[7px] w-[94%] rounded-full bg-apricot/50" />
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
            className="mt-8 max-w-lg text-sm font-medium leading-8 tracking-[0.06em] text-cocoa/75 sm:text-[15px]"
          >
            一緒に歩く速さも、好きな過ごし方も、家族のかたちはそれぞれ。
            <br className="hidden sm:block" />
            tetoteは、あなたの暮らしから運命のご縁を考えます。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.65 }}
            className="mt-10"
          >
            <Button onClick={onStart} size="lg" className="group">
              まずは相性診断を始める
              <span className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold tracking-[0.08em]">
                3分
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
          <div className="mt-10 flex flex-wrap gap-5 text-[11px] font-bold tracking-wider text-cocoa/60">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-sage" />
              登録不要
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-sage" />
              診断無料
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-sage" />
              いつでも相談
            </span>
          </div>
        </div>
      </div>
      <div className="absolute bottom-7 right-7 hidden rounded-2xl border border-white/60 bg-white/60 p-4 backdrop-blur-md lg:block">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-full bg-sage/20 text-sage">
            <HeartHandshake size={22} />
          </div>
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] text-cocoa/45">NEW FAMILY STORIES</p>
            <p className="mt-1 text-sm font-bold text-cocoa">今月、42の新しい家族が誕生しました</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="about" className="bg-cream px-6 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[11px] font-bold tracking-[0.22em] text-apricot">ABOUT TETOTE</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.06em] text-cocoa sm:text-4xl">
            出会いだけで、終わらない。
          </h2>
          <p className="mt-5 text-sm font-medium leading-7 tracking-[0.06em] text-cocoa/65">
            新しい家族を迎えることは、長い物語のはじまりです。
            <br className="hidden sm:block" />
            tetoteは、たしかな情報と丁寧な対話で、その一歩に寄り添います。
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {featureItems.map(({ icon: Icon, title, text }, index) => (
            <Card key={title} className="border-transparent bg-white/90 shadow-none">
              <CardContent className="p-7">
                <div className="mb-8 flex items-center justify-between">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-milk text-apricot">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>
                  <span className="text-xs font-bold tracking-[0.16em] text-cocoa/20">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-[-0.04em] text-cocoa">{title}</h3>
                <p className="mt-3 text-xs font-medium leading-6 tracking-[0.06em] text-cocoa/60">{text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProgressDots({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-2">
      {questions.map((_, index) => (
        <motion.span
          key={index}
          animate={{
            width: index === step ? 26 : 8,
            backgroundColor: index <= step ? "#F3A782" : "#E8DED6",
          }}
          className="h-2 rounded-full"
        />
      ))}
    </div>
  );
}

function QuestionPanel({
  step,
  onSelect,
}: {
  step: number;
  onSelect: (answer: Answer) => void;
}) {
  const question = questions[step];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={step}
        initial={{ opacity: 0, x: 36 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -32 }}
        transition={{ duration: 0.34, ease: "easeOut" }}
      >
        <p className="text-[10px] font-bold tracking-[0.24em] text-apricot">{question.eyebrow}</p>
        <h3 className="mt-4 text-2xl font-bold tracking-[-0.06em] text-cocoa sm:text-3xl">{question.title}</h3>
        <p className="mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/55">{question.description}</p>
        <div className="mt-8 grid gap-3">
          {question.answers.map((answer) => (
            <button
              type="button"
              key={answer.label}
              onClick={() => onSelect(answer)}
              className="group flex items-center justify-between rounded-2xl border border-cocoa/10 bg-cream/70 px-5 py-4 text-left transition-all hover:-translate-y-0.5 hover:border-apricot hover:bg-white hover:shadow-[0_10px_24px_rgba(78,68,63,0.08)]"
            >
              <span className="flex items-center gap-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-milk text-[10px] font-bold tracking-widest text-apricot transition-colors group-hover:bg-apricot group-hover:text-white">
                  {answer.icon}
                </span>
                <span>
                  <span className="block text-sm font-bold tracking-[0.04em] text-cocoa">{answer.label}</span>
                  <span className="mt-1 block text-[11px] font-medium tracking-[0.04em] text-cocoa/50">
                    {answer.description}
                  </span>
                </span>
              </span>
              <ArrowRight size={16} className="text-cocoa/25 transition-all group-hover:translate-x-1 group-hover:text-apricot" />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function LoadingPanel() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex min-h-[390px] flex-col items-center justify-center text-center"
    >
      <div className="relative grid h-24 w-24 place-items-center rounded-full bg-blush">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
          className="absolute inset-0 rounded-full border-2 border-transparent border-t-apricot"
        />
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
          className="grid h-16 w-16 place-items-center rounded-full bg-white text-apricot shadow-sm"
        >
          <PawPrint size={29} strokeWidth={1.8} />
        </motion.div>
      </div>
      <p className="mt-8 text-[11px] font-bold tracking-[0.22em] text-apricot">ANALYZING YOUR LIFESTYLE</p>
      <h3 className="mt-3 text-2xl font-bold tracking-[-0.06em] text-cocoa">あなたらしい暮らしを考えています</h3>
      <p className="mt-3 text-xs font-medium tracking-[0.06em] text-cocoa/50">ぴったりのパートナーを探しています...</p>
    </motion.div>
  );
}

function Matchmaker() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [state, setState] = useState<"questions" | "loading" | "results">("questions");
  const [showAll, setShowAll] = useState(false);

  const visiblePartners = useMemo(() => (showAll ? partners : partners.slice(0, 2)), [showAll]);

  const selectAnswer = (answer: Answer) => {
    const nextAnswers = [...answers, answer];
    setAnswers(nextAnswers);
    if (step < questions.length - 1) {
      setStep(step + 1);
      return;
    }
    setState("loading");
    window.setTimeout(() => setState("results"), 1800);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setState("questions");
    setShowAll(false);
  };

  return (
    <section id="diagnosis" className="relative overflow-hidden bg-milk/70 px-6 py-20 lg:px-10 lg:py-28">
      <div className="absolute -left-28 top-28 h-72 w-72 rounded-full bg-sage/15 blur-3xl" />
      <div className="absolute -right-20 bottom-16 h-72 w-72 rounded-full bg-apricot/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-start gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
          <div className="pt-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-[10px] font-bold tracking-[0.2em] text-sage">
              <Sparkles size={14} />
              LIFE STYLE MATCH
            </div>
            <h2 className="mt-6 text-4xl font-bold leading-[1.36] tracking-[-0.08em] text-cocoa sm:text-[46px]">
              あなたの毎日に、
              <br />
              似合うご縁を。
            </h2>
            <p className="mt-6 max-w-md text-sm font-medium leading-8 tracking-[0.06em] text-cocoa/65">
              大切なのは、無理なく自然体でいられること。
              いくつかの質問から、あなたと心地よく暮らせるパートナーをご提案します。
            </p>
            <div className="mt-9 grid max-w-sm gap-3 text-xs font-bold tracking-[0.04em] text-cocoa/60">
              <span className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-apricot">
                  <Home size={14} />
                </span>
                暮らしの環境を丁寧に診断
              </span>
              <span className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-apricot">
                  <Heart size={14} />
                </span>
                動物たちの個性と照らし合わせ
              </span>
              <span className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-white text-apricot">
                  <ShieldCheck size={14} />
                </span>
                専門スタッフにそのまま相談
              </span>
            </div>
          </div>
          <Card className="relative min-h-[515px] overflow-hidden border-white/80 bg-white/95">
            <CardContent className="p-6 sm:p-9">
              {state === "questions" && (
                <>
                  <div className="mb-9 flex items-center justify-between">
                    <ProgressDots step={step} />
                    <span className="text-[10px] font-bold tracking-[0.2em] text-cocoa/35">
                      {step + 1} / {questions.length}
                    </span>
                  </div>
                  <QuestionPanel step={step} onSelect={selectAnswer} />
                </>
              )}
              {state === "loading" && <LoadingPanel />}
              {state === "results" && (
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.7, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", bounce: 0.45 }}
                    className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-blush text-apricot"
                  >
                    <Heart fill="currentColor" size={24} />
                  </motion.div>
                  <p className="mt-5 text-[10px] font-bold tracking-[0.24em] text-apricot">YOUR BEST PARTNERS</p>
                  <h3 className="mt-2 text-3xl font-bold tracking-[-0.07em] text-cocoa">あなたに寄り添うパートナー</h3>
                  <p className="mt-3 text-xs font-medium leading-6 tracking-[0.04em] text-cocoa/55">
                    あなたの暮らしに自然に溶け込む、素敵なご縁が見つかりました。
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
        {state === "results" && (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-7"
          >
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visiblePartners.map((partner, index) => (
                <motion.article
                  key={partner.name}
                  initial={{ opacity: 0, y: 28, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ type: "spring", bounce: 0.4, delay: 0.12 * index }}
                  className={cn(
                    "overflow-hidden rounded-3xl border border-white/80 bg-white shadow-float",
                    !showAll && index === 1 && "lg:col-span-1",
                  )}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={partner.image}
                      alt={`${partner.name}の写真`}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-2 text-[10px] font-bold tracking-widest text-apricot backdrop-blur-md">
                      {partner.match}% MATCH
                    </div>
                    <div className="absolute right-4 top-4">
                      <PetActions name={partner.name} slug={partner.slug} compact />
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h4 className="logo-script text-[30px] tracking-[-0.1em] text-cocoa">{partner.name}</h4>
                        <p className="mt-1 text-[11px] font-bold tracking-[0.08em] text-cocoa/48">
                          {partner.type} ・ {partner.age} ・ {partner.gender}
                        </p>
                      </div>
                      <Sparkles size={18} className="shrink-0 text-apricot" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {partner.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-sage/15 px-3 py-1.5 text-[10px] font-bold tracking-[0.04em] text-[#74846f]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 rounded-2xl bg-milk/65 p-4">
                      <p className="flex items-center gap-2 text-[10px] font-bold tracking-[0.16em] text-apricot">
                        <HeartHandshake size={15} />
                        WHY YOU MATCH
                      </p>
                      <p className="mt-2 text-[11px] font-medium leading-5 tracking-[0.04em] text-cocoa/63">{partner.reason}</p>
                    </div>
                    <Button asChild variant="outline" size="sm" className="mt-4 w-full">
                      <Link href={`/pets/${partner.slug}`}>
                        {partner.name}をもっと知る
                        <ArrowRight size={13} />
                      </Link>
                    </Button>
                  </div>
                </motion.article>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {!showAll && (
                <Button onClick={() => setShowAll(true)} size="lg">
                  もう1匹の候補を見る
                  <ArrowRight size={15} />
                </Button>
              )}
              <Button onClick={reset} variant="ghost" size="lg">
                もう一度診断する
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

export default function HomePage() {
  const scrollToDiagnosis = () => {
    document.querySelector("#diagnosis")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <SiteHeader overlay />
      <Hero onStart={scrollToDiagnosis} />
      <TrustSection />
      <Matchmaker />
      <SiteFooter />
    </main>
  );
}
