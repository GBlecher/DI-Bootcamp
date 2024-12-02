/*Daily challenge: Car Inventory */

// Part I
// const inventory = [
//   { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
//   { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
//   { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
//   { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
//   { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
// ];

// function getCarHonda(carInventory)
// {
//     let hondas = carInventory.filter(car=> car.car_make === "Honda" )
//     let firstHonda = hondas[0]
//     return `This is a ${firstHonda.car_make} ${firstHonda.car_model} from ${firstHonda.car_year}.`
// }

// console.log(getCarHonda(inventory))


// Part II

// Create a function sortCarInventoryByYear(carInventory) that takes a single parameter. carInventory‘s value is an array which is an inventory of cars (see the array of objects below)
// the function should return an inventory that is sorted by car_year, ascending.
// Hint : Check out this tutorial on the sort method
// Use the cars inventory below:

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
  ];
  
  function sortCarInventoryByYear(carInventory) 
  {
      carInventory.sort((a,b) => a.car_year - b.car_year)
      return carInventory
  
  }
  console.log(sortCarInventoryByYear(inventory))
  