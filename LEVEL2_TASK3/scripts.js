document.addEventListener('DOMContentLoaded', function () {
    const newTaskInput = document.getElementById('new-task');
    const addButton = document.getElementById('add-button');
    const pendingList = document.getElementById('pending-list');
    const completedList = document.getElementById('completed-list');

    addButton.addEventListener('click', function () {
        const taskText = newTaskInput.value.trim();
        if (taskText === '') return;

        const taskElement = document.createElement('li');
        taskElement.innerHTML = `
            ${taskText}
            <button class="complete-button">Complete</button>
            <button class="edit-button">Edit</button>
            <button class="delete-button">Delete</button>
        `;

        pendingList.appendChild(taskElement);
        newTaskInput.value = '';

        taskElement.querySelector('.complete-button').addEventListener('click', function () {
            taskElement.classList.toggle('complete');
            if (taskElement.classList.contains('complete')) {
                completedList.appendChild(taskElement);
            } else {
                pendingList.appendChild(taskElement);
            }
        });

        taskElement.querySelector('.edit-button').addEventListener('click', function () {
            const newText = prompt('Edit task:', taskText);
            if (newText !== null) {
                taskElement.firstChild.textContent = newText;
            }
        });

        taskElement.querySelector('.delete-button').addEventListener('click', function () {
            taskElement.remove();
        });
    });
});
