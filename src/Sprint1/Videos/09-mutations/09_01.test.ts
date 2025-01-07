import { title } from 'process';

type UserType = {
  name: string;
  age: number;
  address: {
    title: string
  }
};

function increaseAge(u: UserType) {
  u.age++;
}

test("reference type test", () => {
  const user: UserType = {
    name: "Dimych",
    age: 32,
    address: {
      title: 'Minsk'
    }
  };

  increaseAge(user);

  expect(user.age).toBe(33);

  const superman = user;

  superman.age = 1000;

  expect(user.age).toBe(1000);
});

test("array reference test", () => {
  const users = [
    {
      name: "Dimych",
      age: 32,
    },
    {
      name: "Dimych",
      age: 32,
    },
  ];

  const admins = users;

  admins.push({name: 'Bandyugan', age: 10});

  expect(users[2]).toEqual({name: 'Bandyugan', age: 10});
});

test("value type test", () => {
  const usersCount = 100;

  let adminsCount = usersCount;

  adminsCount = adminsCount + 1;

});

test("nested objects test", () => {

  const address = {title: 'Minsk'};

  const user: UserType = {
    name: "Dimych",
    age: 32,
    address: address
  };

  // let addr = user.address;

  const user2: UserType = {
    name: 'Natasha',
    age: 30,
    address: address
  }

  user2.address.title = 'Minsk City';

  expect(user.address).toBe(user2.address);
  expect(user.address.title).toBe('Minsk City');
});

test("nested arrays test", () => {

  const address = {title: 'Minsk'};

  const user: UserType = {
    name: "Dimych",
    age: 32,
    address: address
  };

  const user2: UserType = {
    name: 'Natasha',
    age: 30,
    address: address
  };

  const users = [user, user2, {name: 'Misha', age: 4, address: address}];

  const admins = [user, user2];

  admins[0].name = 'Dmitry';

  expect(users[0].name).toBe('Dmitry');
  expect(user.name).toBe('Dmitry');
});

test("sort array test", () => {

  const letters = ['c', 'd', 'a', 'z', 'e'];

  letters.sort();

  expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
});


