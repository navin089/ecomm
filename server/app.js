require('dotenv').config()

const express = require('express')
const app = express()
const PORT = 5000

app.use(express.json())

//create post route
app.post('/user', (req, res) => {

        res.send(req.body);
    });
    


app.listen(PORT, () => { 
    console.log('Server running on port', PORT);
})
