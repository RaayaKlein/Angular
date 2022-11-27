# Class task res

1. Create 2 components

```
ng g c city
ng g c city/city-details
```

2. city-details.ts

```ts
// 1. Import Input
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-city-details",
  templateUrl: "./city-details.component.html",
  styleUrls: ["./city-details.component.css"],
})
export class CityDetailsComponent {
  // 2. Create 5 input properties:
  @Input() Name: string = "";
  @Input() Country: string = "";
  @Input() Weather: string = "";
  @Input() Area: string = "";
  @Input() Population: string = "";
}
```

3. city-details.html

```html
<div class="card" style="width: 18rem; background-color: rgb(234, 247, 242);">
  <div class="card-body">
    <h5 class="card-title">{{ Name }}, {{ Country }}</h5>
    <p class="card-text">Weather: {{ Weather }}</p>
    <p class="card-text">Area: {{ Area }}</p>
    <p class="card-text">Population: {{ Population }}</p>
  </div>
</div>
```

4. city.ts

```ts
// Shortcut of typeScript - we do not write properties

export default class City {
  constructor(
    public Name: string,
    public Country: string,
    public Weather: string,
    public Area: string,
    public Population: string
  ) {}
}
```

5. city.component.ts

```ts
import { Component } from "@angular/core";
import City from "./city";

@Component({
  selector: "app-city",
  templateUrl: "./city.component.html",
  styleUrls: ["./city.component.css"],
})
export class CityComponent {
  public myCities: City[] = [
    new City("Jerusalem", "Israel", "26°C,", "125.1 km²", "874,186"),
    new City("Haifa", "Israel", "21°C", "63.66 km²", "279,247"),
    new City("Netanya", "Israel", "23°C", "28.5 km²", "209,390"),
  ];
}
```

6. city.component.html

```html
<h3>My favorite cities</h3>

<!-- Loop over the array of cities and for each city - 
call the child component with props -->
<div *ngFor="let city of myCities">
  <app-city-details
    [Name]="city.Name"
    [Country]="city.Country"
    [Weather]="city.Weather"
    [Area]="city.Area"
    [Population]="city.Population"
  ></app-city-details>
</div>
```
