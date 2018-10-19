# TRTL Service JS API Interface

This wrapper allows you to easily interact with the [TRTL Services](https://trtl.services) API to quickly develop applications that interact with the [TurtleCoin](https://turtlecoin.lol) Network. This entire project uses [Javascript Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises) to make things fast, easy, and safe.


# Table of Contents

1. [Installation](#installation)
2. [Intialization](#intialization)
3. [Documentation](#documentation)
  1. [Methods](#methods)



# Installation

```bash
npm install ts-api
```


# Intialization

```javascript
const TRTLServices = require('trtl-service-js')

const connect = new TRTLServices({
  token: 'eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoidGVzdCIsImFwcElkIjo0LCJ1c2VySWQiOjYsInBlcm1pc3Npb25zIjpbImFkZHJlc3M6bmV3Il0sImlhdCI6MTUzNjU4NTM2NywiZXhwIjoxNTM5MTc3MzY3LCJhdWQiOiJ0dXJ0bGV3YWxsZXQuaW8iLCJpc3MiOiJUUlRMIFNlcnZpY2VzIiwianRpIjoiMzMifQ.AEHXmvTo8RfNuZ15Y3IGPRhZPaJxFSmOZvVv2YGN9L4We7bXslIPxhMv_n_5cNW8sIgE2Fr-46OTb5H5AFgpjA',
  timeout: 2000 // request timeout
})
```


# Documentation

API documentation is available at https://trtl.services/documentation

##Methods

###createAddress()
Create a new TRTL addresses

```javascript
TRTLServices.createAddress()
```


###deleteAddress(address)
Delete a selected TRTL addresses

```javascript
TRTLServices.deleteAdddress("TRTLuxH78akDMCsXycnU5HjJE6zPCgM4KRNNQSboqh1yiTnvxuhNVUL9tK92j9kurSKdXVHFmjSRkaNBxM6Nb3G8eQGL7aj113A")
```


###ViewAddress()
Get address details by address
```javascript
TRTLServices.viewAddress("TRTLuxH78akDMCsXycnU5HjJE6zPCgM4KRNNQSboqh1yiTnvxuhNVUL9tK92j9kurSKdXVHFmjSRkaNBxM6Nb3G8eQGL7aj113A")
```


###viewAddresses()
View all addresses belonging to the specified token.

```javascript
TRTLServices.viewAddresses()
```


###scanAddress()
Scan for transactions in the next 100 blocks specified by blockIndex and address.

```javascript
TRTLServices.scanAddress("TRTLuxH78akDMCsXycnU5HjJE6zPCgM4KRNNQSboqh1yiTnvxuhNVUL9tK92j9kurSKdXVHFmjSRkaNBxM6Nb3G8eQGL7aj113A", 899093)
```


###getFee()
Calculate the TRTL Services fee for a specified TRTL amount.

```javascript
TRTLServices.getFee(1092.19)
```


###createTransfer()
Send a TRTL transaction with a specified account.

```javascript
TRTLServices.createTransfer("TRTLuxH78akDMCsXycnU5HjJE6zPCgM4KRNNQSboqh1yiTnvxuhNVUL9tK92j9kurSKdXVHFmjSRkaNBxM6Nb3G8eQGL7aj113A", "TRTLuzAzNs1E1RBFhteX56A5353vyHuSJ5AYYQfoN97PNbcMDvwQo4pUWHs7SYpuD9ThvA7AD3r742kwTmWh5o9WFaB9JXH8evP", 1000, 1)
```

###viewTransfer()
Lists transaction details with specified hash.

```javascript
TRTLServices.viewTransfer("EohMUzR1DELyeQM9RVVwpmn5Y1DP0lh1b1ZpLQrfXQsgtvGHnDdJSG31nX2yESYZ")
```


###getStatus()
Get the current status of the TRTL Services infrastructure.

```javascript
TRTLServices.getStatus()
```


# License

```
Copyright (C) 2018 Fexra, The TurtleCoin Developers

Please see the included LICENSE file for more information.
```
