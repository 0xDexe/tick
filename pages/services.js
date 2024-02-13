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
        {mount && (          
          <div className="container mx-auto mx-0">        

            <div
              className={` mt-5 laptop:mt-15 laptop:p-10 desktop:m-10 desktop:p-10 rounded-lg shadow-sm`}
            >
              <div className="App"> 
                <Table data={data}/> 
              </div> 
              
            </div>
          </div>
        )}
    </>
  );
};

export default Service;