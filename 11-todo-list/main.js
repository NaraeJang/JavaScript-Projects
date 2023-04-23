const todoOne = [];

function updateTodoOne() {
  const todoOneValue = document.querySelector(".todoOneInput");
  todoOne.push(todoOneValue.value);

  console.log(todoOne);

  for (let i = 0; i < todoOne.length; i++) {
    const todoOneFinalValue = todoOne[i];
  }

  todoOneValue.value = "";
}
