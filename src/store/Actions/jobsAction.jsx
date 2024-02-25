import axios from "../../utils/axios";
import { jobsFound, jobdetail ,createdjob} from "../Reducers/jobsSlice";

export const fetchJobs = () => async (dispatch) => {
  try {
    const response = await axios.get("/");
    dispatch(jobsFound(response.data.alljobs));
  } catch (error) {
    console.log(error);
  }
};
export const alljobdetails = (id) => async (dispatch) => {
  try {
    const response = await axios.post(`/job/detail/${id}`);
    dispatch(jobdetail(response.data.job));
  } catch (error) {
    console.log(error);
  }
};

export const CreateJob = (formData) => async (dispatch) => {
  try {
    const response = await axios.post(`/employe/job/create/`, formData);
    dispatch(createdjob(response.data.newinternship));
  } catch (error) {
    console.log(error);
  }
};