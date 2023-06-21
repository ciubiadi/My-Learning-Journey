import React from "react";

const MyParagraph = (props) => {
  console.log("MyParageraph runs here");
  return <p>{props.children}</p>;
};

export default MyParagraph;
