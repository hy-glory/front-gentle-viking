import './globals.css';
import type { Metadata } from 'next';
import Header from './Layout/Header';
import Footer from './Layout/Footer';

export const metadata: Metadata = {
  title: 'Gentle Viking',
  description: 'AI 포트폴리오 구성 및 자동매매 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 bg-gradient-to-b from-zinc-950 via-blue-950/70 to-zinc-900 text-zinc-100 px-[24px] py-[24px] md:px-[32px]">
            <div className="mx-auto max-w-[1100px]">{children}</div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
