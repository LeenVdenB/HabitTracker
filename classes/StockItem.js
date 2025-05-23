export default class StockItem {
  constructor(type, amount, price) {
    this.type = type;
    this.amount = Number(amount) || 0;
    this.price = Number(price) || 0;
  }

  update(amount, price) {
    this.amount = Number(amount);
    this.price = Number(price);
  }

  toJSON() {
    return {
      type: this.type,
      amount: this.amount,
      price: this.price,
    };
  }

  static fromJSON(data) {
    return new StockItem(data.type, data.amount, data.price);
  }
}
