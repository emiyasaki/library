var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function(){
    authRouter.route('/signup')
        .post(function(req, res){
            console.log(req.body);
        });
        
    return authRouter;
};

module.exports = router;