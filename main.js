let buttons = document.querySelectorAll(".numeric-buttons,.operator-buttons");
let display_screen = document.getElementById("display-screen");
let clear_button = document.getElementById("clear-button");
let equals_button = document.getElementById("equals-to");
let result_displayed = false;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (result_displayed == true) {
            display_screen.innerText = "";
            result_displayed = false;
            display_screen.innerText += button.innerText;
        }
        else {
            display_screen.innerText += button.innerText;
        }
    })
});

equals_button.addEventListener("click", () => {
    let result = eval(display_screen.innerText);
    result_displayed = true;
    display_screen.innerText = result;
});

clear_button.addEventListener("click", () => {
    display_screen.innerText = "0";
});