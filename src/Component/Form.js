import React, { Component } from "react";

class Form extends Component {
  state = { userName: "" };

  //Submit Event
  handleSubmit = submitEvent => {
    submitEvent.preventDefault();
    console.log(this.state.userName);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.handleSubmit}
          className="App form-group form"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          <input
            placeholder="Search Profiles..."
            type="text"
            value={this.state.userName}
            onChange={submitEvent =>
              this.setState({ userName: submitEvent.target.value })
            }
            className="form-control mb-1"
            id="search"
            required
          />
          <button type="submit" className="btn btn-primary mb-3">
            Add Profile
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
