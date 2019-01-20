# Dasherino

With this npm package you can put dashed between letters in a string.

## Usage

```javascript
    const dasherino = require("dasherino")

    const string = "dasherino";
    const dashed = string.dash();
    const undashed = dashed.undash();

    console.log("original: " + string);
    console.log("dashed: " + dashed);
    console.log("undashed: " + undashed);
```
output:
```
    dashed: d-a-s-h-e-r-i-n-o
    undashed: dasherino
```

# Install

`npm install dasherino`
