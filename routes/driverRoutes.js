'use strict';
module.exports=function(app){
    var driver=require('../controllers/driverController.js');

    app.route('/drivers')
        .get(driver.list_drivers)
        .post(driver.create_driver);
    
    app.route('/drivers/:driverId')
        .get(driver.read_driver)
        .put(driver.update_driver)
        .delete(driver.delete_driver);
}