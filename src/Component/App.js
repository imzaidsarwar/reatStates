import React from "react";

function state() {
  document.getElementById("root").style.textDecoration = "line-through";
  document.getElementById("root").style.textDecorationColor = "red";
}
function unstate() {
  document.getElementById("root").style.textDecoration = null;
}
function App() {
  return (
    <div>
      <p>Buy Milk</p>
      <button onClick={state}>Change State</button>
      <button onClick={unstate}>UnChange State</button>
    </div>
  );
}

export default App;
