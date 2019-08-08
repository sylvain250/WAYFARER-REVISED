import User from '../data/User';
import { generateToken } from '../helpers/token';

export const signup = (req,res) => {
    const user = new User();
    console.log('reqData: ');
    console.log(req.body);
    //get the request data
        let email = req.body.email;
        let first_name = req.body.first_name;
        let last_name = req.body.last_name;
        let  password = req.body.password;
        let is_admin = req.body.is_admin;

    //set user
    user.setUserEmail(email);
    
    user.setFname(first_name);
    user.setLname(last_name);
    user.setPwd(password);
    user.setadmin(is_admin);
    user.signUp();
    let userData = user.getUser();
    userData.token = generateToken({email,first_name,is_admin});
    res.status(201).send({
        status: res.statusCode,
        message: 'Successfully registered!',
        data: userData
    });
    //passing response
}
export const signin = (req,res) => {
    const user = new User();
    let first_name = req.body.first_name;
    let last_name = req.body.last_name;
    let email = req.body.email;
    let  password = req.body.password;

    user.setFname(first_name);
    user.setLname(last_name);
    user.setUserEmail(email);
    user.setPwd(password);
    user.signIn();
    let userData = user.getUser();
    userData.token = generateToken({email,password});
    res.status(201).send({
        status: res.statusCode,
        message:"You are now logged in",
        data:userData


    });
    
}