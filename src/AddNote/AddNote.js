import React, { Component } from "react";
import NotefulForm from "../NotefulForm/NotefulForm";
import ApiContext from "../ApiContext";
import config from "../config";
import "./AddNote.css";
import ErrorBoundry from "../ErrorBoundry";

export default class AddNote extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      name: "",
      content: "",
      id: "",
      nameValid: false,
      idValid: false,
      nameValidationMessage: "",
      idValidationMessage: "",
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
        nameValidationMessage: "Note name can not be blank.",
        nameValid: false,
      });
    } else if (!this.state.id) {
      this.setState({
        idValidationMessage: "You must choose a valid folder.",
        idValid: false,
        nameValid: true,
      });
    } else {
      this.setState(
        {
          validationMessage: "",
          nameValid: true,
        },
        () => {
          this.handleSubmit();
        }
      );
    }
  };

  handleSubmit = () => {
    const newNote = {
      name: this.state.name,
      content: this.state.content,
      folderId: this.state.id,
      modified: new Date(),
    };
    fetch(`${config.API_ENDPOINT}/notes`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newNote),
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then((note) => {
        this.context.addNote(note);
        this.props.history.push(`/folder/${note.folderId}`);
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { folders = [] } = this.context;
    return (
      <section className="AddNote">
        <h2>Create a note</h2>
        <ErrorBoundry>
          <NotefulForm onSubmit={this.isNameValid}>
            <div className="field">
              <label htmlFor="note-name-input">Name</label>
              <input
                type="text"
                id="note-name-input"
                name="note-name"
                onChange={(event) =>
                  this.setState({ name: event.target.value })
                }
              />
              {!this.state.nameValid && (
                <div>
                  <p>{this.state.nameValidationMessage}</p>
                </div>
              )}
            </div>

            <div className="field">
              <label htmlFor="note-content-input">Content</label>
              <textarea
                id="note-content-input"
                name="note-content"
                onChange={(event) =>
                  this.setState({ content: event.target.value })
                }
              />
            </div>

            <div className="field">
              <label htmlFor="note-folder-select">Folder</label>
              <select
                id="note-folder-select"
                name="note-folder-id"
                onChange={(event) => this.setState({ id: event.target.value })}
              >
                <option value={null}>...</option>
                {folders.map((folder) => (
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                ))}
              </select>
              {!this.state.idValid && (
                <div>
                  <p>{this.state.idValidationMessage}</p>
                </div>
              )}
            </div>

            <div className="buttons">
              <button type="submit">Add note</button>
            </div>
          </NotefulForm>
          {this.state.error && (
            <div>
              <p>{this.state.error}</p>
            </div>
          )}
        </ErrorBoundry>
      </section>
    );
  }
}
