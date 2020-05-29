// smooth scroll

var scroll = new SmoothScroll('[data-scroll]', {
	speed: 500,
	speedAsDuration: true
});

// typing animation

const texts = ["Hi, I'm Bai.", "Junior Developer. I aspire to deliver smart solutions that serve the community."];
const h1 = document.querySelector('.h1-typing'); 
const h2 = document.querySelector('.h2-typing'); 
const button1 = document.querySelector('.view-projects'); 
const button2 = document.querySelector('.view-resume'); 

let count = 0; // 0 - h1, 1 - h2
let index = 0; // index of letters
let currentText = "";
let letter = "";


(function h1type(){
	currentText = texts[count]; // start with 0 aka h1 first

	letter = currentText.slice(0, ++index); 
	h1.textContent = letter; 

	if (letter.length == currentText.length) {
		h1.classList.add('hide-border'); 
		h2.style.display = 'block';
		index = 0; 
		return setTimeout(h2type, 200); 
	}
	setTimeout(h1type, 100); 

})(); // this function is called when page is loaded


function h2type(){
	currentText = texts[1]; 
	letter = currentText.slice(0, ++index); 
	h2.textContent = letter; 

	if(letter.length == currentText.length) {
		return callToAction(); 
	}

	setTimeout(h2type, 50); 

}

function callToAction(){ 
	button1.style.opacity = '1'; 
	button2.style.opacity = '2'; 
	
}

// terminal transition

const aboutTab = document.getElementById('about-tab');
const projectsTab = document.getElementById('projects-tab'); 
const aboutSection = document.querySelector('.terminal-about')
const projectSection = document.querySelector('.terminal-project-gallery'); 

aboutTab.addEventListener('click', function(e) {
	if (!aboutTab.classList.contains('current-tab')){
		aboutTab.classList.add('current-tab'); 
		projectsTab.classList.remove('current-tab'); 
	
		projectSection.classList.add('hide'); 
		aboutSection.classList.remove('hide');
	}
  });


projectsTab.addEventListener('click', function(e) {
	if (!projectsTab.classList.contains('current-tab')) {
		projectsTab.classList.add('current-tab'); 
		aboutTab.classList.remove('current-tab'); 

		aboutSection.classList.add('hide'); 
		projectSection.classList.remove('hide');

	}
  });


// modal 

const projectImg = document.querySelectorAll('.img-wrapper'); 
const modal = document.querySelector('.modal'); 
const body = document.querySelector('body');

projectImg.forEach(image => {
	image.addEventListener('click', function(e) {

	// get parent class: project item
	let projectItem = image.parentElement;
	//console.log(projectItem); 

	// get id of project item, get number at the back
	let projectIndex = 'project-modal-'.concat(projectItem.id.split('-')[2]); 
	//console.log(projectIndex); 

	// get modal by id project-modal-(number)
	let projectModal = document.getElementById(projectIndex);
	//console.log(projectModal.classList); 
	modal.style.display = 'block';
	body.classList.add('modal-open');
	projectModal.classList.remove('hide');  

	})});  
	

// hide modals
const allModals = document.querySelectorAll('.modal-content');

function hideAllModals(){
	allModals.forEach(modal => {
		if(!(modal.classList.contains('hide'))){
			modal.classList.add('hide')}});
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		body.classList.remove('modal-open');
		hideAllModals(); 
	}
}; 

// When the user clicks on red button, close it
const closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', function(e) {
	closeButton.parentElement.parentElement.parentElement.style.display = "none";
	body.classList.remove('modal-open');
	hideAllModals(); 
  });