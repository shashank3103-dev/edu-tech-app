import URLService from './URLServices';
import {EndPoints, baseUrl} from '../resources/Constants';

export default class URLManager {
  getData(data: number) {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.GETDATAENDPOINT + `${data}.json`;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, data, 'GET')
      .then((res: any) => res);
  }
  getProducts() {
    let urlService = new URLService();
    let urlPath = baseUrl + EndPoints.ALL_PRODUCTS;
    console.log(urlPath);
    return urlService
      .fetchAsyncData(urlPath, {}, 'GET')
      .then((res: any) => res);
  }
}