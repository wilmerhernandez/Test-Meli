import { Request, Response } from "express";
import { constants } from "http2";
import config from "../config";
import { ResponseData } from "../interfaces/responseInterface";
import httpService from "./httpService";

export default class DetailService {
  public static async execute(req: Request, res: Response) {
    try {
      const response:ResponseData = await httpService.execute(
        config.meli.domain,
        config.meli.paths.items + req.params.id
      );
      res.status(constants.HTTP_STATUS_OK).send(response);
    } catch (error) {
      res.status(constants.HTTP_STATUS_BAD_REQUEST).send(error);
    }
  }
}
