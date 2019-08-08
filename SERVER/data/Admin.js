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

}
export default Admin;
// admin can create a trip
// cancel a trip
//can see all bookings