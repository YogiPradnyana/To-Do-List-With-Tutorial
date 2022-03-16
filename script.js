const todo = document.getElementById('todo');
// Fitur Todo
// 1. Menambahkan
// 2. Mencoret kalau sudah selesai
// 3. Menghapus
function add() {
  // 1. Mengambil nilai dari teksnya
  let newText = document.getElementById('new_text');
  // 2. Tambahkan list baru pada ul
  let newTodo = "<li class='ketika-hover'> <span onclick='toggle(this)'>" + newText.value + '</span>' + "<span onclick='removeBtn(this)'> [x] </span>" + ' </li>';
  todo.insertAdjacentHTML('afterbegin', newTodo);
  // 3. Kosongkan fieldnya
  newText.value = '';
}

function toggle(el) {
  el.classList.toggle('done');
}

function removeBtn(el) {
  el.parentElement.remove();
}
