import React, { useEffect, useState } from "react";
import Aos from 'aos';
var axios = require('axios');


function Dashbord(props) {
  const [contact,setContact] = useState();
  const [courses,setCourses] = useState();
  const [membership,setMembership] = useState();
  const [courseLists, setCourseLists] = useState([]);

  useEffect(() => {
    Aos.init({});
}, []);

  // get course list
    const getdata=()=>{
      var config = {
        method: "get",
        url: "/api/courses",
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setCourseLists(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  // get contact count
  const Contact = ()=>{

    var config = {
      method: 'get',
      url: '/api/contact/count',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setContact(response.data);
      console.log(contact)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  const Courses=()=>{
    var config = {
      method: 'get',
      url: '/api/courses/count',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setCourses(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  // get number of memeberships
  const Memberships=()=>{
    var config = {
      method: 'get',
      url: '/api/corporate/count',
      headers: { }
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setMembership(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  useEffect(()=>{
    Courses();
  },[])
  useEffect(()=>{
    Contact();
  },[])
  useEffect(()=>{
    Memberships();
  },[])
  useEffect(()=>{
    getdata();
  },[])

  return (
    <div>
      <div class="overflow-auto h-screen pb-10 px-4 md:px-6">
        <div class="flex my-6 items-center w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div class="w-full md:w-6/12">
            <div class="shadow-lg w-full bg-gray-700 relative overflow-hidden">
              <a href="#" class="w-full h-full block">
                <div class="flex items-center justify-between px-4 py-6 space-x-4">
                  <div class="flex items-center">
                    <p class="text-sm text-white ml-2 text-2xl font-bold border-b border-gray-200">
                      Contacted 
                    </p>
                  </div>
                  <div
                  data-aos="flip-left"
              data-aos-duration="3000"
               class="border-b border-gray-200 mt-6 md:mt-0 text-white font-bold text-xl">
                    {contact}
                    <span class="text-xs text-gray-400"></span>
                  </div>
                </div>
                <div class="w-full h-3 bg-gray-100">
                  <div class="w-3/5 h-full text-center text-xs text-white bg-blue-400"></div>
                </div>
              </a>
            </div>
          </div>
          <div class="flex items-center w-full md:w-1/2 space-x-4">
            <div class="w-1/2">
              <div class="shadow-lg px-4 py-6 w-full bg-gray-700 relative">
                <p
                data-aos="flip-left"
              data-aos-duration="3000"
               class="text-2xl text-white font-bold">{courses}</p>
                <p class="text-gray-400 text-base font-bold">Active Courses</p>
              </div>
            </div>
            <div class="w-1/2">
              <div class="shadow-lg px-4 py-6 w-full bg-gray-700 relative">
                <p
                 data-aos="flip-left"
              data-aos-duration="3000"
              class="text-2xl text-white font-bold">{membership}</p>
                <p class="text-gray-400 text-base font-bold">
                  Memberships Added
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-1/2 xl:w-1/3">
          <div class="mb-4 mx-0 sm:ml-4 xl:mr-4">
            <div class="shadow-lg rounded-2xl bg-gray-700 w-full">
              <p class="font-bold text-md p-4 text-white">Courses</p>
              <ul>
              {courseLists?.map((el)=>(
                <li class="flex items-center text-gray-200 justify-between py-3 border-b-2 border-gray-800">
                  <div class="flex items-center justify-start text-sm">
                    <span
                    data-aos="fade-up"
              data-aos-duration="3000"
               class="mx-4">{el.name}</span>
                    <span></span>
                  </div>
                  <svg
                  data-aos="fade-left"
              data-aos-duration="3000"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="mx-4 text-gray-300"
                    viewBox="0 0 1024 1024"
                  >
                  {el.status === "open"? (
                    <>
                    <path
                      d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
                      fill="currentColor"
                    ></path>
                    </>
                    ) :(<path/>)}
                    
                  </svg>
                </li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashbord;
