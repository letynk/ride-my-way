const express = require("express");
var bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const Port = "5000";

var rides = [
    {
      id: 1,
      driverName: "John Doe",
      price: "5000",
      destination: "kunduchi",
      carType: "Toyota",
      carNumber: "123DEF",
      status: "Available"
    },
    {
      id: 2,
      driverName: "Jane Doe",
      price: "5000",
      destination: "kunduchi",
      carType: "Mercedess",
      carNumber: "838DGF",
      status: "Available"
    },
    {
      id: 3,
      driverName: "Johnny Depp",
      price: "5000",
      destination: "Kigamboni",
      carType: "SUV",
      carNumber: "444MND",
      status: "Available"
    },

    {
      id: 4,
      driverName: "Henry Moshi",
      price: "8000",
      destination: "Kunduchi",
      carType: "Limo",
      carNumber: "329MND",
      status: "Available"
    }
  ];


// //retrieves list of ride offers
app.get("/api/v1/rides", (req,res) => {

  res.status(200).json({message: 'list was succefully retrieved!',rides});
});

//gets a specific rider offer
app.get("/api/v1/rides/:id", (req, res) => {
//   var query;
//   query = ride[req.params.id];
//   res.json(query);

  res.json(rides[req.params.id]);


});

//creates a ride offer
app.post("/api/v1/rides", (req, res) => {
  const rideOffer = {
    id: req.body.id,
    driverName: req.body.driverName,
    price: req.body.price,
    destination: req.body.destination,
    carType: req.body.carType,
    carNumber: req.body.carNumber,
    status: req.body.status
  };

  rides.push(rideOffer);

  res.status(200).json({message:'Object added succefully!',rides});
  // console.log("Object added succefully!");

});


//join ride 
app.post("/api/v1/rides/:id/:requests", (req, res) => {
  var rideRequestList = [
    {
      rideID: 1,
      request:"Join"
    },

    {
        rideID: 2,
        request:"Join"
       
    },

    {
        rideID: 7,
        request:"Join"
    }
  ];
  
  var rideRequest = {
    rideID: req.params.id,
    request: req.params.requests
  };

  rideRequestList.push(rideRequest);
  console.log(rideRequest);
  res.status(200).json({message:'ride request was sent!', rideRequestList});
});

// app.listen(process.env.PORT || 3000);
module.exports = app;

console.log("App listening on port " + Port);
