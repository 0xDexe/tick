import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local 
const Header = ({ }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
     
      <div     
        className={`bg-blue-800 p-3 flex-row items-center justify-between sticky text-white top-0 z-10 tablet:flex`}
      >
        <h2
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer p-1 laptop:ml-10"
        >
          Tickboxes
        </h2>
        {(
          <div className="flex">
             <Button onClick={() => router.push("/")}>Home</Button>            
            <Button onClick={() => router.push("/services")}>Services</Button>
            
            <Button onClick={() => router.push("/societies")} classes="first:ml-1">
                Where we work
              </Button>           

            <Button onClick={() => router.push("/contact")}>
              Contact
            </Button>
            
          </div>
        ) } 
      </div>
    </>
  );
};

export default Header;