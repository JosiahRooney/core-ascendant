# 🎮 Game Design Document: Core Ascendant

## 🌌 Theme & Setting

You are the Prime Intelligence of an alien race bent on reaching the Galactic Core, absorbing energy from planetary systems along the way. Each planet is a "run" that can be prestiged for permanent upgrades. The final goal is to conquer the Galactic Core, unlocking immense cosmic power.

## 🔁 Core Loop

1. Click the Core Node – Gain Energy (main currency).
2. Spend Energy on:
   - Units: Automatically gather energy.
   - Buildings: Buff units, clicking, and mana generation.
3. Use Mana for:
   - Spells: Short-term boosts or special effects.
   - Random Events: Trigger unique bonuses or challenges.
4. Discover Rare Crystals (special currency) for:
   - Time warps, epic upgrades, or rerolling randomness.
5. Prestige (New Planet):

   - Reset progress but gain planetary upgrades and speed bonuses.

6. Mega-Prestige (New Star System / Galactic Core):

   - Unlock galaxy-wide upgrades and start at higher baseline power.

## 💱 Currencies

- Energy: Gained by clicking or from units. Used for purchases.
- Mana: Regenerates over time. Spent on powerful spells. Affected by certain buildings and upgrades.
- Crystals: Rare drops, rewarded for high performance, used to break rules (e.g., time-skip, permanent buffs).

## 👾 Units (Auto-generators)

| Unit Name             | Description                                             | Unlock Cost | EPS      | Tier |
| --------------------- | ------------------------------------------------------- | ----------- | -------- | ---- |
| Nano-Drone            | Tiny autonomous drones that harvest surface ions.       | 10          | 0.1      | 1    |
| Pulse Collector       | Harnesses natural electromagnetic pulses.               | 100         | 1        | 1    |
| Ion Beetle            | Bio-mechanical scavenger that consumes plasma pockets.  | 250         | 3        | 1    |
| Wormhole Leech        | Anchors to micro-wormholes and extracts exotic matter.  | 1000        | 10       | 2    |
| Asteroid Burrower     | Mines asteroids for crystallized energy cores.          | 2500        | 20       | 2    |
| Screamer Pod          | Emits psychic wails to stir energy from nearby voids.   | 5000        | 40       | 2    |
| Mind Syphon           | Converts ambient thought residue from conquered minds.  | 10k         | 100      | 3    |
| Graviton Driller      | Bores into gravity wells for dense energy particles.    | 25k         | 200      | 3    |
| Temporal Leech        | Feeds on causality fluctuations from nearby anomalies.  | 50k         | 500      | 3    |
| Entropy Harvester     | Collects the decay energy from broken timelines.        | 100k        | 1200     | 4    |
| Planet Skinner        | Strips planetary crusts for ultra-dense cores.          | 250k        | 3000     | 4    |
| Cosmic Weaver         | Weaves energy threads from cosmic background radiation. | 500k        | 7500     | 4    |
| Black Star Cultivator | Grows energy-seeding organisms near dying stars.        | 750k        | 12500    | 4    |
| Quantum Nexus         | Connects to multiple dimensions for energy siphoning.   | 2M          | 50000    | 5    |
| Celestial Conduit     | Links to cosmic ley lines for energy flow.              | 5M          | 100000   | 5    |
| Cosmic Architect      | Constructs energy structures from cosmic dust.          | 10M         | 200000   | 6    |
| Dark Matter Weaver    | Manipulates dark matter for energy extraction.          | 20M         | 500000   | 6    |
| Voidwalker            | Transcends dimensions to harvest void energy.           | 50M         | 1000000  | 6    |
| Cosmic Singularity    | Harnesses the power of a collapsing universe.           | 100M        | 2000000  | 7    |
| Celestial Architect   | Constructs energy structures from celestial dust.       | 200M        | 5000000  | 8    |
| Singularity Eater     | Consumes black holes for nearly infinite energy.        | 1B          | 20000000 | 9    |

> Units can be leveled or upgraded via tech upgrades or buildings.

## 🏢 Buildings (Buffers/Modifiers)

| Building Name      | Effect                                            | Unlock Cost |
| ------------------ | ------------------------------------------------- | ----------- |
| Amplification Node | Increases energy per click                        | 50 Energy   |
| Temporal Reactor   | Boosts mana regeneration                          | 500 Energy  |
| Control Nexus      | Improves unit efficiency by %                     | 5k Energy   |
| Rift Forge         | Adds chance to create bonus energy on click       | 20k Energy  |
| Spire of Echoes    | Unlocks global passive bonus when a spell is cast | 100k Energy |

## 🧙 Spells (Mana-based Boosts)

| Spell Name    | Effect                                                      | Mana Cost |
| ------------- | ----------------------------------------------------------- | --------- |
| Overload      | Temporarily double energy production                        | 25        |
| Quantum Surge | Instantly gain energy equal to 10 seconds of current income | 40        |
| Clone Pulse   | Double current unit output for 30 seconds                   | 60        |
| Rift Storm    | Triggers random bonus events or item drops                  | 80        |
| Time Freeze   | Freezes all decay or costs for 15 seconds                   | 100       |

## 🌠 Random Events / Bonuses

- Wandering Star: Click quickly before it fades to earn a Crystal.
- Quantum Fluctuation: Randomly changes unit or building stats for a short time.
- Corrupted Node: Clicking it may give a powerful buff or debuff.
- Time Echo: Repeats your last 5 seconds of production.

## 💎 Crystals (Special Currency Usage)

- Chrono Boost: Simulate 1 hour of progression instantly.
- Relic Purchase: Buy unique, permanent upgrades (see Relics).
- Event Reroll: Reset the random events and spawn a new set.
- Galactic Mutation: Randomly improve one unit or building permanently.

## 🪐 Prestige: Planetary Conquest

- Reset progress to move to the next planet.
- Rewards:
  - Speed Boosts to energy/mana/crystal gain
  - Planetary Tech Points – spend in a Tech Tree for meta upgrades
  - New Units/Buildings unlocked on later planets

## ☀️ Mega-Prestige: Ascend to the Galactic Core

- Reset everything, but gain Ascendant Essence.
- Use Essence for powerful universal upgrades, such as:
  - Start with X units pre-owned
  - Spells start unlocked and boosted
  - Gain permanent passive energy production

## 🧬 Tech Tree (Post-Prestige Progression)

- Branching tree of upgrades with categories like:
  - Efficiency (unit/building output)
  - Arcana (mana regen and spell power)
  - Crystalline (boost crystal find rate and uses)
  - Dominion (speed up prestige cycles)

## 🎨 Art/Theme Suggestions

- Futuristic UI with glowing elements
- Alien architecture that grows as player progresses
- Celestial backgrounds that change per planet
- Units and buildings as strange, semi-organic constructs

## 🧪 Optional Systems

- Artifact Crafting: Combine materials (via events) to craft relics.
- Challenge Modes: Timed runs or constraint-based gameplay (e.g., “no spells” run).
- Alliance System (Multiplayer Lite): Optional passive online leaderboards or buffs from friends’ progress.
