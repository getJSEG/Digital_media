import React, { Component } from "react";


class Section_Two extends Component {

  constructor(props){
    super(props)
    this.state = {
      workInfo: "container-closed",
      buttonInfo: " Read More ",
      InformationOpened: true
    }
  }

  buttonHandler = () =>{
    if( this.state.InformationOpened ){
      this.setState({ workInfo:"container-open", buttonInfo:" Read Less" })
    }else{
       this.setState({ workInfo:"container-closed", buttonInfo: "Read More" })
    }
    this.setState((prevState) => { return { InformationOpened: !prevState.InformationOpened };   });
  }

   render() {
     return(
       <div className="section-two-bg section-two-container-bg">
          <div name="section-two" className="section-two">
            <div className="work-info-container">
              <h4> our Work </h4>
              <div className="container-1 clearfix">
                <h2> Photography </h2>
                <div className="photography-info clearfix">
                  <div className="left-img "> <div> </div> </div>
                  <div className="right-text"> <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p> </div>
                </div>
              </div>

              <div className="container-2 clearfix">
                <h2>Web Design </h2>
                <div className="web-design-container">
                  <div className="right-img"> <div> </div> </div>
                  <div className="left-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                  </div>
                </div>
              </div>

              <div className={`container-3 clearfix ${ this.state.workInfo }`}>
                <h2>Logo Design</h2>
                <div className="logo-design-container clearfix">
                  <div className="left-img"> <div> </div> </div>
                  <div className="right-text">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                  </div>
                </div>
              </div>
              </div>
            <button onClick= { this.buttonHandler }> {`${this.state.buttonInfo}`} </button>
          </div>
       </div>
     );
   }
}


export default Section_Two;
