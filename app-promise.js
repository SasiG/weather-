const yargs = require('yargs');
const axios = require('axios');
const argv = yargs
.options({
    address:{
        demand: true,
        describe: 'Weather Application',
        alias: 'a',
        string: true
    }
})
.help()
.argv;

var encodeAddress = encodeURIComponent(argv.address);

var geocodeUrl =  `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`;

axios.get(geocodeUrl).then((response) => {
	if(response.data.status ==='ZERO_RESULTS'){
		throw new Error('Unable to find the address')
	}
var lat = response.data.results[0].geometry.location.lat;
var lng = response.data.results[0].geometry.location.lng;
var weatherUrl = `https://api.darksky.net/forecast/a2dce971242de6fcda83b2cecdaa1ca4/${lat},${lng}`;
console.log(response.data.results[0].formatted_address);
return axios.get(weatherUrl);
}).then((response) => {
	var temperature = response.data.currently.temperature;
	var apparentTemperature = response.data.currently.apparentTemperature;
	console.log(`Is's currently ${temperature}. It feels like ${apparentTemperature}.`);
}).catch((e) => {
	if(e.code === 'ENOTFOUND'){
		console.log('Unable to connect to he API.')
	}else{
		console.log(e.message);
	}
});