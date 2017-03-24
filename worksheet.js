//  Part I

// ----------------------------
// write your own forEach() function.
// your function should take an array and a callback as input.
// it should run the callback on each element in the array.
// ----------------------------
function forEach (arr, callback) {
  for (var i = 0; i < arr.length; i++) { callback(arr[i]) }
}

//  Part II
// ----------------------------
// write your own map() function.
// your function should take an array and a callback as input.
// it should return a new array, where every element in the
// original has been transformed by the callback. .
// ----------------------------
function map (arr, callback) {
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    newArray.push(callback(arr[i]))
  }
  return newArray
}

//  Part III
// ----------------------------
// write your own filter() function.
// your function should take an array and a callback as input.
// it should return a new array, where elements have been
// kept or excluded according to the callback.
// ----------------------------

function filter (arr, callback) {
  var newArray = []
  for (var i = 0; i < arr.length; i++) {
    if (callback(arr[i])) { newArray.push(arr[i]) }
  }
  return newArray
}

//  Part IV
// ----------------------------
// write your own reduce() function.

// this one's new. it should take an array, a callback and
// a starting value as input.

// calling .reduce() should combine all the elements of the
// array into a single value. the starting value tells what to
// start with.

// the callback should take as input a "running total" and
// an array element, in that order. it should return an update
// to the running total.

// look at the tests for clarification.
// ----------------------------
function reduce (arr, callback, startingVal) {
  var runningTotal = startingVal
  for (var i = 0; i < arr.length; i++) {
    runningTotal = callback(runningTotal, arr[i])
  }
  return runningTotal
}

//  HARD MODE
// ----------------------------
// using the built-in array.sort(), sort the following array
// of people by name
// ----------------------------

var people = [
    {name: 'Matt', alma_mater: 'Univ of Texas - Austin'},
    {name: 'Brian', alma_mater: 'Texas A&M'},
    {name: 'Jesse', alma_mater: 'Univ of Texas - Austin'},
    {name: 'Justin', alma_mater: 'Univ of Florida'}
]

people.sort(function(personA, personB) {
  var nameA = personA.name.toLowerCase()
  var nameB = personB.name.toLowerCase()
  return personA.name > personB.name
})
// ----------------------------
// Using array.map(), array.filter(), and array.sort() on the
// array below:
// - filter for customers whose first-names start with 'J',
// - map to their fullnames,
// - and then sort the items alphabetically by fullname

// store the resulting mapped, filtered, and sorted array
// under the variable name `newCustomers`. i'll look
// for that name in my tests.
// ----------------------------

var customers = [
    { first: 'Joe', last: 'Blogs'},
    { first: 'John', last: 'Smith'},
    { first: 'Dave', last: 'Jones'},
    { first: 'Jack', last: 'White'}
]


startsWithJ = customers.filter(function (customers) {
  if (customers.first.charAt(0) === 'J')
  return customers.first
})

function getFullName (customers) {
  return {
    fullname: (customers.first + ' ' + customers.last)
  }
}

var fullName = startsWithJ.map(getFullName)

var newCustomers = fullName.sort(function(personA, personB) {
  return personA.fullname > personB.fullname
})

console.log(newCustomers)
