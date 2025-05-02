import { baseBuildings } from "../data/baseBuildings";
import { Building } from "../types/Building";

export type RuntimeBuilding = Building & {
  baseCost: number;
  count: number;
};

export function generateBuildings({
  baseCost = 100,
  costGrowth = 6,
}: {
  baseCost?: number;
  costGrowth?: number;
  baseEffect?: number;
  effectGrowth?: number;
} = {}): RuntimeBuilding[] {
  return baseBuildings.map((b, index) => ({
    ...b,
    baseCost: Math.floor(baseCost * Math.pow(costGrowth, index)),
    count: 0,
  }));
}
