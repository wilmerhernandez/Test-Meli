import { price } from "./priceInterface";
export interface items {
  id: string;
  title: string;
  price: price;
  picture?: string;
  condition?: string;
  free_shipping?: boolean;
  ssold_quantity?: number;
  sdescriptions?: string;
}
