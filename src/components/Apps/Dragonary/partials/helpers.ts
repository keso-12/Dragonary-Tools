import { capitalizeFirstLetter } from 'utils/helpers';

export const commonCosts = [5, 10, 20, 30, 40, 50];
export const uncommonCosts = [50, 70, 90, 110, 130, 150];
export const uncommonSum = 50;
export const uncommonMultiplier = 1.5;
export const rareSum = 90;
export const rareMultiplier = 2;

export const elements = ['fire', 'earth', 'air', 'electric', 'plant', 'water', 'ice'];
export const elementList = elements.map((e) => ({ value: e, label: capitalizeFirstLetter(e) }));

export type DragonProps = {
  attack: number,
  intelligence: number,
  defense: number,
  bred: number,
  element: string,
  cost?: number,
  emberCost?: number,
}

export const initialStats = {
  attack: 10,
  intelligence: 10,
  defense: 10,
  bred: 0,
  element: 'fire',
};

const getStatsSum = (dragon: DragonProps) => {
  const { attack, intelligence, defense } = dragon;
  return Number(attack) + Number(intelligence) + Number(defense);
};

const getOffspringStatValue = (stat1: number, stat2: number) => {
  const totalStats = ((Number(stat1) + Number(stat2)) / 2) * 1.2;
  return Math.round(totalStats);
};

const getBreedingCost = (dragon1: DragonProps, dragon2: DragonProps) => {
  const dragonOneStatsSum = getStatsSum(dragon1);
  const dragonTwoStatsSum = getStatsSum(dragon2);

  let dragonOneBreedingCost = 0;
  if (dragon1.bred >= 5) {
    dragonOneBreedingCost = dragonOneStatsSum >= 50
      ? uncommonCosts[5] : commonCosts[5];
  } else {
    dragonOneBreedingCost = dragonOneStatsSum >= 50
      ? uncommonCosts[dragon1.bred] : commonCosts[dragon1.bred];
  }

  let dragonTwoBreedingCost = 0;
  if (dragon2.bred >= 5) {
    dragonTwoBreedingCost = dragonTwoStatsSum >= 50
      ? uncommonCosts[5] : commonCosts[5];
  } else {
    dragonTwoBreedingCost = dragonTwoStatsSum >= 50
      ? uncommonCosts[dragon2.bred] : commonCosts[dragon2.bred];
  }
  return dragonOneBreedingCost >= dragonTwoBreedingCost
    ? dragonOneBreedingCost : dragonTwoBreedingCost;
};

const getGreaterRarity = (dragon1: DragonProps, dragon2: DragonProps) => {
  const dragonOneStatsSum = getStatsSum(dragon1);
  const dragonTwoStatsSum = getStatsSum(dragon2);
  const highestStat = dragonOneStatsSum > dragonTwoStatsSum ? dragonOneStatsSum : dragonTwoStatsSum;
  return highestStat >= 50 ? 'uncommon' : 'common';
};

const getOffspringElement = (element1: string, element2: string, ember: string) => {
  let offspringElement = '';
  if (element1 === element2 && element1 === ember) {
    offspringElement = `100% ${element1}`;
  }
  if (element1 === element2 && element1 !== ember) {
    offspringElement = `80% ${element1} / 20% ${ember}`;
  }
  if (element1 !== element2 && element1 === ember) {
    offspringElement = `60% ${element1} / 40% ${element2}`;
  }
  if (element1 !== element2 && element2 === ember) {
    offspringElement = `40% ${element1} / 60% ${element2}`;
  }
  if (element1 !== element2 && element1 !== ember && element2 !== ember) {
    offspringElement = `40% ${element1} / 40% ${element2} / 20% ${ember}`;
  }
  return offspringElement;
};

export const getOffspringStats = (dragon1: DragonProps, dragon2: DragonProps, ember: string) => {
  const breedingCost = getBreedingCost(dragon1, dragon2);

  const offspringAtk = getOffspringStatValue(dragon1.attack, dragon2.attack);
  const offspringInt = getOffspringStatValue(dragon1.intelligence, dragon2.intelligence);
  const offspringDef = getOffspringStatValue(dragon1.defense, dragon2.defense);
  const offspringTotalStats = offspringAtk + offspringInt + offspringDef;
  let offspringRarity = 'common';
  if (offspringTotalStats >= 50) offspringRarity = 'uncommon';
  if (offspringTotalStats >= 90) offspringRarity = 'rare';

  let costMultiplier = 1;
  const parentsRarity = getGreaterRarity(dragon1, dragon2);
  if (parentsRarity === 'common' && offspringTotalStats >= 50) costMultiplier = 1.5;
  if (parentsRarity === 'uncommon' && offspringTotalStats >= 90) costMultiplier = 2;

  const offspringElement = getOffspringElement(dragon1.element, dragon2.element, ember);

  const offSpring = {
    attack: offspringAtk,
    intelligence: offspringInt,
    defense: offspringDef,
    rarity: offspringRarity,
    element: offspringElement,
    bred: 0,
    cost: breedingCost * costMultiplier,
  };

  return offSpring;
};
