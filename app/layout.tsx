import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "P4AI - AI Inhabitants Type Test",
  description: "AI 시대, 당신의 생존 유형을 진단합니다.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <main className="min-h-screen flex flex-col items-center justify-center p-4 max-w-md mx-auto w-full relative overflow-hidden">
          {/* Background Ambient Orbs */}
          <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />
          <div className="fixed bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none -z-10" />

          {children}
        </main>
      </body>
    </html>
  );
}
