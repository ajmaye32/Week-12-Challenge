var express = require('express')

var app = express()

var data = require('./worker.json')


app.get('/workers', (req, res) => {
    if (!data) {
        res.status(404).send('could not find information')
    }
    res.send(data)
})

app.get('/workers:id', (req, res => {
    const findEmployee = data.workers.find(function (employee) {


        return parseInt(req.params.id) === employee.id

    })
    res.send(findEmployee)

}))