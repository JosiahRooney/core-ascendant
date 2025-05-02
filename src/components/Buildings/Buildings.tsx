import { useGameStore } from "../../state/useGameStateStore";
import CONSTANTS from "../../utils/constants";
import formatNumber from "../../utils/numbers";

import Energy from "../Icons/Energy";
import { Card } from "../Card";
import { Button } from "../Button";
import buildingCostIncrease from "../../utils/buildingCostIncrease";

const Buildings = () => {
  const buildings = useGameStore((state) => state.buildings);
  const buyBuilding = useGameStore((state) => state.buyBuilding);
  const energy = useGameStore((state) => state.energy);
  const earnedEnergy = useGameStore((state) => state.earnedEnergy);

  return (
    <>
      {buildings
        .filter(
          (building) =>
            building.id === 0 || earnedEnergy >= 0.75 * building.baseCost
        )
        .map((building) => {
          const cost = buildingCostIncrease(
            building.baseCost,
            CONSTANTS.baseBuildingMultiplier,
            building.count
          );
          return (
            <Card className="flex flex-row justify-between" key={building.name}>
              <div>
                <p>
                  <span className="font-bold">
                    {building.count} {building.name}
                  </span>
                </p>
                <p>{building.description}</p>
                <p>effect value: {building.effectValue}</p>
              </div>
              <Button
                className="whitespace-nowrap"
                onClick={() => buyBuilding(building.name)}
                disabled={energy < cost}
              >
                Buy <Energy />
                {formatNumber(cost)}
              </Button>
            </Card>
          );
        })}
    </>
  );
};

export default Buildings;
