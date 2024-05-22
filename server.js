const express = require('express');
const app = express();
const studentRoutes = require('./src/student/routes');
const port = 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Hello, world!");
})


app.use('/api/v1/students',studentRoutes);

app.listen(port,()=>{
    console.log('listening on port '+port);
})