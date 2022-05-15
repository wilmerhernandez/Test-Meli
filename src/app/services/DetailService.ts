import { Request, Response } from "express";
import { constants } from "http2";
import config from "../config";
import { ResponseData } from "../interfaces/responseInterface";
import httpService from "./httpService";

export default class DetailService {
  public static async execute(req: Request, res: Response) {
    try {
      const data = await httpService.execute(
        config.meli.domain,
        config.meli.paths.items + req.params.id
      );
         const response:ResponseData ={
          author: {
            name: "wilmer",
            lastname: "hernandez",
          },
          items: [
            {
              id: data.id,
              title: data.title,
              price: data.price,
              picture: data.pictures[0].secure_url,
              condition: data.condition,
              free_shipping: data.shipping,
              sold_quantity: data.sold_quantity,
              description: data.descriptions,
            },
          ],
        };
      res.status(constants.HTTP_STATUS_OK).send(response);
    } catch (error) {
      console.log(error)
      res.status(constants.HTTP_STATUS_BAD_REQUEST).send(error);
    }
  }
}
