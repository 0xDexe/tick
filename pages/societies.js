import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Header from "../components/Header";

import SocietyCard from "../components/SocietyCard"; 
import { useTheme } from "next-themes";
// Data
import societies from "../data/societies.json"; 

const Resume = () => {
  const router = useRouter();
  const theme = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
    
  }, []);
  return (    <>
      
      <Header />
      
        {mount && (
          <div className="mt-5 w-full flex flex-col items-center justify-center bg-gray-50  p-10 mob:p-5 desktop:p-10 rounded-lg shadow-sm">
            
              <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-4 justify-center gap-3"  style={{ margin: '0 auto'}}>
            {societies.society.map((t) => (
              <SocietyCard   
              key={t.id}             
                img={t.image}
                society={t.name}
                address={t.address}
                //onClick={() => window.open(project.url)}
              />
            ))}
          </div>
          </div>
        )}
     
    </>
  );
};

export default Resume;
