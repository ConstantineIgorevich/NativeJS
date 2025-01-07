import { addNewBooksToUser, makeHairStyle, moveUser, moveUserToOtherHouse, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2, upgradeUserLaptop, UserType, UserWithBooksType, UserWithLaptopType, WithCompaniesType } from './10_01';



test("reference type test", () => {
  const user: UserType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk'
    }
  };

  const awesomeUser = makeHairStyle(user, 2);

  expect(user.hair).toBe(32);
  expect(awesomeUser.hair).toBe(16);
  expect(awesomeUser.address).toBe(user.address);

});

test("change address", () => {
  const user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  };

  const movedUser = moveUser(user, 'Kiev');

  expect(user).not.toBe(movedUser);
  expect(user.address).not.toBe(movedUser.address);
  expect(user.laptop).toBe(movedUser.laptop);
  expect(movedUser.address.city).toBe('Kiev');
})

test("upgrade laptop to macbook", () => {
  const user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  };

  const upgradedUser = upgradeUserLaptop(user, 'Macbook');

  expect(user).not.toBe(upgradedUser);
  expect(user.address).toBe(upgradedUser.address);
  expect(user.laptop).not.toBe(upgradedUser.laptop);
  expect(upgradedUser.laptop.title).toBe('Macbook');
  expect(user.laptop.title).toBe('Zenbook');
})

test("change house", () => {
  const user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'html', 'js', 'react']
  };

  const userCopy = moveUserToOtherHouse(user, 99);

  expect(user).not.toBe(userCopy);
  expect(user.books).toBe(userCopy.books);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).not.toBe(userCopy.address);
  expect(userCopy.address.house).toBe(99);
})

test("add new books to user", () => {
  const user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'html', 'js', 'react']
  };

  const userCopy = addNewBooksToUser(user, ['ts', 'rest api']);

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[4]).toBe('ts');
  expect(userCopy.books[5]).toBe('rest api');
})

test("update js to ts", () => {
  const user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'html', 'js', 'react']
  };

  const userCopy = updateBook(user, 'js', 'ts');

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe('ts');
})

test("remove js", () => {
  const user: UserWithLaptopType & UserWithBooksType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    books: ['css', 'html', 'js', 'react']
  };

  const userCopy = removeBook(user, 'js');

  expect(user).not.toBe(userCopy);
  expect(user.laptop).toBe(userCopy.laptop);
  expect(user.address).toBe(userCopy.address);
  expect(user.books).not.toBe(userCopy.books);
  expect(userCopy.books[2]).toBe('react');
})

test("update company", () => {
  const user: UserWithLaptopType & WithCompaniesType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    },
    companies: [
      {id: 1, title: 'Епам'},
      {id: 2, title: 'IT-INCUBATOR'},
    ]   
  };

  const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

  expect(user).not.toBe(userCopy);
  expect(user.address).toBe(userCopy.address);
  expect(user.companies).not.toBe(userCopy.companies);
  expect(userCopy.companies[0].title).toBe('EPAM');
})

test("update company2", () => {
  const user: UserWithLaptopType = {
    name: "Dimych",
    hair: 32,
    address: {
      city: 'Minsk',
      house: 12
    },
    laptop: {
      title: 'Zenbook'
    }
  };

  const companies = {
    'Dimych': [{id: 1, title: 'Епам'},{id: 2, title: 'IT-INCUBATOR'}],
    'Artem': [{id: 2, title: 'IT-INCUBATOR'}]
  }

  const copy = updateCompanyTitle2(companies, 'Dimych', 1, 'EPAM');

  expect(copy['Dimych']).not.toBe(companies['Dimych']);
  expect(copy['Artem']).toBe(companies['Artem']);
  expect(copy['Dimych'][0].title).toBe('EPAM');
})