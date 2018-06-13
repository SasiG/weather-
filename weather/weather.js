const request = require('request');

var getWeather = (lat, lng, callback) =>{
    request({
        url: `https://api.darksky.net/forecast/a2dce971242de6fcda83b2cecdaa1ca4/${lat},${lng}`,
        json: true
    }, (error, response, body) =>{
        if(!error && response.statusCode === 200){
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }else{
            callback('Unable to fetch the Temperature');
        }
    
    });
}

module.exports.getWeather = getWeather;