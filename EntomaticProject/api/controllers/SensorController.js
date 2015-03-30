/**
 * SensorController
 *
 * @description :: Server-side logic for managing Sensors
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  newSensor: function (req, res) {


    Sensor.create({latitude: req.body.latitude, longitude: req.body.longitude, mac: req.body.mac}).exec(function createCB(err, created) {

    if( err == null) {
      console.log('Created new sensor record with id '+ created.sensorId + ' at' + created.createDate);
      res.ok({sensorId: created.sensorId});
    }
     else {
      console.log(err);
      res.badRequest();
    }

    });

  }

};
