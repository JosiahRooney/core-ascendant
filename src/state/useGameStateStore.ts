import { create } from "zustand";

import { buildings } from "../data/buildings";
import unitCostIncrease from "../utils/unitCostIncrease";

import CONSTANTS from "../utils/constants";
import { generateUnits, RuntimeUnit } from "./generateUnits";

type GameState = {
  units: RuntimeUnit[];
  buildings: typeof buildings;
  clickEnergy: number;
  energy: number;
  earnedEnergy: number;
  buyUnit: (unitName: string) => void;
  buyBuilding: (buildingName: string) => void;
  addEnergy: (amount: number) => void;
  spendEnergy: (amount: number) => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  units: generateUnits(),
  buildings,
  clickEnergy: 1,
  energy: 0,
  earnedEnergy: 0,
  buyUnit: (unitName) => {
    const unit = get().units.find((u) => u.name === unitName);
    if (!unit) return;

    const cost = unitCostIncrease(
      unit.baseCost,
      CONSTANTS.baseUnitMultiplier,
      unit.count
    );

    const currentEnergy = get().energy;
    if (currentEnergy < cost) return;

    set((state) => ({
      energy: state.energy - cost,
      units: state.units.map((u) =>
        u.name === unitName ? { ...u, count: u.count + 1 } : u
      ),
    }));
  },
  buyBuilding: (buildingName) => {
    const building = get().buildings.find((b) => b.name === buildingName);
    if (!building) return;

    const currentEnergy = get().energy;
    if (currentEnergy < building.unlockCost) return;

    set((state) => ({
      energy: state.energy - building.unlockCost,
      buildings: state.buildings.map((b) =>
        b.name === buildingName ? { ...b, unlockCost: b.unlockCost * 1.5 } : b
      ),
    }));
  },
  addEnergy: (amount: number) =>
    set((state) => ({
      energy: state.energy + amount,
      earnedEnergy: state.earnedEnergy + amount,
    })),
  spendEnergy: (amount: number) =>
    set((state) => ({
      energy: state.energy - amount > 0 ? state.energy - amount : 0,
    })),
}));
