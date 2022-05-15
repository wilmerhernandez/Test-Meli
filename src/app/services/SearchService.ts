import { Request, Response } from "express";
import { constants } from "http2";
import config from "../config";
import { ResponseData } from "../interfaces/responseInterface";
import httpService from "./httpService";
/**
 * class for service by search of products
 * add domain of config
 * map data response
 */
export default class SearchService {
  public static async execute(req: Request, res: Response) {
    try {
      const data = await httpService.execute(
        config.meli.domain,
        config.meli.paths.search + req.query.search + "&limit=4"
      );
      const response: ResponseData = {
        author: {
          name: "wilmer",
          lastname: "hernandez",
        },
        items: data.results.map((element: any) => ({
          id: element.id,
          title: element.title,
          price: {
            amount: element.price,
            currency: "CO",
            decimals: 0,
          },
          picture: element.thumbnail,
          condition: element.condition,
          free_shipping: element.shipping.free_shipping,
          address: element.address.state_name,
        })),
        categories: data.filters.find((i: any) => i.id === "category")?.values.map((element: any) => element.name),
      };

      res.status(constants.HTTP_STATUS_OK).send(response);
    } catch (error) {
      res.status(constants.HTTP_STATUS_BAD_REQUEST).send(error);
    }
  }
}
