const forcast = require("./weather");
const geocode = require("./geocode")

const address = process.argv[2];
geocode ( address , (error, data) => {
    console.log('ERROR : ', error);
    console.log('DATA : ', data);
    if(data && address){
        forcast(data.longtitude, data.latitude, (error, data) => {
            console.log("ERROR : ", error);
            console.log("DATA : ", data);
          });
    }else if(data === undefined){
        console.log(error)
    }else{
        console.log('You need to enter a valid address')
    }
})

