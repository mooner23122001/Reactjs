import React from "react";
import { connect } from "react-redux";
import { editUser } from "../actions/userActions";
import User from "./User";

class UserEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name:"",
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    let user = this.props.user;
    console.log(user)
    this.setState({
      id: user._id,
      name: user.name,
      username: user.username,
      password: user.password,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();
console.log(this.state)
    const id = this.state.id;

    const name = this.state.name;
    const username = this.state.username;
    const password = this.state.password;

    const user = {
      id,
      name,
      username,
      password,
    };
    this.props.editUser(user);
  };

  render() {
    return (
      <div className="container">
        <h3>Edit </h3>
        <form onSubmit={this.onSubmit} className="form">
          <div className="form-group">
            <label> Name </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.name}
              onChange={(e) => {
                this.setState({ name: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> Username </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={(e) => {
                this.setState({ username: e.target.value });
              }}
            />
          </div>
          <div className="form-group">
            <label> Password </label>
            <input
              required
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={(e) => {
                this.setState({ password: e.target.value });
              }}
            />
          </div>

          <button className="btn btn-primary">Edit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.userReducer.user,
});

export default connect(mapStateToProps, { editUser })(UserEdit);
