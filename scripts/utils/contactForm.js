// function will open modal
function displayModal() {
    const modal = document.getElementById("contact_modal");

	modal.style.display = "block";

    const firstFocusableElement = modal.querySelector(".modal-title"); // get first element to be focused inside modal
    const lastFocusableElement = modal.querySelector(".closeButton"); // get last element to be focused inside modal

    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab';

        if (!isTabPressed) {
            return;
        }
        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus(); // add focus for the last focusable element
            }
        } else { // if tab key is pressed
            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                e.preventDefault();
                firstFocusableElement.focus(); // add focus for the first focusable element
        }
        }
    });

    firstFocusableElement.focus();
}

// function will close modal
function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

// function will send message when key enter is pressed
function sendMessage() {
    const sendBtn = document.querySelector('.close_button');
    sendBtn.addEventListener()

}

//form data from user
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const prenom = document.getElementById('prenom');
const textarea = document.getElementById('textarea');

const form = document.querySelector('#form');
 
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();
    console.log(
    "Votre nom :\n",nom.value,
    "\nVotre prenom :\n",prenom.value,
    "\nVotre email :\n",email.value,
    "\nVotre message :\n",textarea.value);
    closeModal();

});


// accessibility closing modal when key enter is pressed
document.onkeydown = function(e) {
    let evt = e || window.event; // for more compatibility
    let keyCode = evt.keyCode;
  
    console.log(keyCode + " was pressed");
  
    switch(keyCode) {
        case 13: // left key was pressed
            closeModal();
            e.preventDefault(); // prevents the default behaviour to trigger
            break;
      
    }
  }
