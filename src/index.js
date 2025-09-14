import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Tip: ReactDom Used For Render
//jsx => can write html in javascript
//used virtual DOM => update any components that has changed
const data = (
  <h1>Hello Guys</h1>
)
//function components
function HelloComponents(){
  return <h1>Hello Guys From Function Component</h1>;
}
//class components
class HelloComponentsClass extends React.Component {
  render() {
    return <h1>Hello Guys From Class Component</h1>;
  }
}
//External Components => import from HelloExternalComponent.js files


const root = ReactDOM.createRoot(document.getElementById('root'));//create root 
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(data)
// root.render(<HelloComponents />)
// root.render(<HelloComponentsClass />)
// root.render(<HelloExternalComponent />)
// ReactDOM.render(<App />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
