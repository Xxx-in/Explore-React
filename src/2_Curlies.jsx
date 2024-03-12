/* eslint-disable react/no-unescaped-entities */
// {} vs {{}} in JSX
// Curlies vs Double Curlies

const baseUrl = "https://i.imgur.com/";
const person = {
  name: "Gregorio Y. Zara",
  imageId: "7vQD0fP",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

function TodoList() {
  return (
    <>
      {/* // Note: Automatic concatenation of adjacent JSX expressions happens specifically for text content within JSX elements.       */}
      <p>
        {baseUrl}+{person.imageId}+{person.imageSize}+".jpg"
      </p>
      <p>
        {baseUrl}
        {person.imageId}
        {person.imageSize}.jpg
      </p>

      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          // src={baseUrl}{person.imageId}{person.imageSize}".jpg"
          // Note: Automatic concatenation of adjacent JSX expressions happens specifically for text content within JSX elements.
          alt={person.name}
        />
        <img
          className="avatar"
          src={`${baseUrl}${person.imageId}${person.imageSize}.jpg`}
          alt={person.name}
        />
        <img
          className="avatar"
          src={baseUrl + person.imageId + person.imageSize + `.jpg`}
          alt={person.name}
        />
        <ul>
          <li>Improve the videophone</li>
          <li>Prepare aeronautics lectures</li>
          <li>Work on the alcohol-fuelled engine</li>
        </ul>
      </div>
    </>
  );
}

export default TodoList;
