document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript file loaded");

    document.getElementById("home-btn").addEventListener("click", function() {
        window.location.href = "index.html";
    });

    document.getElementById("single-packages-btn").addEventListener("click", function() {
        window.location.href = "single-packages.html";
    });

    document.getElementById("combined-packages-btn").addEventListener("click", function() {
        window.location.href = "combined-packages.html";
    });

    document.getElementById("cart-btn").addEventListener("click", function() {
        window.location.href = "cart.html";
    });
});
