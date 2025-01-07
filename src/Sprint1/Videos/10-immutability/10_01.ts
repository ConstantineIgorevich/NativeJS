import { title } from 'process';

export type UserType = {
  name: string;
  hair: number
  address: {city: string, house?: number}
}

export type LaptopType = {
  title: string
}

export type UserWithLaptopType = UserType & {
  laptop: LaptopType
}

export type UserWithBooksType = UserType & {
  books: Array<string>
}

export type WithCompaniesType = {
  companies: Array<{id: number, title: string}>
}

export function makeHairStyle(u: UserType, power: number) {
  const copy = {
    ...u,
    hair: u.hair / power
  }
  // copy.hair /= power;
  return copy;
}

export function moveUser(u: UserWithLaptopType, city: string ) {
  const copy = {
    ...u,
    address: {...u.address, city: city}
  }

  return copy;
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number ) {
  const copy = {
    ...u,
    address: {...u.address, house: house}
  }

  return copy;
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string ) {
  
  return {...u, laptop: {...u.laptop, title: laptop}};
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[] ) {
  
  return {...u, books: [...u.books, ...newBooks]};
}

export function updateBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string, newBook: string ) {
  
  return {...u, books: u.books.map(b => b === oldBook ? newBook : b)};
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, oldBook: string) {
  
  return {...u, books: u.books.filter(b => b !== oldBook)};
}

export function updateCompanyTitle(u: WithCompaniesType, id: number, title: string) {
  
  return {...u, companies: u.companies.map(c => c.id === id ? {...c, title: title} : c)};
}
export function updateCompanyTitle2(companies: any, 
                                    userName: string, 
                                    companyId: number, 
                                    newTitle: string) {
  
  return {...companies, [userName]: companies[userName].map((c: { id: number; }) => c.id === companyId ? {...c, title: newTitle} : c)};
}