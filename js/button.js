document.addEventListener("DOMContentLoaded", function () {
  const openModalButton = document.getElementById("openModalButton");
  const modal = document.getElementById("myModal");
  const closeModalButton = document.getElementsByClassName("close")[0];

  // Открытие модального окна
  openModalButton.addEventListener("click", function () {
    modal.style.display = "block";
  });

  // Закрытие модального окна при клике на крестик
  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Закрытие модального окна при клике вне окна
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
