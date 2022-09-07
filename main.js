
window.addEventListener('load', () => {
    const form = document.querySelector('#new-task-form');
    const inputClass = document.querySelector('#class-input');
    const inputAssignment = document.querySelector('#assignment-input');
    const inputDate = document.querySelector('#date-input');
    const list_el = document.querySelector('#tasks');
    
    

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskClass = inputClass.value;
        const taskAssignment = inputAssignment.value;
        const taskDate = inputDate.value;
        
        if(!taskClass){
            alert('Please fill out task');
            return;
        }

        addTask(taskClass, taskAssignment, taskDate, list_el);

    })
})

window.addEventListener('close', () => {
    localStorage.setItem("savedToDo", );
});
function addTask(taskClass, taskAssignment, taskDate, list_el){
    const newTask = document.createElement("div");
    newTask.classList.add("task");
    
    const taskContent = document.createElement("div");
    taskContent.classList.add("content");
    taskContent.style.display = "flex";

    
    const taskClassName = document.createElement('input');
    taskClassName.classList.add("text");
    taskClassName.type = "type";
    taskClassName.value = taskClass;
    taskClassName.setAttribute("readonly", "readonly");

    const taskAssignmentName = document.createElement('input');
    taskAssignmentName.classList.add("text");
    taskAssignmentName.type = "type";
    taskAssignmentName.value = taskAssignment;
    taskAssignmentName.setAttribute("readonly", "readonly");

    const taskDueDate = document.createElement('input');
    taskDueDate.classList.add("text");
    taskDueDate.type = "type";
    taskDueDate.value = taskDate;
    taskDueDate.setAttribute("readonly", "readonly");

    const taskActions = document.createElement("div");
    taskActions.classList.add("actions");
    taskActions.style.display = "flex";

    const editButton = document.createElement('button');
    editButton.type = "type";
    editButton.classList.add("edit");
    editButton.textContent = "EDIT";
    editButton.setAttribute('readonly', 'readonly');

    const delButton = document.createElement('button');
    delButton.classList.add("delete");
    delButton.type = "type";
    delButton.textContent = "DELETE";
    delButton.setAttribute('readonly', 'readonly');
    
    const newID = taskAssignmentName + taskDueDate;


    newTask.appendChild(taskContent);
    newTask.appendChild(taskActions);
    taskContent.appendChild(taskClassName);
    taskContent.appendChild(taskAssignmentName);
    taskContent.appendChild(taskDueDate);
    taskActions.appendChild(editButton);
    taskActions.appendChild(delButton);

    delButton.onclick = function() {
        newTask.remove();
    };

    editButton.onclick = function(){
        for(let child in taskContent.children){
            child.removeAttribute('readonly');
        };
    };
    list_el.appendChild(newTask);
    
    return;
}

