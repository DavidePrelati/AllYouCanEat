document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const name = this.getAttribute("data-name");
    const price = this.getAttribute("data-price");
    const imageSrc = this.closest(".card").querySelector("img").src;

    const product = { name, price, imageSrc };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

  });
});
