const mongoose = require('mongoose')
const usersSchema = mongoose.Schema({
    username: String,
    password: String,
    first: String,
    last: String
}, {collection: 'users'})
module.exports = usersSchema
