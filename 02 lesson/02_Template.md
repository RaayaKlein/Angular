# Template

A template is a code of HTML that is part of the component.

### Two ways to define a template

##### 1. External file

The relative path or absolute URL of a template file for an Angular component. If provided, do not supply an inline template using template.

- Example:

```ts
templateUrl: "./app.component.html";
```

##### 2. Inline template - directly inside the component

An inline template for an Angular component. If provided, do not supply a template file using templateUrl.

- Example:

```ts
template: '<h2 style="color:blue">Welcome to {{ title }} </h2>';
```
