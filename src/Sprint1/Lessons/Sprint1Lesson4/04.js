const user = {
  name: "Bob",
  age: 32,
  "user name": "Alex",
  "12years": true,
};

function getObject(key, value) {
  return { [key]: value };
}

console.log(getObject("name", "Akhmed"));

const todolistId_1 = crypto.randomUUID();
const todolistId_2 = crypto.randomUUID();

const todolists = [
  {
    id: todolistId_1,
    title: "What to learn",
  },
  {
    id: todolistId_2,
    title: "What to buy",
  },
];

const tasks = {
  [todolistId_1]: [
    { id: 11, todolistId: 1, title: "hsghdh" },
    { id: 12, todolistId: 1, title: "dfhdfh" },
    { id: 13, todolistId: 1, title: "fghdfhdf" },
  ],
  [todolistId_2]: [
    { id: 31, todolistId: 3, title: "dfhdfhdf" },
    { id: 32, todolistId: 3, title: "dfhdfhdfh" },
    { id: 33, todolistId: 3, title: "dghdfhhdf" },
  ],
};

const map = new Map();
map.set(true, {name: "vasia"})
