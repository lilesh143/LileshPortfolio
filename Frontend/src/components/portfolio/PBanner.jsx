import React from "react";
import banner from "/banner.jpg";
import Pbaner from "/Pbaner.svg";
function PBanner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-6">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes to my{" "}
              <span className="text-pink-500">portfolio!!!</span>
            </h1>
            <p className="text-sm md:text-l">
              Hello! I'm Lilesh Bawane, a passionate and experienced Full Stack
              Developer with a diverse and comprehensive knowledge of various
              technologies
            </p>
            <div className="">
              <div className="font-bold text-xl mb-2">Lilesh Bawane</div>
              <p className="text-gray-700 text-base mb-2">
                Email: lileshrocking@gmail.com
              </p>
              <p className="text-gray-700 text-base mb-2">
                Contact: 9325926559
              </p>
              <p className="text-gray-700 text-base mb-2">Location: Pune</p>
              <p className="text-gray-700 text-base mb-2">
                Languages: English, Hindi, Marathi
              </p>
              <div className="flex space-x-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/lilesh-bawane/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.35 0H2.65C1.19 0 0 1.19 0 2.65v18.7C0 22.81 1.19 24 2.65 24h18.7c1.46 0 2.65-1.19 2.65-2.65V2.65C24 1.19 22.81 0 21.35 0zM7.96 20.02H4.98V9.53h2.98v10.49h-.01zm-1.5-12.08a1.75 1.75 0 111.75-1.75 1.75 1.75 0 01-1.75 1.75zm12.09 12.08h-2.98v-5.54c0-1.32-.02-3.02-1.84-3.02-1.84 0-2.13 1.44-2.13 2.92v5.64h-3v-10.49h2.9v1.56h.04c.38-.72 1.3-1.48 2.87-1.48 3.06 0 3.62 2.01 3.62 4.63v5.78z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/lilesh143"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800 transition duration-300 ease-in-out"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0a12 12 0 00-3.8 23.39c.6.12.82-.26.82-.58l-.01-2.06c-3.34.72-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.74.08-.73.08-.73 1.2.08 1.83 1.23 1.83 1.23 1.06 1.82 2.78 1.29 3.46.98.1-.77.42-1.29.76-1.59-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.46-2.38 1.23-3.22a4.43 4.43 0 01.12-3.22s1.02-.33 3.34 1.25a11.44 11.44 0 016 0c2.32-1.58 3.34-1.25 3.34-1.25a4.43 4.43 0 01.12 3.22c.77.84 1.23 1.91 1.23 3.22 0 4.61-2.82 5.63-5.48 5.93.43.37.81 1.1.81 2.22l-.01 3.3c0 .32.22.7.83.58A12 12 0 0012 0" />
                  </svg>
                </a>
              </div>
            </div>

            
          </div>
        </div>
        <div className=" order-1 w-full  md:w-1/2">
          <img
            src={Pbaner}
            className="md:w-[550px] md:h-auto md:ml-12 md:mt-10"
            alt=""
          />
        </div>
      </div>
      <div className="flex-row items-center justify-center align-middle mb-20">
        <div className="m-auto">
          <label className="input m-auto input-bordered flex items-center gap-2 w-3/6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
        </div>
        <div className="m-auto flex items-center ">
          <button className="btn mt-4 m-auto  btn-secondary">Get Started</button>
        </div>
      </div>
    </>
  );
}

export default PBanner;
