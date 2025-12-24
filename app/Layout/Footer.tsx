import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950/55 backdrop-blur text-zinc-200">
      <div className="mx-auto flex h-[52px] max-w-[1100px] items-center justify-between px-[24px] text-[12px] md:px-[32px]">
        {/* 좌측 */}
        <div className="flex items-center gap-[8px]">
          <span className="font-medium text-zinc-300">
            Gentle Viking
          </span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline">
            © {new Date().getFullYear()}
          </span>
        </div>

        {/* 우측 */}
        <div className="flex items-center gap-[10px]">
          <Link href="/terms">이용약관</Link>
          <span className="text-white/20">|</span>
          <Link href="/privacy">개인정보처리방침</Link>
        </div>
      </div>
    </footer>
  );
}
