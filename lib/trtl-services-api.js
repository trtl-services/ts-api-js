// Copyright (c) 2018, Fexra, The TurtleCoin Developers
//
// Please see the included LICENSE file for more information.

'use strict'

const request = require('request-promise-native')
const util = require('util')

var TRTLservices = function (opts) {
  opts = opts || {}
  if (!(this instanceof TRTLservices)) return new TRTLservices(opts)
  this.host = opts.host || 'api.trtl.services',
  this.token = opts.token || null
  this.timeout = opts.timeout || 2000
}

TRTLservices.prototype.createAddress = function () {
  return new Promise((resolve, reject) => {
    this._post('address')
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.deleteAddress = function (address) {
  return new Promise((resolve, reject) => {
    if (!address) return reject(new Error('must specify address'))

    this._delete('address/' + address, {
      address: address
    })
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.viewAddress = function (address) {
  return new Promise((resolve, reject) => {
    if (!address) return reject(new Error('must specify address'))

    this._get('address/view/' + address)
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.viewAddresses = function () {
  return new Promise((resolve, reject) => {
    this._get('address/view/all')
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.scanAddress = function (address, blockIndex) {
  return new Promise((resolve, reject) => {
    if (!address) return reject(new Error('must specify address'))
    if (!blockIndex) return reject(new Error('must specify blockIndex'))

    this._get('address/scan/' + address + '/' + blockIndex)
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.getFee = function (amount) {
  return new Promise((resolve, reject) => {
    if (!amount) return reject(new Error('must specify amount'))

    this._get('transfer/fee/' + amount)
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.createTransfer = function (from, to, amount, fee, paymentId, extra) {
  return new Promise((resolve, reject) => {
    if (!from) return reject(new Error('must specify from address'))
    if (!to) return reject(new Error('must specify to address'))
    if (!amount) return reject(new Error('must specify amount'))
    if (!fee) return reject(new Error('must specify fee'))

    this._post('transfer', {
      from: from,
      to: to,
      amount: parseFloat(amount),
      fee: parseFloat(fee),
      paymentId: paymentId || null,
      extra: extra || null
    })
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.viewTransfer = function (transactionHash) {
  return new Promise((resolve, reject) => {
    if (!transactionHash) return reject(new Error('must specify transactionHash'))

    this._get('transfer/view/' + transactionHash)
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype.getStatus = function () {
  return new Promise((resolve, reject) => {
    this._get('status')
      .then((result) => {
        return resolve(result)
      })
      .catch((err) => {
        return reject(err)
      })
  })
}

TRTLservices.prototype._get = function (method) {
  return new Promise((resolve, reject) => {
    if (method.length === 0) return reject(new Error('no method supplied'))

    request({
      uri: util.format('https://%s/%s', this.host, method),
      method: 'GET',
      json: true,
      auth: {
        bearer: this.token
      },
      timeout: this.timeout
    }).then((result) => {
      return resolve(result)
    }).catch((err) => {
      return reject(err)
    })
  })
}

TRTLservices.prototype._post = function (method, params) {
  return new Promise((resolve, reject) => {
    if (method.length === 0) return reject(new Error('no method supplied'))

    params = params || {}

    request({
      uri: util.format('https://%s/%s', this.host, method),
      method: 'POST',
      form: params,
      json: true,
      auth: {
        bearer: this.token
      },
      timeout: this.timeout
    }).then((result) => {
      return resolve(result)
    }).catch((err) => {
      return reject(err)
    })
  })
}

TRTLservices.prototype._delete = function (method) {
  return new Promise((resolve, reject) => {
    if (method.length === 0) return reject(new Error('no method supplied'))

    request({
      uri: util.format('https://%s/%s', this.host, method),
      method: 'DELETE',
      json: true,
      auth: {
        bearer: this.token
      },
      timeout: this.timeout
    }).then((result) => {
      return resolve(result)
    }).catch((err) => {
      return reject(err)
    })
  })
}

module.exports = TRTLservices
