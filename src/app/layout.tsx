import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "giftee パートナーさま向け管理画面",
  description: "gifteeパートナー様向けサービス管理ポータル",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap"
          rel="stylesheet"
        />

      </head>
      <body>
        <div className="layout">
          <Sidebar />
          <main className="layout__main">{children}</main>
        </div>
      </body>
    </html>
  );
}
