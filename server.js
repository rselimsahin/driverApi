var express=require('express'),
    app=express(),
    port=process.env.PORT || 1058,
    db=require('mongoose'),
    Driver=require('./models/driverModel'),
    parser=require('body-parser');

db.Promise=global.Promise;
db.connect('mongodb://localhost/driver_db')

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

var routes=require('./routes/driverRoutes');
routes(app)

app.listen(port);
console.log("Server is running...")