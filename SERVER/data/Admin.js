import User from '../data/User';
class Admin extends User{
	constructor(){
	super();

	}
	createTrip(trip){
		this.storage.addTrip(trip);
	}
	
	letscancelTrip(trip){
		this.storage.cancelTrip(trip);

	}
	getTrip(){
		return {
			trip_id:this.trip_id,
			seating_capacity:this.seating_capacity,
			 origin: this.origin,
			 destination:this.destination,
			 trip_date:this.trip_date,
			 fare:this.fare
		}

	}

}
export default Admin;
// admin can create a trip
// cancel a trip
//can see all bookings