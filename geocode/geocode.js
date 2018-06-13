const request =require('request');

var geocodeAddress = (address, callback) =>{
    var encodeAddress = encodeURIComponent(address);
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
        json: true
    }, (error, rsponse, body) => {
        if (error){
            callback('Addres not found');
        }else if(body.status === 'ZERO_RESULTS'){
            callback('There are no results for this address');
        }else if(body.status === 'OK'){
            callback(undefined,{
                Address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
        
    });
};

module.exports.geocodeAddress=geocodeAddress;


//a2dce971242de6fcda83b2cecdaa1ca4