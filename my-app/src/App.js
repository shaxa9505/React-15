import React, { Component } from 'react';
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
        visa: "",
        name: ""
    }
    this.visaRef = React.createRef();
    this.nameRef = React.createRef();
  }
  
  
  

  handleSubmit = (e) => {
      e.preventDefault();
      if(this.visaRef.current.value < 16){
        alert("Visa raqamigiz no tug`ri");
        return
      }

      alert("Tabrikalymiz ruyhatdan utdingiz");

      this.setState({visa: "", name: ""})
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
    console.log(this.state);
  }

  componentDidMount() {
    this.visaRef.current.focus()
  }
  

  render() {
    return (
      <div className="App">
        <form>
          <input type="text" name="visa" ref={this.visaRef} value={this.state.visa} onChange={this.handleChange} placeholder="VISA NUMBER" /> <br /> <br />
          <input type="text" name="name" ref={this.nameRef} value={this.state.name} onChange={this.handleChange} placeholder="NAME" /> <br /> <br />
          <button className="button" onClick={this.handleSubmit} type="submit">Send</button>
        </form>

      </div>
    );
  }
}

export default App;