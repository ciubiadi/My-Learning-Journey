import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
  return <MyParagraph>{props.show ? "This is the paragraph" : ""}</MyParagraph>;
};

/* This is for functional components. For class based components it will not work. It allows us to optimize functional 
components. The method memo tells React for the component got as an argument, it should look at the props the component
gets and check the new value for all those props and compare with the previous value those props got. And only if a prop
changed the component should be re-eecuted and re-evaluated. Also, if the parent component changed but the prop values
for the current component  didn't change, the component execution will be skipped
But this optimization comes with a cost : the React needs to store previous values and also make the comparison.

*/
export default React.memo(DemoOutput);
