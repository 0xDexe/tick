import React from "react";
import Link from "next/link";
import Button from "../Button";
import { useRouter } from "next/router";
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Import the appropriate icons

const Footer = ({}) => {
  const router = useRouter();
  
  return (
    <>
      <div className="flex flex-col mt-4 p-2 laptop:mt-7 bg-blue-800 text-white rounded-lg space-x-5">
        <div className="flex flex-col items-center justify-center laptop:flex-row laptop:justify-between">
          <div className="text-center laptop:text-left">
            <h1 className="text-xl laptop:text-5xl font-bold">LET US WORK</h1>
            <h1 className="text-xl laptop:text-5xl font-bold">TOGETHER</h1>
          </div>
          <div className="mt-3 laptop:mt-0 laptop:mr-20 flex flex-col items-center laptop:items-end">
            <h2>Mumbai, India</h2>
            <h2>+91 7777051052</h2>
            <h2>connect@mysocietymanager.in</h2>
          </div>
        </div>

        <div className="flex justify-center mt-5">
          <Button onClick={() => router.push("/contact")}>Contact Us</Button>
        </div>

        <div className="flex justify-center mt-5 space-x-4">
          <FaFacebook className="w-6 h-6 text-blue-500 hover:text-blue-700" />
          <FaTwitter className="w-6 h-6 text-blue-400 hover:text-blue-600" />
          <FaLinkedin className="w-6 h-6 text-blue-700 hover:text-blue-900" />
        </div>
      </div>
    </>
  );
};

export default Footer;
