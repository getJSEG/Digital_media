import React, { Component } from "react";

import Contact_Form from "../forms/contact_form";

class Section_Three extends Component {

   constructor(props){
     super(props)
     this.state = {
       activeButton:"",
       data:["https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FHome%20Page-middle.png?alt=media&token=881b6277-9e2d-44d5-b2f2-c9cf59de1997",
              "https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FHome%20Page-top.png?alt=media&token=7bd0223d-0acb-454c-b822-329999ebab68",
              "https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FElmre%20Logo-01.png?alt=media&token=a0e2dc72-c789-48a0-8f05-0cbe95924447",
              "https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FHome%20Page-top.png?alt=media&token=7bd0223d-0acb-454c-b822-329999ebab68"],
      content:""
     }
   }

   compenentDidMount(){
      //call databse to get mediaLink
   }

  onClick = (event) => {
    event.preventDefault();
    this.setState({ active: event.target.name});
    // call database to get Medialink

    // loo trough each  link
    //make div for each link
    //Delete this
      this.setState({
        data:["https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FHome%20Page-middle.png?alt=media&token=881b6277-9e2d-44d5-b2f2-c9cf59de1997",
               "https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FHome%20Page-top.png?alt=media&token=7bd0223d-0acb-454c-b822-329999ebab68",
               "https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FElmre%20Logo-01.png?alt=media&token=a0e2dc72-c789-48a0-8f05-0cbe95924447"]
      });
  }

  render(){
    return(
      <div className="section-three-container-bg">
        <div className="section-three">
          <div name="services-section" className="bottom-container">
            <div className="circle"></div>
            <h2> SELECT WORK </h2>

            <div className="button-container">
                <button onClick={ this.onClick } name="all"  id={this.state.active === "all"? "active-class" : null }> ALL </button>
                <button onClick={ this.onClick } name="web-design" id={this.state.active === "web-design" ? "active-class" : null } > WEB DESIGN </button>
                <button onClick={ this.onClick } name="photography" id={this.state.active === "photography" ? "active-class" : null }> PHOTOGRAPHY </button>
                <button onClick={ this.onClick } name="logo-design" id={this.state.active === "logo-design" ? "active-class" : null }> LOGO DESIGN </button>
            </div>

            <div className="image-container">
                <div className="colum-container">
                    <div className="row-container"> <img src={this.state.data[0]}/> </div>
                    <div className="row-container"> <img src={this.state.data[1]}/> </div>
                </div>
                <div className="colum-container">
                    <div className="row-container"> <img src={this.state.data[2]}/> </div>
                    <div className="row-container"> <img src={this.state.data[3]}/> </div>
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
