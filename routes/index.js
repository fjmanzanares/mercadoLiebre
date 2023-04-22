const express = require('express');
const router = express.Router();
// OJO faltan los controladores
router.get('/', function(req, res, next)    
{
    res.render('index', {title: 'Express'});
});

router.get('pruebaSession' function (req, res){
   if (req.session.numeroVisitas == undefined){
     req.session.numeroVisitas = 0;
   }
   req.session.numeroVisitas++;
    res.send('Session tiene el numero: ' + req.session.numeroVisitas)
});

router.get('mostrarNumeroSession' function (req, res){
    res.send('Session tiene el numero: ' + req.session.numeroVisitas)
})