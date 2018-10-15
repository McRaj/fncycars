const express = require('express');
const app = express();

app.listen(8000, () => {
  console.log('Server started!');
});

app.route('/api/cars/:sort?').get((req, res) => {

	let cars = [{
			    	id: 1, 
			    	image:"assets/nsx.png", 
			    	name: "Acura NSX", 
			    	make: "Acura", 
			    	model: "NSX",
			    	year: 2018,
			    	available: "In Dealership"
			    },
			    {
			    	id: 2, 
			    	image:"assets/gtr.png", 
			    	name: "Nissan GTR", 
			    	make: "Nissan", 
			    	model: "GTR", 
			    	year: 2009,
			    	available: "Out of Stock"
			    },
			    {
			    	id: 3, 
			    	image:"assets/lfa.png", 
			    	name: "Lexus LFA", 
			    	make: "Lexus", 
			    	model: "LFA", 
			    	year: 2012, 
			    	available: "In Dealership"
    			},
    			{
			    	id: 4, 
			    	image:"assets/viper.png",
			    	name: "Dodge Viper SRT", 
			    	make: "Dodge", 
			    	model: "Viper", 
			    	year: 2017, 
			    	available: "In Dealership"
			    },
			    {
			    	id: 5, 
			    	image:"assets/vette.png", 
			    	name: "Chevrolet Corvette Z06", 
			    	make: "Chevrolet", 
			    	model: "Corvette", 
			    	year: 2016, 
			    	available: "In Dealership"
			    },
			    {
			    	id: 6, 
			    	image:"assets/911.png", 
			    	name: "Porsche 911 Turbo", 
			    	make: "porsche", 
			    	model: "911 Turbo", 
			    	year: 2015, 
			    	available: "In Dealership"
			    },
			    {
			    	id: 7, 
			    	image:"assets/gt.png", 
			    	name: "Mercedez GT", 
			    	make: "Mercedez-Benz", 
			    	model: "GT", 
			    	year: 2018, 
			    	available: "In Dealership"
			    },
			    {
			    	id: 8, 
			    	image:"assets/roadster.png", 
			    	name: "Tesla Roadster", 
			    	make: "Tesla", 
			    	model: "Roadster", 
			    	year: 2020, 
			    	available: "Unavailable"
			    },
			     {
			    	id: 9, 
			    	image:"assets/r8.png", 
			    	name: "Audi R8", 
			    	make: "Audi", 
			    	model: "R8 Coupe", 
			    	year: 2010, 
			    	available: "Out of Stock"
			    },
			    {
			    	id: 10, 
			    	image:"assets/m8.png", 
			    	name: "BMW M850i", 
			    	make: "BMW", 
			    	model: "M850i Coupe", 
			    	year: 2018, 
			    	available: "In Dealership"
			    }];

    if(req.params['sort'] === 'asc') {
		res.send(cars.sort((a,b) => (a.name > b.name) ? 1 : ((b.name < a.name) ? -1 : 0))); 
    } else if (req.params['sort'] === 'dsc') {
		res.send(cars.sort((a,b) => (a.name < b.name) ? 1 : ((b.name > a.name) ? -1 : 0))); 
    } else  if (req.params['sort'] === 'available'){
    	res.send(cars.sort((a,b) => (a.available > b.available) ? 1 : ((b.available < a.available) ? -1 : 0))); 
    } else {
    	res.send(cars);
    }
});
