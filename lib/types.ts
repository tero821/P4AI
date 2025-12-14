export type AxisType = 'R' | 'I' | 'M' | 'O' | 'B'; // Relationship, Identity, Method, Openness, Bonus
export type Direction = 'normal' | 'reverse';

export interface Question {
  id: number;
  type: AxisType;
  question: string;
  direction: Direction;
}

export interface ScoreState {
  R: number; // Relationship
  I: number; // Identity
  M: number; // Method
  O: number; // Openness
  bonus: {
    imposter: boolean; // Q29
    zombie: boolean;   // Q30
  };
}

export interface MBTIResult {
  code: string; // e.g. "TALS"
  name: string; // e.g. "Data Wholesaler"
  description: string;
  tags: string[];
}
