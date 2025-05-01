import { useGameStore } from "../../state/useGameStateStore";
import unitCostIncrease from "../../utils/unitCostIncrease";
import CONSTANTS from "../../utils/constants";
import EnergyPerSecond from "../Icons/EnergyPerSecond";
import Energy from "../Icons/Energy";

const Units = () => {
  const units = useGameStore((state) => state.units);
  const buyUnit = useGameStore((state) => state.buyUnit);
  const energy = useGameStore((state) => state.energy);
  const earnedEnergy = useGameStore((state) => state.earnedEnergy);

  return (
    <>
      {units
        .filter((unit) => unit.id === 0 || earnedEnergy >= 0.75 * unit.baseCost)
        .map((unit) => {
          const cost = unitCostIncrease(
            unit.baseCost,
            CONSTANTS.baseUnitMultiplier,
            unit.count
          );
          return (
            <div key={unit.name}>
              <p>
                ({unit.count}) {unit.name} - <EnergyPerSecond />:{" "}
                {unit.count === 0 ? unit.eps : unit.eps * unit.count}
              </p>
              <p>{unit.description}</p>
              <button
                onClick={() => buyUnit(unit.name)}
                disabled={energy < cost}
              >
                Buy <Energy />
                {cost} (+{unit.eps} <EnergyPerSecond />)
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Units;
