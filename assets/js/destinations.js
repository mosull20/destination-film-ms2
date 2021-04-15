// function to toggle font awesome arrow up or down on click
// assisted by Stack overflow 
function arrowSwitch(event) {
    this.classList.toggle("fa-angle-double-up")
}

let arrow = document.getElementById('arrow');
arrow.addEventListener('click', arrowSwitch);