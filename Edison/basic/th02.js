var five = require("johnny-five");
var Edison = require("edison-io");
var board = new five.Board({
  io: new Edison()
});

board.on("ready", function() {

  // Plug the TH02 Barometer module
  // into an I2C jack
  var multi = new five.Multi({
    controller: "TH02",
    freq: 1000
  });

  multi.on("change", function() {
    console.log("temperature");
    console.log("  celsius           : ", this.temperature.celsius);
    console.log("  fahrenheit        : ", this.temperature.fahrenheit);
    console.log("  kelvin            : ", this.temperature.kelvin);
    console.log("--------------------------------------");

    console.log("Hygrometer");
    console.log("  relative humidity : ", this.hygrometer.relativeHumidity);
    console.log("--------------------------------------");
  });
});
// @markdown
// For this program, you'll need:
//
// ![Intel Edison Arduino Breakout](https://cdn.sparkfun.com//assets/parts/1/0/1/3/9/13097-06.jpg)
//
// ![Grove Base Shield v2](http://www.seeedstudio.com/depot/images/product/base%20shield%20V2_01.jpg)
//
// ![Grove - Temperature&Humidity Sensor (High-Accuracy & Mini)](https://github.com/rwaldron/johnny-five/raw/master/docs/breadboard/multi-TH02.png)
//
// - [Grove - Temperature&Humidity Sensor (High-Accuracy & Mini)](http://www.seeedstudio.com/depot/Grove-TemperatureHumidity-Sensor-HighAccuracy-Mini-p-1921.html)
//
// @markdown