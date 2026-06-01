import { LegalPage } from "@/components/legal-page";

const sections = [
  { title: "1. サービスの目的", text: "tetoteは、保護犬・保護猫と里親希望者のより良い出会いを支援するため、情報提供、相性診断、相談窓口を提供します。" },
  { title: "2. 譲渡について", text: "掲載情報は、譲渡を保証するものではありません。正式な譲渡は、連携する保護団体との面談、審査、トライアルを経て決定します。" },
  { title: "3. 掲載情報", text: "健康状態や性格に関する情報は、確認時点の内容です。動物の状態は変化する場合があるため、最新情報は面談時に担当スタッフへご確認ください。" },
  { title: "4. 禁止事項", text: "虚偽情報の登録、営利目的での利用、動物の福祉を損なう行為、サービス運営を妨げる行為を禁止します。" },
  { title: "5. 規約の変更", text: "必要に応じて本規約を変更する場合があります。重要な変更は、本サービス上でお知らせします。" },
];

export default function TermsPage() {
  return <LegalPage eyebrow="TERMS OF SERVICE" title="利用規約" sections={sections} />;
}
