'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils'; // Requirement: need lib/utils for clsx/tailwind-merge

interface LikertScaleProps {
    value: number | null;
    onChange: (value: number) => void;
}

export default function LikertScale({ value, onChange }: LikertScaleProps) {
    // 7 Points: 1 (Strongly Disagree) to 7 (Strongly Agree)
    // Sizes: Big, Med, Small, Neutral, Small, Med, Big
    // Colors: Red (Disagree) -> Gray -> Green/Blue (Agree)

    const options = [
        { score: 1, size: 'w-12 h-12', color: 'border-red-500/50 bg-red-500/20', active: 'bg-red-500', label: '전혀 아님' },
        { score: 2, size: 'w-10 h-10', color: 'border-red-400/40 bg-red-400/10', active: 'bg-red-400', label: '' },
        { score: 3, size: 'w-8 h-8', color: 'border-red-300/30 bg-red-300/10', active: 'bg-red-300', label: '' },
        { score: 4, size: 'w-6 h-6', color: 'border-gray-500/30 bg-gray-500/10', active: 'bg-gray-400', label: '중립' },
        { score: 5, size: 'w-8 h-8', color: 'border-cyan-300/30 bg-cyan-300/10', active: 'bg-cyan-300', label: '' },
        { score: 6, size: 'w-10 h-10', color: 'border-cyan-400/40 bg-cyan-400/10', active: 'bg-cyan-400', label: '' },
        { score: 7, size: 'w-12 h-12', color: 'border-cyan-500/50 bg-cyan-500/20', active: 'bg-cyan-500', label: '매우 그렇다' },
    ];

    return (
        <div className="w-full py-8 flex flex-col items-center gap-4">
            <div className="flex items-center justify-between w-full max-w-[340px] px-2 relative">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-white/10 -z-10" />

                {options.map((opt) => (
                    <motion.button
                        key={opt.score}
                        whileTap={{ scale: 0.9 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={() => onChange(opt.score)}
                        className={cn(
                            "rounded-full border-2 transition-all duration-300 flex items-center justify-center relative",
                            opt.size,
                            value === opt.score ? opt.active + " border-transparent shadow-[0_0_15px_rgba(255,255,255,0.3)]" : opt.color
                        )}
                    >
                        {value === opt.score && (
                            <motion.div
                                layoutId="selected-ring"
                                className="absolute inset-0 rounded-full border-2 border-white"
                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                        )}
                    </motion.button>
                ))}
            </div>

            <div className="flex justify-between w-full max-w-[340px] px-2 text-xs text-gray-400 font-medium">
                <span>비동의</span>
                <span>동의</span>
            </div>
        </div>
    );
}
