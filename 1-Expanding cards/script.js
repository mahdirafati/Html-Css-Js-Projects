//Variables
const panels = document.querySelectorAll('.panel');

//EventListeners
eventListeners();
function eventListeners(){
    //add listener on every panel element
    panels.forEach(element => {
        element.addEventListener('click', activePicture)
    })
}
//Functions

//To add active class for clicked element
function activePicture(){
    //remove .active from others
    removeActive();
    //add .active class
    this.classList.add('active');
}
//To remove active class from last element
function removeActive(){
    panels.forEach(element =>{
        if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    })
}