

class Storage {
  constructor() {

    this.users = [];
    this.trips = [];
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

