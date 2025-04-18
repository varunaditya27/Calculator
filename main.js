let buttons = document.querySelectorAll(".numeric-buttons,.operator-buttons");
let display_screen = document.getElementById("display-screen");
let clear_button = document.getElementById("clear-button");
let equals_button = document.getElementById("equals-to");
let result_displayed = false;
let clear_screen = true;
let backspace_button = document.getElementById("backspace-button")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (result_displayed == true) {
            display_screen.innerText = "";
            result_displayed = false;
            display_screen.innerText += button.innerText;
        }
        else {
            if (clear_screen) {
                display_screen.innerText = "";
                display_screen.innerText += button.innerText;
                clear_screen = false;
            }
            else {
                display_screen.innerText += button.innerText;
            }
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

backspace_button.addEventListener("click", () => {
    if (!clear_screen) {
        if (display_screen.innerText.length == 1) {
            display_screen.innerText = "0";
            clear_screen = true;
        }
        else {
            display_screen.innerText = display_screen.innerText.slice(0, -1); 
        }
    }
});