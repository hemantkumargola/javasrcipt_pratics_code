let input = document.getElementById("inputbox");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener("click", (e) => {
        let btnValue = e.target.innerHTML;

        if (btnValue === "=") {
            try {
                string = eval(string); // evaluate the expression
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        } else if (btnValue === "Ac") {
            string = "";
            input.value = string;
        } else if (btnValue === "DEL") {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } else {
            string += btnValue;
            input.value = string;
        }
    });
});