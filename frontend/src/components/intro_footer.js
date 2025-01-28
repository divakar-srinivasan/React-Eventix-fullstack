import React from "react";
import img from "../images/eventix-bg.png"
import host_img from "../images/host.jpg"
import login_img from "../images/login_now.jpeg"
import register from "../images/register.jpg"

const IntroFooter = () => {

  return (
    <div className="bg-black w-full h-auto flex flex-col">
      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
        <div data-aos="fade-right" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold">login and Explore!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Your next Event is just a click away. Explore the unseen Events , begin your Learning journey.</h1>
        </div>
        <div data-aos="fade-left">
          <img src={login_img} alt="loading" className="w-96 h-auto"/>
        </div>
      </div>

      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
      <div data-aos="fade-right">
          <img src={img} alt="loading" className="w-96 h-auto"/>
        </div>
        <div data-aos="fade-left" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold">Discover Exciting Events!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Discover exciting events and learn something new. Experience the best our college has to offer</h1>
        </div>
      </div>

      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
        <div data-aos="fade-right" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold">Register Today!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Don’t miss out – step into the spotlight! Register today and shine at our events.</h1>
        </div>
        <div data-aos="fade-left">
          <img src={register} alt="loading" className="w-96 h-auto"/>
        </div>
      </div>

      <hr className="border-4 border-gray-700"></hr>
      <div className="flex md:flex-row flex-col md:p-20 p-10 justify-around">
      <div data-aos="fade-right">
          <img src={host_img} alt="loading" className="w-96 h-auto"/>
        </div>
        <div data-aos="fade-left" className="flex flex-col justify-center text-center space-y-5">
          <h1 className="text-white text-5xl font-roboto font-bold"> Host Your Event Now!</h1>
          <h1 className="text-gray-500 text-xl font-roboto">Be the Star! Step up and shine as a host! Create memorable experiences for everyone to enjoy</h1>
        </div>
      </div>


    </div>
  );
};

export default IntroFooter;
