# @Input()

- Input is a decorator in angular
- Input allow us to share data between parent component and child component.

Note:

- Parent to child: Fruit -> Apple. We will use `@Input()`
- child to parent: Apple -> Fruit. We will use `@Output()`
- siblings: Apple -> Banana. We will use `services`

```
Fruit
    * Apple
    * Banana
```

## Example

1. Create the components

```
ng g c parent
ng g c parent/child
```

- child.ts

```ts
// 1. Import Input
import { Component, Input } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"],
})
export class ChildComponent {
  // 2. Create a property type Input
  @Input() myName: string = "";
}
```

- child.html

```html
<!-- Show the value we receive from parent class -->
<h1>my name is {{ myName }}</h1>
```

- parent.ts

```ts
import { Component } from "@angular/core";

@Component({
  selector: "app-parent",
  templateUrl: "./parent.component.html",
  styleUrls: ["./parent.component.css"],
})
export class ParentComponent {
  // That property will be sent to child class
  public userName: string = "Alex";
}
```

- parent.html

```html
<!-- Call child component with parameters -->
<app-child [myName]="userName"></app-child>
```


## Class task:

1. Create new component `city`
2. Create another component `city-details` - will be inside city component.

   ```
   ng g c city
   ng g c city/city-details
   ```

3. create in ts of `city-details` 5 properties with Input decorator:
   - Name
   - Country
   - Wheather
   - Area
   - Population
4. Use bootstrap to show the city details in a card in city-details.html
5. the properties will come from city.ts using Input.
6. Create in `city` component new file `city.ts` - with exported class - that has 5 parameters.
7. In city.ts - create array of 3 City objects, and insert data for 3 cities: Jerusalem, London, Paris.
8. In city.html - bring the city component 3 times - for each city.

## Goodluck!

