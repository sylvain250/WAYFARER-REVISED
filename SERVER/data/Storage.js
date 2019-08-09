

class Storage {
  constructor() {

    this.users = [];
    this.trips = [{id:1,
      seating_capacity:40,
      origin:'kigali',
      destination:'bujumbura',
      trip_date: Date,
      fare: 20,
      status:2.3},

      {id:3,
        seating_capacity:40,
        origin:'kigali',
        destination:'butare',
        trip_date: Date,
        fare: 40,
        status:2.3},
        {id:4,
          seating_capacity:40,
          origin:'kigali',
          destination:'muhanga',
          trip_date: Date,
          fare: 60,
          status:2.3
        }];
    this.bookings = [];
  }

  addUser(user) {
    this.users.push(user);
  }

  addTrip(trip) {
    this.trips.push(trip);

  }

  addBooking(book) {

    this.bookings.push(book);
  }

  deletebooking(book) {
    const del = this.bookings.length;
    for (let i = 0; i <= del; i++) {
      if (this.bookings[i] === book) {
        this.bookings.splice(i, 1);
        break;
      }

    }

  }

  cancelTrip(trip) {
 	const cancel = this.trips.length;
 	for (let i = 0; i <= cancel; i++) {
 		if (this.trips[i] === trip) {
 			this.trips.splice(i, 1);
 			break;
 		}
    }
  }
}

export default Storage;

