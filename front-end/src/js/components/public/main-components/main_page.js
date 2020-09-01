import React, { Component } from "react";
import * as Scroll from "react-scroll";

import Section_One from "../sub-components/body_sections/section_one";
import Section_Two from "../sub-components/body_sections/section_two";
import Section_Three from "../sub-components/body_sections/section_three";

class Main_Page extends Component {

  render() {
    return (
      <div className="body-container">
        <Section_One/>
        <Section_Two/>
        <Section_Three />
      </div>
    );
  }
}

export default Main_Page;
