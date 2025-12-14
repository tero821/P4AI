'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F7F4] text-center space-y-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div className="inline-block bg-white/50 border border-[#E8E6E0] px-4 py-1.5 rounded-full text-sm font-medium text-[#6B665E] tracking-wide mb-4 shadow-sm">
          🤖 AI 시대 생존 유형 테스트
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-[#3D3A33]">
          당신은 AI의
          <br />
          <span className="text-[#007E6E]">무엇입니까?</span>
        </h1>

        <p className="text-[#8B8680] text-lg max-w-xs mx-auto leading-relaxed">
          AI를 지배하는 주인인가,<br />
          아니면 종속된 숙주인가.
        </p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative group"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-[#A8B5A0] to-[#8FA085] rounded-full blur opacity-40 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
        <Link
          href="/test"
          className="relative px-12 py-5 bg-[#3D3A33] rounded-full leading-none flex items-center"
        >
          <span className="flex items-center space-x-5">
            <span className="text-[#F8F7F4] font-bold text-xl group-hover:text-[#A8B5A0] transition">진단 시작하기</span>
          </span>
        </Link>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="text-xs text-[#8B8680] font-mono mt-8"
      >
        P4AI : Personality for AI
      </motion.p>
    </div>
  );
}
