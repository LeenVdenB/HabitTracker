import Sale from "./classes/Sale.js";
import SaleManager from "./classes/SaleManager.js";
import StockItem from "./classes/StockItem.js";
import StockManager from "./classes/StockManager.js";
import SaleGeschiedenisView from "./classes/SaleGeschiedenis.js";

let saleManager = new SaleManager();
saleManager.loadSales();
let stockManager = new StockManager();
stockManager.loadStock();

if (document.querySelector(".voorraadContainer")) {
  let stockBoxes = document.querySelectorAll(".stockbox");
  let hooiItem = stockManager.getStockItem("hooi");
  let stroItem = stockManager.getStockItem("stro");

  stockBoxes[0].textContent = hooiItem ? hooiItem.amount : 0;
  stockBoxes[1].textContent = stroItem ? stroItem.amount : 0;
}

if (document.querySelector("#saveSale")) {
  document.querySelector("#saveSale").addEventListener("click", (e) => {
    e.preventDefault();
    let klant = document.querySelector("#person").value;
    let soldHooi = document.querySelector("#sellHooi").value;
    let soldStro = document.querySelector("#sellStro").value;

    let hooiStock = stockManager.getStockItem("hooi");
    let stroStock = stockManager.getStockItem("stro");
    let priceHooi = hooiStock ? hooiStock.price : 0;
    let priceStro = stroStock ? stroStock.price : 0;

    let sale = new Sale(klant, soldHooi, soldStro, priceHooi, priceStro);
    saleManager.addSale(sale);

    stockManager.reduceStock("hooi", soldHooi);
    stockManager.reduceStock("stro", soldStro);
    window.location.href = "index.html";
  });
}

let saleGeschiedenisView = new SaleGeschiedenisView(
  saleManager,
  "#saleGeschiedenis"
);
saleGeschiedenisView.render();

if (document.querySelector("#save")) {
  document.querySelector("#save").addEventListener("click", (e) => {
    e.preventDefault();
    let stroAmount = document.querySelector("#stroAmount").value;
    let priceStro = document.querySelector("#priceStro").value;
    let hooiAmount = document.querySelector("#hooiAmount").value;
    let priceHooi = document.querySelector("#priceHooi").value;

    let hooiItem = new StockItem("hooi", hooiAmount, priceHooi);
    let stroItem = new StockItem("stro", stroAmount, priceStro);
    stockManager.UpdateStockItem(hooiItem);
    stockManager.UpdateStockItem(stroItem);

    alert("voorraad succesvol bijgewerkt");
  });
}

document.querySelectorAll(".weergave").forEach((weergave) => {
  let title = weergave.querySelector("h2").textContent.trim();
  let stockbox = weergave.querySelector(".stockbox");
  if (title === "Hooi") {
    stockbox.classList.add("hooiStock");
  } else if (title === "Stro") {
    stockbox.classList.add("stroStock");
  }
});
