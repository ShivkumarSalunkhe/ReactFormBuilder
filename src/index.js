import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder } from "cb-react-forms";

import "./styles.css";

function App() {
  return (
    <div>
      <FormBuilder onSubmit={data => console.log(data)} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
