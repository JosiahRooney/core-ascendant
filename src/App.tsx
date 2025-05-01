import { useEffect, useState } from "react";

import { useGameStore } from "./state/useGameStateStore";
import Units from "./components/Units/Units";
import CONSTANTS from "./utils/constants";
import EnergyPerSecond from "./components/Icons/EnergyPerSecond";
import Energy from "./components/Icons/Energy";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(CONSTANTS.tabs.units);
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
    <div className="App">
      <div>
        <p>
          Energy: <Energy />
          {energy}
        </p>
        <p>
          <EnergyPerSecond />: {eps} | earned: {earnedEnergy}
        </p>
        <button onClick={() => handleAddEnergy(clickEnergy)}>
          Harvest <Energy />
          {clickEnergy} Energy
        </button>
      </div>

      <div className="App__tabs">
        <div>
          {/* tabs */}
          <button
            onClick={() => setActiveTab(CONSTANTS.tabs.units)}
            className={activeTab === CONSTANTS.tabs.units ? "active" : ""}
          >
            {CONSTANTS.tabs.units}
          </button>
          <button
            onClick={() => setActiveTab(CONSTANTS.tabs.buildings)}
            className={activeTab === CONSTANTS.tabs.buildings ? "active" : ""}
          >
            {CONSTANTS.tabs.buildings}
          </button>
          <button
            onClick={() => setActiveTab(CONSTANTS.tabs.upgrades)}
            className={activeTab === CONSTANTS.tabs.upgrades ? "active" : ""}
          >
            {CONSTANTS.tabs.upgrades}
          </button>
        </div>

        <div>
          {activeTab === CONSTANTS.tabs.units && <Units />}
          {activeTab === CONSTANTS.tabs.buildings && <p>Buildings</p>}
          {activeTab === CONSTANTS.tabs.upgrades && <p>Upgrades</p>}
        </div>
      </div>
    </div>
  );
}

export default App;
