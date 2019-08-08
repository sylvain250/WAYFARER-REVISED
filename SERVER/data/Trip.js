 import Storage from './Storage';
 const store = new Storage();
class Trip{
    constructor(){
        this.id;
        this.seating_capacity;
        this.licence_number;
        this.origin;
        this.destination;
        this.trip_date;
        this.fare;
        this.status;
    }
    setId (id){
        this.id = id;
    }
    setSeatinCapacity (seating_capacity) {
        this.seating_capacity = seating_capacity; 
        }
    setLicenceNumber (licence_number) {
        this.licence_number = licence_number;
        } 
    setOrigin (origin) {
        this.origin = origin;
    } 
    setDestination (destination) {
        this.destination = destination;
        } 
    setTripDate(trip_date) {
        this.trip_date = trip_date;
        } 
    setFare(fare){
        this.fare = fare;
        }
    setStatus (status){
      this.status = status;
    }
    
}
export default Trip;

