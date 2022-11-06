const students = new Map([
  ["Ида", 37],
  ["Лена", 46],
  ["Артур", 70],
  ["Платон", 88]
])
students.forEach((value, key) => {
  let mark;
  if (value < 60) {
    mark = "Незачет";
  } else if (value < 70) {
    mark = 3;
  } else if (value < 90) {
    mark = 4;
  } else {
    mark = 5;
  }
  console.log(`Студент: ${key} | оценка: ${mark}`);
})