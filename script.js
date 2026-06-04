const products = {
  101: { name: "Good Day Biscuit Family Pack", price: 50 },
  102: { name: "Unibic Biscuit", price: 10 },
  103: { name: "Oreo Chocolate Cream Biscuit", price: 120 },
  104: { name: "Milk Bikis", price: 200 },
};

let grandTotal = 0;

// Auto Generate Bill Number
const billNumber = Math.floor(100000 + Math.random() * 900000);
document.getElementById("billNo").innerText = billNumber;

// Date & Time
function updateDateTime() {
  const now = new Date();

  document.getElementById("dateTime").innerText = now.toLocaleString("en-IN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

updateDateTime();
setInterval(updateDateTime, 1000);

function fetchProduct() {
  let id = document.getElementById("pid").value;

  if (products[id]) {
    document.getElementById("pname").value = products[id].name;
    document.getElementById("price").value = products[id].price;
  } else {
    document.getElementById("pname").value = "";
    document.getElementById("price").value = "";
  }
}

function addItem() {
  let pid = document.getElementById("pid").value;
  let pname = document.getElementById("pname").value;
  let price = parseFloat(document.getElementById("price").value);
  let qty = parseInt(document.getElementById("qty").value);

  if (!pid || !pname || isNaN(price) || isNaN(qty)) {
    alert("Enter valid product details");
    return;
  }

  let total = price * qty;
  grandTotal += total;

  let row = document.createElement("tr");

  row.innerHTML = `
        <td>${pid}</td>
        <td class="pname">${pname}</td>
        <td> ${price}</td>
        <td>${qty}</td>
        <td class="amount"> ${total}</td>
      `;

  document.getElementById("billBody").appendChild(row);

  document.getElementById("grandTotal").innerText =
    "Grand Total :  " + grandTotal;

  document.getElementById("total").value = grandTotal;

  clearInputs();
}

function clearInputs() {
  document.getElementById("pid").value = "";
  document.getElementById("pname").value = "";
  document.getElementById("price").value = "";
  document.getElementById("qty").value = "";
}
