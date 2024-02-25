import { saveUser, removeUser } from "../Reducers/userSlice";
import axios from "../../utils/axios";

export const asynccurrentemploye = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/employe/current");
    dispatch(saveUser(data.loggedinuser));
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncemployesignup = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/signup", user);
    dispatch(asynccurrentemploye());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncemployesignin = (user) => async (dispatch, getState) => {
  try {
    await axios.post("/employe/signin", user);
    dispatch(asynccurrentemploye());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const asyncremoveEmploye = () => async (dispatch, getState) => {
  try {
    await axios.get("/employe/signout");
    dispatch(removeUser());
  } catch (error) {
    console.log(error.response.data);
  }
};

export const employeupdate = (formData, id) => async (dispatch) => {
  try {
    await axios.post(`/employe/update/${id}`, formData); // Pass formData to the backend
    dispatch(asynccurrentemploye());
  } catch (error) {
    console.log(error.response.data);
  }
};
export const employeavatar = (formData, id) => async (dispatch) => {
  try {
    console.log(formData, id);
    await axios.post(`/employe/avatar/${id}`, formData);
    dispatch(asynccurrentemploye());
  } catch (error) {
    console.log(error.response.data);
  }
};