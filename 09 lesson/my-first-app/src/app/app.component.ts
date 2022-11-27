import { Component } from '@angular/core';
// 1. import
import { CalculatorService } from './calculator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  public myCalculator:CalculatorService;

  constructor(calc:CalculatorService){
    this.myCalculator = calc;
  }

  public res:string = '';

  func(operation:string, values:number[]){

    this.res = `Operation: ${operation} + values: ${values} = `

    switch (operation) {
      case 'add': this.res += this.myCalculator.add(...values);
        break;
      case 'sub': this.res += this.myCalculator.sub(...values);
        break;
      case 'mul': this.res += this.myCalculator.mul(...values);
        break;
      case 'div': this.res += this.myCalculator.div(...values);
        break;
      default:
        break;
    }
  }
}