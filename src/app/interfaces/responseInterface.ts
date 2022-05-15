import { author } from "./author";
import { items } from "./itemsInterface";
export interface ResponseData {
  author: author;
  categories?: string[];
  items: items[];
}
