import mongoose, {model, Schema} from 'mongoose';

const tripSchema = new Schema({
    from:{
        type:String,
        requeired:true
    },
    to:{
        type:String,
        requeired:true
    }
});

const Trip = model('Trip', tripSchema);
export {Trip};