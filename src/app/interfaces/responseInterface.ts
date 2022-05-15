import { Author } from "./author";
import { Item } from "./itemsInterface";
export interface ResponseData {
  author: Author;
  categories?: string[];
  items?: Item[];
  item?: Item;
}
