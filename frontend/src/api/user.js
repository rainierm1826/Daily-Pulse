import axios from "axios";

export const fetchUser = async () => {
  try {
    const response = await axios.get("http://localhost:5000/auth/user", {
      withCredentials: true,
    });
    const result = response.data.user;
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async () => {
  try {
    const response = axios.get("http://localhost:5000/auth/logout", {
      withCredentials: true,
    });
    const result = response.data;
    return result;
  } catch (error) {
    console.log(error);
  }
};
