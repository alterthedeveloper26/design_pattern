import ICatalog from "./ICatalog";

export default class CatalogItem implements ICatalog {
  constructor(private name: string, private price: number) {}

  get total() {
    return this.price;
  }

  print() {
    console.log(`${this.name} $${this.price} `);
  }
}
