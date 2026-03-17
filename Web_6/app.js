// Elemek kijelölése
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');


function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {

        const li = document.createElement('li');
        li.textContent = taskText;


        li.addEventListener('click', function() {
            this.classList.toggle('completed');
        });

        todoList.appendChild(li);

        taskInput.value = "";
        taskInput.focus();
    } else {
        alert("Kérlek, írj be valamit!");
    }
}


addButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTask();
    }
});