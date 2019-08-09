
import { generateToken } from '../helpers/token';
import Admin from '../data/Admin';
import User from '../data/User';
import Trip from '../data/Trip';
import Storage from '../data/Storage';



export const trips = (req,res)=>{
    const store = new Storage();
        res.status(201).json({
        status: res.statusCode,
        message: 'Here are all our trips!',
        data: store.trips
    });
}
export const addTrip = (req,res)=>{
    const store = new Storage();
    const admin = new Admin();
    const trip = new Trip();

    // get the trips 
    let trip_id =req.body.trip_id;
    let seating_capacity = req.body.seating_capacity;
    let origin = req.body.origin;
    let destination = req.body.destination;
    let date =req.body.trip_date;
    let fare = req.body.fare;

    // set the trips
    trip.setId(trip_id);
    trip.setSeatinCapacity(seating_capacity);
    trip.setOrigin(origin);
    trip.setDestination(destination);
    trip.setTripDate(date);
    trip.setFare(fare);
    admin.createTrip(trip);

    const tripInfo =  admin.getTrip(trip);
    res.status(201).json({
        status: res.statusCode,
        message:'a new trip has been added',
        data:tripInfo
    });

    




}