export default class Sale {
  constructor(klant, soldHooi, soldStro) {
    this.klant = klant;
    this.soldHooi = Number(soldHooi) || 0;
    this.soldStro = Number(soldStro) || 0;
    this.datum = new Date();
  }

  toJSON() {
    return {
      klant: this.klant,
      soldHooi: this.soldHooi,
      soldStro: this.soldStro,
      datum: this.datum,
    };
  }

  static fromJSON(data) {
    let sale = new Sale(data.klant, data.soldHooi, data.soldStro);
    sale.datum = new Date(data.datum);
    return sale;
  }
}
