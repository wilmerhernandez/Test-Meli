import { price } from "./priceInterface";
export interface items {
  id: string;
  title: string;
  price: price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  sold_quantity?: number;
  description?: string;
  address?: string;
}
