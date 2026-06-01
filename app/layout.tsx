import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "tetote | いのちと、暮らしの、最高のまじわりを。",
  description: "保護犬・保護猫と未来の家族をつなぐ、里親マッチング＆ライフスタイル診断。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
