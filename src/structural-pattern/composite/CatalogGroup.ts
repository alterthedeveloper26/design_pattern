import CatalogItem from "./CatalogItem";
import ICatalog from "./ICatalog";

export default class CatalogGroup implements ICatalog {
  constructor(private name: string, private composites: ICatalog[] = []) {}

  get total() {
    return this.composites.reduce(
      (total, nextItem) => total + nextItem.total,
      0
    );
  }

  print() {
    console.log(this.name.toUpperCase());
    this.composites.forEach((item) => item.print());
  }
}
