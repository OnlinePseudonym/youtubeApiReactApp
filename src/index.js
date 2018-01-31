import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyD0F_J3qTuY9TwVKBrSXw0cqSL4thKIC5c';

// Create a new component. This component should produce some HTML

const App = () => {
    return <div>Hi!</div>;
    // return React.createElement("div", null, "Hi!"); -- alternate syntax
}

// Take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));
