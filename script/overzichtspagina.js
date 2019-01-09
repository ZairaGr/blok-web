///*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
//
///*eslint-env browser*/
//
///*eslint 'no-console': 0*/

//like en unlike een verhaal
var likebutton;

likebutton = document.querySelectorAll('.like');

for (var i = 0; i < likebutton.length; i++) {
    likebutton[i].addEventListener("click", function changeLikebutton() {
        this.classList.toggle('liked');
    });
}


// Download icoon
var downloadIcoon = document.querySelectorAll('.download');

var popUp = document.querySelector('.popup');

function toggleDownload() {
    popUp.classList.toggle('popup-clicked');
}


for (i = 0; i < downloadIcoon.length; i++) {
    downloadIcoon[i].addEventListener("click", function toggleDownload() {
        this.classList.toggle('downloaded');
    });
}

for (i = 0; i < downloadIcoon.length; i++) {
    downloadIcoon[i].addEventListener('click', toggleDownload);
}

// Popup wordt weggehaald
function removePopup() {
    popUp.classList.remove('popup-clicked');
}
popUp.addEventListener('click', removePopup);



//loading state


