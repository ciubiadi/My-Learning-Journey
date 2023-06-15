/* This component will replace wrapping divs. So basically is for less unnecessary html code
 It works exactly as React.Fragment, so we will use Fragment  */

const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
