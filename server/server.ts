import express from 'express';
import mongoose from 'mongoose'

// const trip = require('../src/trips/trips.router');
const app = express();
const PORT = 1717;
const uri ='mongodb+srv://Oliiynik_Dmt:test1@cluster0.nfppp.mongodb.net/<dbname>?retryWrites=true&w=majority';

 mongoose.connect(uri,{
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
      }, ()=>{
          console.log('conected to da base');
      });

// app.use('/api',trip)
app.listen(PORT,()=>{
    console.log(`Server was run http://localhost:${PORT}`);  
})