const todo = document.getElementById('todo');
// Fitur Todo
// 1. Menambahkan
// 2. Mencoret kalau sudah selesai
// 3. Menghapus
function add() {
  // 1. Mengambil nilai dari teksnya
  let newText = document.getElementById('new_text');
  // 2. Tambahkan list baru pada ul
  let newTodo = '<li> <span>' + newText.value + '<span> [x] </span>' + '</span> </li>';
  todo.insertAdjacentHTML('afterbegin', newTodo);
  // 3. Kosongkan fieldnya
  newText.value = '';
}
