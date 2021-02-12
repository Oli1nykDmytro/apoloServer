import express  from'express';
const router = express.Router();

router.get('/api/trip', (req,res)=>{
    res.status(200).send({message:'this router trip'});
})

export {router as tripRouter};