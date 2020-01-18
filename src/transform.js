// Assignment 2

// Desired output:
// One object, with age groups as keys and array as properties

// Source array for Testing purposes
const persons =[
  { name: "pete", age: 10 },
  { name: "dove", age: 17 },
  { name: "dave", age: 18 },
  { name: "hall", age: 19 },
  { name: "donn", age: 20 },
  { name: "trey", age: 21 },
  { name: "hann", age: 29 },
  { name: "chew", age: 30 },
  { name: "cloe", age: 31 },
  { name: "dart", age: 39 },
  { name: "this", age: 40 },
  { name: "dame", age: 41 },
  { name: "henk", age: 49 },
  { name: "anna", age: 50 },
  { name: "olga", age: 51 },
  { name: "bert", age: 52 },
  { name: "oldd", age: 120 },
]

// To do:
// 1: create destination object
// 2: create filtering logic (filter method)
// 3: place filtered groups into destination object (use destination object as initial accunulator from reduce)

groupAdultsByAgeRange = function () {
  // defining destination object
  const grouped = {
    '20 and younger' : [],
    '21-30':[],
    '31-40':[],
    '41-50':[],
    '51 and older':[],
  }
 
  const result = persons.filter(function(person) {
    return (person.age > 18 && person.age <= 20)  
  })
  const result2 = persons.filter(function(person) {
    return (person.age > 21 && person.age <= 30)  
  })
  const result3 = persons.filter(function(person) {
    return (person.age > 31 && person.age <= 40)  
  })
  const result4 = persons.filter(function(person) {
    return (person.age > 40 && person.age <= 50)  
  })
  const result5 = persons.filter(function(person) {
    return (person.age > 50)  
  })
  console.log (result)
  console.log (result2)
  console.log (result3)
  console.log (result4)
  console.log (result5) 
}
groupAdultsByAgeRange()

// Next; trying to fit the filtered arrays in the destination object
// return people.reduce(function(person){
// }, grouped)


// TODO; not functional

// groupAdultsByAgeRange = function () {
    
//   // defining destination object
//   const grouped = {
//     '20 and younger' : [],
//     '21-30':[],
//     '31-40':[],
//     '41-50':[],
//     '51 and older':[],
//   }
//   return persons.reduce(function(person){
//     persons.filter(function(person) {
//     return person.age > 18 && person.age <= 20}
//   // })
//   // const result2 = persons.filter(function(person) {
//   //   return (person.age > 21 && person.age <= 30)  
//   // })
//   // const result3 = persons.filter(function(person) {
//   //   return (person.age > 31 && person.age <= 40)  
//   // })
//   // const result4 = persons.filter(function(person) {
//   //   return (person.age > 40 && person.age <= 50)  
//   // })
//   // const result5 = persons.filter(function(person) {
//   //   return (person.age > 50)  
//   // })
//   console.log (result)
//   console.log (result2)
//   console.log (result3)
//   console.log (result4)
//   console.log (result5) 
// }, grouped)
// console.log (grouped)
// })
// }

// groupAdultsByAgeRange()

module.exports = groupAdultsByAgeRange

