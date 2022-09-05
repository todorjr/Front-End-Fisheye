
function displayModal() {
    const modal = document.getElementById("contact_modal");

	modal.style.display = "block";

    const firstFocusableElement = modal.querySelector("#prenom"); // get first element to be focused inside modal
    const lastFocusableElement = modal.querySelector("#contactButton"); // get last element to be focused inside modal

    console.log('firstFocusableElement', firstFocusableElement)

    document.addEventListener('keydown', function(e) {
        let isTabPressed = e.key === 'Tab';

        if (!isTabPressed) {
            return;
        }

        console.log('tab', document.activeElement)

        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            console.log('trouver le dernier élément')
            if (document.activeElement === firstFocusableElement) {
                e.preventDefault();
                lastFocusableElement.focus(); // add focus for the last focusable element
            }
        } else { // if tab key is pressed
            console.log('trouver le premier élément')

            if (document.activeElement === lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                e.preventDefault();
                firstFocusableElement.focus(); // add focus for the first focusable element
        }
        }
    });

    firstFocusableElement.focus();
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
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
