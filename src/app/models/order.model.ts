export interface Order {
  id: number;
  date: Date;
  price: number;
  deliveryDate: Date;
  actualDeliveryDate?: Date; // Optional, visible only to SuperAdmin
}
