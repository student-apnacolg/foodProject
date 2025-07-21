const toogleBtn = document.querySelector('.toggleBtn');
const toogleBtnIcon = document.querySelector('.toggleBtn i');
const dropdownMenu = document.querySelector('.dropdownMenu');

toogleBtn.onclick = () => {
  dropdownMenu.classList.toggle('open');
  const isOpen = dropdownMenu.classList.contains('open');

  toogleBtnIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
}
    AOS.init();
