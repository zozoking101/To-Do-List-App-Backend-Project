const express = require('express')

const PORT = 8000

// initialize app 
const app = express()

// view engine configurations
app.set('view engine', 'ejs')

// server that listens for changes
app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`)
    }
)