require('dotenv').config()
const express = require('express')
const app = express()
// TODO: import the getCityInfo and getJobs functions from util.js
const {getCityInfo, getJobs} = require('./util.js')

// TODO: Statically serve the public folder
app.use(express.static('public'))

// TODO: declare the GET route /api/city/:city
// This endpoint should call getCityInfo and getJobs and return
// the result as JSON.
// The returned JSON object should have two keys:
// cityInfo (with value of the getCityInfo function)
// jobs (with value of the getJobs function)
// If no city info or jobs are found,
// the endpoint should return a 404 status
app.get('/api/city/:city', getCityInfo, getJobs, (req, res) => {
    res.json({
        cityInfo: getCityInfo,
        jobs: getJobs
    })
    if (!getCityInfo) {
        return res.status(404).send('city not found')
    }
    if (!getJobs) {
        return res.status(404).send('jobs not found')
    }
})
module.exports = app
