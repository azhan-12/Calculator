let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnValue = e.target.innerHTML;
        
        if (btnValue == '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
            }
        } 
        else if (btnValue == 'AC') {
            string = "";
            input.value = string;
        } 
        else if (btnValue == 'DEL') {
            string = string.substring(0, string.length - 1);
            input.value = string;
        } 
        else if (btnValue == '%') {
            // Check if string ends with a number
            if (string !== "" && !isNaN(string.slice(-1))) {
                // Convert the last number into a percentage
                let match = string.match(/(\d+\.?\d*)$/);
                if (match) {
                    let number = match[0];
                    let percent = parseFloat(number) / 100;
                    string = string.replace(/(\d+\.?\d*)$/, percent);
                    input.value = string;
                }
            }
        }
        else {
            // If operator is clicked, check rules
            if (['+', '-', '*', '/'].includes(btnValue)) {
                if (string === "" || isNaN(string.slice(-1))) {
                    return; // Don't allow operator first or after another operator
                }
            }
            string += btnValue;
            input.value = string;
        }
    });
});
