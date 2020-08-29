import React, { Component } from "react";

import Desktop_Navigation from "../navigation/desktop-header/desktop_nav";
import * as Scroll from 'react-scroll';
import { Link, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Section_One extends Component {

  componentDidMount (){
    Events.scrollEvent.register('begin', function(to, elemnt){
      console.log('begin', arguments);
    });
    Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });
    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  handleSetActive(to){ console.log(to); }

  render(){
    return(
      <div className="section-one-bg section-one-container-bg" id="section-one">
        <div className="navigation-container">
          <Desktop_Navigation />
        </div>
        <div name="home-section" className="logo-container"> <img src="https://firebasestorage.googleapis.com/v0/b/creativemedia-46e37.appspot.com/o/images%2FAssets%2FElmre%20Logo-01.png?alt=media&token=a0e2dc72-c789-48a0-8f05-0cbe95924447" /> </div>

        <div name="about-us-section" className="section-one">
          <div className="sec-one-information-container">
              <h2> What we do </h2>
              <p> this is a p tag </p>
              <Link to="contact-section"  spy={true} smooth={true} offset={-50} duration={200} > contact us </Link>
          </div>
        </div>
      </div>
    )
  }
}


export default Section_One;
