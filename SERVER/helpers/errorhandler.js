
const errorHandling = (req,res, next)=>{
    if(typeof(err)=== 'string'){
        // customize application error
        return res.status(400).json({message: err});
    }
    if(err.name === 'UnauthorizeError'){
        //authentication error
        return res.status(401).json({message:'your token is not valid'});
    }

}
export default errorHandling;