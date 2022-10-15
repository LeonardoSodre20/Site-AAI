//Código para abrir o menu principal
const openMenu = () => {
  const listMenu = document.querySelector(".lista-menu");
  const buttonClose = document.querySelector(".button-close");
  const buttonOpen = document.querySelector(".button-open");

  buttonOpen.addEventListener("click", () => {
    listMenu.classList.toggle("activeMenu");
    buttonOpen.classList.add("desactiveButton");
    buttonClose.classList.add("activeButton");
  });

  buttonClose.addEventListener("click", () => {
    listMenu.classList.toggle("activeMenu");
    buttonOpen.classList.remove("desactiveButton");
    buttonClose.classList.remove("activeButton");
  });
};

openMenu();
