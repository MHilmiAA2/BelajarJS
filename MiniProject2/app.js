const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const filterInput = document.getElementById("filter-input");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const text = todoInput.value.trim();
    if (text !== '') {
        const li = document.createElement('li');
        li.className = 'todo-list';
        li.innerHTML = `${text} <button class="delete">X</button>`;
        todoList.appendChild(li);
        todoInput.value = '';
    }
});

todoList.addEventListener("click", function(e) {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
});

filterInput.addEventListener("keyup", function() {
    const filterText = filterInput.value.toLowerCase();
    document.querySelectorAll('#todo-list li').forEach(function(item) {
        const itemText = item.firstChild.textContent.toLowerCase();
        if (itemText.includes(filterText)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});
