import React, {Component} from 'react';
import '../App.css';

class InputLengths extends Component {
  constructor(props) {
    super(props);
    this.state = {a: '', b: '', c: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
  }

  handleChange(event) {
    const propertyToUpdate = event.target.name;
    this.setState({ [propertyToUpdate]: event.target.value});
  }
  handleOnFocus(event){
    const propertyToUpdate = event.target.name;
    this.setState({ [propertyToUpdate]: ''});
  }
  handleSubmit(event) {
    const { a, b ,c } = this.state;
    event.preventDefault();
    fetch('/triangle', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow", // manual, *follow, error
      referrer: "no-referrer", // no-referrer, *client
      body: JSON.stringify({a:a, b:b, c:c}), // body data type must match "Content-Type" header
    })
      .then(response => response.json())
      .then(type => this.props.setTriangleType(type)); // parses response to JSON
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Side A:
          <input name="a" pattern="[0-9]*\.{0,1}[0-9]" type="text" value={this.state.a} onChange={this.handleChange} onFocus={this.handleOnFocus} />
        </label>
        <label>
          Side B:
          <input name="b" pattern="[0-9]*\.{0,1}[0-9]"  type="text" value={this.state.b} onChange={this.handleChange} onFocus={this.handleOnFocus} />
        </label>
        <label>
          Side C:
          <input name="c" pattern="[0-9]*\.{0,1}[0-9]"  type="text" value={this.state.c}  onChange={this.handleChange} onFocus={this.handleOnFocus} />
        </label>
        <input type="submit" value="Check Triangle" />
      </form>
    );
  }
}
export { InputLengths };