const input = document.getElementById("taskinput");
const list = document.getElementById("theList");
const btn = document.getElementById("addBtn");
var leng = 0;
// Create the new task
function newTask() {
  if (leng > 9) {
    btn.addEventListener("click", alert("Enough tasks for today :)"));
  } else {
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
    });
  }
}

btn.addEventListener("click", newTask, false);

//events
//Check Task Count
