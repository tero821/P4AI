import { ScoreState } from './types';
import { QUESTIONS } from './questions';

// Constants for 7-point scale (7 questions per axis)
const MIN_SCORE = 7; // 1 * 7
const MAX_SCORE = 49; // 7 * 7
const NEUTRAL_THRESHOLD = 28; // 4 * 7
const TOTAL_RANGE = MAX_SCORE - MIN_SCORE; // 42

export function calculateScore(answers: Record<number, number>): ScoreState {
    const scores: ScoreState = {
        R: 0,
        I: 0,
        M: 0,
        O: 0,
        bonus: {
            imposter: false,
            zombie: false,
        },
    };

    QUESTIONS.forEach((q) => {
        const rawValue = answers[q.id] || 4; // Default to Neutral (4) if undefined
        let calcValue = rawValue;

        if (q.direction === 'reverse') {
            calcValue = 8 - rawValue; // 7-point scale reverse: 1->7, 7->1 => 8-x
        }

        if (q.type === 'R') scores.R += calcValue;
        if (q.type === 'I') scores.I += calcValue;
        if (q.type === 'M') scores.M += calcValue;
        if (q.type === 'O') scores.O += calcValue;

        // Bonus check (Threshold: 5 or higher counts as Yes on 7-point scale?)
        // User said "Yes/No", usually mapped to Agree/Disagree. Let's assume >= 5 is Agree.
        if (q.type === 'B') {
            if (q.id === 29 && rawValue >= 5) scores.bonus.imposter = true;
            if (q.id === 30 && rawValue >= 5) scores.bonus.zombie = true;
        }
    });

    return scores;
}

export function determineType(scores: ScoreState): string {
    // R: Tool(T) vs Friend(F)
    const R = scores.R > NEUTRAL_THRESHOLD ? 'F' : 'T';

    // I: Architect(A) vs Conductor(C)
    const I = scores.I > NEUTRAL_THRESHOLD ? 'C' : 'A';

    // M: Logic(L) vs Vibe(V)
    const M = scores.M > NEUTRAL_THRESHOLD ? 'V' : 'L';

    // O: Security(S) vs Openness(O)
    const O = scores.O > NEUTRAL_THRESHOLD ? 'O' : 'S';

    return `${R}${I}${M}${O}`;
}

export function calculatePercentage(score: number): number {
    return Math.round(((score - MIN_SCORE) / TOTAL_RANGE) * 100);
}
