import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { asynccurrentemploye } from "../store/Actions/employeActions"; // Import the action creator
import { Link } from "react-router-dom";
import { RiArticleLine, RiBookmarkLine } from "@remixicon/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Dropdown from "./EmployeDropdown";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const EmployeHome = () => {
  const dispatch = useDispatch(); // Get dispatch function
  const { user } = useSelector((state) => state.user); // Assuming employee details are stored under 'user' in Redux store
  const [ShowDropdown, setShowDropdown] = useState(false);

  console.log(user);
  useEffect(() => {
    dispatch(asynccurrentemploye()); // Fetch employee data when component mounts
  }, [dispatch]);

  const opendropdown = () => {
    setShowDropdown(true); // Show Editresume component when edit is clicked
  };
  const closedropdown = () => {
    setShowDropdown(false); // Hide Editresume component when close is clicked
  };

  // Check if employee data exists before rendering
  if (!user) {
    return (
      <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
        <img
          className="w-[20%]"
          src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
          alt=""
        />
        Loading...
      </div>
    );
  }

  return (
    <>
      {ShowDropdown && <Dropdown onClose={closedropdown} />}
      <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
        <div className="w-[70%] h-full">
          <img
            className="w-[15%] ml-[20vh] "
            src="../../public/images/logo.webp"
            alt=""
          />
        </div>
        <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
          <Link to={"/internship/create"}>
            <h3 className="text-2xl text-cyan-600">+ Internship</h3>
          </Link>
        </div>
        <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
          <Link to={"/job/create"}>
            <h3 className="text-2xl text-cyan-600"> + Create Job</h3>{" "}
          </Link>
        </div>
        <div className="flex overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
          <img
            className="h-16 w-16 object-cover rounded-full"
            onClick={opendropdown}
            src={user.organizationlogo.url}
            alt=""
          />
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-[10vh] text-6xl mb-[-5vh]">
        Hi, {user.firstname}! 👋
      </div>
      <h2 className="w-full flex items-center justify-center mt-[8vh] text-5xl mb-[-5vh]">
        Trending on Internshala 🔥{" "}
      </h2>
      <div className=" mt-10 w-full flex items-center justify-center ">
        <div className="slides">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala.com/static/images/pgc_course_specific_banners/pgc_homepage_banner_new.png"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/wtc_fh_feb24-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/study_abroad_is-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/aditya_birla_capital-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/is_jobs-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/career_starter_internships_final-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="https://internshala-uploads.internshala.com/banner-images/home_new/int_opps-student.png.webp"
                alt=""
              />
            </SwiperSlide>
            ...
          </Swiper>
        </div>
      </div>
      <div className="">
        <h1 className="w-full flex items-center justify-center mt-[10vh] mb-[5vh] text-5xl ">
          {user.internships.length} Internships Posted
        </h1>
        <div className="w-full mb-[5vh] flex justify-center items-center  ">
          <div className="w-[70%] rounded-2xl border-2 ">
            <div className="w-full px-[5vh] h-[10vh] bg-[#F8F8F8] flex justify-between items-center ">
              <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                profile
              </div>
              <div className="  w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                Responsibility
              </div>
              <div className="  w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                type
              </div>
              <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                Applications <br />
                Recieved
              </div>
              <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                Review
              </div>
            </div>
            {user.internships &&
              user.internships.map((item, index) => (
                <div
                  key={index}
                  className="w-full border-[1px] px-[5vh] justify-between items-center flex h-[12vh]"
                >
                  <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                    {item.profile || item.jobtitle}
                  </div>
                  <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                    {item.responsibility}
                  </div>
                  <div className=" w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                    {item.internshiptype || item.jobtype}
                  </div>
                  <div className=" w-[20%] text-2xl text-[#008cff] uppercase  font-medium ">
                    <Link className="flex gap-2" to={`/review/${item._id}`}>
                      <RiArticleLine size={15} className="mt-0" />
                      {item.students.length}
                    </Link>
                  </div>
                  <div className="  w-[20%] text-2xl text-[#008cff] uppercase  font-medium ">
                    <Link
                      className="flex gap-2"
                      to={`view/internship/${item._id}`}
                    >
                      <RiArticleLine size={15} className="mt-0" />
                      Preview
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="w-full flex items-center justify-center mt-[10vh] mb-[5vh] text-5xl ">
          {user.jobs.length} Jobs Posted
        </h1>
        <div className="w-full mb-[5vh] flex justify-center items-center  ">
          <div className="w-[70%] rounded-2xl border-2 ">
            <div className="w-full px-[5vh] h-[10vh] bg-[#F8F8F8] flex justify-between items-center ">
              <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                profile
              </div>
              <div className="  w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                Salary
              </div>
              <div className="  w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                type
              </div>
              <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                Applications <br />
                Recieved
              </div>
              <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-semibold ">
                Review
              </div>
            </div>

            {user.jobs &&
              user.jobs.map((item, index) => (
                <div
                  key={index}
                  className="w-full border-[1px] px-[5vh] justify-between items-center flex h-[12vh]"
                >
                  <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                    {item.profile || item.jobtitle}
                  </div>
                  <div className=" w-[20%] text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                    {item.salary}
                  </div>
                  <div className=" w-[20%]  text-2xl text-[#1f1f1fbd] uppercase  font-medium ">
                    {item.internshiptype || item.jobtype}
                  </div>
                  <div className=" w-[20%] text-2xl text-[#008cff] uppercase  font-medium ">
                    <Link className="flex gap-2" to={`/review/${item._id}`}>
                      <RiArticleLine size={15} className="mt-0" />
                      {item.students.length}
                    </Link>
                  </div>
                  <div className="  w-[20%] text-2xl text-[#008cff] uppercase  font-medium ">
                    <Link className="flex gap-2" to={`view/job/${item._id}`}>
                      <RiArticleLine size={15} className="mt-0" />
                      Preview
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <img src="../../public/images/footer.png" alt="" />
    </>
  );
};

export default EmployeHome;
