import axios from "../../utils/axios";
import {
  interdetail,
  internshipsFound,
  createdinternship,
} from "../Reducers/internshipsSlice";

export const fetchInternships = () => async (dispatch) => {
  try {
    const response = await axios.get("/");
    dispatch(internshipsFound(response.data.allinternships));
  } catch (error) {
    console.log(error);
  }
};
export const internshipdetail = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/internship/detail/${id}`);
    dispatch(interdetail(response.data.internship));
  } catch (error) {
    console.log(error);
  }
};
export const CreateInternship = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/employe/internship/create/`, formData);
    dispatch(createdinternship(response.data.newinternship));
  } catch (error) {
    console.log(error);
  }
};

