import Trip from '../data/Trip';
import { generateToken } from '../helpers/token';
import Storage from '../data/Storage';



export const trips = (req,res)=>{
    const store = new Storage();
        res.status(201).json({
        status: res.statusCode,
        message: 'Here are all our trips!',
        data: store.trips
    });
}