const todoOne = ["make dinner", "wash dishes"];

renderTodoList();

// Generating the HTML
function renderTodoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoOne.length; i++) {
    const todoOneFinalValue = todoOne[i];
    const html = `<p>${todoOneFinalValue}</p>`;

    todoListHTML += html;
    console.log(todoListHTML);
    document.querySelector(".js-container").innerHTML = todoListHTML;
  }
}

// Update TodoList
function updateTodoOne() {
  const todoOneValue = document.querySelector(".todoOneInput");
  todoOne.push(todoOneValue.value);

  console.log(todoOne);

  todoOneValue.value = "";

  renderTodoList();
}
