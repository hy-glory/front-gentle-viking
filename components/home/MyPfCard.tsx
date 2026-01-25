import Link from 'next/link';

export default function MyPfCard() {
  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
      <h2 className="text-base font-semibold">내 포트폴리오</h2>
      <p className="mt-2 text-sm text-neutral-300">
        보유 종목/비중/성과를 한 번에 확인합니다.
      </p>

      <div className="mt-4 flex gap-2">
        <Link
          href="/portfolio"
          className="inline-flex items-center justify-center rounded-xl bg-white/90 px-3 py-2 text-sm font-semibold text-neutral-950 hover:bg-white transition"
        >
          포트폴리오 보러가기
        </Link>
        <button className="rounded-xl bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700 transition">
          리밸런싱 제안
        </button>
      </div>
    </section>
  );
}
