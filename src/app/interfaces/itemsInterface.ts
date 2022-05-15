import { price } from "./priceInterface";
export interface items {
  id: string;
  title: string;
  price: price;
  picture?: object[];
  condition?: string;
  free_shipping?: object;
  sold_quantity?: number;
  description?: string;
  
}
