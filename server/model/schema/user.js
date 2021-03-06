const mongoose = require('../../lib/mongoose')
const dateFormat = require('dateformat')

const user = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  type: String,
  upper: String,
  upper_email: String,
  upper_name: String,
  under: String,
  avatar_url: {
    type: String,
    default: '/static/userHeader/defaultUserHeader.png'
  },
  created_date: {
    type: String,
    default: dateFormat(new Date(), `yyyy-mm-dd HH:MM:ss`)
  }
})

module.exports = user
