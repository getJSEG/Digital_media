import React, { Component } from "react";


class Contact_Form extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email: "",
      message:""
    }

    this.onSubmit = this.onSubmit.bind(this);
  }


  ///TODO:  check validationfor all fields
  handleChange = (event) => {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  //TODO: submit to backend
  onSubmit = (event) => {
    event.preventDefault();
    //Summit to backend
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.message)
  }

  render() {
    return(
        <div  className="contact-form">
          <h2> Get in Touch </h2>
          <form className="" onSubmit={ this.onSubmit } method='POST' >
              <div className="input-field-container">
                <div className="">
                    <input type="text" id="name" name="name" placeholder="name"  value={this.state.name }onChange={ this.handleChange }/>
                    <input type="text" id="email" name="email" placeholder="email" value={this.state.email }onChange={ this.handleChange }/>
                </div>
                <div>
                    <input type="text" id="message" name="message" placeholder="message" value={this.state.message }onChange={ this.handleChange }/>
                </div>
              </div>

              <div className="submit-button-container"> <button className="form-button"> Submit </button> </div>
          </form>
        </div>
    );
  }
}

export default Contact_Form;
