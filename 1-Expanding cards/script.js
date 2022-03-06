//Variables
const panels = document.querySelectorAll('.panel');

//EventListeners
eventListeners();
function eventListeners(){
    panels.forEach(element => {
        element.addEventListener('click', activePicture)
    })
}
//Functions
function activePicture(){
    //remove .active from others
    removeActive();
    //add .active class
    this.classList.add('active');
}

function removeActive(){
    panels.forEach(element =>{
        if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    })
}