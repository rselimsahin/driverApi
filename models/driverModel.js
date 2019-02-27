'use strict';
var db=require('mongoose');
var Schema=db.Schema;

var DriverSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    score:{
        type:Number,
        default:0
    }
});

module.exports=db.model('Drivers', DriverSchema);