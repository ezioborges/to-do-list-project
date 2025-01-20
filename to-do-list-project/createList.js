const ul = document.querySelector(".to-do-list");

export const List = {
    createList(task) {
    const idItem = uid();
    
    const newLi = document.createElement('li');
    newLi.classList.add('to-do-items');
    newLi.id = idItem;
    
    const divToDoCheck = document.createElement('div');
    divToDoCheck.classList.add('to-do-check');
    
    const inputCheckItem = document.createElement('input');
    inputCheckItem.classList.add('check-item');
    inputCheckItem.type = "checkbox";
    inputCheckItem.onclick = () => this.taskFinish(newLi);

    const divToDoTask = document.createElement('div');
    divToDoTask.classList.add('to-do-task');    
    
    const pTaskText = document.createElement('p');
    pTaskText.classList.add('task-text');
    pTaskText.textContent = task
    
    const divToDoTrash = document.createElement('div');
    divToDoTrash.classList.add('to-do-trash');
    divToDoTrash.onclick = () => this.removeItem(newLi);
    
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
    },

    getLiAmount() {
        const elements = document.querySelectorAll('.to-do-items');
        return elements;
    },

    getLiAmountDone(){
        
    },
    
    removeItem(task) {
        ul.removeChild(task)
        const items = getLiAmount();
        spanAmount.textContent = items.length
    },
    
    taskFinish(li) {
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
}

const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}