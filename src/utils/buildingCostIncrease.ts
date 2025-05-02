const buildingCostIncrease = (
  baseCost: number,
  multiplier: number,
  count: number
) => {
  return Math.floor(baseCost * Math.pow(multiplier, count));
};

export default buildingCostIncrease;
