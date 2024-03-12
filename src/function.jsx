// Pre-read: object_iterator_function.js
// Use array iterator objects to dynamically generate components

let arr = [
  { Name: "Alisa", Age: 24, Hobby: "Swimming" },
  { Name: "Mia", Age: 13, Hobby: "Dancing" },
  { Name: "Julian", Age: 15, Hobby: "Reading" },
];

let filterArr = arr.filter(function (item) { return item.Age >= 15; });

// return keyword not needed for arrow function expression
const buildListArr = arr.map(person => <li>{person} </li>);

// require `return` keyword if there is {} after => 
const buildListFilteeArr = filterArr.map(person =>  return { < h5 > This is { person.Name; }.</h5 > <p>{person.Age} years old; Loves {person.Hobby}</p >; });

// Use map() to build component
function DynamicGeneratedProps() {
  return (
    const listItems = people.map(person => <li>{person} < /li>);
    )
};

    // For each dynamically generated component, assign a key to the root component for latter render


    export default DynamicGeneratedProps;;