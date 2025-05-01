export type Unit = {
  name: string;
  description: string;
  count: number; // Number of units owned
  baseCost: number; // Base cost of the unit
  eps: number; // Energy per second
  tier: number; // 1-9
  id: number; // Unique identifier
};
