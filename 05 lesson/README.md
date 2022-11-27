# Attribute directives:

1. ngStyle - add / remove style attributes
2. ngClass - add / remove css classes

## ngStyle

- Written in the HTML template page
- gets an object of `key-value` pairs
- ngStyle is better than the regular `style` attribute - it allows us to use functions and if-else statements (in the value).

* app.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  isOn: boolean = true;
  isActive: boolean = false;

  getColor() {
    return "cadetblue";
  }

  turnOnOff() {
    this.isOn = !this.isOn;
  }
}
```

- app.html

```ts
<div class="container">

  <!-- 1. ngStyle - gets an object of `key-value` pairs -->
  <h2 [ngStyle]="{color:'red'}">ngStyle intro</h2>
  <h2 style="color:'red'">style intro</h2>

  <!-- 2. More than 1 pair. If key is more than 1 word - add "" -->
  <h2 [ngStyle]="{color:'blue', 'text-align':'center'}">two keys for style</h2>

  <!-- 3. add function to the value -->
  <h2 [ngStyle]="{color:getColor()}">ngStyle - Get value from function</h2>
  <!-- This code will not work with regular style -->
  <h2 style="color:getColor()">regular style - Get value from function</h2>

  <!-- 4. add condition - if-else -->
  <button class="btn" (click)="turnOnOff()"
  [ngStyle]="{'background-color' : isOn ? 'green' : 'red' }">
    Live server</button>
  <!-- add toggle -> toggle between on and of -->

  <!-- 5.
  if() {}
  else if() {}
  else
   -->
   <button class="btn"
  [ngStyle]="{'background-color' : isActive ? (isOn ? 'green' : 'red') : 'gray' }">
    Live server</button>

</div>

```

## ngClass

- Written in the HTML template file
- We can write ngClass attributes in 3 ways:

1. strings
2. array of strings
3. objects(key-value pairs) - allow us to have true/false conditions for each class.

> Example:

- class.component.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-class",
  templateUrl: "./class.component.html",
  styleUrls: ["./class.component.css"],
})
export class ClassComponent {
  serverOn: boolean = false;

  activateServer() {
    this.serverOn = !this.serverOn;
  }
}
```

- class.component.html

```html
<h2 [ngClass]="'header'">My class component</h2>

<div [ngClass]="['one','two']">ngClass - by array</div>

<div [ngClass]="{'one':true, 'two':false}">ngClass - by object</div>

<button (click)="activateServer()">ON/OFF</button>

<div
  [ngClass]="{
    'block':true,
    'isUp': serverOn ? true : false,
    'isDown': serverOn ? false : true
}"
>
  my server
</div>
```

- class.component.css

```css
.header {
  color: blueviolet;
}
.one {
  height: 150px;
  width: 150px;
  background-color: coral;
  margin: 10px;
}
.two {
  border-radius: 20%;
  text-align: center;
}

.block {
  height: 100px;
  width: 100px;
  margin: 10px;
  font-size: 20px;
}

.isUp {
  background-color: rgb(23, 228, 23);
}
.isDown {
  background-color: rgb(245, 0, 0);
}
```

