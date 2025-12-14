'use client';

import { motion } from 'framer-motion';
import { Question } from '@/lib/types';
import LikertScale from './LikertScale';

interface QuestionCardProps {
    question: Question;
    value: number | null;
    onChange: (value: number) => void;
    onNext: () => void;
}

export default function QuestionCard({ question, value, onChange, onNext }: QuestionCardProps) {
    // Auto-advance delay handled by parent or here? 
    // Spec: "즉각적인 피드백... 다음 질문으로 넘어가는 슬라이드 애니메이션"
    // Usually better to let user see selection for a moment (300ms) then next.

    const handleChange = (score: number) => {
        onChange(score);
        // Delay for visual feedback then trigger next
        setTimeout(() => {
            onNext();
        }, 450);
    };

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-[400px]">
            <motion.div
                key={question.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, type: "spring" }}
                className="w-full bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-2xl flex flex-col items-center text-center space-y-8"
            >
                <div className="space-y-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-mono tracking-wider border border-white/5">
                        Q{question.id}.
                    </span>
                    <h2 className="text-xl md:text-2xl font-bold leading-relaxed text-white break-keep">
                        {question.question}
                    </h2>
                </div>

                <LikertScale value={value} onChange={handleChange} />
            </motion.div>
        </div>
    );
}
