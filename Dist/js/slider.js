function sliderPage(pageId) {
  const pages = ["Logo", "Apparel", "Poster", "Packaging", "Vector", "New"];

  pages.forEach(page => {
    document.getElementById(page).style.display = page === pageId ? "block" : "none";
  });
}

// Event listeners untuk navigasi
["Logo", "Apparel", "Poster", "Packaging", "Vector", "New"].forEach(page => {
  document.getElementById(page + "Btn").addEventListener("click", () => sliderPage(page));
});


function setActiveButton(button) {
  // Menghapus kelas 'active' dari semua tombol
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => btn.classList.remove('nyala'));

  // Menambahkan kelas 'active' pada tombol yang ditekan
  button.classList.add('nyala');
}
window.onload = function () {
  const defaultButton = document.getElementById('NewBtn');
  setActiveButton(defaultButton);
};