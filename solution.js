//task -1 
let euroCities = ["Paris", "London", "Valletta", "Prague", "Rome"];

let secondCity = euroCities[1];
console.log(secondCity);

//task-2

euroCities[0]='Berlin';
//task -3 Print the length of the array euroCities.

console.log("length of euroCities is :",euroCities.length);
//task -4 Remove the last item of the array euroCities.
console.log(euroCities);
euroCities.pop();
console.log(euroCities);

//task -5 Use an array method to add "Budapest" to the end of the euroCities array.
euroCities.push('Budapest');
console.log(euroCities);

//task - 6 Create another variable named asianCities and assign an array of at least 5 cities to the variable.
 let asianCities=['Mumbai', 'Singapore','Dubai','Bangkok','Tokyo'];
 console.log(asianCities);

 //task -7
const worldCities = asianCities.concat(euroCities);
 console.log("7.",worldCities);

 //task- 8
 console.log('reverse order of str:',worldCities.reverse())


 //task -9
 console.log(euroCities);
 euroCities.splice(2,1)
 console.log(euroCities);

 //task-10
 console.log(asianCities);
 const asianCitiesPart= asianCities.slice(1,4);
 console.log(asianCitiesPart);

 //task -11
 console.log(worldCities);
 worldCities.splice(2,1,'Toronto')
 console.log(worldCities);

 //task -12 
 worldCities.splice(1,0,'Washington')
 console.log(worldCities);

 //task -13
 
 console.log('array to str',worldCities.join(','));
 

 ///Bonus tasks
 let intro = 'Hello World';
 console.log("reverse into string:",intro.split('').reverse().join());


 //extra practice 

 const mysiblings = ["sis", "bro"];
 const myParents = ["papa", "mumma"];
 const myFamily = mysiblings.concat(myParents);

 myFamily.unshift('coco');
 console.log(myFamily);
 console.log(myFamily.reverse());
 myFamily[1]="daddy-cool";
 console.log(myFamily);
