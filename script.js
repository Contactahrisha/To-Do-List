function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();

  if (taskText === '') return;

  const list = document.getElementById('taskList');

  const li = document.createElement('li');

  const taskSpan = document.createElement('span');
  taskSpan.className = 'task-text';
  taskSpan.textContent = taskText;

  const actions = document.createElement('div');
  actions.className = 'actions';

  const editBtn = document.createElement('button');
  editBtn.innerHTML = '✏️';
  editBtn.onclick = () => editTask(taskSpan);

  const deleteBtn = document.createElement('button');
  deleteBtn.innerHTML = '🗑️';
  deleteBtn.onclick = () => li.remove();

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(taskSpan);
  li.appendChild(actions);

  list.appendChild(li);
  input.value = '';
}

function editTask(taskSpan) {
  const currentText = taskSpan.textContent;
  const input = document.createElement('input');
  input.type = 'text';
  input.value = currentText;
  input.className = 'edit-input';
  taskSpan.replaceWith(input);
  input.focus();

  input.addEventListener('blur', () => {
    if (input.value.trim() !== '') {
      taskSpan.textContent = input.value.trim();
    }
    input.replaceWith(taskSpan);
  });

  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      input.blur();
    }
  });
}
