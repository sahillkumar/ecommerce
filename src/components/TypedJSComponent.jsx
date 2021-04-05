import React from "react";

import words from "./words";
class TypedJS extends React.Component {
  componentDidMount() {
    const options = {
      strings: words,
      typeSpeed: 30,
      backSpeed: 50,
      loop: true,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
      <>
        <span
          style={{ whiteSpace: "pre" }}
          ref={(el) => {
            this.el = el;
          }}
        />
      </>
    );
  }
}
export default TypedJS;