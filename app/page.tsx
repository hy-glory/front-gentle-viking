'use client';
import HomeHeader from '@/components/home/HomeHeader';
import NewsCard from '@/components/home/NewsCard';
import AssetsCard from '@/components/home/AssetsCard';
import AITradesCard from '@/components/home/AITradesCard';
import TradingWindowCard from '@/components/home/TradingWindowCard';
import MyPfCard from '@/components/home/MyPfCard';

export default function HomePage() {
  return (
    <main className="min-h-screen text-neutral-900">
      <div className="mx-auto w-full max-w-6xl px-4 py-6">
        <HomeHeader />
        <section className="mt-6 flex gap-4">
          <div className="flex-[1]">
            <AssetsCard />
          </div>

          <div className="flex-[2]">
            <NewsCard />
          </div>
        </section>

        <section>
          <div className="mt-6"></div>
        </section>

        <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* 우측: 트레이딩/AI 거래 */}
          <section className="lg:col-span-7 flex flex-col gap-4">
            <TradingWindowCard />
            <AITradesCard />
          </section>
        </div>
      </div>
    </main>
  );
}
