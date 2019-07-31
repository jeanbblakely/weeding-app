import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) { }

  getItem(apikey, barcode) {
    console.log('https://api-na.hosted.exlibrisgroup.com/almaws/v1/items?item_barcode=' + barcode + '&apikey=' + apikey);
    this.httpClient.head('Access-Control-Allow-Origin');
    return this.httpClient.get('https://api-na.hosted.exlibrisgroup.com/almaws/v1/items?item_barcode=' + barcode + '&apikey=' + apikey);
  }
}
