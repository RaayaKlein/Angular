import { Component, Input, OnChanges, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnChanges{

  // input from user (ngModel)
  public newStockNumber:number;

  // value from parent-component: keep the id for the item we want to update
  @Input() itemId:number;

  // Will hold the function `changeStockShop` from parent-component
  @Output() stockNumberUpdated = new EventEmitter();

  // function to update stock:
  changeStock(){
    this.stockNumberUpdated.emit({ id: this.itemId, newStockNumber:
    this.newStockNumber })

    // reset input
    this.newStockNumber = null;
  }

  // --------------------- color --------------------------- 
  // value of stock - for each row
  @Input() stock:number;
  color:string = '';

  // will listen to changes in Input values
  // Will run once when app is on, and any time input changes. 
  ngOnChanges(): void {
    this.stock >= 30 ? this.color = 'blue' : this.color = 'red';
  }
  
}
