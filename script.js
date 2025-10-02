// 要素を取得
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// タスク追加ボタンのクリック処理
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  // 新しい<li>要素を作る
  const li = document.createElement('li');
  li.textContent = taskText;

  // 削除ボタンを作成
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '消去';
  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  // 入力欄を空にする
  taskInput.value = '';
});
