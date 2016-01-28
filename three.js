var thing = require("lodash");

var worker = function(cities) {
    return thing.forEach(cities, function(city) {
      if (city.population > 1) {
        city.size = 'big';
      }

      else if (city.population > 0.5) {
        city.size = 'med';
      }

      else {
        city.size = 'small'
      };
    })
};

module.exports = worker;
