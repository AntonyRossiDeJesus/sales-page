document.addEventListener("DOMContentLoaded", () => {
  const acordeaoItems = document.querySelectorAll(".item-acordeao");

  acordeaoItems.forEach((item) => {
    const header = item.querySelector(".cabecalho-item");

    header.addEventListener("click", () => {
      const isOpen = item.classList.contains("aberto");

      acordeaoItems.forEach((el) => el.classList.remove("aberto"));

      if (!isOpen) {
        item.classList.add("aberto");
      }
    });
  });
});
