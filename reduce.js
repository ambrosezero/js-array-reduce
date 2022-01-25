/*
Write a function called extractValue which accepts an array of objects and a key
 and returns a new array with the value of each object at the key.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
    extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/





// refer to the following for help: 
// https://www.youtube.com/watch?v=NiLUGy1Mh4U
// let newArr = [];
// return newArr = arr.reduce((accum, nextValue) => {
//     console.log(nextValue[key])

//     if (nextValue.hasOwnProperty(key) == key) return accum + nextValue[key]
//     console.log(nextValue)
//     console.log(accum)
//     return nextValue
// }, [])
// return newArr;
function extractValue(arr, key) {
    return arr.reduce((acc, obj) => ([...acc, obj[key]] || obj[key]), [])
}

/*
Write a function called vowelCount which accepts a string and returns an object 
with the keys as the vowel and the values as the number of times the vowel appears
 in the string. This function should be case insensitive so a lowercase letter and 
 uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/

function vowelCount(str) {
    // Array.from(str.toLowerCase())
    let strArr = Array.from(str.toLowerCase());
    return strArr.reduce((acc, letter) => {
        // ??????? the below line seems to know that letter is the letter being passed to it, 
        // ??????? but the next line reads letter as its own word, not the variable being passed into the function. 
        console.log(letter)
        return { ...acc, letter: (acc.letter || 0) + 1 };
    }, {})
}



/*
Write a function called addKeyAndValue which accepts an array of objects and returns 
the array of objects passed to it with each object now including the key and value 
passed to the function.

Examples:
    const arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];
    
    addKeyAndValue(arr, 'title', 'Instructor') // 
      [
        {title: 'Instructor', name: 'Elie'}, 
        {title: 'Instructor', name: 'Tim'}, 
        {title: 'Instructor', name: 'Matt'}, 
        {title: 'Instructor', name: 'Colt'}
       ]
*/

function addKeyAndValue(arr, key, value) {
    // let keyValuePair = {key: value}
    return arr.reduce((accum, obj) => {
        console.log({ ...obj, key: value })
        return [...accum, { ...obj, key: value }]
    }, [])
}



/*
Write a function called partition which accepts an array and a callback and returns an array 
with two arrays inside of it. The partition function should run the callback function on each
value in the array and if the result of the callback function at that specific value is true,
the value should be placed in the first subarray. If the result of the callback function at 
that specific value is false, the value should be placed in the second subarray. 

Examples:
    
    function isEven(val){
        return val % 2 === 0;
    }
    
    const arr = [1,2,3,4,5,6,7,8];
    
    partition(arr, isEven) // [[2,4,6,8], [1,3,5,7]];
    
    function isLongerThanThreeCharacters(val){
        return val.length > 3;
    }
    
    const names = ['Elie', 'Colt', 'Tim', 'Matt'];
    
    partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]
*/

function partition(arr, callback) { }















// BELOW IS NOT PART OF THE ASSIGNMENT 
// 
// 

const people = [
    { id: 1, name: "Leigh", age: 35 },
    { id: 2, name: "Jenny", age: 30 },
    { id: 3, name: "Heather", age: 28 },
];

let result;


result = people.reduce((acc, person) => acc + 1, 0);

result = people.reduce((acc, person) => acc + person.age, 0);

result = people.reduce((acc, person) => [...acc, person.name], []);

result = people.reduce((acc, person) => { return { ...acc, [person.id]: person } }, {})


result = people.reduce((acc, person) => {
    if (acc < person.age || acc === null) return person.age;
    // ????? WHY DOES THIS NOT WORK IF I DONT return acc AS IN THE FOLLOWING LINE, WHEN I DONT NEED TO RETURN IN SOME 
    // ABOVE FUNCTIONS?????
    return acc
}, null)

// find by name

result = people.reduce((acc, person) => {
    if (acc !== null) return acc;
    if (person.name === "Jenny") return person;
    return null
}, null)

// check if all over 18

result = people.reduce((acc, person) => {
    if (!acc) return false;
    return person.age > 18;
}, true)

// check if any over 18

result = people.reduce((acc, person) => {
    if (acc) return acc
    return person.age > 18;
}, false)



const orders = [
    { id: "1", status: "pending" },
    { id: "2", status: "pending" },
    { id: "3", status: "cancelled" },
    { id: "4", status: "shipped" },
]

// count occurences

// the following creates an object where each key is one of the status types in orders, 
// and that keys value is the number of incidents of that particular status type in orders 
result = orders.reduce((acc, order) => {
    // QUESTION 1) why does [order.status] give us two different values below? in the first case, it gives us the key,
    // and in the second case, it gives us that keys value
    // QUESTION 2)  why does OR work in this way? isn't OR a boolean operator? in this case, it returns one 
    // of two real values.
    return { ...acc, [order.status]: (acc[order.status] || 0) + 1 }
}
    , {})


const folders = [
    "index.js",
    ["flatten.js", "maps.js"],
    ["any.js", ["all.js", "count.js"]]
]


// QUESTION why is it neccessary to pass in the second reduce through a function?
function flatten(acc, item) {
    if (Array.isArray(item)) {
        return [...acc, ...item.reduce(flatten, [])];
    }
    return [...acc, item];
}

result = folders.reduce(flatten, []);






