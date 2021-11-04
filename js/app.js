const inputTodo = document.getElementById("input");
const addTodo = document.getElementById("plus");
const itemsLeft = document.getElementById("itemsLeft");
const deleteTodo = document.getElementById("delete");
const todoList = document.getElementById("TodoContainer");
const main = document.querySelector("main");
const messageContainer = document.querySelector(".messageContainer");

let todoLi = todoList.getElementsByClassName("todo");
let todoData = [];
let errorShown = false;
const mode =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

document.documentElement.classList = mode ? "dark" : "light";

let id = 0;

addTodo.onclick = () => {
  let text = inputTodo.value;
  inputTodo.value = "";
  if (text == "" && errorShown == false) {
    messageContainer.appendChild(
      createErrorMessage("Input field can't be empty!")
    );
    errorShown = true;
  }
  
  if (!(text == "")) {
    todoList.appendChild(createTodo(text));
    let todoObj = {
      id: id,
      text: text,
      isDone: false,
    };
    for (let index = 0; index < todoLi.length; index++) {
      const element = todoLi[index];
      const radioBtn = element.querySelector(".todoRadio");
      const checkmark = radioBtn.querySelector("#checkmark");

      radioBtn.addEventListener("click", () => {
        if (todoObj.isDone) {
          todoObj.isDone = false;

          checkmark.setAttribute("style", "display: none"); //differenet way for this

          const h1 = element.querySelector("h1");
          h1.classList.remove("crossed");
          console.log(todoObj.isDone);
        } else {
          todoObj.isDone = true;

          checkmark.setAttribute("style", "display: flex");

          const h1 = element.querySelector("h1");
          h1.classList.add("crossed");
          console.log(todoObj.isDone);
        }
      });
    }
    todoData.push(todoObj);
    id++;
  }
};

inputTodo.addEventListener("input", () => {
  let text = inputTodo.value;
  if (text == "" && errorShown == false) {
    messageContainer.appendChild(
      createErrorMessage("Input field can't be empty!")
    );
    errorShown = true;
  } else {
    errorShown = false;
    messageContainer.removeChild(messageContainer.firstChild);
  }
});

inputTodo.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const text = inputTodo.value;
    inputTodo.value = "";
    todoList.appendChild(createTodo(text));

    if (!(text == "")) {
      let todoObj = {
        id: id,
        text: text,
        done: false,
      };
      for (let index = 0; index < todoLi.length; index++) {
        const element = todoLi[index];
        const radioBtn = element.querySelector(".todoRadio");
        const checkmark = radioBtn.querySelector("#checkmark");

        radioBtn.addEventListener("click", () => {
          if (todoObj.done) {
            todoObj.done = false;

            checkmark.setAttribute("style", "display: none"); //differenet way for this

            const h1 = element.querySelector("h1");
            h1.classList.remove("crossed");
            console.log(todoObj.done);
          } else {
            todoObj.done = true;

            checkmark.setAttribute("style", "display: flex");

            const h1 = element.querySelector("h1");
            h1.classList.add("crossed");
            console.log(todoObj.done);
          }
        });
      }
      todoData.push(todoObj);
      id++;
    }
  }
});

deleteTodo.onclick = () => {
  console.log("delete mode");
};

const createTodo = (text) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const h1 = document.createElement("h1");
  const path1 = document.createElementNS("http://www.w3.org/2000/svg", "path");

  svg.setAttribute("width", "32px");
  svg.setAttribute("height", "32px");
  svg.setAttribute("viewBox", "0 0 32 32");
  svg.setAttribute("fill", "none");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("class", "todoRadio");
  path.setAttribute(
    "d",
    `M16 2.66667C8.64001 2.66667 2.66667 8.64 2.66667 16C2.66667 
    23.36 8.64001 29.3333 16 29.3333C23.36 29.3333 29.3333 23.36 29.3333 16C29.3333 8.64 
    23.36 2.66667 16 2.66667ZM16 26.6667C10.1067 26.6667 5.33334 21.8933 5.33334 16C5.33334
    10.1067 10.1067 5.33333 16 5.33333C21.8933 5.33333 26.6667 10.1067 26.6667 16C26.6667
    21.8933 21.8933 26.6667 16 26.6667Z`
  );
  path.setAttribute("fill", "#4E6DB2");
  path1.setAttribute(
    "d",
    `M14 21.42L9 16.42L10.41 15.01L14 18.59L21.59 11L23 12.42L14 21.42Z`
  );
  path1.setAttribute("fill", "#4E6DB2");
  path1.setAttribute("id", "checkmark");
  path1.style.display = "none";
  h1.textContent = text;
  h1.style.fontSize = "18px";
  h1.style.overflow = "hidden"; // better way for this

  svg.appendChild(path);
  svg.appendChild(path1);
  button.appendChild(svg);
  button.classList = "todoButton";
  button.setAttribute("name", "todoButton");
  li.appendChild(button);
  if (text != "") {
    li.appendChild(h1);
  }
  li.classList = "todo";

  return li;
};

const createCheckmarkPath = () => {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    `M14 21.42L9 16.42L10.41 15.01L14 18.59L21.59 11L23 12.42L14 21.42Z`
  );
  path.setAttribute("fill", "#4E6DB2");
  path.setAttribute("id", "path");
  return path;
};

const createErrorMessage = (text) => {
  const message = document.createElement("div");
  message.classList = "todo";
  message.id - "message";
  message.style.height = "50px";
  const h1 = document.createElement("h1");
  h1.style.fontSize = "18px";
  h1.textContent = text;
  h1.style.paddingLeft = "10px";
  const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  icon.setAttribute("width", "32px");
  icon.setAttribute("height", "32px");
  icon.setAttribute("viewBox", "0 0 32 32");
  icon.setAttribute("fill", "none");
  icon.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  icon.setAttribute("class", "todoRadio");
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute(
    "d",
    `M16 2.66667C8.64002 2.66667 2.66669 8.64001 2.66669 16C2.66669 
      23.36 8.64002 29.3333 16 29.3333C23.36 29.3333 29.3334 23.36 29.3334 16C29.3334 8.64001 
      23.36 2.66667 16 2.66667ZM17.3334 22.6667H14.6667V20H17.3334V22.6667ZM17.3334 
      17.3333H14.6667V9.33334H17.3334V17.3333Z`
  );
  path.setAttribute("fill", "#E44545");

  icon.appendChild(path);
  message.appendChild(icon);
  message.appendChild(h1);
  return message;
};
