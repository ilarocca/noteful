import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import ApiContext from "../ApiContext";
import config from "../config";
import "./AddFolder.css";

export default class AddFolder extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      name: "",
      nameValid: false,
      validationMessage: "",
    };
  }
  static defaultProps = {
    history: {
      push: () => {},
    },
  };

  static contextType = ApiContext;

  isNameValid = (event) => {
    event.preventDefault();
    if (!this.state.name) {
      this.setState({
        validationMessage: "Folder name can not be blank.",
        nameValid: false,
      });
    } else {
      this.setState(
        {
          validationMessage: "",
          nameValid: true,
        },
        this.handleSubmit()
      );
    }
  };

  handleSubmit = () => {
    const folder = {
      name: this.state.name,
    };
    fetch(`${config.API_ENDPOINT}/folders`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(folder),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((folder) => {
        this.context.addFolder(folder);
        this.props.history.push(`/folder/${folder.id}`);
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  render() {
    return (
      <section className="AddFolder">
        <h2>Create a folder</h2>
        <NotefulForm onSubmit={this.isNameValid}>
          <div className="field">
            <label htmlFor="folder-name-input">Name</label>
            <input
              type="text"
              id="folder-name-input"
              name="folder-name"
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            {!this.state.nameValid && (
              <div>
                <p>{this.state.validationMessage}</p>
              </div>
            )}
          </div>
          <div className="buttons">
            <button type="submit">Add folder</button>
          </div>
        </NotefulForm>
        {this.state.error && (
          <div>
            <p>{this.state.error}</p>
          </div>
        )}
      </section>
    );
  }
}
