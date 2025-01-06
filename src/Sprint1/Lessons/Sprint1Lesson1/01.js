// данные => делаем копию => вносим изменения в копию => используем копию с изменениями

// как сделать копию массива или объекта

// ссылочный тип данных -> ???

// литерал это набор команд ...

// array, object, function

const bob = {
    name: "Bob",
    age: 32
};

const oldschoolCopy = {};
oldschoolCopy.name = bob.name;
oldschoolCopy.age = bob.age;

const variable = {};

// 1. способ сделать копию объекта цикл for in
for (const key in bob) {
    variable[key] = bob[key]
};

// 2. способ spread оператор
const newObj = {...bob};

const names = ["Alex", "Bob", "Donald"];

// 
const users = [
    {
      id: 1,
      name: 'Bob',
      isStudent: true,
    },
    {
      id: 2,
      name: 'Alex',
      isStudent: true,
    },
    {
      id: 3,
      name: 'Ann',
      isStudent: true,
    },
    {
      id: 4,
      name: 'Donald',
      isStudent: true,
    },
  ]

  // surface 

  const surfaceCopyOfUsers = [...users]; // no deep

  const fullCopyOfUsers = structuredClone(users); // почитать !!!