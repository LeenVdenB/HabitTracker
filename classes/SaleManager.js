import Sale from "./Sale.js";

export default class SaleManager {
  constructor() {
    this.sales = [];
  }

  addSale(sale) {
    this.sales.push(sale);
    this.saveSales();
  }

  getSales() {
    return this.sales;
  }

  saveSales() {
    let salesData = this.sales.map((sale) => sale.toJSON());
    localStorage.setItem("sales", JSON.stringify(salesData));
  }

  loadSales() {
    let storedSales = localStorage.getItem("sales");
    if (storedSales) {
      let salesArray = JSON.parse(storedSales);
      this.sales = salesArray.map((data) => Sale.fromJSON(data));
    }
  }
}
