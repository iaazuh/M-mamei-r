let dropdown=document.getElementById("popup")
let modal=document.getElementById("modal")

function openPopup(){
    dropdown.classList.add("open-popup");
}
function closePopup(){
    dropdown.classList.remove("open-popup");
    modal.classList.remove("open-modal");
}


function openModal(){
    modal.classList.add("open-modal");
}
function closeModal(){
    modal.classList.remove("open-modal");
    dropdown.classList.remove("open-popup");
}