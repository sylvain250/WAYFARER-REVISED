import Storage from './Storage';
import User from './User';

const user1 = new User();
const store = new Storage();

class NormalUser extends User {
  constructor() {
    super();

  }
 letsBookSeat(book) {
    this.Storage.addBooking(book);
  }

  letsDeleteBooking(book) {
    this.Storage.deletebooking(book);
  }
}
export default NormalUser;
const user = new NormalUser();
// can see all his bookings
user.letsBookSeat('book1234');
NormalUser.letsBookSeat('book1234');

console.log(`reached storage: ${store.bookings}`);
