const input = document.getElementById("taskinput");
const list = document.getElementById("theList");
const btn = document.getElementById("addBtn");
var leng = 0;
// Create the new task
function newTask() {
  //Check Task Count
  if (leng > 8) {
    btn.addEventListener("click", alert("Enough tasks for today :)"));
  }
  //Check if input is not null
  else if (input.value === "" || input.value === null) {
    btn.addEventListener("click", alert("Task cannot be empty."));
  }
  //if all conditions held
  else {
    var newTask = document.createElement("LI");
    var textnode = document.createTextNode(input.value);
    newTask.appendChild(textnode);
    list.appendChild(newTask);
    leng++;

    // Create Delete button for new tasks

    var deleteBtn = document.createElement("button");
    var cross = document.createTextNode("X");
    deleteBtn.className = "deleteBtn";
    deleteBtn.appendChild(cross);
    newTask.appendChild(deleteBtn);
    delBtn(deleteBtn, leng, newTask); //del btn funcs
    deleteBtn.addEventListener("click", function () {
      newTask.classList.toggle("delete");
      leng--;
    });

    //Create checkboxes
    var checkBox = document.createElement("button");
    var tick = document.createTextNode("");
    checkBox.className = "checkBox";
    checkBox.appendChild(tick);
    newTask.appendChild(checkBox);
    checkBox.addEventListener("click", function () {
      newTask.classList.toggle("done");
      checkBox.classList.toggle("checked");
    });

    //clear the input box
    input.value = "";
  }
}

//functions to add new task
btn.addEventListener("click", newTask, false);

function enter(e) {
  if (e.type === "keypress") {
    if (e.which == 13 || e.keycode == 13) {
      newTask();
    }
  }
}
input.addEventListener("keypress", enter);

//Delete Button Features
function delBtn(button, length, task) {
  button.addEventListener("mouseenter", function () {
    task.style.backgroundColor = "#f56642";
  });
  button.addEventListener("mouseleave", function () {
    task.style.backgroundColor = "white";
  });
}
