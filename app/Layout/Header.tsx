'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // 로그인 로직 추가

  const handleLogout = () => {
    // 로그아웃 로직 추가
    setIsLoggedIn(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-zinc-800 backdrop-blur">
      <div className="mx-auto flex h-[64px] max-w-[1100px] items-center justify-between px-[24px] md:px-[32px]">
        <Link href="/" className="flex items-center gap-[10px]">
          <span className="text-[26px] font-semibold tracking-tight text-zinc-100">
            Gentle Viking
          </span>
          <span className="hidden rounded-full bg-blue-500/15 px-[10px] py-[4px] text-[12px] text-blue-300 ring-1 ring-blue-500/20 md:inline">
            AI Trading
          </span>
        </Link>

        <nav className="flex items-center gap-[14px] text-[14px] text-zinc-300">
          {!isLoggedIn ? (
            // 로그인 전
            <>
              <Link href="/login" className="hover:text-zinc-100">
                로그인
              </Link>
              <Link
                href="/signup"
                className="rounded-[10px] bg-blue-500/50 px-[12px] py-[8px] text-zinc-100 shadow-sm shadow-blue-500/20 hover:bg-blue-500/80"
              >
                회원가입
              </Link>
            </>
          ) : (
            // 로그인 후
            <>
              <Link href="/news" className="hover:text-zinc-100">
                AI 뉴스분석
              </Link>
              <Link href="/mypage" className="hover:text-zinc-100">
                마이페이지
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-[10px] border border-white/10 px-[12px] py-[8px] hover:bg-white/5"
              >
                로그아웃
              </button>
            </>
          )}
        </nav>
      </div>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
    </header>
  );
}
