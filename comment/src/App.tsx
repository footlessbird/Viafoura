import React from "react";
import data from "./user.json";
import "./App.css";

import Comment from "./components/Comment";

function App() {
  const { user } = data;

  return (
    <>
      <ul>
        <Comment user={user} />
      </ul>
    </>
  );
}

export default App;
