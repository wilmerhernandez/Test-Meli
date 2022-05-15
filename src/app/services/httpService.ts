import axios, { AxiosResponse } from "axios";

export default class httpService {
  public static async execute(endPoint: string, path: string): Promise<any> {
    const url = `${endPoint}/${path}`;
    try {
      const { data }: AxiosResponse<any> = await axios.get(url);
      return data;
    } catch (error) {
      throw error;
    }
  }
}
