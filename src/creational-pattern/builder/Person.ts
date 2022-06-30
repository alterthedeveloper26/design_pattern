export class Person {
  constructor(
    protected name?: string,
    protected isEmployee: boolean = false,
    protected isManager: boolean = false,
    protected hours: number = 40,
    protected money: number = 0,
    protected shoppingList: string[] = []
  ) {}

  toString() {
    return JSON.stringify(this);
  }
}
