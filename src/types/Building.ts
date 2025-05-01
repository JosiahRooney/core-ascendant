export interface Building {
  name: string;
  description: string;
  unlockCost: number;
  effect: string;
  tier: number;
  affectsClick?: boolean;
  affectsMana?: boolean;
  affectsUnits?: boolean;
  affectsSpells?: boolean;
}
