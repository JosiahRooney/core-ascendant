import { create } from "zustand";

import unitCostIncrease from "../utils/unitCostIncrease";

import CONSTANTS from "../utils/constants";
import { generateUnits, RuntimeUnit } from "./generateUnits";
import { generateBuildings, RuntimeBuilding } from "./generateBuildings";
import buildingCostIncrease from "../utils/buildingCostIncrease";

type GameState = {
  units: RuntimeUnit[];
  buildings: RuntimeBuilding[];
  clickEnergy: number;
  energy: number;
  maxEnergy: number;
  earnedEnergy: number;
  tierUnitEpsBoosts: {
    [key: number]: number;
  };
  buildingCostReductions: number;
  buyUnit: (unitName: string) => void;
  buyBuilding: (buildingName: string) => void;
  addEnergy: (amount: number) => void;
  spendEnergy: (amount: number) => void;
};

export const useGameStore = create<GameState>((set, get) => ({
  units: generateUnits(),
  buildings: generateBuildings(),
  clickEnergy: 1,
  energy: 0,
  maxEnergy: 1000,
  earnedEnergy: 0,
  // TODO: use tierUnitEpsBoosts to boost unit EPS based on building effects
  // and unit count
  tierUnitEpsBoosts: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
  },
  buildingCostReductions: 0,
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

    const cost = buildingCostIncrease(
      building.baseCost,
      CONSTANTS.baseBuildingMultiplier,
      building.count
    );

    const currentEnergy = get().energy;
    if (currentEnergy < cost) return;

    // Apply effects based on building type
    set((state) => {
      const updatedBuildings = state.buildings.map((b) =>
        b.name === buildingName ? { ...b, count: b.count + 1 } : b
      );

      const effectAmount = building.effectValue;

      const newState: Partial<GameState> = {
        energy: state.energy - cost,
        buildings: updatedBuildings,
      };

      switch (building.effectType) {
        case "clickEnergyBoost":
          // Increase the click energy value
          newState.clickEnergy = state.clickEnergy + effectAmount;
          break;
        case "energyCapacity":
          // Increase the max energy capacity
          newState.maxEnergy = state.maxEnergy + effectAmount * 200;
          break;
        case "unitEpsBoost": {
          // Boost the EPS of all units of the same tier
          const tier = building.tier;
          newState.tierUnitEpsBoosts = newState.tierUnitEpsBoosts || {
            ...state.tierUnitEpsBoosts,
          };
          newState.tierUnitEpsBoosts[tier] += effectAmount;
          break;
        }
        case "buildingCostReduction": {
          // Reduce the cost of buildings
          const reduction = effectAmount / 100;
          newState.buildingCostReductions =
            state.buildingCostReductions + reduction;
          newState.buildings = state.buildings.map((b) => {
            const newCost = Math.floor(
              b.baseCost * Math.pow(CONSTANTS.baseBuildingMultiplier, b.count)
            );
            const reducedCost = Math.floor(newCost * (1 - reduction));
            return {
              ...b,
              baseCost: reducedCost,
            };
          });
          break;
        }
        // Add other effect types as needed
      }

      return newState;
    });
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
