'use client';

import { useMemo, useState } from 'react';
import CandlesChart from '@/components/home/CandleChart';
import { mockCandles } from '@/lib/home/mock';

export default function TradingWindowCard() {
  const [symbol, setSymbol] = useState('005930');
  const [qty, setQty] = useState(1);

  const candles = useMemo(() => mockCandles, []);

  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900/40 p-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-base font-semibold">주식 거래창</h2>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-neutral-300">종목</span>
          <input
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            className="w-24 rounded-lg border border-neutral-800 bg-neutral-950/40 px-2 py-1 text-neutral-50 outline-none focus:border-neutral-600"
            placeholder="예) 005930"
          />
        </div>
      </div>

      <div className="mt-3">
        <CandlesChart data={candles} />
      </div>

      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-neutral-800 bg-neutral-950/40 p-3">
          <p className="text-xs text-neutral-400">수량</p>
          <input
            type="number"
            min={1}
            value={qty}
            onChange={(e) =>
              setQty(Math.max(1, Number(e.target.value)))
            }
            className="mt-1 w-full rounded-lg border border-neutral-800 bg-neutral-950/40 px-2 py-2 text-sm outline-none focus:border-neutral-600"
          />
        </div>

        <button className="rounded-xl bg-emerald-400/90 px-3 py-3 text-sm font-semibold text-neutral-950 hover:bg-emerald-300 transition">
          매수
        </button>
        <button className="rounded-xl bg-rose-400/90 px-3 py-3 text-sm font-semibold text-neutral-950 hover:bg-rose-300 transition">
          매도
        </button>
      </div>
    </section>
  );
}
