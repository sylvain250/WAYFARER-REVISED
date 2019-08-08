import jwt from 'jsonwebtoken';
const PRIVATE_KEY = 'signhimup';

export const generateToken = (payload) => {return jwt.sign(payload,PRIVATE_KEY);}
// export const verifyToken = (token) => {
//   jwt.verifyToken(token,PRIVATE_KEY,(err,decode)=>{
//     if(err){
//       if(err){
//         res.status(401).json({
//              message: 'Authentication failed'
//            })
//     }else {

//     }
//   }
// }
// let name = 'xyz';
// console.log(generateToken(name));
// const token = jwt.sign({email,password},PRIVATE_KEY);

// jwt.verify(token,'signhimup', (err,decode)=>{

//   if(err){
//     res.status(401).json({
//       message: 'Authentication failed'
//     })
//   }else {

//   }
// })


// export default jwt;

// const user=[{
//   id: 1,
//   email: 'sylicarter@gmail.com',
//   last_name:'carter',
//   password: 'therethe2019',
//   is_admin: "false"
// }];
// console.log(generateToken(user));