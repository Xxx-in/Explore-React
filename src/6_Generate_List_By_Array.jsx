// Pre-read: object_iterator_function.js
// Using array to generate content of List component

let arr = [
  { Name: "Alisa", Age: 24, Hobby: "Swimming" },
  { Name: "Mia", Age: 13, Hobby: "Dancing" },
  { Name: "Julian", Age: 15, Hobby: "Reading" },
  // { Name: "Alisa", Age: 32, Hobby: "Writing" } 
  // 1.2 - When using person.Name as key of Component, cause error since not allowed to have duplicate key among siblings
];

// 1 - Use map() to iterate through each element & apply function to each element
// Returns an array of resultant outcome from applying funcion to each element
// In React, we can define the function to build (parts of) components with element
const buildListArr = arr.map(person => (
  <li key={person.Name}>  {/* 1.2 - When using array to bulk generate React component, must add a unique key to the generated root component */}
    <p>
      <b>{person.Name}:</b>
      {' Age: ' + person.Age}
      Loves to {person.Hobby}
    </p>
  </li >
));
// 1.2 - The dynamically generated component is going to be rendered as child component under another parent component
// Reason to assign key: Allow differentiation among sibling components for rendering latter changes
// |_ i.e., View console log -> without an ID, we cannot address child components & modify them accordingly
// Key names must be unique within sibling components; can reuse name for props in a different parent component
// Key names must be constant -> cannot be open to modification during rendering, else we cannot address back same component with same name


// 2 - Use filter() to select specific elements from array whcih fulfill predicate condition before generating content
// return _ must be a predicate statement
let filterArr1 = arr.filter(item => { return item.Age >= 20; });
let filterArr2 = arr.filter(item => item.Age >= 15); // Arrow syntax: for multi-line inner function, use => {... return ...}

const buildFilterListArr1 = filterArr1.map(person => {
  return (
    <li key={person.Name}>
      <p>
        <b>{person.Name}:</b>
        {' Age: ' + person.Age}
        Loves to {person.Hobby}
      </p>
    </li>
  );
});

// 3 - Fit generated sub-component within parent component 
function DynamicGeneratedProps() {
  return (
    <div>
      <hr />
      <h1>Pt 5: Dynamic Generated Props with Array </h1>
      <h3>Map()</h3>
      <ul key="generatedWithList">
        {buildListArr}
        {buildFilterListArr1}  {/* 1.2 - Not allowed to have duplicate names among siblings */}
      </ul>
      <br />
      <h3>Filter() before Map()</h3>
      <ul key="generatedWithFilter">
        {buildFilterListArr1}
      </ul>
    </div >
  );
}

export default DynamicGeneratedProps;