/*This section hides the project page when it is not clicked on and shows the project when it is clicked on*/
//This is for the First Projecct
let projectOne = document.getElementById('projectTextOne');

function showFirstProject(){
    projectOne.classList.toggle('hide');
}

//This is for the Second Project
let projectTwo = document.getElementById('projectTextTwo');

function showSecondProject(){
    projectTwo.classList.toggle('hide');
}

//This is for Third Project
let projectThree = document.getElementById('projectThree');

function showTheirdProject(){
    projectThree.classList.toggle('hide');
}

//This is for Fourth Project
let projectFour = document.getElementById('projectFour');

function showFourthProject(){
    projectFour.classList.toggle('hide');
}
/*--------*/

/*This section is adding preloader to our page*/
let loader = document.getElementById('preloader');

window.addEventListener('load', function(){
    loader.style.display = 'none';
});
/*-----------*/