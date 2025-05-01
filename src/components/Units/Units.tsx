import { useGameStore } from "../../state/useGameStateStore";
import unitCostIncrease from "../../utils/unitCostIncrease";
import CONSTANTS from "../../utils/constants";

const Units = () => {
  const units = useGameStore((state) => state.units);
  const buyUnit = useGameStore((state) => state.buyUnit);
  const energy = useGameStore((state) => state.energy);
  const earnedEnergy = useGameStore((state) => state.earnedEnergy);

  return (
    <>
      {units
        .filter((unit) => earnedEnergy >= 0.75 * unit.baseCost)
        .map((unit) => {
          const cost = unitCostIncrease(
            unit.baseCost,
            CONSTANTS.baseUnitMultiplier,
            unit.count
          );
          return (
            <div key={unit.name}>
              <p>
                ({unit.count}) {unit.name} - Eps:{" "}
                {unit.count === 0 ? unit.eps : unit.eps * unit.count}
              </p>
              <p>{unit.description}</p>
              <button
                onClick={() => buyUnit(unit.name)}
                disabled={energy < cost}
              >
                Buy E{cost} (+{unit.eps} eps)
              </button>
            </div>
          );
        })}
    </>
  );
};

export default Units;
