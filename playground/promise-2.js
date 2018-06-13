const request = require('request');

var geocodeAddress = (address) => {
    return new Promise((resolve, rejecy) => {
        var encodeAddress = encodeURIComponent(address);
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
            json: true
        }, (error, rsponse, body) => {
            if (error){
                reject('Addres not found');
            }else if(body.status === 'ZERO_RESULTS'){
                reject('There are no results for this address');
            }else if(body.status === 'OK'){
                resolve({
                    Address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
            
        });
  
    })
   
};
geocodeAddress('21532').then((location) => {
console.log(JSON.stringify(location, undefined, 2));
},(errorMessage) => {
    console.log(errorMessage)
});