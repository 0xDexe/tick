import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { useTheme } from "next-themes";
import Table  from "../components/Table";

import data from "../data/services.json";

const Service = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return (
    <>    
      <Header  />  
      <div
        className={`container mx-auto mb-10 ${
          data.showCursor && "cursor-none"
        }`}
      >
        
        {mount && (
          
          <div className="mt-10 w-full flex flex-col items-center">
            <div
              className={`w-full big-gray-100 p-10 mob:p-5 desktop:m-10 desktop:p-10 rounded-lg shadow-sm`}
            >
              <div className="App"> 
                <Table data={data}/> 
              </div> 
              
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Service;
