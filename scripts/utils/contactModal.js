export default function contactModal () {
    return (
         `<div class="modal" role="dialog"
        aria-modal="true">
                  <header role="contact">
            <h2 tabindex="0" class="modal-title" aria-labelledby="modalTitle">Contactez-moi</h2>
          </header>
                  <form id="form" >
                      <div role="form">
                          <label for="prenom" tabindex="0">Prénom</label>
                          <input tabindex="0" type="text" id="prenom" autocomplete="name" aria-required="true" required placeholder="Prénom" />
              <label tabindex="0">Nom</label>
                          <input tabindex="0" type="text" id="nom" autocomplete="name" aria-required="true" required placeholder="Nom"/> 
              <label tabindex="0">Email</label>
                          <input tabindex="0" type="text" id="email" autocomplete="email" aria-required="true" required placeholder="Email"/>
              <label tabindex="0" for="textarea">Votre message</label>
              <textarea tabindex="0" name="Votre message" id="textarea"  autocomplete="message" aria-required="true" placeholder="Votre message" required rows=10 style="width:100%;"></textarea>
                      </div>
            <button id="contactButton" class="contact_button" role="button" aria-label="Envoyer message a photographer" >Envoyer</button>
            <img tabindex="0" src="assets/icons/close.svg"  alt="Close" title="Close" class="closeButton"/>
                  </form>
              </div>`
    )
}


