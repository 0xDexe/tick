import React, { useEffect, useState } from "react";

import Header from "../components/Header";
import Contact from "../components/Contact";
import { useTheme } from "next-themes";
// Data
import data from "../data/portfolio.json";
const ContactForm = () => {
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>
    
    <Header />
      
      <div
        className={`container mx-auto mb-10 `}
      >
        {mount && (          
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full bg-gray-50  max-w-4xl mt-5 mob:p-5 desktop:p-20 rounded-lg shadow-sm`}
            >
              {/*contact matter*/}
              <div className="App"> 
                <Contact/> 
              </div> 
              
            </div>
          </div>
        )}
      </div>

    </>
  );
};

export default ContactForm;
