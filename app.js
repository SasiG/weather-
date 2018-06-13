const yargs = require('yargs');
const geocode =  require ('./geocode/geocode');
const weather = require('./weather/weather');
const argv = yargs
.options({
    address:{
        demand: true,
        describe: 'Weathe Application',
        alias: 'a',
        string: true
    }
})
.help()
.argv;
geocode.geocodeAddress(argv.address, (errorMessage, result) =>{
    if(errorMessage){
        console.log(errorMessage);
    }else{
        console.log(result.Address);
        weather.getWeather(result.latitude,result.longitude, (errorMessage, weatherResult)=>{
            if(errorMessage){
                console.log(errorMessage);
            }else{
                console.log(`It's currentyly ${weatherResult.temperature}. it feels like${weatherResult.apparentTemperature}`);
            }
         });
        
    }
});
 
