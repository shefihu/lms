import React from "react";
import hero from "../../assets/home/hero.jpg";
import book from "../../assets/home/book.png";
import teamwork from "../../assets/home/teamwork.png";
import authorization from "../../assets/home/authorization.png";
import work from "../../assets/home/work-place.png";
const Hero = () => {
  return (
    <div>
      <div className="w-full lg:mt-24 mt-80 h-full relative  ">
        <div className="w-full h-full ">
          <div className="absolute bg-gray-800/30 backdrop-blur-sm w-full h-full"></div>
          <img
            src={hero}
            alt=""
            className="w-full lg:flex hidden h-full object-cover "
          />
        </div>
        <div className="w-full flex justify-center  absolute mx-auto top-0 h-full items-center">
          <div className="max-w-[85%] w-full h-[28rem] py-6 rounded-lg ">
            <h1 className="text-[40px] lg:text-white font-bold text-center">
              Where teaching and learning come together
            </h1>
            <p className="text-[20px] text-center w-full max-w-[60rem] lg:text-white font-base mx-auto">
              LMS is your all-in-one place for teaching and learning. Our
              easy-to-use and secure tool helps educators manage, measure, and
              enrich learning experiences.
            </p>
            <div className="w-full max-w-[28rem] flex justify-center lg:space-x-6 space-y-4 flex-wrap  mx-auto h mt-6">
              <button className="bg-[#1a1a2a] text-white w-[200px] py-3 text-[15px] font-bold rounded-[4px]">
                Get Started
              </button>
              <button className="border-2 lg:text-white w-[200px] py-3 font-bold rounded-[4px] text-[15px] border-gray-200">
                Sign in to LMS
              </button>
            </div>
            <div className="w-full max-w-[95%] flex-wrap lg:text-white  flex justify-between mt-14 = mx-auto ">
              <div className="xl:w-[267px]  bg-white/20 backdrop-blur-md py-3 rounded-xl flex flex-col items-center ">
                <img src={work} alt="" className="w-[80px]" />
                <h4 className="text-[20px] mt-10">All-in-one Place</h4>
                <p className="text-center mt-3">
                  Bring all your learning tools together and manage multiple
                  classes in one central destination.
                </p>
              </div>
              <div className="xl:w-[267px]  bg-white/20 backdrop-blur-md py-3 rounded-xl flex flex-col items-center ">
                <img src={book} alt="" className="w-[80px]" />
                <h4 className="text-[20px] mt-10">Easy to use</h4>
                <p className="text-center mt-3">
                  Anyone in your school community can get up and running with
                  Classroom in minutes.
                </p>
              </div>
              <div className="xl:w-[267px]  bg-white/20 backdrop-blur-md py-3 rounded-xl flex flex-col items-center ">
                <img src={teamwork} alt="" className="w-[80px]" />
                <h4 className="text-[20px] mt-10">Built for collaboration</h4>
                <p className="text-center mt-3">
                  Work simultaneously in the same document with the whole class
                  or connect face-to-face with Google Meet.
                </p>
              </div>
              <div className="xl:w-[267px]  bg-white/20 backdrop-blur-md py-3 rounded-xl flex flex-col items-center ">
                <img src={authorization} alt="" className="w-[80px]" />
                <h4 className="text-[20px] mt-10">Accessible</h4>
                <p className="text-center mt-3">
                  Empower teaching and learning from anywhere, on any device,
                  and give your class more flexibility and mobility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
