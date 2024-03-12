// Using {} when passing in props
// Pre-reading: rest_spread_destructure.js


// 1 - When passing in function component:
// a. string literal: x="string"
// b. JSON Object: {_} -> But JSON object will be wrapped in another layer of JSON with resultant structure {x: {...}}
// |_ to avoid wrapping, pass with spread: {..._}
// c. value: x={}
/* NOTE: Context of {} is different in JSON vs value
*  - With JSON: act as declaring another JSON object
*  - With value: act as open window for JS expression computation
*/

// 2 - When access props within function
/* NOTE: how to access props in function depends on how props is passed in */
/* NOTE: React Component function only receives 1 single input param: 1 props object */
// Passing in:
// a. spread JSON object as props + access by destructured {}
// |_ ex. <ReactComponent {...jsonObj}> && function _ ({key1, key2, key3}
// |_ When destructure JSON object by key in function, can only access value when key is defined
// b. props object + access by dot notation (.)
// |_ ex. <ReactComponent key1=value1 key2=value2> && function _ (props)

function ObjectAsProps() {
  console.log(`commonProps: ${JSON.stringify(commonProps)}`); // NOTE[JS]: When print, `state` key should be missing due to assigned value == undefined
  console.log(`commonProps.state: ${commonProps.state}`); //NOTE[JS]: value = undefined

  return (
    /* Pt 1 */
    <div id="testPassObjectsAsProps">
      <CheckProps {...commonProps} />
      <CheckProps commonProps={commonProps} /> {/* All value is undefined, since all values are nested under props.commonProps, not props */}
      <CheckProps name="Jane"
        age={commonProps.age}
        country="Philipppines"
        isAdmin={false}
      />
      <CheckPropsDecon {...commonProps} />
      <CheckPropsDecon commonProps={commonProps} /> {/* All value is undefined, since all values are nested under props.commonProps, not props */}
      <CheckPropsDecon name="Jane"
        age={commonProps.age}
        country="Philipppines"
        isAdmin={false}
      />
      <CheckPropsManualDecon {...commonProps} />

      {/* Pt 2 */}

    </div>
  );
}

const commonProps = {
  name: "Carol",
  age: 11,
  isAdmin: true,
  country: "Canada",
  state: undefined, // NOTE[JS]: In JSON object, key with undefined value will not be stored. When access, value = undefined -> treated as key not found
  city: null
};


const CheckProps = (props) => {
  console.log(`checkProps:\n ${JSON.stringify(props)}`);
  <div id="checkProps">
    <h2>CheckProps</h2>
    <p>Name: {props.name}</p>
  </div>;
};


const CheckPropsDecon = ({ name, age }) => {
  console.log(`checkPropsDecon:\n name:${name}, age:${age}`);
  return (
    <div id="checkPropsDecon">
      <h2>CheckPropsDecon</h2>
      <p>Name: {name}</p>
    </div>
  );
};

// CheckPropsDecon is equivalent to CheckPropsManualDecon but using destructure to dynamically extract values within JSON object
const CheckPropsManualDecon = (props) => {
  // let { name, age } = { ...props }; // using destructure property
  let { name, age } = props; // equivalent as above

  let name2 = props.name; // using manual extraction of value with dot notation (.)
  let age2 = props.age;

  console.log(`checkPropsManualDecon#1:\n name:${name}, age:${age}\n name2:${name}, age2:${age}\n`);
  return (
    <div id="checkPropsManualDecon#2">
      <h2>checkPropsManualDecon</h2>
      <p>Name: {name}</p>
      <p>Name2: {name2}</p>
    </div>
  );

};
export default ObjectAsProps;