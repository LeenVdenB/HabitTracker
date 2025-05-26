export default class SaleGeschiedenisView {
  constructor(saleManager, containerSelector) {
    this.saleManager = saleManager;
    this.container = document.querySelector(containerSelector);
  }

  redner() {
    if (!this.container) return;

    let table = document.createElement("table");
    table.classList.add("Sale-geschiedenis-table");

    let headerRow = document.createElement("tr");
    headerRow.innerHTML = `
        <th>Naam</th>
        <th>Hooi</th>
        <th>Stro</th>
        <th>Datum</th>
        <th>Totale opbrengst</th>`;
    table.appendChild(headerRow);

    let sales = this.saleManager.getSales();
    sales.sort((a, b) => new Date(b.datum) - new Date(a.datum));

    sales.forEach((sale) => {
      let row = document.createElement("tr");
      row.innerHTML = `
            <td>${sale.klant}</td>
            <td>${sale.soldHooi}</td>
            <td>${sale.soldStro}</td>
            <td>${new Date(sale.datum).toLocaleDateString("nl-NL")}</td>
            <td>€${sale.totalPrice.toFixed(2)}</td>`;
      table.appendChild(row);
    });
    this.container.innerHTML = "";
    this.container.appendChild(table);
  }
}
