const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");


for(let i = 0 ;i < buttons.length; i++){
    buttons[i].addEventListener("click", () =>{
       
    if(buttons[i].textContent === "="){
        screen.value = eval(screen.value);
    }
    else 
    if(buttons[i].textContent ==="AC"){
        screen.value = "";
    }
    else
    if(buttons[i].textContent ==="DEL"){
        screen.value = screen.value.slice(0, -1);
    }
    else{
        screen.value = screen.value + buttons[i].textContent;
    }
});
}
