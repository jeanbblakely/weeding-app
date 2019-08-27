import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiserviceService } from '../apiservice.service'; 
import { Item } from '../models/item';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-lazylists',
  templateUrl: './lazylists.component.html',
  styleUrls: ['./lazylists.component.css']
})
export class LazylistsComponent implements OnInit {
  public barcode;
  public apikey;
  public item;
  public set_id;
  public setXML;

  constructor(private apiService: ApiserviceService) { 
    this.apikey = 'l8xx432b7816735f4aebaa9574c69633e632';
    this.set_id = '1562716610002946';
  }

  ngOnInit() {
  }

  addToSet() {
    this.getItem();

    
    
  }

  getItem() {
    if (this.barcode !== '') {
      this.apiService.getItem(this.apikey, this.barcode).subscribe(item => { 
        console.log(item);
        this.item = item;
        console.log(this.item.bib_data.mms_id, 'item bib data');
        this.generateSetXML();
        console.log(this.setXML, 'setxml');
        this.apiService.postItem(this.set_id, this.apikey, this.setXML);

      });
      this.barcode = '';
    } else {
      console.log('Bad barcode');
    }
  }

  generateSetXML() {
    console.log('inside generate method');
    this.setXML = 
    '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' + 
    '<set link="https://api-na.hosted.exlibrisgroup.com/almaws/v1/conf/sets/{' +
    this.set_id + '}"> <id>{' + this.set_id + '}</id> <number_of_members link="https://api-na.hosted.exlibrisgroup.com/almaws/v1/conf/sets/{' + this.set_id + 
    '}/members">1</number_of_members> <members total_record_count="1"><member link="https://api-na.hosted.exlibrisgroup.com/almaws/v1/bibs/{' +
    this.item.bib_data.mms_id + '}/holdings/{' + this.item.holding_data.holding_id + '}/items/{' + this.item.item_data.pid + '}"><id>{' +
    this.item.item_data.pid + '}</id><description>{' + this.item.item_data.barcode + '}</description></member></members></set>';
  }
}
