//Variables
const panels = document.querySelectorAll('.panel');

//EventListeners
eventListeners();
function eventListeners(){
    //add listener on every panel
    panels.forEach(panel => {
        panel.addEventListener('click', activePicture)
    })
}
//Functions

//To add active class for clicked panel
function activePicture(){
    //remove .active from others
    removeActive();
    //add .active class
    this.classList.add('active');
}
//To remove active class from last Expanded panel
function removeActive(){
    panels.forEach(panel =>{
        if(panel.classList.contains('active')){
            panel.classList.remove('active');
        }
    })
}