const tasks = [];
const ulElem = document.createElement("ul");
const listDIv = document.getElementsByClassName("listTasks")[0];

formElem = document.getElementById("task_form");
console.log(formElem);

function ShowList(tasks) {
    ulElem.innerHTML = '';
    for (let task of tasks) {
        let liELem = document.createElement("li");

        liELem.style.display = "flex";
        liELem.style.alignItems = "left"

        let xBtn = document.createElement("button");
        xBtn.textContent = "X";
        xBtn.style.fontFamily = "FontAwesome";
        xBtn.style.marginRight = "10px"
        liELem.append(xBtn)

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.style.marginRight = "20px"
        liELem.append(checkbox)

        let liText = document.createTextNode(task)
        liELem.append(liText)
        checkbox.addEventListener("change", () => isChecked(checkbox, liELem))
        xBtn.addEventListener("click", () => delTask(liELem))
        ulElem.appendChild(liELem);
    }
}

function addTask(inputELEm) {
    tasks.push(inputELEm); // add task to js array
    if (ulElem.children.length === 0) {
        listDIv.appendChild(ulElem);
    }
    ShowList(tasks);
}

function isChecked(checkbox, liELem) {
    if (checkbox.checked) {

        liELem.style.textDecoration = "line-through"
    } else {

        liELem.style.textDecoration = "none"
    }
}

formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    let inputELEm = formElem.new_task.value;
    console.log(inputELEm);
    if (inputELEm == "") {
        alert("Must enter a task");
    } else {
        addTask(inputELEm);
        console.log(tasks);
    }
    formElem.reset();
});




function delTask(liELem) {
    const taskText = liELem.childNodes[2].textContent;
    const taskIndex = tasks.indexOf(taskText);

    if (taskIndex !== -1) {
        tasks.splice(taskIndex, 1);
    }

    liELem.parentNode.removeChild(liELem);
    console.log(tasks)
    ShowList(tasks);
}