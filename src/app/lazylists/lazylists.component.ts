import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'; 


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
    this.apiService.getItem(this.apikey, this.barcode).subscribe(item => this.item = item);
    console.log(this.item, 'item');
  }
  

}
