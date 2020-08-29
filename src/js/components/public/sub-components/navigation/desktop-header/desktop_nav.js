import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBSmoothScroll } from "mdbreact";

import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Desktop_Navigation extends Component {

  constructor(props){
    super(props);

    this.state = {
      sticky: " ",
      prevScrollPosition: window.pageYOffset
    }
  }
  //TODO: ANIMATE IF POSIBLE
  handleScroll = () => {
    const { prevScrollPosition } = this.state;
    const currentScrollPosition = window.pageYOffset;

    if( prevScrollPosition < currentScrollPosition ){
      this.setState({ sticky: "stiky-header" })
    }else{
      this.setState({ sticky: " " })
    }
  }

  componentDidMount (){
    window.addEventListener("scroll", this.handleScroll);

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
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleSetActive(to){
    console.log(to);
  }

  render(){
    return(
      <div className={`navigation-menu ${this.state.sticky}`} onScroll={this.handleScroll}>
        <ul className="navigation-list">
          <li> <Link activeClass="active" to="home-section" spy={true} smooth={true}  offset={-100} duration={200} onSetActive={this.handleSetActive}> HOME </Link> </li>
          <li> <Link activeClass="active" to="about-us-section" spy={true} smooth={true} offset={10} duration={200}> ABOUT US </Link> </li>
          <li> <Link  to="section-two" spy={true} smooth={true} offset={25} duration={200}> PORTFOLIO </Link> </li>
          <li> <Link  to="services-section" spy={true} smooth={true}  offset={50} duration={200}> SERVICES </Link> </li>
          <li> <Link  to="contact-section" spy={true} smooth={true} offset={-300} duration={200} > CONTACT US </Link> </li>
        </ul>
      </div>
    )
  }
}

export default Desktop_Navigation;
