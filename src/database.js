const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/mern-tasks'

mongoose.set('useUnifiedTopology', true)

mongoose.connect(URI, { useNewUrlParser: true })
    .then(db => console.log('DB is conected'))
    .catch(err => console.log(err))

module.exports = mongoose