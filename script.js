let code = "";
let key = "312";

//button clicked function
function press(val) {
    code += `${val}`;
    for (let i = 0; i < code.length; i++) {
        if (code[i] != key[i]) {
            code = `${val}`;
            break;
        }
    }
    door(code == key);
}

function door(open) {
    let a = document.querySelector("#closed");
    let buttons = document.querySelectorAll("button");
    if (open) {
        a.src = "dooropened.png";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = '#7F7';
        }
        setTimeout(()=>{door(false)}, 5 * 1000);
    } else {
        a.src = "doorclosed.png";
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].style.backgroundColor = '';
        }
    }
}