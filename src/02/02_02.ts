export type GovernmentBuildingType = {
  type: "HOSPITAL" | "FIRE-STATION";
  budget: number;
  staffCount: number;
  address: AdressType;
}

type StreetType = {
  title: string;
}

type AdressType = {
  number?: number;
  street: StreetType;
}

export type HouseType = {
  buildedAt: number;
  repaired: boolean;
  address: AdressType;
};

export type CityType = {
  title: string;
  houses: HouseType[];
  governmentBuildings: Array<GovernmentBuildingType>;
  citizensNumber: number;
};
