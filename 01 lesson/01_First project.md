# First project

Angular is a TypeScript open-source framework, Created by Google. 

(Angular is a framework, React is a library). 

#### install angular-cli

Angular has its own terminal - with prefix of `ng`

> note: This is globally installed. We install it once.

```
npm install --global @angular/cli

// or
npm i -g @angular/cli
```

#### Create new app

```
// syntax: ng new <name_of_project>

ng new my-first-app
```

#### Run the app

- The Angular CLI includes a server, so we can build and run our app locally.

* The app will run in http://localhost:4200/

```
cd my-first-app
ng serve --open


// or:
ng serve -o
```

- if the project is already open in the browser, run the command and refresh the page:

```
ng serve
```

#### Install bootstrap

- if server is running - stop it with `ctrl+c`.
- install bootstrap with NPM:

```
npm install bootstrap
npm i bootstrap
```

- in angular.json:

```json
"styles": [
    "node_modules/bootstrap/dist/css/bootstrap.min.css",
    "src/styles.css"
],
```
