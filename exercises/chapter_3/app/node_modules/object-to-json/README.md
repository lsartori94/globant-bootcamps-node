## objectToJSON
> Convert an object into a JSON object

## Why?
JSON.parse() didn't work for a [Bluebird](https://github.com/petkaantonov/bluebird) promise object.

## Install

```
$ npm install --save object-to-json
```
## Usage

```javascript
var objectToJson = require("object-to-json");

var person = {
  name: "Joe",
  age: 22
}

var jsonPerson = objectToJSON(person);
```
## API

### `objectToJson(object)`

| Name | Type | Description |
|------|------|-------------|
| object | `Object` | object to be converted to a JSON object 

```javascript
var objectToJson = require("object-to-json");

var person = {
  name: "Joe",
  age: 22
}

var jsonPerson = objectToJSON(person);
```

## License
MIT © Joe Gesualdo 
