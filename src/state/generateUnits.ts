import { units } from "../data/baseUnits";
import { Unit } from "../types/Unit";

export type RuntimeUnit = Unit & {
  baseCost: number;
  eps: number;
  count: number;
};

export function generateUnits(
  baseCost = 10,
  costGrowth = 5,
  baseEPS = 1,
  epsGrowth = 3
): RuntimeUnit[] {
  return units.map((unit, index) => ({
    ...unit,
    baseCost: Math.floor(baseCost * Math.pow(costGrowth, index)),
    eps: Math.round(baseEPS * Math.pow(epsGrowth, index)),
    count: 0,
  }));
}
