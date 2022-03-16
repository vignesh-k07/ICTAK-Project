import React, { useEffect, useState } from "react";
import "./news.css";
import Aos from "aos";
import axios from "axios";
import CourseList from "../home/contents/CoursesList";
import { Link } from "react-router-dom";
const News = () => {
  const [courseLists, setCourseLists] = useState([]);

  useEffect(() => {
    Aos.init({});
  }, []);

  useEffect(() => {
    var config = {
      method: "get",
      url: "/api/courses",
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setCourseLists(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <div className="p-4 newsPage">
      <div className="newsHead">
        <h1
          data-aos="flip-down"
          data-aos-duration="1000"
          className="underline text-4xl font-bold text-center pt-12 pr-4 pl-2 capitalize"
        >
          {" "}
          NORKA Roots provides opportunity to study job-oriented new-generation
          courses with scholarship{" "}
        </h1>
      </div>

      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className="newsPara pt-4 pr-4 pl-2 block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14 bg-[#FFFFFFA8] backdrop-blur-sm aos-init aos-animate"
      >
        <p className="text-center  pt-6 pr-4 pl-2  text-justify capitalize ">
          {" "}
          Aimed at addressing the issue of youth unemployment in Kerala,NORKA
          Roots is providing an opportunity to study job-oriented new-generation
          courses with scholarship.<b> NORKA Roots</b> is providing the
          opportunity for the youth to study innovative courses in association
          with ICT Academy, an initiative of the Government of India in
          collaboration with state governments and industries.
        </p>

        <p className="text-center  pt-2 pr-4 pl-2  text-justify capitalize ">
          {" "}
          ICT Academy is offering six courses, which have huge employment
          potential both within the country and abroad,with 75 per cent
          scholarship of NORKA Roots. Admissions have been started for courses
          such as{" "}
          <a href="/#" class=" text-red-500 hover:text-black font-bold">
            {" "}
            Robotic Process Automation
          </a>
          ,
          <a href="/#" class=" text-red-500 hover:text-black font-bold">
            {" "}
            Data Science and Analytics
          </a>
          ,{" "}
          <a href="/#" class=" text-red-500 hover:text-black font-bold">
            Full Stack Development
          </a>
          ,{" "}
          <a href="/#" class=" text-red-500 hover:text-black font-bold">
            Cyber Security Analyst
          </a>
          ,
          <a href="/#" class=" text-red-500 hover:text-black font-bold">
            {" "}
            Software Testing
          </a>{" "}
          and{" "}
          <a href="/#" class=" text-red-500 hover:text-black font-bold">
            Digital Marketing
          </a>
          , which has huge demand in the industry. Considering the convenience
          of the working professionals, the classes have been scheduled as
          evening classes.
        </p>

        <p className="text-center   pt-2 pr-4 pl-2 text-justify capitalize ">
          {" "}
          The main highlight of the project is that it would enable students to
          build a successful and rewarding career by studying the courses from
          home as all the courses are being offered online.
          <b class=" text-red-500 hover:text-black">NORKA</b> is offering the
          scholarships to enable students from the state to study new generation
          courses despite the financial difficulties created by COVID-19.
          Scholarships will be provided based on the performance in the entrance
          examination.Another Key highlight of the course offered in association
          with ICT Academy is virtual internship of 125 hours in{" "}
          <a
            href="https://www.tcsion.com/dotcom/TCSSMB/"
            class=" text-red-500 hover:text-black font-bold"
          >
            TCS iON
          </a>{" "}
          for students who complete the six-month long certificate course.Apart
          from this, the students will get an opportunity to study around 14000
          courses of{" "}
          <a
            href="https://www.linkedin.com/learning/?u=78898396"
            class=" text-red-500 hover:text-black font-bold"
          >
            Linkedin Learning
          </a>
          . This would enable students to acquire the latest skills required to
          adapt to the changes happening in their respective fields.{" "}
        </p>

        <p className="text-center   pt-2 pr-4 pl-2 text-justify capitalize flex ">
          {" "}
          As part of the courses, placement assistance, IELTS basic coaching and
          cross culture training will also be provided to the students. The fee
          for the six-month long courses is Rs 19700 without GST. The last date
          for submission of applications is September 20, 2021. The entrance
          examination will be held on September 25.
        </p>

        <p className="text-center   pt-2 pr-4 pl-2 text-justify capitalize flex ">
          {" "}
          For more details, contact at 7594051437{" "}
        </p>
      </div>

      <div
        data-aos="flip-down"
        data-aos-duration="1000"
        className="pt-2 pr-4 pl-2 newsCourse"
      >
        {courseLists.map((course) => (
          <>
            <Link
              to={`/course/${course.url}`}
              state={{ course }}
              class="  hover:text-black text-center pt-2 pr-4 pl-2  text-justify capitalize flex flex-col space-y-4 font-bold rounded-lg py-5 px-6 mb-3 text-lg text-indigo-700 inline-flex items-center w-full"
              role="alert"
            >
              {" "}
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="chevron-circle-right"
                class="w-4 h-4 mr-2 fill-current"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zm113.9 231L234.4 103.5c-9.4-9.4-24.6-9.4-33.9 0l-17 17c-9.4 9.4-9.4 24.6 0 33.9L285.1 256 183.5 357.6c-9.4 9.4-9.4 24.6 0 33.9l17 17c9.4 9.4 24.6 9.4 33.9 0L369.9 273c9.4-9.4 9.4-24.6 0-34z"
                ></path>
              </svg>
              {course.name}
            </Link>

            <p className="text-center tracking-wide  pt-2 pr-4 pl-2 text-justify capitalize">
              {course.news}
            </p>
          </>
        ))}
      </div>

      <section className=" relative py-20 bg-blue-300">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: "80px" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blue-300 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="pt-2 pr-4 pl-2">
          <h1
            data-aos="flip-down"
            data-aos-duration="1000"
            className="font-bold pt-6 pr-4 pl-2 "
          >
            Admission Formalities
          </h1>

          <p
            data-aos="flip-down"
            data-aos-duration="1000"
            className="pt-5 pr-4 pl-2"
          >
            Admission to all courses of six month duration will be on the basis
            of aptitude test. Test will be on the subjects- Numerical ability,
            logical reason and Computer Science Basics. Candidates, who pass
            with flying colours in the test to be conducted online on 25
            September 2021, can pursue the new gen courses with 75% scholarship
            from NORKA Roots. Candidates will be intimated in advance regarding
            the time and procedures of the test.
          </p>

          <h2
            data-aos="flip-down"
            data-aos-duration="1000"
            className="pt-5 pr-4 pl-2"
          >
            Over 500 students made jobs ready in Covid time.
          </h2>

          <p
            data-aos="flip-down"
            data-aos-duration="1000"
            className="pt-5 pr-4 pl-2"
          >
            When the world faced a grave crisis during the Covid times, over 500
            students were made job ready through the new gen courses conducted
            by ICT Academy in association with NORKA Roots. ICT Academy achieved
            this through the long-term and short-term courses conducted during
            the last six months. Over 70 top IT companies were ready with job
            opportunities for students who passed out from ICT Academy. More
            than 200 students were offered internship facilities at TCS iON. In
            the Covid crisis period, ICT Academy could find secure jobs for many
            students through the new gen courses offered by it.
          </p>
        </div>
      </section>
    </div>
  );
};

export default News;
