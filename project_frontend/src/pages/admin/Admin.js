import React from "react";
import { Route, Routes } from "react-router-dom";
import Construction from "./Construction";
import Contactus from "./contact/Contactus";
import CorporateRegister from "./corporate/CorporateRegister";
import CourseRegister from "./courseRegister/CourseRegister";
import CourseAdd from "./courses/CourseAdd";
import CourseDash from "./courses/CourseDash";
import CourseEdit from "./courses/CourseEdit";
import CourseView from "./courses/CourseView";
import Dashbord from "./Dashbord";
import Addindustrial from "./industrial/Addindustrial";
import Industrial from "./industrial/Industrial";
import Addknowledge from "./knowledge/Addknowledge";
import Knowledge from "./knowledge/Knowledge";
import PartnershipRegistered from "./partnership/PartnershipRegistered";
import Addteam from "./team/Addteam";
import Details from "./team/Details";
import EditTeam from "./team/Edit";
import Team from "./team/Team";
import Testimonial from "./testimonial/Testimonial";
import TestimonialAdd from "./testimonial/TestimonialsAdd";

const Admin = () => {
  console.log(localStorage.getItem("admin"));
  return (
    <>
      <main className="bg-white  relative h-screen">
        <div className="flex items-start ">
          <div className="   lg:block ml-4 shadow-lg relative w-80  ">
            <div className="overflow-hidden rounded-2xl bg-gray-700">
              <nav>
                <div>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-2 mt-2 transition-colors duration-200 justify-start hover:bg-gradient-to-r from-gray-700 to-gray-800  "
                    href="/admin"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>

                    <span
                      className="mx-4 text-sm font-normal"
                      href="/CourseDash"
                    >
                      Dashboard
                    </span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/coursedash"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Courses</span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/Test"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Testimonial
                    </span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/course-register"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M960 0l960 384v128h-128q0 26-20.5 45t-48.5 19h-1526q-28 0-48.5-19t-20.5-45h-128v-128zm-704 640h256v768h128v-768h256v768h128v-768h256v768h128v-768h256v768h59q28 0 48.5 19t20.5 45v64h-1664v-64q0-26 20.5-45t48.5-19h59v-768zm1595 960q28 0 48.5 19t20.5 45v128h-1920v-128q0-26 20.5-45t48.5-19h1782z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Course Registration
                    </span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/contact"
                  >
                    <span class="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                      </svg>
                    </span>
                    <span class="mx-4 text-sm font-normal">Contact</span>
                  </a>
                  <a
                    class="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/academic"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        className="m-auto"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Academic Membership
                    </span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/corporate"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1024 1131q0-64-9-117.5t-29.5-103-60.5-78-97-28.5q-6 4-30 18t-37.5 21.5-35.5 17.5-43 14.5-42 4.5-42-4.5-43-14.5-35.5-17.5-37.5-21.5-30-18q-57 0-97 28.5t-60.5 78-29.5 103-9 117.5 37 106.5 91 42.5h512q54 0 91-42.5t37-106.5zm-157-520q0-94-66.5-160.5t-160.5-66.5-160.5 66.5-66.5 160.5 66.5 160.5 160.5 66.5 160.5-66.5 66.5-160.5zm925 509v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm0-260v-56q0-15-10.5-25.5t-25.5-10.5h-568q-15 0-25.5 10.5t-10.5 25.5v56q0 15 10.5 25.5t25.5 10.5h568q15 0 25.5-10.5t10.5-25.5zm0-252v-64q0-14-9-23t-23-9h-576q-14 0-23 9t-9 23v64q0 14 9 23t23 9h576q14 0 23-9t9-23zm256-320v1216q0 66-47 113t-113 47h-352v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-768v-96q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v96h-352q-66 0-113-47t-47-113v-1216q0-66 47-113t113-47h1728q66 0 113 47t47 113z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Corporate Membership
                    </span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/partnership"
                  >
                    <span className="text-left">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">
                      Partnership
                    </span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/industrial"
                  >
                    <span className="text-left">
                    <svg
                        width="20"
                        height="20"
                        className="m-auto"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Industrial</span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/knowledge"
                  >
                    <span className="text-left">
                      <svg
                        width="20"
                        fill="currentColor"
                        height="20"
                        className="h-5 w-5"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1088 1256v240q0 16-12 28t-28 12h-240q-16 0-28-12t-12-28v-240q0-16 12-28t28-12h240q16 0 28 12t12 28zm316-600q0 54-15.5 101t-35 76.5-55 59.5-57.5 43.5-61 35.5q-41 23-68.5 65t-27.5 67q0 17-12 32.5t-28 15.5h-240q-15 0-25.5-18.5t-10.5-37.5v-45q0-83 65-156.5t143-108.5q59-27 84-56t25-76q0-42-46.5-74t-107.5-32q-65 0-108 29-35 25-107 115-13 16-31 16-12 0-25-8l-164-125q-13-10-15.5-25t5.5-28q160-266 464-266 80 0 161 31t146 83 106 127.5 41 158.5z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Knowledge</span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/team"
                  >
                    <span className="text-left">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="m-auto"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M685 483q16 0 27.5-11.5t11.5-27.5-11.5-27.5-27.5-11.5-27 11.5-11 27.5 11 27.5 27 11.5zm422 0q16 0 27-11.5t11-27.5-11-27.5-27-11.5-27.5 11.5-11.5 27.5 11.5 27.5 27.5 11.5zm-812 184q42 0 72 30t30 72v430q0 43-29.5 73t-72.5 30-73-30-30-73v-430q0-42 30-72t73-30zm1060 19v666q0 46-32 78t-77 32h-75v227q0 43-30 73t-73 30-73-30-30-73v-227h-138v227q0 43-30 73t-73 30q-42 0-72-30t-30-73l-1-227h-74q-46 0-78-32t-32-78v-666h918zm-232-405q107 55 171 153.5t64 215.5h-925q0-117 64-215.5t172-153.5l-71-131q-7-13 5-20 13-6 20 6l72 132q95-42 201-42t201 42l72-132q7-12 20-6 12 7 5 20zm477 488v430q0 43-30 73t-73 30q-42 0-72-30t-30-73v-430q0-43 30-72.5t72-29.5q43 0 73 29.5t30 72.5z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Staffs</span>
                  </a>
                  <a
                    className="w-full font-thin uppercase text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start focus:text-blue-500 hover:bg-gradient-to-r from-gray-700 to-gray-900"
                    href="/admin/events"
                  >
                    <span className="text-left">
                    <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 2048 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                      </svg>
                    </span>
                    <span className="mx-4 text-sm font-normal">Events</span>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4 ">
            <header className="w-full shadow-lg bg-gray-700 items-center h-16 rounded-2xl z-40 ">
              <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center ">
                <div className="relative items-center pl-1 flex w-full lg:max-w-68 sm:pr-2 sm:ml-0 ">
                  <div className="container relative left-0 z-50 flex w-3/4 h-auto h-full ">
                    <div className="relative flex items-center w-full lg:w-64 h-full group ">
                      <svg
                        className="absolute left-0 z-20 hidden w-4 h-4 ml-4 text-gray-500 pointer-events-none fill-current group-hover:text-gray-400 sm:block"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
                      </svg>
                      {/* Searchbar */}
                      <input
                        type="text"
                        className="block w-full py-1.5 pl-10 pr-4 leading-normal rounded-2xl focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 ring-opacity-90 bg-gray-800 text-gray-400 aa-input"
                        placeholder="Search"
                      />
                      <div className="absolute right-0 hidden h-auto px-2 py-1 mr-2 text-xs text-gray-400 border border-gray-300 rounded-2xl md:block">
                        +
                      </div>
                    </div>
                  </div>
                  <div className="relative p-1 flex items-center justify-end w-1/4 ml-5 mr-4 sm:mr-0 sm:right-auto ">
                    <div className="relative inline-block text-left ">
                      <div className="flex justify-center">
                        <div>
                          <div className="dropdown relative">
                            <button
                              className="
         
          dropdown-toggle
          px-3
          py-2.5
          bg-blue-600
          text-white
          font-bold
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
                              type="button"
                              id="dropdownMenuButton1"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              Admin
                              <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="caret-down"
                                className="w-1 ml-2"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 320 512"
                              >
                                <path
                                  fill="currentColor"
                                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                                ></path>
                              </svg>
                            </button>
                            <ul
                              className="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          font-bold
          z-30
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
                              aria-labelledby="dropdownMenuButton1"
                            >
                              <li>
                                <a
                                  className="dropdown-item text-sm py-2 px-4 font-bold font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100"
                                  href="/"
                                  onClick={() => {
                                    localStorage.setItem("admin", false);
                                  }}
                                >
                                  Logout
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <Routes>
              <Route path="/" element={<Dashbord />} />
              <Route path="/coursedash/*" element={<CourseDash />} />
              <Route path="/coursedash/view/:name" element={<CourseView />} />
              <Route path="/coursedash/edit/:name" element={<CourseEdit />} />
              <Route path="/coursedash/add" element={<CourseAdd />} />
              <Route path="/contact" element={<Contactus />} />
              <Route path="/industrial/" element={<Industrial />} />
              <Route
                path="/industrial/Addindustrial"
                element={<Addindustrial />}
              />
              <Route path="/knowledge/" element={<Knowledge />} />
              <Route
                path="/knowledge/Addknowledge"
                element={<Addknowledge />}
              />
              <Route path="/academic" element={<Construction/>}/>
              <Route path="/corporate" element={<CorporateRegister/>}/>
              <Route path="/partnership" element={<PartnershipRegistered/>}/>
              <Route path="/team/" element={<Team />} />
              <Route path="/team/Addteam" element={<Addteam />} />
              <Route path="/team/view/:id" element={<Details />} />
              <Route path="/team/edit/:id" element={<EditTeam />} />
              <Route path="/Test" element={<Testimonial />} />
              <Route path="/Test/add-test" element={<TestimonialAdd />} />
              <Route path="/course-register" element={<CourseRegister />} />
              <Route path="/events" element={<Construction/>}/>
            </Routes>
          </div>{" "}
        </div>
      </main>
    </>
  );
};

export default Admin;
