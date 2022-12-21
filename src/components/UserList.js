import React from "react";
import { connect } from "react-redux";
import {
  fetchUsers,
  deleteUser,
  editMode,
  fetchUserById
} from "../actions/userActions";
import "../../src/App.css";

class UserList extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  onEdit = userId => {
    this.props.editMode();
    this.props.fetchUserById(userId);
  };

  onDelete = userId => {
    this.props.deleteUser(userId);
  };

  render() {
    return (
      <div className="App">
        <table className="table table-dark">
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.props.Users.map(u => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.username}</td>

                <td>
                  <button onClick={() => this.onEdit(u._id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.onDelete(u._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  Users: state.userReducer.users,
  error: state.userReducer.error
});

export default connect(
  mapStateToProps,
  { fetchUsers, deleteUser, editMode, fetchUserById }
)(UserList);
