'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { RESULTS } from '@/lib/results';
import { calculatePercentage } from '@/lib/logic';
import Link from 'next/link';
import { motion } from 'framer-motion';

function ResultContent() {
    const searchParams = useSearchParams();
    const typeCode = searchParams.get('type') || 'TALS';

    // Parse scores
    const rScore = Number(searchParams.get('r') || '0');
    const iScore = Number(searchParams.get('i') || '0');
    const mScore = Number(searchParams.get('m') || '0');
    const oScore = Number(searchParams.get('o') || '0');

    const resultData = RESULTS[typeCode] || RESULTS['TALS'];

    // Calculate percentages for bars
    const rPct = calculatePercentage(rScore);
    const iPct = calculatePercentage(iScore);
    const mPct = calculatePercentage(mScore);
    const oPct = calculatePercentage(oScore);

    return (
        <div className="w-full min-h-screen bg-[#F8F7F4] text-[#3D3A33]">
            <div className="w-full max-w-md mx-auto py-8 px-4 flex flex-col items-center space-y-8 pb-20">

                {/* 1. Header & Type */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-2"
                >
                    <p className="text-[#8B8680] text-sm tracking-widest font-mono">YOUR AI SURVIVAL TYPE</p>
                    <h1 className="text-4xl font-extrabold text-[#007E6E]">
                        {resultData.name}
                    </h1>
                    <div className="flex gap-2 justify-center mt-2 flex-wrap">
                        {resultData.tags.map(tag => (
                            <span key={tag} className="text-xs bg-white border border-[#E8E6E0] px-2 py-1 rounded-full text-[#6B665E]">
                                {tag}
                            </span>
                        ))}
                    </div>
                </motion.div>

                {/* 2. Main Description */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="bg-white p-6 rounded-3xl shadow-sm text-center border border-[#E8E6E0]"
                >
                    <p className="text-lg leading-relaxed text-[#5C5852] break-keep">
                        {resultData.description}
                    </p>
                </motion.div>

                {/* 3. AdSense Placeholder Top */}
                <div className="w-full h-24 bg-[#E8E6E0]/50 flex items-center justify-center border border-dashed border-[#B0ADA8] rounded text-[#8B8680] text-xs">
                    AD: Google AdSense Area (Top)
                </div>

                {/* 4. Axis Analysis (Progress Bars) */}
                <div className="w-full space-y-6">
                    <AxisBar label="관계성 (Relationship)" sub="도구(Tool) vs 친구(Friend)" pct={rPct} left="Tool" right="Friend" />
                    <AxisBar label="정체성 (Identity)" sub="주도(Arch) vs 수용(Cond)" pct={iPct} left="Architect" right="Conductor" />
                    <AxisBar label="방식 (Method)" sub="논리(Logic) vs 느낌(Vibe)" pct={mPct} left="Logic" right="Vibe" />
                    <AxisBar label="개방성 (Openness)" sub="보안(Sec) vs 개방(Open)" pct={oPct} left="Security" right="Open" />
                </div>

                {/* 5. Share & Restart */}
                <div className="flex gap-4 w-full">
                    <Link href="/" className="flex-1 py-4 rounded-full bg-white border border-[#E8E6E0] text-[#6B665E] hover:bg-[#F3F2EE] text-center font-bold transition shadow-sm">
                        다시 하기
                    </Link>
                    <button
                        onClick={() => alert('링크가 복사되었습니다!')}
                        className="flex-1 py-4 rounded-full bg-[#007E6E] hover:bg-[#006054] text-white font-bold transition shadow-md"
                    >
                        공유하기
                    </button>
                </div>

                {/* 6. AdSense Placeholder Bottom */}
                <div className="w-full h-64 bg-[#E8E6E0]/50 flex items-center justify-center border border-dashed border-[#B0ADA8] rounded text-[#8B8680] text-xs">
                    AD: Google AdSense Area (Bottom)
                </div>

            </div>
        </div>
    );
}

function AxisBar({ label, sub, pct, left, right }: { label: string, sub: string, pct: number, left: string, right: string }) {
    return (
        <div className="space-y-1">
            <div className="flex justify-between text-xs text-[#8B8680]">
                <span>{label}</span>
            </div>
            <div className="relative h-4 bg-[#E8E6E0] rounded-full overflow-hidden">
                {/* Fill */}
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-[#007E6E]"
                />
                {/* Center Marker */}
                <div className="absolute top-0 left-1/2 w-0.5 h-full bg-white/50 -translate-x-1/2" />
            </div>
            <div className="flex justify-between text-[10px] uppercase font-bold text-[#6B665E]">
                <span>{left}</span>
                <span>{right}</span>
            </div>
        </div>
    );
}

export default function ResultPage() {
    return (
        <Suspense fallback={<div className="text-[#3D3A33] text-center py-20">Loading Results...</div>}>
            <ResultContent />
        </Suspense>
    );
}
