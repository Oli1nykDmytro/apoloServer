import express  from'express';
const tripRouter = express.Router();

tripRouter.get('alltrip', (req,res)=>{
    console.log('this router trip');
    
})

module.exports = tripRouter;