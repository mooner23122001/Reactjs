import axios from "axios";

export const fetchUsers = () => {
  return axios.request(
    {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },

      url: "https://blog-dhv.onrender.com/api/v1/users",
    },
    { withCredentials: true }
  );
};
