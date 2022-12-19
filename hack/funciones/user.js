 const bcrypt = require('bcrypt')
 function encriptar (password ) {
     
     const saltRounds = 10;
    bcrypt.hash(password, saltRounds, (err, hashedPassword) =>{
        if (err){
            return err;
        }else{
             
           return  hashedPassword;
        }
    })


};


module.exports.encriptar = encriptar;