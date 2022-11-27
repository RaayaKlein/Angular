# Module

Angular app is modular.

- In our course - we will usually use only 1 module. (for basic apps).

## @NgModule

- declarations - will include all the components in the module

```ts
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```
