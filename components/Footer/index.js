import React from "react";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/router";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the appropriate icons


const Footer = ({}) => {
  const router = useRouter();
  return (
    <>
      <div className=" flex flex-col mt-4 p-2 laptop:mt-7 bg-blue-800 text-white rounded-lg space-x-5 "> 
      <div className="flex flex-row justify-between">
      <div> 
          <h1 className="ml-5 mt-3 laptop:ml-10 laptop:mt-10 text-xl laptop:text-5xl  text-bold 	">LET US WORK</h1>
          <h1 className=" ml-5 text-xl laptop:text-5xl  mt-2  laptop:ml-10 text-bold 	">TOGETHER</h1>
          
      </div>
      <div className="flex mt-3 laptop:mt-10 laptop:mr-20 flex-col space-y-2"> 
        <h2>Mumbai, India</h2>
        <h2>+91 7777051052</h2>
        <h2>connect@mysocietymanager.in</h2>
      </div>
      </div>
      
         
          {/*<button className="ml-20 mt-10 text-sm tablet:text-base p-2 laptop:p-2  laptop:m-2 rounded-lg transition-all ease-out duration-300 
         hover:scale-105 active:scale-100 hover:bg-slate-300 bg-slate-50" onClick={() => router.push("/contact")}>contact us</button>
  */}

<div className="flex flex-row space-x-4 mt-5 justify-center mb-10 ">
<FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700  " />
  <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600 " />
  <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
</div>

        </div>
    </>
  );
};

export default Footer;
