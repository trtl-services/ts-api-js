# TRTL Service JS API Interface

This wrapper allows you to easily interact with the [TRTL Services](https://trtl.services) API to quickly develop applications within the [TurtleCoin](https://turtlecoin.lol) Project. This entire project uses [Javascript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) to make things fast, easy, and safe.

## Table of Contents

1. [Installation](#installation)
2. [Intialization](#intialization)
3. [Documentation](#documentation)


## Installation

```bash
npm install trtl-service-js
```

## Intialization

```javascript
const TRTLServices = require('trtl-service-js')

const connect = new TRTLServices({
  token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImFwcElkIjo0LCJ1c2VySWQiOjYsInBlcm1pc3Npb25zIjpbImFkZHJlc3M6bmV3Il0sImlhdCI6MTUzNjU4NTM2NywiZXhwIjoxNTM5MTc3MzY3LCJhdWQiOiJ0dXJ0bGV3YWxsZXQuaW8iLCJpc3MiOiJUUlRMIFNlcnZpY2VzIiwianRpIjoiMzMifQ.AEHXmvTo8RfNuZ15Y3IGPRhZPaJxFSmOZvVv2YGN9L4We7bXslIPxhMv_n_5cNW8sIgE2Fr-46OTb5H5AFgpjA',
  timeout: 2000 // request timeout
})
```

## Documentation

API documentation is available at https://trtl.services/documentation

## License

```
Copyright (C) 2018 Fexra, The TurtleCoin Developers

Please see the included LICENSE file for more information.
```
