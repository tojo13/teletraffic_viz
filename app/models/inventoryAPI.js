const Promise = require('bluebird')
const Inventory = require('../schemas/inventory')

exports.getAllDeviceNames = function () {
  let result = Inventory.findOne(
    {},
    { device: 10 },
    { name: 1 }
  )
  return Promise.resolve(result)
}

// exports.getAllDeviceTypes = function () {}

// exports.getAllDeviceNamesAndTypes = function () {}

// exports.getDeviceNamesByType (deviceType) = function () {}

// exports.getDeviceTypeByName (deviceName) = function () {}