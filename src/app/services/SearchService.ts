import { Request, Response } from "express";
import { constants } from "http2";
import config from "../config";
import { ResponseData } from "../interfaces/responseInterface";
import httpService from "./httpService";

export default class SearchService {
  public static async execute(req: Request, res: Response) {
    try {
      const data = await httpService.execute(
        config.meli.domain,
        config.meli.paths.search + req.query.search+'&limit=4'
      );
      let response: ResponseData = {
        author: {
          name: "wilmer",
          lastname: "hernandez",
        },
        items: data.results,
        categories:data.filters
      };
      res.status(constants.HTTP_STATUS_OK).send(response);
    } catch (error) {
      res.status(constants.HTTP_STATUS_BAD_REQUEST).send(error);
    }
  }
}
