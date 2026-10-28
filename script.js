let total = 0;
let items = [];

function showMenu() {
    document.getElementById("home").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}

function showOrdering() {
    document.getElementById("menu").classList.add("hidden");
    document.getElementById("ordering").classList.remove("hidden");
}

function addToCart(price) {
    total = total + price;
    items.push(price);

    document.getElementById("total").textContent = total;
}

function showBill() {
    document.getElementById("ordering").classList.add("hidden");
    document.getElementById("bill").classList.remove("hidden");

    let billItems = document.getElementById("billItems");
    billItems.innerHTML = "";

    items.forEach(function(price) {
        let p = document.createElement("p");
        p.textContent = "Food item - ₹" + price;
        billItems.appendChild(p);
    });

    document.getElementById("billTotal").textContent = total;
                  }
