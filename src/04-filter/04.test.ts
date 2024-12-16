
test("should take men older then 90", () => {
  const ages = [18, 20, 22, 1, 100, 90, 14];

  const oldAges = ages.filter((age) => age > 90);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);
});

test("should take courses chipper 160", () => {
  const courses = [
    { title: "CSS", price: 110 },
    { title: "JS", price: 200 },
    { title: "REACT", price: 150 },
  ];

  const cheapPredicate = (course: CourseType) => {
    return course.price < 160;
  };

  const cheapCourses = courses.filter(cheapPredicate);

  expect(cheapCourses.length).toBe(2);
  expect(cheapCourses[0].title).toBe("CSS");
  expect(cheapCourses[1].title).toBe("REACT");
});

test("get only completed tasks", () => {
  const tasks = [
    { id: 1, title: "Bread", isDone: false },
    { id: 2, title: "Milk", isDone: true },
    { id: 3, title: "Solt", isDone: false },
    { id: 4, title: "Shugar", isDone: true },
  ];

  const completedTasks = tasks.filter((tasks) => tasks.isDone);

  expect(completedTasks.length).toBe(2);
  expect(completedTasks[0].title).toBe("Milk");
  expect(completedTasks[1].title).toBe("Shugar");
});

