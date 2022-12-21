import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import "bootstrap/dist/css/bootstrap.css";

class UserForm extends React.Component {
  onSubmit = e => {
    e.preventDefault();
    const name = this.name.value;
    const username = this.username.value;
    const password = this.password.value;

    const user = { name:name,username:username,password:password };

    this.props.addUser(user);
    this.props.AddClicked();
  };

  render() {
    return (
      <div>
        <h3>Add</h3>
        <br />
        <div className="container">
          <form onSubmit={this.onSubmit} className="form">
            <div className="form-group">
              <label>Name</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="name"
                type="text"
                ref={input => (this.name = input)}
              />
            </div>
            <div className="form-group">
              <label>Username</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="username"
                type="text"
                ref={input => (this.username = input)}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <br />
              <input
                required
                className="form-control-sm"
                id="password"
                type="text"
                ref={input => (this.password = input)}
              />
            </div>
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addUser }
)(UserForm);
