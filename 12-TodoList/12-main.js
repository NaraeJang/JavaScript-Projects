const todoList = JSON.parse(localStorage.getItem("todoList")) || [
  {
    name: "Good for you",
    dueDate: "2022-12-11",
  },
];

generateHTML();

function generateHTML() {
  let inputHTML = "";

  // for (let i = 0; i < todoList.length; i++) {
  //   const todoItem = todoList[i];
  //   const { name, dueDate } = todoItem;
  //   const html = `
  //   <div>${name}</div>
  //   <div>${dueDate}</div>
  //   <button onclick="
  //       todoList.splice(${i}, 1);
  //      generateHTML();
  //       // Whenever we update the todo list, save in localStorage.
  //       saveToStorage();
  //     " class="delete-todo-button">Delete</button> `;
  //   inputHTML += html;
  // }

  todoList.forEach((value, index) => {
    console.log(value);
    const { name, dueDate } = value;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button js-delete-todo-btn">Delete</button> `;
    inputHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = inputHTML;

  document
    .querySelectorAll(".js-delete-todo-btn")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        generateHTML();
        // Whenever we update the todo list, save in localStorage.
        saveToStorage();
      });
    });

  //   .addEventListener("click", ()=> {
  //     todoList.splice(${index}, 1);
  //        generateHTML();
  //         saveToStorage();
  //   });
}

function addTodo() {
  let todoName = document.querySelector(".js-name-input");
  let todoDate = document.querySelector(".js-due-date-input");
  const name = todoName.value;
  const dueDate = todoDate.value;

  todoList.push({
    name,
    dueDate,
  });

  console.log(todoList);
  todoName.value = "";

  generateHTML();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

document.querySelector(".js-add-todo-btn").addEventListener("click", addTodo);
