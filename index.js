require('dotenv').config()

const express = require('express')
const router = require('./routes/index')
const cors= require('cors')

const app = express()
const PORT = 3000
app.use(cors())


app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use('/', router)

app.listen(PORT, (_) => {
	console.log("ada di port => ",PORT)
})
