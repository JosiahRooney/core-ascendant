export interface Building {
  id: number;
  name: string;
  description: string;
  tier: number;
  effectValue: number;
  effectType:
    | "unitEpsBoost"
    | "clickEnergyBoost"
    | "energyCapacity"
    | "buildingEffectBoost"
    | "buildingCostReduction"
    | "unitCostReduction"
    | "spellEffectBoost"
    | "spellCostReduction"
    | "buildingRandomEpsBoost";
  core?: boolean;
}
