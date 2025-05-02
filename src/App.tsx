import { useEffect, useState } from "react";

import { useGameStore } from "./state/useGameStateStore";
import CONSTANTS from "./utils/constants";

import Units from "./components/Units/Units";
import Buildings from "./components/Buildings/Buildings";
import EnergyPerSecond from "./components/Icons/EnergyPerSecond";
import Energy from "./components/Icons/Energy";
import Header from "./components/Header";
import TabButton from "./components/TabButton";

import "./styles/App.css";
import formatNumber from "./utils/numbers";

function App() {
  const [activeTab, setActiveTab] = useState(CONSTANTS.tabs.units);
  const addEnergy = useGameStore((state) => state.addEnergy);
  const energy = useGameStore((state) => state.energy);

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

  // add logic to set dark mode based on user preference
  useEffect(() => {
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.documentElement.classList.toggle("dark", userPrefersDark);
  }, []);

  return (
    <div className="App">
      <Header />

      <div className="p-4 flex flex-row gap-4">
        <div className="flex flex-col gap-2 w-1/4">
          <p className="text-2xl">
            <Energy />
            {formatNumber(energy)}
          </p>
          <p>
            <EnergyPerSecond />: {formatNumber(eps)}
          </p>
        </div>

        <div className="flex flex-col gap-2 w-3/4">
          <div className="flex flex-row gap-3">
            <TabButton
              onClick={() => setActiveTab(CONSTANTS.tabs.units)}
              isActive={activeTab === CONSTANTS.tabs.units}
            >
              {CONSTANTS.tabs.units}
            </TabButton>

            <TabButton
              onClick={() => setActiveTab(CONSTANTS.tabs.buildings)}
              isActive={activeTab === CONSTANTS.tabs.buildings}
            >
              {CONSTANTS.tabs.buildings}
            </TabButton>

            <TabButton
              onClick={() => setActiveTab(CONSTANTS.tabs.upgrades)}
              isActive={activeTab === CONSTANTS.tabs.upgrades}
            >
              {CONSTANTS.tabs.upgrades}
            </TabButton>
          </div>

          <div>
            {activeTab === CONSTANTS.tabs.units && <Units />}
            {activeTab === CONSTANTS.tabs.buildings && <Buildings />}
            {activeTab === CONSTANTS.tabs.upgrades && <p>Upgrades</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
