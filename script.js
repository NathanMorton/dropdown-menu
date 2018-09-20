(
    () => {
      const nav = document.querySelector("nav");
      const burger = document.querySelector("#burger");
      const menu = document.querySelector("#menu");
      const logo = document.querySelector("#logo");
      burger.onclick = () => {
        nav.classList.toggle("open");
        burger.classList.toggle("open");
        menu.classList.toggle("open");  
        logo.classList.toggle("open");
      }
    }
)();