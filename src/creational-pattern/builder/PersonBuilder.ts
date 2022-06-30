import { Person } from "./Person";

export class PersonBuilder extends Person {
  makeEmployee() {
    this.isEmployee = true;
    return this;
  }

  makeManager(hours: number = 40) {
    this.isManager = true;
    this.hours = hours;
    return this;
  }

  makePartTime(hours = 20) {
    this.hours = hours;
    return this;
  }

  withMoney(money: number) {
    this.money = money;
    return this;
  }

  withList(list = []) {
    this.shoppingList = list;
    return this;
  }

  build() {
    return Object.assign(new Person(), this);
  }
}
