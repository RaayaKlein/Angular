import { Component } from '@angular/core';
import Item from './item';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  public myItems: Item[] = [
    new Item(1, 'Milk', 2.5, 18),
    new Item(2, 'Bread', 10, 100),
    new Item(3, 'Cheese', 8.5, 12),
    new Item(4, 'Apple', 1.2, 150),
  ];

  itemToChange:any;

  // The function will update the correct object, by its id. 
  // item = { id: , newStockNumber: }
  changeStockShop(item){
    if(item.newStockNumber != null){
      this.itemToChange = this.myItems.find(x => x.Id === item.id);
      // Update the stock value
      if(this.itemToChange != null)
        this.itemToChange.Stock = item.newStockNumber;
    }
  }



}
