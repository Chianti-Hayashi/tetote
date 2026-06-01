export type Pet = {
  slug: string;
  name: string;
  species: "犬" | "猫";
  breed: string;
  age: string;
  gender: string;
  area: string;
  image: string;
  subImage: string;
  match: number;
  tags: string[];
  personality: string;
  reason: string;
  health: string[];
  support: string;
  story: string;
  goodFor: string[];
};

export const pets: Pet[] = [
  {
    slug: "mugi",
    name: "Mugi",
    species: "犬",
    breed: "柴系ミックス",
    age: "推定 4歳",
    gender: "男の子",
    area: "東京都",
    image:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=1100&q=88",
    subImage:
      "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=1000&q=88",
    match: 96,
    tags: ["お留守番が得意", "おだやか", "散歩が好き"],
    personality:
      "静かな時間を大切にできる、落ち着いた男の子です。慣れるまでは少し慎重ですが、信頼できる人のそばでは穏やかな表情を見せてくれます。",
    reason:
      "自分の時間も上手に楽しめる、落ち着いた性格。ほどよい距離感を保ちながら、休日のお散歩には嬉しそうに寄り添います。",
    health: ["混合ワクチン接種済み", "去勢手術済み", "フィラリア陰性", "マイクロチップ装着済み"],
    support: "最初の2週間は、静かな居場所をつくり、短い散歩からゆっくり生活リズムを合わせてください。",
    story:
      "地域の保護団体を通じてtetoteにやってきました。スタッフとの毎日の散歩を重ね、少しずつ人との暮らしに自信をつけています。",
    goodFor: ["穏やかな生活リズム", "毎日のお散歩", "適度な距離感"],
  },
  {
    slug: "luna",
    name: "Luna",
    species: "猫",
    breed: "キジトラ",
    age: "推定 2歳",
    gender: "女の子",
    area: "神奈川県",
    image:
      "https://images.unsplash.com/photo-1495360010541-f48722b34f7d?auto=format&fit=crop&w=1100&q=88",
    subImage:
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1000&q=88",
    match: 92,
    tags: ["甘えん坊", "静かな暮らし", "初心者向け"],
    personality:
      "最初はそっと様子を見ていますが、安心すると自分から近くに来てくれます。窓辺で日向ぼっこをすることと、やさしく撫でてもらうことが好きです。",
    reason:
      "安心できる場所があると、ゆっくり心を開いてくれる子。おうちで過ごす穏やかな時間を大切にしたい方と好相性です。",
    health: ["混合ワクチン接種済み", "避妊手術済み", "猫エイズ・白血病 陰性", "マイクロチップ装着済み"],
    support: "隠れられる小さなスペースと、落ち着いて食事ができる場所を用意すると、安心して新しい環境に慣れていけます。",
    story:
      "多頭飼育の環境から保護されました。預かりボランティア宅で家庭の音や人の気配に慣れ、今では甘えたい時にそっと隣へ来てくれます。",
    goodFor: ["室内での穏やかな暮らし", "はじめての猫との生活", "ゆっくり築く信頼関係"],
  },
  {
    slug: "kai",
    name: "Kai",
    species: "犬",
    breed: "テリア系ミックス",
    age: "推定 3歳",
    gender: "男の子",
    area: "千葉県",
    image:
      "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1100&q=88",
    subImage:
      "https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=1000&q=88",
    match: 89,
    tags: ["人が好き", "好奇心旺盛", "一緒におでかけ"],
    personality:
      "人が好きで、初めての場所でも前向きに楽しめるタイプ。遊びの時間と休む時間の切り替えが上手で、家族とのおでかけを喜びます。",
    reason:
      "明るく、暮らしの変化を楽しめるタイプ。休日には一緒に新しい景色を見つけたい、アクティブなご家族にぴったりです。",
    health: ["混合ワクチン接種済み", "去勢手術済み", "フィラリア陰性", "定期健康診断済み"],
    support: "毎日の散歩に加えて、知育トイや簡単なトレーニングを取り入れると、持ち前の好奇心を楽しく満たせます。",
    story:
      "動物愛護センターから保護され、現在は預かり家庭で暮らしています。新しいことを覚えるのが早く、お散歩のマナーも練習中です。",
    goodFor: ["休日のおでかけ", "毎日のコミュニケーション", "一緒に学ぶ暮らし"],
  },
  {
    slug: "sora",
    name: "Sora",
    species: "猫",
    breed: "白茶ミックス",
    age: "推定 5歳",
    gender: "男の子",
    area: "埼玉県",
    image:
      "https://images.unsplash.com/photo-1573865526739-10659fec78a5?auto=format&fit=crop&w=1100&q=88",
    subImage:
      "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?auto=format&fit=crop&w=1000&q=88",
    match: 87,
    tags: ["マイペース", "よく眠る", "静かな環境"],
    personality:
      "お気に入りの場所でのんびり過ごすことが好きな、マイペースな男の子。適度な距離を保ちながら、人のいる空間で安心して眠ります。",
    reason:
      "静かな時間をそれぞれに楽しみたい方に向いています。忙しい平日にも無理なく寄り添える、穏やかなパートナーです。",
    health: ["混合ワクチン接種済み", "去勢手術済み", "猫エイズ・白血病 陰性"],
    support: "環境の変化には少し時間が必要です。最初は行動範囲を一部屋に絞り、安心できる時間を十分につくってください。",
    story:
      "外で暮らしていたところを保護されました。今では室内での暮らしにも慣れ、柔らかなクッションの上で昼寝を楽しんでいます。",
    goodFor: ["留守番のある暮らし", "静かな室内環境", "猫のペースを尊重できる方"],
  },
  {
    slug: "noa",
    name: "Noa",
    species: "犬",
    breed: "小型犬ミックス",
    age: "推定 7歳",
    gender: "女の子",
    area: "東京都",
    image:
      "https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=1100&q=88",
    subImage:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=1000&q=88",
    match: 85,
    tags: ["人が好き", "のんびり散歩", "シニア"],
    personality:
      "人のそばでのんびり過ごすことが好きです。長い散歩よりも、季節の匂いを感じながらゆっくり歩く時間を楽しみます。",
    reason:
      "おうちで一緒にくつろぐ時間を大切にしたい方に向いています。穏やかな生活リズムに自然に馴染みます。",
    health: ["混合ワクチン接種済み", "避妊手術済み", "定期投薬あり", "定期健康診断済み"],
    support: "シニア期のため、定期的な健康診断と毎日の体調チェックをお願いします。投薬方法はスタッフが丁寧にご説明します。",
    story:
      "飼い主さんの事情で保護団体へ預けられました。人との暮らしをよく知っており、初めて会うスタッフにも穏やかに挨拶してくれます。",
    goodFor: ["ゆったりした暮らし", "短めのお散歩", "シニアケアへの理解"],
  },
  {
    slug: "nico",
    name: "Nico",
    species: "猫",
    breed: "黒猫",
    age: "推定 1歳",
    gender: "男の子",
    area: "神奈川県",
    image:
      "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?auto=format&fit=crop&w=1100&q=88",
    subImage:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=1000&q=88",
    match: 82,
    tags: ["遊び好き", "好奇心旺盛", "慣れると甘えん坊"],
    personality:
      "遊ぶことが大好きで、猫じゃらしを見るとすぐに夢中になります。少し慎重な面もありますが、慣れるとよく甘えてくれます。",
    reason:
      "毎日の遊びをコミュニケーションとして楽しめる方と好相性。暮らしの中に明るいリズムをつくってくれます。",
    health: ["混合ワクチン接種済み", "去勢手術済み", "猫エイズ・白血病 陰性"],
    support: "上下運動ができるキャットタワーと、毎日の遊び時間を用意してください。誤飲しやすい小物の管理も必要です。",
    story:
      "兄弟猫と一緒に保護されました。現在は一匹で暮らす練習をしながら、スタッフとの遊びを通して人との関わりを学んでいます。",
    goodFor: ["毎日の遊び時間", "室内の安全対策", "成長を見守る暮らし"],
  },
];

export const featuredPets = pets.slice(0, 3);

export function getPet(slug: string) {
  return pets.find((pet) => pet.slug === slug);
}
