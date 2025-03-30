let stroStock = {};
let hooiStock = {};

function save() {
  let stroAmount = document.querySelector("#stroAmount").value;
  let priceStro = document.querySelector("#priceStro").value;
  let hooiAmount = document.querySelector("#hooiAmount").value;
  let priceHooi = document.querySelector("#priceHooi").value;

  stroStock = {
    stroAmount: stroAmount,
    PriceStro: priceStro,
  };

  hooiStock = {
    hooiAmount: hooiAmount,
    PriceHooi: priceHooi,
  };

  let stroStocks = JSON.parse(localStorage.getItem("stroStocks")) || [];
  stroStocks.push(stroStock);

  let hooiStocks = JSON.parse(localStorage.getItem("hooiStocks")) || [];
  hooiStocks.push(hooiStock);

  localStorage.setItem("stroStocks", JSON.stringify(stroStocks));
  localStorage.setItem("hooiStocks", JSON.stringify(hooiStocks));
}

document.querySelector("#save").addEventListener("click", (s) => {
  save();
  console.log(stroStock);
  console.log(hooiStock);
});
