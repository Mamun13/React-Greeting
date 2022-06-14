import React from "react";
import ReactDOM  from "react-dom";
import "../src/index.css";

let curDate = new Date();
curDate = curDate.getHours();
let greeting= "";
const cssStyle ={};

if(curDate > 1 && curDate < 12){
  greeting = "Good Morning";
  cssStyle.color = "green";
}else if(curDate >= 12 && curDate < 20){
  greeting = "Good Afternoon";
  cssStyle.color = "yellow";
}else{
  greeting = "Good Night";
  cssStyle.color = "red";
}

ReactDOM.render(
  <h1 className="heading">Hello sir, <span style={cssStyle}>{greeiniting}</span> </h1>,
  document.getElementById("root")
);
