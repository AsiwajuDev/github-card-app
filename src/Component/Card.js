import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  render() {
    const profile = this.props;

    return (
      <div>
        <div
          className="card mb-3"
          style={{ maxWidth: "540px", margin: "auto" }}
        >
          <div className="row no-gutter s">
            <div className="col-md-4">
              <img
                src={profile.avatar_url}
                className="avatar"
                alt="Placeholder"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body text-left">
                <h2 className="card-title mb-3 ">{profile.name} </h2>
                <h5 className="card-text">{profile.company} </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
