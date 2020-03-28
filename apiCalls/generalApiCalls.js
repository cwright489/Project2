var sdkClient = require('../api_SDK/astro-api-nodejs-client-master/sdk/sdk');


var data = {
    'date': 10,
    'month': 12,
    'year': 1993,
    'hour': 1,
    'minute': 25,
    'latitude': 39,
    'longitude': -104,
    'timezone': 5.5
};

var resource = "general_ascendant_report/tropical";

sdkClient.call(resource, data.date, data.month, data.year, data.hour, data.minute, data.latitude, data.longitude, data.timezone, function(error, result){

    if(error)
    {
        console.log("Error returned!!");
    }
    else
    {
        console.log('Response has arrived from API server --');
        console.log(result);
    }
});