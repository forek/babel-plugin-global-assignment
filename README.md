# babel-plugin-global-assignment
A `babel-plugin` that translates global assignment statements into setting property statements for global objects.

## Install
```
npm install --save-dev babel-plugin-global-assignment
```

## Usage
### Via `.babelrc`

```json
{
  "plugins": [
    [
      "babel-plugin-global-assignment", {
        "globalObject": "window"
      }
    ]
  ]
}
```

## Options
* globalObject: Specify global object name.

## Example

in
```javascript
foo = true
function () {
  bar = true
  let baz = false
  baz = true
}
```

out
```javascript
window.foo = true
function () {
  window.bar = true
  let baz = false
  baz = true
}
```