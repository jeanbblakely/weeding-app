import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'; 
import { Item } from '../models/item';

@Component({
  selector: 'app-lazylists',
  templateUrl: './lazylists.component.html',
  styleUrls: ['./lazylists.component.css']
})
export class LazylistsComponent implements OnInit {
  public barcode;
  public apikey;
  public item;

  constructor(private apiService: ApiserviceService) { 
    this.apikey = 'l8xx432b7816735f4aebaa9574c69633e632';
  }

  ngOnInit() {
  }

  getItem() {
    if (this.barcode != '') {
      this.apiService.getItem(this.apikey, this.barcode).subscribe(item => { 
        console.log(item);
        this.item = item;
        console.log(this.item.bib_data.mms_id, 'item bib data');
      });
      this.barcode = '';
    } else {
      console.log('Bad barcode');
    }
  }

}
