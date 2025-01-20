import { List } from './createList.js'

const form = document.querySelector("form");
const spanAmount = document.querySelector('.to-do-amount');
const spanTasksDone = document.querySelector('.to-do-amount-done')

form.addEventListener("submit", event => {
    event.preventDefault();
    
    const taskValue = event.target.task.value;
    
    
    List.createList(taskValue);

    event.target.task.value = '';
    const items = List.getLiAmount();
    
    spanAmount.textContent = items.length
})
