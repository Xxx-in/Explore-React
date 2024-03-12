/* Execute: node Part1/src/4_JS_rest_spread_destructure.js */
// This file is exploring about ... operator, with can be used as Spread / Rest syntax
// and Destructuring which is used along with Spread 

let jsonObj = { name: "Alisa", age: 24, country: "England", gender: "Female" };
let array = [1, 2, 3, 4, 5];

// printRestParams(1, 2, 3, 4, 5);
// printRestParams({ name: "Angela" }, { name: "Bosco" }, { name: "Cassandra" }, { name: "Leia" });

// destructure(array);
// destructure(jsonObj);
// printSpreadParam(array);
// printSpreadParam(jsonObj);

equivalentSpreadSyntax();


/* ========================= REST SYNTAX ====================================================================== */
// Purpose: To gather the multiple remaining parameters into an array.
// Only used in function parameters 
function printRestParams(param1, param2, ...restParams) {
  console.log(`----- Enter printRestParams----- `);
  console.log(`isArray: ${Array.isArray(restParams)}`);
  console.log(`${restParams}`);
  restParams.forEach(element => {
    console.log(JSON.stringify(element));
  });
  console.log(`restParams[0]: ${restParams[0]}`);
}
// restParams = 

/* ===================== DESTRUCTURE & SPREAD SYNTAX=============================================================== */
// Destructure syntax
// Purpose: Extract specific key-value pairs within JSON Object based on given key name 
function destructure(iterable) {
  console.log(`********** Enter iterable ********** `);
  let isArray = Array.isArray(iterable);
  console.log(`isArray: ${isArray}`);
  if (isArray) {
    console.log("Destructure Array");
    const [first, second] = iterable;
    console.log(`first: ${first} \n second: ${second}`);
  }
  else {
    console.log("Destructure JSON Object");
    // extracted elements must be corresponding names of keys, else variable = undefined
    let keys = Object.keys(jsonObj);
    console.log(`keys: ${keys}\n keys[0]: ${keys[0]}\n keys[1]: ${keys[1]}`);
    // let { keys[0], keys[1], randomString} = iterable; -> cannot work
    // Computed value is not directly recognized as valid key identifier in object destructuring
    // Use square brackets to compute the property names dynamically during the destructuring assignment.
    let { [keys[0]]: first, [keys[1]]: second, country, randomString } = iterable;
    console.log(`Destructure by key:\nfirst: ${first}\nsecond: ${second}\ncountry: ${country}\nrandomString: ${randomString}`);
  }
}

/** 
  Destructuring is often used with Spread syntax
  When destructuring, we use spread syntax to describe the pattern of remaining individual elements to be extracted
**/

// Spread syntax
// Purpose: used to grabbing the remaining section as individual elements within an interable after destructured
// Can be used in various context: JSON objects, arrays, function params
// After grabbing, can only do reassignment and/or concatenation
// When using spread operator to grab subsection, the ... syntax must be the last element in the pattern
function printSpreadParam(spreadParam) {
  console.log(`===== Enter printSpreadParams ===== `);
  let isArray = Array.isArray(spreadParam);
  console.log(`isArray: ${isArray}`);

  if (Array.isArray(spreadParam)) {
    /* ARRAY */
    console.log("printSpreadParam Array");
    // destructure + grab partial section & reassign
    let [first, second, ...remaining] = spreadParam;
    console.log(`first: ${first} \n second: ${second} \n remaining: ${remaining} \nremaining[0]: ${remaining[0]}`);
    // concat
    // concatArray will be [a,b,c,a,b,c] instead of [[a,b,c], [a,b,c]]
    // since ... operator spreads the elements of the nested array as separate elements before forming new array
    let concatArray = [...remaining, ...remaining];
    console.log(`concatArray: ${concatArray}\n concatArray: ${concatArray[0]}`);
  }
  else {
    /* JSON OBJECT*/
    console.log("printSpreadParam JSON Object");
    // destructure + grab partial section & reassign
    // For JSON obj, spread operator grabs whatever that is remaining afetr destructure by key instead of order
    let { name, age, third, ...remaining } = spreadParam;
    console.log(`Extracted: ${JSON.stringify(name)} \n Extracted: ${JSON.stringify(age)} \n Extracted: ${JSON.stringify(third)} \n Extracted: ${JSON.stringify(remaining)}`);
    // concat
    let concatObj = { ...remaining, ...remaining };
    console.log(`concatObj: ${JSON.stringify(concatObj)},\nconcatObj.country: ${concatObj.country}`); // Note: concatObj === remaining, since  JSON object cannot have duplicate key
    let concatObj2 = { ...remaining, key_X: "x", key_Y: "y" };
    console.log(`concatObj2: ${JSON.stringify(concatObj2)}, \nconcatObj2.country: ${concatObj2.country} `);
  }
}

// let {_,_} = jsonObj === let {_,_} = {...jsonObj}
function equivalentSpreadSyntax() {
  let json = { name: "Pierre", age: 12, country: "France", gender: "Male" };
  var { name, age } = { ...json };
  console.log(`Check equivalent spread syntax when assignment #1\n name:${name}, age:${age}`);
  var { name, age } = json;
  console.log(`Check equivalent spread syntax when assignment #1\n name:${name}, age:${age}`);
}