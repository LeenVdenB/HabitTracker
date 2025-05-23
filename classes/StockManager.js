import StockItem from "./StockItem.js";

export default class StockManager {
  constructor() {
    this.stockItems = {};
  }
  UpdateStockItem(StockItem) {
    this.stockItems[StockItem.type] = StockItem;
    this.saveStock();
  }
  getStockItem(type) {
    return this.stockItems[type];
  }
  reduceStock(type, soldAmount) {
    if (this.stockItems[type]) {
      this.stockItems[type].amount -= Number(soldAmount);
      if (this.stockItems[type].amount < 0) {
        this.stockItems[type].amount = 0;
      }
      this.saveStock();
    }
  }

  saveStock() {
    let stockData = Object.values(this.stockItems).map((item) => item.toJSON());
    localStorage.setItem("stockItems", JSON.stringify(stockData));
  }

  loadStock() {
    let storedStock = localStorage.getItem("stockItems");
    if (storedStock) {
      let itemsArray = JSON.parse(storedStock);
      itemsArray.forEach((data) => {
        let item = StockItem.fromJSON(data);
        this.stockItems[item.type] = item;
      });
    }
  }
}
