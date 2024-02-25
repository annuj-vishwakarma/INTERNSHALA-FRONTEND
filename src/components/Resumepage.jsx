// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Resume } from "../store/Actions/resumeActions";
// import { RiBookmarkLine } from "@remixicon/react";

// export default function Resumepage() {
//   const dispatch = useDispatch(); // Get dispatch function
//   const resume = useSelector((state) => state.resume.data); // Assuming resume details are stored under 'user' in Redux store
//   console.log(resume);
//   useEffect(() => {
//     dispatch(Resume()); // Fetch resume data for student when component mounts
//   }, [dispatch]);

//   if (!resume) {
//     return (
//       <div className="w-full flex-col flex h-[100vh] items-center justify-center text-3xl gap-1 font-semibold ">
//         <img
//           className="w-[20%]"
//           src="https://i.pinimg.com/originals/3d/6a/a9/3d6aa9082f3c9e285df9970dc7b762ac.gif"
//           alt=""
//         />
//         Loading...
//       </div>
//     );  }
//   return (
//     <>
//       {/* <Studentdropdown /> */}
//       <div className=" flex  w-full h-32 border-b-2 overflow-hidden ">
//         <div className="w-[70%] h-full">
//           <img
//             className="w-[15%] ml-[20vh] "
//             src="../../public/images/logo.webp"
//             alt=""
//           />
//         </div>
//         <div className=" flex justify-center items-center font-semibold text-[#272727e4] h-full ">
//           <h3 className="text-2xl">Internships</h3>
//         </div>
//         <div className=" flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
//           <h3 className="text-2xl">Jobs</h3>
//         </div>
//         <div className="flex ml-16 justify-center items-center font-semibold text-[#272727e4] h-full ">
//           <RiBookmarkLine
//             size={20}
//             className="mt-1"
//             color="#1a1a1aa8" // set custom `width` and `height`
//           />
//         </div>
//         <div className="flex overflow-hidden ml-16 justify-center items-center font-semibold text-[#272727e4]">
//           <img
//             className="h-16 w-16 object-cover rounded-full"
//             src={resume.avatar.url}
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="flex justify-center items-center text-[#151515d2] text-5xl font-semibold w-full h-[30vh]  ">
//         Resume
//       </div>
//       <div className=""></div>
//     </>
//   );
// }
