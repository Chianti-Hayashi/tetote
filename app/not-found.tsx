import Link from "next/link";
import { ArrowRight, PawPrint } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="grid min-h-[65vh] place-items-center bg-milk px-6 py-16 text-center">
        <div>
          <PawPrint size={42} className="mx-auto text-apricot" />
          <p className="mt-5 text-[10px] font-bold tracking-[0.22em] text-apricot">404 NOT FOUND</p>
          <h1 className="mt-3 text-3xl font-bold tracking-[-0.07em] text-cocoa">ページが見つかりませんでした</h1>
          <p className="mt-4 text-sm font-medium text-cocoa/55">URLをご確認いただくか、トップページからお探しください。</p>
          <Button asChild size="lg" className="mt-7"><Link href="/">トップページへ戻る <ArrowRight size={15} /></Link></Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
