# Class task:

create in html  buttons: 2 for each function(in service)

  * add 
  * sub
  * mul
  * div

Each button will lead to a function is ts that call the 
service and return the result to HTML - in alert(boostrap). 

> Note: In each button - you can put any amount of numbers.


# Result:
<img src='classtaskres.png'/>


#### calculator.service.ts
```ts
// Type of the Injectable metadata. Injectable decorator and metadata.
import { Injectable } from '@angular/core';

// Decorator that marks a class as available to be provided 
// and injected as a dependency.
@Injectable({
  // we have only 1 instance for the class
  providedIn: 'root'
})

export class CalculatorService {

  constructor() { }

  // add(1, 2)  add(1, 2, 3, 4, 5)
  add(...params:number[]):number{
    let res = 0;
    for (const value of params) res += value;
    return res;
  }

  sub(...params:number[]):number{
    let res = params[0];
    for (let i = 1; i < params.length; i++) res -= params[i];
    return res;
  }

  mul(...params:number[]):number{
    let res = 1;
    for (const value of params) res *= value;
    return res;
  }

  div(...params:number[]):number{
    let res = params[0];
    for (let i = 1; i < params.length; i++) res /= params[i];
    return res;
  }

}

```

#### app.component.ts
```ts
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
```

#### app.component.html
```html
<div class="container">

    <h1>My calculator service</h1>

    <!-- Add -->
    <button (click)="func('add', [1, 2, 3])" class="btn btn-primary">Add 1 + 2 + 3 </button>
    <button (click)="func('add', [1, 2, 3, 4, 5])" class="btn btn-primary">Add 1 + 2 + 3 + 4 + 5 </button>

    <br/>

    <!-- Sub -->
    <button (click)="func('sub', [3, 1])" class="btn btn-success">Sub 3 - 1 </button>
    <button (click)="func('sub', [67, 9])" class="btn btn-success">Sub 67 - 9 </button>

    <br/>

    <!-- Mul -->
    <button (click)="func('mul', [1, 2, 3])" class="btn btn-warning">mul 1 * 2 * 3 </button>
    <button (click)="func('mul', [1, 2, 3, 4, 5])" class="btn btn-warning">mul 1 * 2 * 3 * 4 * 5 </button>

    <br/>

    <!-- Div -->
    <button (click)="func('div', [9, 3])" class="btn btn-danger">div 9 / 3 </button>
    <button (click)="func('div', [65, 5])" class="btn btn-danger">div 65 / 5 </button>

    <br/>

    <div class="alert alert-success">{{ res }}</div>
</div>
```
