class Booking {
    constructor(){
        this.id;
        this.trip_id;
        this.user_id;
        this.created_on;
    }
    setId = (id)=> this.id = id;
    settripId =  (trip_id)=> this.trip_id =trip_id;
    setuser_id = (user_id) => this.user_id = user_id;
    setcreated_on = (created_on) => this.created_on = created_on;
}
export default Booking;