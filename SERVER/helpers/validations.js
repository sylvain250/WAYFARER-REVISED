import  from 'joi';
import User from '../models/User';
const user = new User();
const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
});
Joi.validate(data,schema,(err, value)=>{
    if(err){
        res.status(422).json({
            message: 'invalid inputs'
        })
        res.status(200).json({
            status:'success',
            data:{
                token: token,

                

            }

        })

    }
})