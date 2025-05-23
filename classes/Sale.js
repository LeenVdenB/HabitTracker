export default class Sale {
  constructor(klant, soldHooi, soldStro, priceHooi, priceStro) {
    this.klant = klant;
    this.soldHooi = Number(soldHooi) || 0;
    this.soldStro = Number(soldStro) || 0;
    this.priceHooi = Number(priceHooi) || 0;
    this.priceStro = Number(priceStro) || 0;
    this.datum = new Date();
  }

  get totalPrice() {
    return this.soldHooi * this.priceHooi + this.soldStro * this.priceStro;
  }

  toJSON() {
    return {
      klant: this.klant,
      soldHooi: this.soldHooi,
      soldStro: this.soldStro,
      priceHooi: this.priceHooi,
      priceStro: this.priceStro,
      datum: this.datum,
    };
  }

  static fromJSON(data) {
    let sale = new Sale(
      data.klant,
      data.soldHooi,
      data.soldStro,
      data.priceHooi,
      data.priceStro
    );
    sale.datum = new Date(data.datum);
    return sale;
  }
}
