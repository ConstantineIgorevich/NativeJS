
import { StudentType } from '../02/02';
import { GovernmentBuildingType, HouseType } from '../02/02_02';

const sum = (a: number, b: number) => {
  return a + b;
};

export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({
    id: new Date().getTime(),
    title: skill,
  });
};

export const makeStudentActive = (s: StudentType) => {
  s.isActive = true;
};

export const doesStudentLiveIn = (s: StudentType, city: string) => {
  return s.address.city.title === city;
}

export function addMoneyToBudget (building: GovernmentBuildingType, money: number) {
  building.budget += money;
}

export const repairHouse = function(house: HouseType) {
  house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
  building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
  building.staffCount += staffCountToHire;
}