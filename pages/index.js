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
import TestimonySlider from "../components/Slider";
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
  const [show,setShow] = useState(0); 
  const router = useRouter();     
    useEffect(() => {
        if(window.innerHeight < 768 )
        {
          setShow(show)
        }
    }
    )

  return (
    <>
      <Head>
        <title>{data.name}</title>
      </Head>
      
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>
      <Header/>
      <div className="container m-0" > 

      <div className="w-full flex justify-center ">          
          <Carousel slides={slides} />
      </div>

              <div className="ml-5 laptop:ml-60">
                <h1 className="text-3xl mt-4 text-bold">About Us</h1>
                <div className="  border-t-4 mt-1 border-sky-800 w-2/12 "></div>
              </div>

          <div className="flex flex-row"> 
              <p className="laptop:m-10 mt-3 text-lg laptop:text-2xl w-3/5">
                {data.aboutpara}
              </p>
              <img src="about.png" className="object-scale-down h-64" /> 
            </div>  

          <div className= "flex justify-center">
            <video className="w-3/4 h-3/4 max-w-full rounded-lg" controls>
            <source src="/tick-vid.mp4"/>
              Your browser does not support the video tag.
            </video>   
          </div>

          <div className="ml-60  mt-10 laptop:mt-20 p-2 laptop:p-0">
            <h1 className=" text-3xl text-bold">Testimonials</h1>
            <div className="  border-t-4 mt-1 border-sky-800 w-2/12 "></div>
          </div>
          <Rslider testimonydata={testimonydata.test}/>
          
          {//<TestimonySlider testimonydata={testimonydata.test}/>
}
          <div className="ml-60  mt-10 laptop:mt-30 p-2 laptop:p-0">
            <h1 className=" text-3xl text-bold">Services</h1>
            <div className="  border-t-4 mt-1 border-sky-800 w-2/12 "></div>
          </div> 
          
          <div className="mt-5 tablet:m-10 grid grid-cols-1 laptop:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <ServiceCard    key={index}    name={service.title} description={service.description}/>))}
          </div>     
        <div className="mt-5 flex justify-end mr-7 ">
          <button className="rounded-lg p-2 text-lg transition-all duration-300 ease-out first:ml-0 hover:scale-105 active:scale-100 bg-blue-800 text-white" onClick={()=> router.push("/services")} > Know More </button>
        </div>  
      </div>  
      <Footer />

  </>

  );
}
