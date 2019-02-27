'use strict';

var db=require('mongoose'),
    Driver=db.model('Drivers');

exports.list_drivers=function(req, res){
    Driver.find({},function(err, driver){
        if(err)
            res.send(err);
        res.json(driver);
    });
};

exports.create_driver=function(req, res){
    var driver_new=new Driver(req.body);
    driver_new.save(function(err, driver){
        if(err)
            res.send(err);
        res.json(driver);
    });
};

exports.read_driver=function(req, res){
    Driver.findById(req.params.driverId,function(err, driver){
        if(err)
            res.send(err);
        if(!driver)
            return res.status(404).send("Driver not found!");
        res.json(driver);
    });
};

exports.update_driver=function(req, res){
    Driver.findOneAndUpdate({_id: req.params.driverId}, req.body, {new: true}, function(err, driver){
        if(err)
            res.send(err);
        res.json(driver);
    });
};

exports.delete_driver=function(req, res){
    Driver.deleteOne({_id: req.params.driverId}, function(err, driver){
        if(err)
            res.send(err);
        res.json({message: 'Delete operation successful.'});
    });
};