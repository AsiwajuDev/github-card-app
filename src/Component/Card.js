import React, { Component } from "react";
import "../App.css";

class Card extends Component {
  render() {
    const profile = this.props;

    return (
      <div>
        <div
          className="card mb-3"
          style={{ maxWidth: "35rem", margin: "auto" }}
        >
          <div className="row no-gutter s " id="row">
            <div className="col-md-4 col-sm-4">
              <img
                src={profile.avatar_url}
                className="avatar img-responsive"
                alt="Placeholder"
              />
            </div>
            <div className="col-md-8 col-sm-8">
              <div className="card-body text-left">
                <h4 className="card-title">
                  <strong>Name:</strong> {profile.name}{" "}
                </h4>
                <h6>
                  <a className="card-text" href={`${profile.html_url}`}>
                    Repo URL{" "}
                  </a>
                </h6>
                <h6>
                  <small className="card-text">
                    <strong>Company:</strong> {profile.company}{" "}
                  </small>
                </h6>
                <small className="card-text">
                  <strong>Location:</strong> {profile.location}{" "}
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
