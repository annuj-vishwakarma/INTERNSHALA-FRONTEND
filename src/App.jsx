import React from "react";
import { Route, Routes } from "react-router";
import StudentSignup from "./components/StudentSignup.jsx";
import EmployeSignup from "./components/EmployeSignup.jsx";
import EmployeHome from "./components/EmployeHome.jsx";
import StudentHome from "./components/StudentHome.jsx";
import Home from "./components/Home.jsx";
import InternshipDetail from "./components/InternshipDetail.jsx";
import JobDetail from "./components/JobsDetail.jsx";
// import Resume from "./components/Resume.jsx";
import Applications from "./components/Applications.jsx";
import Review from "./components/Review.jsx";
// import ResumePreview from "./components/ResumePreview.jsx";
import ViewInternship from "./components/ViewInternship.jsx";
import Viewjobs from "./components/ViewJobs.jsx";
import CreateInternship from "./components/CreateInternship.jsx";
import EmployeEdit from "./components/EmployeEdit.jsx";
import CreateJob from "./components/CreateJob.jsx";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/employe" element={<EmployeHome />} />
        <Route path="/student" element={<StudentHome />} />
        <Route path="/student/applications" element={<Applications />} />
        <Route path="/student/signup" element={<StudentSignup />} />
        <Route path="/internship/detail/:id" element={<InternshipDetail />} />
        <Route path="/employe/signup" element={<EmployeSignup />} />
        <Route path="/editprofile" element={<EmployeEdit />} />
        <Route
          path="/employe/view/internship/:id"
          element={<ViewInternship />}
        />
        <Route path="/job/create" element={<CreateJob />} />
        <Route path="/internship/create" element={<CreateInternship />} />
        <Route path="/employe/view/job/:id" element={<Viewjobs />} />
      
        <Route path="/review/:id" element={<Review />} />
        <Route path="/job/detail/:id" element={<JobDetail />} />
   
      </Routes>
    </div>
  );
}
