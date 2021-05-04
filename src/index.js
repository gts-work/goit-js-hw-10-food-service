import "./css/styles.css";
import cardItemTpl from "./templates/cards.hbs";
import cards from "./menu.json";

console.log("index.js");

const Theme = {
    LIGHT: "light-theme",
    DARK: "dark-theme",
};

const Aria = {
    LIGHT: "true",
    DARK: "false",
};

const Checked = {
    LIGHT: false,
    DARK: true,
};

const themeStatus = window.localStorage.getItem("theme");

const bodyEl = document.getElementsByTagName("body")[0];
const menuContainer = document.querySelector(".js-menu");

const temeSwithControl = document.querySelector(".theme-switch__control");

const temeSwithToogle = document.querySelector(".theme-switch__toggle");
const temeSwithTrack = document.querySelector(".theme-switch__track");

const itemsMarkup = cardItemTpl({ cards });

if (themeStatus) {
    temeSwithTrack.setAttribute("aria-hidden", Aria[themeStatus]);
    bodyEl.classList.add(Theme[themeStatus]);
    temeSwithToogle.checked = Checked[themeStatus];
}

const track_aria = temeSwithTrack.getAttribute("aria-hidden");
menuContainer.insertAdjacentHTML("beforeEnd", itemsMarkup);
temeSwithControl.addEventListener("click", onClickSwithTeme);

function onClickSwithTeme(e) {
    if (temeSwithToogle.checked) {
        // console.log("TRUE: ", track_aria);
        temeSwithTrack.setAttribute("aria-hidden", Aria.LIGHT);
        bodyEl.classList.remove(Theme.LIGHT);
        bodyEl.classList.add(Theme.DARK);
        window.localStorage.setItem("theme", "DARK");
    } else {
        // console.log("FALSE: ", track_aria);
        temeSwithTrack.setAttribute("aria-hidden", Aria.DARK);
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
        window.localStorage.setItem("theme", "LIGHT");
    }
}
