import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, NavLink } from "react-router-dom";
;

function Testimonial(props) {

    const [TestimonialLists, setTestimonialLists] = useState([]);

    // get testimonial data
    const getdata=()=>{
      var config = {
        method: "get",
        url: "/api/testimonials",
      };
  
      axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          setTestimonialLists(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
     // Fetch testimonials list data from DB
  useEffect(() => {
   getdata();
  }, []);

//   delete testimonials
const DeleteTest=(name)=>{
    var config = {
        method: 'post',
        url: `/api/testimonials/delete/${name}`,
        headers: { }
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        alert(`Delete testimonial by ${name}`);
        getdata();
      })
      .catch(function (error) {
        console.log(error);
      });
}
  

  return (
    <div>
      <div className="container mx-auto px-4 sm:px-8  relative">
      
        <div className="py-6">
          <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
            <h2 className="text-2xl leading-tight font-bold">Testimonials</h2>
            <div className="text-end">
              <NavLink
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200"
                type="submit"
                to="/admin/Test/add-test"
              >
                Add
              </NavLink>
            </div>
          </div>
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4">
            <div className="inline-block min-w-full shadow rounded-lg overflow-auto" style={{maxHeight:"80vh"}}>
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                    >
                      Index No
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white  text-left text-sm uppercase font-normal"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Profile Image
                    </th>
                    
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Quote
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Course
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Placed @
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-black  border-b border-gray-200 text-white text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                {TestimonialLists?.map((course,index) => {
                  
                  return(
                    <>
                    <tr>
                    <td
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800 text-left text-sm uppercase font-normal"
                    >
                      {index+1}
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <div className="flex items-center">
                        <div className="ml-3">
                          <p className="text-gray-900 whitespace-no-wrap">
                            {course.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <div className="flex-shrink-0 pt-4">

                        <td className="px-5 py-8 border-b border-gray-200 bg-white text-sm">
                        <img
                          alt="FSD"
                          src={`${course.image}`}
                          className=" mx-auto object-cover rounded-full "
                          style={{height:"4rem",width:"4rem"}}
                        />
                        </td>
                    </div>
                    
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {course.quote.slice(0,25)}...
                      </p>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                        
                        <span className="relative">{course.course}</span>
                      </span>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      <span className="relative inline-block px-3 py-1">
                        
                        <span className="relative">{course.placed}</span>
                      </span>
                    </td>
                    <td className="px-5 py-7 border-b border-gray-200 bg-white text-sm flex xs:flex-row items-center xs:justify-between justify-between whitespace-no-wrap">
                     {/* <a href={`/admin/coursedash/view/${course.url}`}> 
                     <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-1 border border-green-700 rounded">
                        <svg
                          width="22"
                          fill="currentColor"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
                          />
                        </svg>
                      </button>
                      </a> */}
                      {/* <a href={`/admin/coursedash/edit/${course.url}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-1 border border-blue-700 rounded">
                        <svg
                          width="22"
                          fill="currentColor"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z"
                          />
                        </svg>
                      </button>
                      </a> */}
                      <button onClick={()=>DeleteTest(course.name)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-1 border border-red-700 rounded">
                        <svg
                          width="22"
                          fill="currentColor"
                          height="22"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="currentColor"
                            d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  </>
                  
                )})}
                  
                </tbody>
              </table>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
