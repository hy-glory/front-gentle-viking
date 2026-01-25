import { mockNews } from '@/lib/home/mock';

export default function NewsCard() {
  const n = mockNews;

  return (
    <article className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-base font-semibold">오늘의 메인 뉴스</h2>
        <span className="rounded-full bg-neutral-800 px-2 py-1 text-xs text-neutral-200">
          {n.tag ?? 'News'}
        </span>
      </div>

      <div className="mt-3">
        <p className="text-sm text-neutral-400">
          {n.source} · {n.publishedAt}
        </p>
        <p className="mt-2 text-lg font-semibold leading-snug">
          {n.title}
        </p>
        <p className="mt-2 text-sm text-neutral-300">{n.summary}</p>
      </div>

      <div className="mt-4 flex gap-2">
        <button className="rounded-xl bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700 transition">
          더 보기
        </button>
        <button className="rounded-xl bg-neutral-800 px-3 py-2 text-sm hover:bg-neutral-700 transition">
          관련 종목 보기
        </button>
      </div>
    </article>
  );
}
