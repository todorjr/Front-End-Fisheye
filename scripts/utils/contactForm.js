function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

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