 import Storage from './Storage';
 const store = new Storage();
class User{
	constructor(){
		this.id;
		this.email;
		this.first_name;
		this.last_name;
		this.password;
		this.is_admin;
		 this.storage = new Storage();
	}
	setId(id){
		this.id = id;
	}
	setFname(first_name){
		this.first_name = first_name;
	}
	setLname(last_name){
		this.last_name = last_name;
	}
	setUserEmail(email){
		this.email = email;
	}
	setPwd (password){
		this.password = password;
	}
	setadmin(is_admin){
		this.is_admin = is_admin;
	}
	
	signUp(user) {
		this.storage.addUser(user);
	}
	
	signIn(email,password){

	}
	getUser(){
		return {
			firstName: this.first_name,
			lastName: this.last_name,
			mail: this.email,
			isAdmin: this.is_admin
		}


	}
	getSpecificTrip(trip){
		this.storage.showSpecificTrip(trip);
	}



}

export default User;
// they both can see all trips
//or see a specific trip
//sign in and sign up
