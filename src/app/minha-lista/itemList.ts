export class ItemList {
  name?: string;
  buyed: boolean = false;
  
  // Nome interno alternativo e claro
  private internalQty?: number;

  get qty(): number | undefined {
    return this.internalQty;
  }

  set qty(value: number | undefined) {
    this.internalQty = value && value > 1000 ? 1000 : value;
  }
}
