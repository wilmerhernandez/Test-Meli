import { Price } from "./priceInterface";
export interface Item {
  id: string;
  title: string;
  price: Price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
  address?: string;
}
