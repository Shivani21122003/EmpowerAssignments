//profile
const profile = { 
  name: "Charlie", 
  age: 29, 
  address: { 
    city: "San Francisco", 
    zipcode: "94101" 
  } 
};
//upates
const updates = { 
  age: 30, 
  address: { 
    zipcode: "94109", 
    country: "USA" 
  } 
};
//Spread Operator
const mergedProfile = {...profile,...updates,address: {...profile.address,...updates.address}
};
console.log(mergedProfile);

