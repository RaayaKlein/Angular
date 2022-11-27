## Class task 2 res:

- city.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class CityComponent {
  public myCity: string = "Eilat";
  public cityState: string = "";

  func(myColor: string) {
    this.cityState = myColor;
  }
}
```

- city.html

```html
<h2>my city is {{ myCity }}</h2>

<button
  (click)="func('red')"
  [ngStyle]="{'background-color':'red'}"
  class="btn"
>
  red
</button>

<button
  (click)="func('green')"
  [ngStyle]="{'background-color':'green'}"
  class="btn"
>
  green
</button>

<button
  (click)="func('blue')"
  [ngStyle]="{'background-color':'blue'}"
  class="btn"
>
  blue
</button>

<br />
<br />

<div [ngStyle]="{'background-color':cityState}">
  <h4 class="alert">city state in Covid19 is {{ cityState }}</h4>
</div>
```
