import React from "react";
import { AcademicCapIcon, CalendarIcon } from "@heroicons/react/solid";

const Education = () => {
  const educationData = [
    {
      institution: "Ballarpur Institute of Technology",
      location: "Chandrapur, Maharashtra, India",
      degree: "BTech in Computer Science Engineering",
      score: "CGPA: 8.0",
      duration: "May 2020 - June 2024",
    },
    {
      institution: "Sardar Patel Mahavidyalay",
      location: "Chandrapur, Maharashtra, India",
      degree: "HSC in PCM",
      score: "Percentage: 60%",
      duration: "June 2018 - May 2020",
    },
    {
      institution: "MB Model High School",
      location: "Chandrapur, Maharashtra, India",
      degree: "SSC",
      score: "Percentage: 80%",
      duration: "June 2017 - May 2018",
    },
    {
      institution: "Industrial Training",
      location: "Pune, Maharashtra, India",
      degree: "Full Stack Development",
      score: "Java",
      duration: "Jan 2024 - June 2024",
    }
  ];

  return (
    <div className="bg-slate-800 flex items-center justify-center min-h-screen p-6">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Education
        </h1>
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-8 mb-8 transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex items-center mb-4">
              <AcademicCapIcon className="h-8 w-8 text-indigo-500 mr-4" />
              <h2 className="text-2xl font-semibold text-gray-800">
                {edu.institution}
              </h2>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 h-5 w-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              <p>{edu.location}</p>
            </div>
            <div className="flex items-center text-gray-800 font-medium mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 h-5 w-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
                />
              </svg>

              <p>
                {edu.degree} - {edu.score}
              </p>
            </div>
            <div className="flex items-center text-gray-600">
              <CalendarIcon className="h-5 w-5 mr-2" />
              <p>{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
