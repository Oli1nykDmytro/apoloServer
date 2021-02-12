import express from 'express';
const trip = require('../src/trips/trips.router');
const app = express();
const PORT = 1717;


app.use('/api',trip)
app.listen(PORT,()=>{
    console.log(`Server was run http://localhost:${PORT}`);  
})