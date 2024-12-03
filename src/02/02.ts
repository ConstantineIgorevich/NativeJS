type LocalCityType = {
  title: string;
  countryTitle: string;
}

type AdressType = {
  streetTitle: string;
  city: LocalCityType;
}

type TechType = {
  id: number;
  title: string;
}

export type StudentType = {
  id: number;
  name: string;
  age: number;
  isActive: boolean;
  address: AdressType;
  technologies: Array<TechType>;
};

export const student: StudentType = {
  id: 1,
  name: "yo",
  age: 12,
  isActive: true,
  address: {
    streetTitle: "Surganova 2",
    city: {
      title: "Minsk",
      countryTitle: "Belarus",
    },
  },
  technologies: [
    {
      id: 1,
      title: "HTML",
    },
    {
      id: 2,
      title: "CSS",
    },
    {
      id: 3,
      title: "React",
    },
  ],
};
