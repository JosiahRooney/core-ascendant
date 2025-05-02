import { useEffect, useState } from "react";

import { Button } from "./Button";
import { useGameStore } from "../state/useGameStateStore";
import Energy from "./Icons/Energy";
import formatNumber from "../utils/numbers";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const clickEnergy = useGameStore((state) => state.clickEnergy);
  const addEnergy = useGameStore((state) => state.addEnergy);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const handleAddEnergy = (delta: number) => {
    addEnergy(delta);
  };

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl">Core Ascendant</h1>

      <Button onClick={() => handleAddEnergy(clickEnergy)}>
        Harvest <Energy />
        {clickEnergy} Energy
      </Button>

      <Button onClick={() => handleAddEnergy(1000)}>
        Harvest <Energy />
        {formatNumber(1000)} Energy
      </Button>

      <Button onClick={() => handleAddEnergy(1000000)}>
        Harvest <Energy />
        {formatNumber(1000000)} Energy
      </Button>

      <button onClick={() => setIsDarkMode((d) => !d)}>
        {isDarkMode ? "☼" : "☾"}
      </button>
    </header>
  );
};

export default Header;
