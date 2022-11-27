# ngIf

- ngIf is similar to if statement in programming.
- we will use it in the HTML template

```
if(condition){
    // body
}
```

## 1. simple if

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myHobbies: string[] = ["Dance", "Read", "Run"];
  isVictory: boolean = true;
}
```

```html
<div class="container">
  <!-- if condition is true - show the element -->
  <h3 *ngIf="myHobbies.length > 0">My hobbies: {{ myHobbies }}</h3>
  <h3 *ngIf="myHobbies.length == 0">No hobbies yet</h3>

  <h3 class="alert alert-success" *ngIf="isVictory == true">WIN</h3>
  <h3 class="alert alert-danger" *ngIf="isVictory == false">LOSE</h3>
</div>
```

## ng-template - using tags `#`

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  myHobbies: string[] = ["Dance", "Read", "Run"];
  isVictory: boolean = true;
}
```

```html
<div class="container">
  <h3 *ngIf="myHobbies.length > 0; else noHobbies">
    My hobbies: {{ myHobbies }}
  </h3>

  <ng-template #noHobbies>
    <h3>No hobbies yet</h3>
  </ng-template>
</div>
```

## using `then` & `else`

```html
<div class="container">
  <div *ngIf="myHobbies.length > 0; then hobbies; else noHobbies"></div>

  <ng-template #hobbies>
    <h3>My hobbies: {{ myHobbies }}</h3>
  </ng-template>

  <ng-template #noHobbies>
    <h3>No hobbies yet</h3>
  </ng-template>
</div>
```
