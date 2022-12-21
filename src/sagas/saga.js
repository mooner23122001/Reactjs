import {
  takeEvery,
  call,
  put,
  // , delay
} from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_USERS,
  // EDITED,
  FETCH_USERS_ASYNC,
  // FETCH_USERS_ASYNC_ERROR,
  ADD_USER,
  ADD_USER_ASYNC,
  EDIT_USER,
  DELETE_USER,
  DELETE_USER_ASYNC,
  EDIT_USER_ASYNC,
} from "../actions/actionTypes";
import { fetchUsers } from "./api";

export default function* rootWatcher() {
  yield takeEvery(FETCH_USERS, fetchUsersAsync);
  yield takeEvery(ADD_USER, addUserAsync);
  yield takeEvery(EDIT_USER, editUserAsync);
  yield takeEvery(DELETE_USER, deleteUserAsync);
}

export function* fetchUsersAsync() {
  let response = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_ASYNC, payload: response.data.data.data });
}

export function* addUserAsync(action) {
  yield axios.post(
    `https://blog-dhv.onrender.com/api/v1/users/signup`,
    {
      name: action.payload.name,
      username: action.payload.username,
      password: action.payload.password,
    },
    { withCredentials: true }
  );
  yield put({ type: ADD_USER_ASYNC, payload: action.payload });
  const data = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_ASYNC, payload: data.data.data.data });
}

export function* editUserAsync(action) {
  axios.patch(
    `https://blog-dhv.onrender.com/api/v1/users/` +
      action.payload.id,
    action.payload,
    { withCredentials: true }
  );
  yield put({ type: EDIT_USER_ASYNC, payload: action.payload });
  const data = yield call(fetchUsers);
  yield put({ type: FETCH_USERS_ASYNC, payload: data.data.data.data });
}

export function* deleteUserAsync(action) {
  axios.delete(
    "https://blog-dhv.onrender.com/api/v1/users/" + action.payload
  );
  yield put({ type: DELETE_USER_ASYNC, payload: action.payload });
 
}
