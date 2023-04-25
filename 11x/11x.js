const todoList = [];

function generateHTML() {
  let inputHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todoItem = todoList[i];
    inputHTML += `<p>${todoItem}</p>`;
  }

  document.querySelector(".js-todo-list").innerHTML = inputHTML;
}

function addTodo() {
  let todoName = document.querySelector(".js-name-input");
  todoList.push(todoName.value);
  console.log(todoList);
  todoName.value = "";

  generateHTML();
}
