const express = require('express'),
    morgan = require('morgan'),
    path = require('path'),
    routes = require('./routes/task.routes'),
    app = express()

const { mongoose } = require('./database')

// settings
app.set('port', process.env.PORT || 3000)

// middlewares
app.use(morgan('dev'))
app.use(express.json())

// routes
app.use('/api/tasks', routes)

// static files
app.use(express.static(path.join('./' + __dirname, 'public')))

// starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`)
})