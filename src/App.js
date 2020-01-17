import React, { Component } from "react";

//import component elements
import Card from "./Component/Card";

//Import Bootsrap CSS
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "Facebook"
  },
  {
    name: "Sophie Albert",
    avatar_url: "https://avatars0.githubusercontent.com/u/6820?v=4",
    company: "Facebook"
  },
  {
    name: "Sebastian Markbage",
    avatar_url: "https://avatars0.githubusercontent.com/u/63648?v=4",
    company: "Facebook"
  }
];

const CardList = props => {
  // const profile = this.props;
  return (
    <div>
      {testData.map(profile => (
        <Card {...profile} />
      ))}
    </div>
  );
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="mb-3">GitHub Card App</h1>
        <CardList />
      </div>
    );
  }
}

export default App;
