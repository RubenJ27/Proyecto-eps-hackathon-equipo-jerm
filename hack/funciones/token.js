const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
require('dotenv').config();

function validarToken(req,res, next){
     const accessToken = req.headers['authorization'];
    if(!accessToken){
return res.json({"status":"DENEGADO"});
    } 
    jwt.verify(accessToken,process.env.SECRET,(err,user) =>{
      if(err) {
          res.json({"status":"DENEGADO",mensaje:'token invaalido o vencido'});

      }else{
          req.user = user;
          next();
      }
    })

}
module.exports.validarToken = validarToken;