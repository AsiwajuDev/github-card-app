import React, { Component } from "react";
import ParticleBg from "particles-bg";

//import component elements
import Card from "./Component/Card";
import Form from "./Component/Form";

//Import Bootsrap CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CardList = props => {
  // const profile = this.props;
  return (
    <div>
      {props.profiles.map(profile => (
        <Card key={profile.id} {...profile} />
      ))}
    </div>
  );
};

class App extends Component {
  state = {
    profiles: []
  };

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div className="App">
        <ParticleBg bg={true} color={"#cccccc"} num={200} type="cobweb" />
        <h1 className="mt-3">GitHub Card App</h1>
        <small>Enter a Github UserName</small>
        <Form onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

export default App;
