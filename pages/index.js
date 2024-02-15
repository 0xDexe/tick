import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";
import ServiceCard from "../components/ServiceCard";
import Footer from "../components/Footer";
import Head from "next/head";

import Carousel from '../components/Carousel';

// Local Data
import data from "../data/portfolio.json";
import testimonydata from "../data/testimonials.json"; 
import { useRouter } from "next/router";
import Rslider from "../components/Rslider";

const slides = [
  {
    imageUrl: 'slide2.png',
    caption: 'Caption 1',
  },
  {
    imageUrl: './slide3.png',
    caption: 'Caption 2',
  },
  // Add more slides as needed
];

export default function Home() {
  const router = useRouter();     
  const [mob, setMob] = useState(0); 
    
  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      if (viewportWidth <= 786) {
        setMob(false); // Set mob state to false for viewport width <= 786
      } else {
        setMob(true); // Set mob state to true for viewport width > 786
      }
    };
  
      handleResize(); 
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    return (
      <>
        <Head>
          <title>{data.name}</title>
        </Head>
        
        <div className="gradient-circle"></div>
        <div className="gradient-circle-bottom"></div>
        <Header />

        <div className="container w-full mx-auto mx-0"> {/* Center the content */}
          <div className="flex justify-center mb-10"> {/* Center the Carousel */}
            <Carousel slides={slides} />
          </div>
    
          <div className="ml-6 laptop:ml-60"> {/* Adjust margin for larger screens */}
            <h1 className="laptop:text-3xl  text-xl mt-4 font-bold">About Us</h1>
            <div className="border-t-4 mt-1 border-sky-800 w-1/12"></div>
          </div>
    
          <div>
            {!mob ? (
              <p className="mt-4">{data.aboutpara}</p>
            ) : (
              <div className="flex flex-row">
                <p className="laptop:m-10 mt-3 text-lg laptop:text-2xl w-3/5">
                  {data.aboutpara}
                </p>
                <img src="about.png" className="object-scale-down h-64" />
              </div>
            )}
          </div>  
    
          <div className="flex justify-center mt-6 laptop:mt-15">
            <video className="w-full h-auto laptop:w-3/4 laptop:h-3/4  rounded-lg" controls>
              <source src="/tick-vid.mp4"/>
              Your browser does not support the video tag.
            </video>   
          </div>
    
          <div className="laptop:ml-60 ml-6  mt-10  p-2 lg:p-0"> {/* Adjust margin for larger screens */}
            <h1 className="laptop:text-3xl text-xl font-bold">Testimonials</h1>
            <div className="border-t-4 mt-1 border-sky-800 w-1/12"></div>
          </div>
          <Rslider testimonydata={testimonydata.test}/>
          
          <div className="ml-6 laptop:ml-60 mt-10 p-2 lg:p-0"> {/* Adjust margin for larger screens */}
            <h1 className="laptop:text-3xl text-xl font-bold">Services</h1>
            <div className="border-t-4 mt-1 border-sky-800 w-1/12"></div>
          </div> 
          
          <div className="mt-5 grid grid-cols-1 laptop:grid-cols-2 gap-4"> {/* Adjust margins and grid for larger screens */}
            {data.services.map((service, index) => (
              <ServiceCard key={index} name={service.title} description={service.description}/>
            ))}
          </div>     
          <div className="mt-5 flex justify-end mr-7">
            <button className="rounded-lg p-2 text-lg transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 bg-blue-800 text-white" onClick={() => router.push("/services")}> Know More </button>
          </div>  
        </div>  
        <Footer />
      </>
    );
    
}
