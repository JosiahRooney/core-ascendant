import { useEffect } from "react";

import { useGameStore } from "./state/useGameStateStore";
import Units from "./components/Units/Units";

import "./App.css";

function App() {
  const addEnergy = useGameStore((state) => state.addEnergy);
  const clickEnergy = useGameStore((state) => state.clickEnergy);
  const energy = useGameStore((state) => state.energy);
  const earnedEnergy = useGameStore((state) => state.earnedEnergy);
  const handleAddEnergy = (delta: number) => {
    addEnergy(delta);
  };

  // get all eps from units
  const units = useGameStore((state) => state.units);
  const eps = units.reduce((acc, unit) => {
    return acc + unit.eps * unit.count;
  }, 0);

  // add logic to add energy over time
  useEffect(() => {
    const interval = setInterval(() => {
      addEnergy(eps);
    }, 1000);
    return () => clearInterval(interval);
  }, [addEnergy, eps]);

  return (
    <>
      <h1>Energy: {energy}</h1>
      <p>earned: {earnedEnergy}</p>
      <button onClick={() => handleAddEnergy(clickEnergy)}>
        Harvest Energy
      </button>
      <Units />
    </>
  );
}

export default App;
