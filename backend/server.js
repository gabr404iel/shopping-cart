const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors())

//for paths
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
})

app.use(express.json())

//send a message to the main route for the server page
app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/users', require('./routes/user'))

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        //listen for requests after connecting to database
        const port = process.env.PORT;

        app.listen(port, () => {
            console.log(`now listening at port ${port}`);
        })
    })
    .catch((error) => {
        console.log(error);
    })

