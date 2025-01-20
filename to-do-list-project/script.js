const input = document.querySelector(".input-form");
const form = document.querySelector("form");
const ul = document.querySelector(".to-do-list");
const spanAmount = document.querySelector('.to-do-amount')

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

const createList = (task) => {

    const idItem = uid();
    
    const newLi = document.createElement('li');
    newLi.classList.add('to-do-items');
    newLi.id = idItem;
    
    const divToDoCheck = document.createElement('div');
    divToDoCheck.classList.add('to-do-check');
    
    const inputCheckItem = document.createElement('input');
    inputCheckItem.classList.add('check-item');
    inputCheckItem.type = "checkbox";
    inputCheckItem.onclick = () => taskFinish(newLi)

    const divToDoTask = document.createElement('div');
    divToDoTask.classList.add('to-do-task');    
    
    const pTaskText = document.createElement('p');
    pTaskText.classList.add('task-text');
    pTaskText.textContent = task
    
    const divToDoTrash = document.createElement('div');
    divToDoTrash.classList.add('to-do-trash');
    divToDoTrash.onclick = () => removeItem(newLi);
    
    const imgIconTrash = document.createElement('img');
    imgIconTrash.classList.add('icon-trash');
    imgIconTrash.src = "./img/Layer-2.png"
    
    divToDoCheck.appendChild(inputCheckItem);
    divToDoTask.appendChild(pTaskText);
    divToDoTrash.appendChild(imgIconTrash);
    
    newLi.appendChild(divToDoCheck);
    newLi.appendChild(divToDoTask);
    newLi.appendChild(divToDoTrash);
    
    ul.appendChild(newLi);
    
}

const getLiAmount = () => {
    const elements = document.querySelectorAll('.to-do-items');
    return elements;
}

const removeItem = (task) => {
    ul.removeChild(task)
    const items = getLiAmount();
    spanAmount.textContent = items.length
}

const taskFinish = (li) => {
    const p = li.querySelector('.task-text');
    const inputCheck = li.querySelector('.check-item');

    if (inputCheck.checked) {
        p.style.textDecoration = "line-through"
        p.style.color = '#808080'
    } else {
        p.style.textDecoration = "none"
        p.style.color = '#F2F2F2'
    }
    
}


form.addEventListener("submit", event => {
    event.preventDefault();
    
    const taskValue = event.target.task.value;
    
    
    createList(taskValue);

    event.target.task.value = '';
    const items = getLiAmount();
    spanAmount.textContent = items.length
})
