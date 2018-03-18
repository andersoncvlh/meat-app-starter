import { OrderItem } from './order-items/order-item.model';

export class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public items: OrderItem[] = []
  ) {}
}
