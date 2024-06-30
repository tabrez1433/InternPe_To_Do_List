const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

// Add event listener to the input box to call the addTask function when Enter key is pressed
function addTask() {
    
    // Get the input value and remove any leading or trailing whitespaces
    const task = inputBox.value.trim();
    if (task === '') {
        alert('Please enter a task');
        return;
    }

    // Create list item element and append to list container
    const li = document.createElement('li');
    li.textContent = task;
    listContainer.appendChild(li);

    // Add delete symbol
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);

    // Clear the input box and focus back to it after adding a task
    inputBox.value = '';
    inputBox.focus();
    saveData()
}

// Add functionality to check/uncheck task
// Add event listener to delete task when the span is clicked
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
        saveData()
    } else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData()
    }
}, false);


function copyright() {
    document.querySelector('.footer').innerHTML = `tabrez &copy; ${new Date().getFullYear()}`;
}
document.addEventListener('DOMContentLoaded', copyright);

// Save data to local storage when a task is added, checked, or deleted
function saveData(){
    localStorage.setItem('data', listContainer.innerHTML);
}

// Call the saveData function when the page is loaded or when the input box loses focus
function getData(){
    const tasks = localStorage.getItem('data');
    if(tasks){
        listContainer.innerHTML = tasks;
    }
}
getData();