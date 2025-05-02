import type { Building } from "../types/Building";

export const baseBuildings: Building[] = [
  // Tier 1 — Hatchlings & Protoforms
  {
    id: 0,
    name: "Spawning Pool",
    description:
      "Breeds the first broodlings. Increases production from Tier 1 units.",
    tier: 1,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 1,
    name: "Energy Sacs",
    description: "Stores raw energy secretions. Increases max energy capacity.",
    tier: 1,
    effectValue: 1,
    effectType: "energyCapacity",
  },

  // Tier 2 — Feeders & Parasites
  {
    id: 2,
    name: "Larval Forges",
    description: "Accelerates mutation cycles in Tier 2 feeders.",
    tier: 2,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 3,
    name: "Synaptic Tethers",
    description: "Links adjacent buildings to share production boosts.",
    tier: 2,
    effectValue: 5,
    effectType: "buildingEffectBoost",
  },

  // Tier 3 — Memory & Decay Harvesters
  {
    id: 4,
    name: "Memory Vaults",
    description: "Preserve ancestral echoes. Boosts Tier 3 output.",
    tier: 3,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 5,
    name: "Fungal Relays",
    description: "Transmit mental residue. Slightly boosts all unit EPS.",
    tier: 3,
    effectValue: 0.1,
    effectType: "unitEpsBoost",
  },

  // Tier 4 — Hive Constructs
  {
    id: 6,
    name: "Neural Spires",
    description: "Expand the hive's mental lattice. Buffs Tier 4 units.",
    tier: 4,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 7,
    name: "Stasis Tubes",
    description: "Preserve unused biomass. Reduces unit purchase costs.",
    tier: 4,
    effectValue: 0.1,
    effectType: "unitCostReduction",
  },

  // Tier 5 — Cosmic Symbiotes
  {
    id: 8,
    name: "Star Cradles",
    description: "Nurture symbiotes with stellar breath. Boost Tier 5 units.",
    tier: 5,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 9,
    name: "Plasma Lymph",
    description: "Heats hive blood. Increases click value and regen.",
    tier: 5,
    effectValue: 0.1,
    effectType: "clickEnergyBoost",
  },

  // Tier 6 — Post-Biologicals
  {
    id: 10,
    name: "Thought Husk Chambers",
    description: "Empty the mind to make room for higher purpose. Buff Tier 6.",
    tier: 6,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 11,
    name: "Psionic Struts",
    description: "Strengthens hive control. Reduces building cost scaling.",
    tier: 6,
    effectValue: 0.1,
    effectType: "buildingCostReduction",
  },

  // Tier 7 — World Shapers
  {
    id: 12,
    name: "Shell Foundries",
    description: "Craft hardened bodies for terraforming forms. Boosts Tier 7.",
    tier: 7,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 13,
    name: "Temporal Drip Nodes",
    description: "Slow time across the colony. Slows spell cooldowns.",
    tier: 7,
    effectValue: 0.1,
    effectType: "spellCostReduction",
  },

  // Tier 8 — Godlike Entities
  {
    id: 14,
    name: "Queen's Heart",
    description:
      "Amplifies the will of the hive across galaxies. Boost Tier 8.",
    tier: 8,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 15,
    name: "Void Gut",
    description: "Digests entire suns. Gives chance for bonus EPS spikes.",
    tier: 8,
    effectValue: 0.1,
    effectType: "buildingRandomEpsBoost",
  },

  // Tier 9 — Abominations
  {
    id: 16,
    name: "Wound Altars",
    description: "Offer biomass to the wound. Boosts Tier 9 units.",
    tier: 9,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 17,
    name: "Oblivion Chutes",
    description:
      "Throw spent resources into the dark. Converts overflow into Crystals.",
    tier: 9,
    effectValue: 0.1,
    effectType: "energyCapacity",
  },

  // Tier 10 — Mythic Apex
  {
    id: 18,
    name: "Becoming Womb",
    description: "Births units before you even think of them. Boosts Tier 10.",
    tier: 10,
    core: true,
    effectValue: 1,
    effectType: "unitEpsBoost",
  },
  {
    id: 19,
    name: "Singularity Loom",
    description: "Weaves all previous timelines into passive bonuses.",
    tier: 10,
    effectValue: 5,
    effectType: "buildingEffectBoost",
  },
];
