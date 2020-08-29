import React, { Component } from "react";

import Contact_Form from "../forms/contact_form";

class Section_Three extends Component {

  render(){
    return(
      <div className="section-three-container-bg">
        <div className="section-three">
          <div name="services-section" className="bottom-container">
            <div className="circle"></div>
            <h2> SELECT WORK </h2>

            <div className="button-container">
                <button> ALL </button>
                <button> WEB DESIGN </button>
                <button> PHOTOGRAPHY </button>
                <button> LOGO DESIGN </button>
            </div>

            <div className="image-container">
                <div className="colum-container">
                    <div className="row-container"> <img src="#"/> </div>
                    <div className="row-container"> <img src="#"/> </div>
                </div>
                <div className="colum-container">
                    <div className="row-container"> <img src="#"/> </div>
                    <div className="row-container"> <img src="#"/> </div>
                </div>
            </div>
            <div className="circle-bottom"></div>
          </div>

        </div>

        <div name="contact-section"  className="contact-form-container">
          <Contact_Form />
        </div>
      </div>
    );
  }
}


export default Section_Three;
