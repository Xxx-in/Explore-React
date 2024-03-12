// JS vs JSX
// How to identify when code is JS sytax vs JSX syntax
// Rule of thumb: All code in .jsx file is JS; only code in <> is JSX

//Resolving value
//In JSX: {_JS_Expression_} 
//In JS: `${}` -> template literal
//|_ JSX don't support resolving template literal as JS expression


// Note: JSX don't have computational ability
// Automatic concatenation of adjacent JSX expressions happens only for text content within JSX elements


let name = 'Elaine';
let age = 24;

function IdentifyJSvsJSX() {
  alert(`Name: ${name}\n Age:${age}\n ${name}${age}`); // JS syntax
  // console.log(`Destructured #2\n Name: name, Age: age, Country: country`); // treat as 1 string
  // console.log('Destructured #3\n Name: {name}, Age: {age}, Country: {country}'); // values undefined due to wrong resolving method

  return (
    // JSX syntax
    <div id="testIdentifyJSvsJSX">
      <h3>Identify JS vs JSX</h3>
      <p>{name}{age}</p> {/* JSX can concat text content */}
      <img alt={name}></img>
      {/* <img alt={name}{age}></img>  */} {/* Error: concat cannot happen in non text content */}
      <br />
      <img alt={`The girl named` + name}></img> {/* In JSX, concat should be done within {} for evaluating JS expression */}
      <p>Age: {`${age}`}</p>
      <img alt={`The girl of age ${age}`}></img>
    </div>
  );
}

export default IdentifyJSvsJSX;