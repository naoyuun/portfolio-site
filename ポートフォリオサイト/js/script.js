/*light dack*/

const root = document.documentElement;
const buttons = document.querySelectorAll("[data-theme-button]");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const theme = button.dataset.themeButton;

        root.dataset.theme = theme;

        localStorage.setItem("theme", theme);
    });
});

// 前回の設定を復元
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    root.dataset.theme = savedTheme;
}

//ハンバーガー
const hamburger = document.querySelector("#hamburger");
const menuNav = document.querySelector(".header__menu");
const navLinks = document.querySelectorAll(".header__menu a");

hamburger.addEventListener("click", () => {
    menuNav.classList.toggle("is-open");

    const isOpen = menuNav.classList.contains("is-open");

    hamburger.setAttribute("aria-expanded", isOpen);
});

navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuNav.classList.remove("is-open");
        hamburger.setAttribute("aria-expanded", "false");
    });
});
