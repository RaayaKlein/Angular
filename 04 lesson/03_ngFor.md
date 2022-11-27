# ngFor

- ngFor here is similar to for loop in programming.
- We will use it in HTML template

## Example:

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  fruits: string[] = ["Apple", "Pear", "Banana"];
}
```

```html
<div class="container">
  <ul *ngFor="let fruit of fruits">
    <li>{{fruit}}</li>
  </ul>
</div>
```

## count & index

```html
<div class="container">
  <!-- index - the regular index. 
       count - array length -->
  <div *ngFor="let fruit of fruits; index as i; count as c">
    <h3>{{i + 1}}/{{c}}. {{fruit}}</h3>
  </div>
</div>
```

## first, last, even and odd

```html
<div class="container">

  <!-- index - the regular index. 
       count - array length -->
  <div *ngFor="let fruit of fruits; index as i; even as isEven; odd as isOdd; first as isFirst">
    <h3 *ngIf="isFirst" style="color:orange">{{i + 1}}. {{fruit}}</h3>
    <h3 *ngIf="isEven && !isFirst" style="color:blue">{{i + 1}}. {{fruit}}</h3>
    <h3 *ngIf="isOdd" style="color:red">{{i + 1}}. {{fruit}}</h3>
  </div>

</div>

```
