# Ways to pass data between components in Angular:
```
app
    * user
        * login
        * register
        * myData
    * shop
        * categories
        * item
        * favorites
```

### @Input()

pass data from parent component to child component

### @Output()

pass data from child component to parent component

## Example:
We want to share data from `favorites` to `myData`

#### First way:

1. favorites -> shop (output)
2. shop -> app (output)
3. app -> user (input)
4. user -> myData (input)

#### Second way - use service (global data)