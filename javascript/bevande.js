document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Ottieni i dettagli del prodotto
    const name = this.getAttribute("data-name");
    const price = this.getAttribute("data-price");
    const imageSrc = this.closest(".card").querySelector("img").src;

    // Crea un oggetto prodotto
    const product = { name, price, imageSrc };

    // Recupera il carrello dal localStorage (se esiste)
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Aggiungi il nuovo prodotto al carrello
    cart.push(product);

    // Salva il carrello aggiornato nel localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Facoltativo: Notifica l'utente che il prodotto è stato aggiunto
    alert(`Aggiunto al carrello: ${name}`);
  });
});
