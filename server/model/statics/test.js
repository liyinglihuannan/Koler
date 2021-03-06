const mongoose = require('../../lib/mongoose')
const testSchema = require('../schema/test')

testSchema.statics.findByEmail = function (email) {
  return this.find({
    email: email
  }, {  // 不显示以下字段
    '_id': 0,
    '__v': 0
  }).exec()
}

testSchema.statics.findByEmailAndName = function (email, name) {
  return this.find({
    email: email,
    name: name
  }, {  // 不显示以下字段
    '_id': 0,
    '__v': 0
  }).exec()
}

module.exports = mongoose.model('Test', testSchema)
