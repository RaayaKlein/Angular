# ngSwitch

- Switch here is similar to switch-case in programming.
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
  Artist = {
    name: "Raphael",
    born: "1483",
    artStyle: "Renaissance",
  };
}
```

```html
<div class="container">
  <div [ngSwitch]="Artist.artStyle">
    <h4 *ngSwitchCase="'Realism'">{{Artist.name}} style is realism</h4>
    <h4 *ngSwitchCase="'Renaissance'">{{Artist.name}} style is Renaissance</h4>
    <h4 *ngSwitchCase="'Abstract'">{{Artist.name}} style is abstract</h4>

    <h4 *ngSwitchDefault>Non of the above...</h4>
  </div>

  <!-- switch(variable){
    case: 
    case: 
    default
  } -->
</div>
```
