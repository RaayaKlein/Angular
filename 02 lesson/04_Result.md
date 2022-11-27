# Result:

- Create new component `person-details`
- In that component we created a file: `Person.ts`

```ts
export default class Person {
  // id:
  private _id: number = 0;
  public get Id(): number {
    return this._id;
  }
  public set Id(value: number) {
    value > 1 && value < 9 ? (this._id = value) : null;
  }

  // name:
  private _name: string = "";
  public get Name(): string {
    return this._name;
  }
  public set Name(value: string) {
    value.length > 1 && value.length < 20 ? (this._name = value) : null;
  }

  // age:
  private _age: number = 0;
  public get Age(): number {
    return this._age;
  }
  public set Age(value: number) {
    value >= 18 && value <= 120 ? (this._age = value) : null;
  }

  // city:
  private _city: string = "";
  public get City(): string {
    return this._city;
  }
  public set City(value: string) {
    this._city = value;
  }

  // country:
  private _country: string = "";
  public get Country(): string {
    return this._country;
  }
  public set Country(value: string) {
    this._country = value;
  }

  // img:
  private _img: string = "";
  public get Img(): string {
    return this._img;
  }
  public set Img(value: string) {
    this._img = value;
  }

  // ctor:
  constructor(
    id: number,
    name: string,
    age: number,
    city: string,
    country: string,
    img: string
  ) {
    this.Id = id;
    this.Name = name;
    this.Age = age;
    this.City = city;
    this.Country = country;
    this.Img = img;
  }
}
```

- In `person-details.component.ts` - created an array:

```ts
import { Component } from "@angular/core";
import Person from "./person";

@Component({
  selector: "app-person-details",
  templateUrl: "./person-details.component.html",
  styleUrls: ["./person-details.component.css"],
})
export class PersonDetailsComponent {
  public people: Person[] = [
    new Person(
      123,
      "Bob",
      20,
      "Ariel",
      "Israel",
      "https://cdn.pixabay.com/photo/2018/05/10/19/36/the-atlantic-ocean-3388522_1280.jpg"
    ),
    new Person(
      124,
      "Alice",
      30,
      "Haifa",
      "Israel",
      "https://cdn.pixabay.com/photo/2018/05/10/19/36/the-atlantic-ocean-3388522_1280.jpg"
    ),
    new Person(
      125,
      "John",
      25,
      "Tel-aviv",
      "Israel",
      "https://cdn.pixabay.com/photo/2018/05/10/19/36/the-atlantic-ocean-3388522_1280.jpg"
    ),
    new Person(
      126,
      "Dani",
      21,
      "herzelia",
      "Israel",
      "https://cdn.pixabay.com/photo/2018/05/10/19/36/the-atlantic-ocean-3388522_1280.jpg"
    ),
  ];
}
```

- First dumb solution: In html - called the array data:

```html
<div class="container">
  <br />

  <h1 class="alert alert-success">
    Id: {{ people[0].Id }}. User: {{ people[0].Name }}
  </h1>

  <h4>From {{ people[0].City }}, {{ people[0].Country }}</h4>

  <h5>{{ people[0].Age }} years old</h5>

  <img src="{{ people[0].Img }}" height="100" />
</div>
```

### Using `*ngFor` to loop over the array:

This is a smart solution:

```html
<div class="container" *ngFor="let person of people">
  <br />

  <h1 class="alert alert-success">
    Id: {{ person.Id }}. User: {{ person.Name }}
  </h1>

  <h4>From {{ person.City }}, {{ person.Country }}</h4>

  <h5>{{ person.Age }} years old</h5>

  <img src="{{ person.Img }}" height="100" />
</div>
```
