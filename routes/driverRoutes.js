'use strict';
module.exports=function(app){
    var driver=require('../controllers/driverController.js');

    app.route('/create_driver')
        .post(driver.create_driver);
    
    app.route('/list_drivers')
        .get(driver.list_drivers)

    app.route('/driver_operations/:driverId')
        .get(driver.read_driver)
        .put(driver.update_driver)
        .delete(driver.delete_driver);
}