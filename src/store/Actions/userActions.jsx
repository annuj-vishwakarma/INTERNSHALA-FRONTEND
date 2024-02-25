import { saveUser, removeUser } from "../Reducers/userSlice";
import axios from "../../utils/axios";

export const asynccurrentUser = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncsignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/student/signup", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncsignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/student/signin", user);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const applyjob = (jobId) => async (dispatch) => {
  try {
    await axios.post(`/student/apply/job/${jobId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const applyinternship = (internshipId) => async (dispatch) => {
  try {
    await axios.post(`/student/apply/internship/${internshipId}`);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const update = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/student/studentupdate/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const Avatar = (formData, id) => async (dispatch) => {
  try {
    console.log(formData, id);
    await axios.post(`/student/avatar/${id}`, formData);
    dispatch(asynccurrentUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncremoveUser = () => async (dispatch, getState) => {
  try {
    await axios.get("/student/signout");
    dispatch(removeUser());
  } catch (error) {
    console.log(error.response.data);
  }
};
