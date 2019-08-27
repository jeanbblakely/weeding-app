import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import {map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private httpClient: HttpClient) { }

  getItem(apikey, barcode) {
    console.log('https://api-na.hosted.exlibrisgroup.com/almaws/v1/items?item_barcode=' + barcode + '&apikey=' + apikey);
    return this.httpClient.get('https://api-na.hosted.exlibrisgroup.com/almaws/v1/items?item_barcode=' + barcode + '&apikey=' + apikey)
      .pipe(map(res => res));
  }

  postItem(set_id, apikey, postData) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/xml', 'Accept': 'application/xml', 'Response-Type': 'text', 'charset':'UTF-8'
      })
    };
    return this.httpClient.post('https://api-na.hosted.exlibrisgroup.com/almaws/v1/conf/sets/' + set_id + '?op=add_members&apikey=' + apikey, postData, httpOptions)
      .subscribe(res => {console.log(res)});
  }
}
