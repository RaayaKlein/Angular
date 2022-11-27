# Components - רכיבים

Every app is build with components in Angular.

### Component has:

1. HTML template - define all the elements in the page
2. TypeScript class - define the logic of the page.
3. CSS page - define the desgin and the style of the page.

### Create a component manually:

- Create new ts file in app folder - `gallery.component.ts`
- Copy the basic data from app.ts
- change the selector(how we call the component in other components - in HTML) name
- change the templateURL(for external HTML files) to template(internal HTML - directly)
- Delete the CSS array files
- Change the App name to - GalleryComponent
- update the title to other data

```ts
import { Component } from "@angular/core";

// Basic settings of the page - imports
@Component({
  // Change the selector - how we call the component in HTML
  selector: "app-gallery",
  // change to `template`, and add HTML directly, and CSS
  template: '<h2 style="color:red">Welcome to {{ title }}</h2>',
})

// Change the class name to `Gallery`
export class GalleryComponent {
  // add the right title
  title: string = "My gallery";
}
```

- When we create manually a component - we must add it to the `app.module.ts` file:

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { GalleryComponent } from "./gallery.component";

@NgModule({
  declarations: [AppComponent, GalleryComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

- Call the component so we can see it in the browser:
  in `app.component.html`

```html
<div class="container">
  <h1>lesson 02</h1>

  <app-gallery></app-gallery>
</div>
```

### Create component automatically:

- stop the server
- in terminal:

```
ng generate component <name>

//
ng g c shop
```

- Output
  - Created a folder in app folder
  - With 4 files: HTML, CSS, TypeScript, spec.ts
  - Updated the app.module.ts file - and added the component

```
CREATE src/app/shop/shop.component.html (19 bytes)
CREATE src/app/shop/shop.component.spec.ts (612 bytes)
CREATE src/app/shop/shop.component.ts (267 bytes)
CREATE src/app/shop/shop.component.css (0 bytes)
UPDATE src/app/app.module.ts (458 bytes)
```

- To use the component - in app.html

```html
<div class="container">
  <h1>lesson 02</h1>

  <app-shop></app-shop>
</div>
```
