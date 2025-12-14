'use client';

import { motion } from 'framer-motion';

interface ProgressBarProps {
    current: number;
    total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
    const progress = (current / total) * 100;

    return (
        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-6">
            <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
            />
        </div>
    );
}
