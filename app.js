    
const inputBox = document.querySelector("#input-box");
const listConteiner = document.getElementById(".list-container");


 function addTask() {

    if (inputBox.value === '') {

        alert("Your Must Write Samething!");

    }
    else{
        const small = document.createElement("small");
        small.innerHTML = inputBox.value;
        listConteiner.appendChild(small);
       const span = document.createElement("span");
       span.innerHTML = "\u00d7";
       small.appendChild(span);
    }
    inputBox.value == "";

}


