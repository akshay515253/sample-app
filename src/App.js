import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Brain, Building, Shield, Play, Pause, ChevronDown, ChevronUp, ArrowUp, ArrowBigDown, ArrowBigUp } from 'lucide-react';
import "./App.css"
import { Canvas, useFrame } from '@react-three/fiber';
import { Timeline, DataSet } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";
import { Box, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import LogoVideo from "../src/sample-video.mp4"
import BgVideo from "../src/bg-video.mp4"
import * as THREE from 'three';
import gifSrc from "../src/gif.gif"
import image1 from "../src/Images/cave paintings.gif"
import imageAlp from "../src/Images/imagealp.png"
import image2 from "../src/Images/image (1).png"
import image3 from "../src/Images/internet.gif"
import image4 from "../src/Images/image.png"
import image5 from "../src/Images/DOToption 2.gif"
import image6 from "../src/Images/image (5).png"
import image7 from "../src/Images/socialmedia.gif"
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BackgroundVideo = () => {
  const videoRef = useRef(null);
  const lastScrollY = useRef(0);
  const scrollSpeed = 0.05; // Adjust this value to control reverse scroll speed

  const handleScroll = useCallback(() => {
    const { current: video } = videoRef;
    if (!video) return;


    const currentScrollY = window.scrollY;
    const scrollDelta = currentScrollY - lastScrollY.current;


    if (scrollDelta > 0) {
      // Scrolling down, play forward
      video.playbackRate = 1;
      video.play();
    } else if (scrollDelta < 0) {
      // Scrolling up, rewind manually
      // video.pause();  // Pause the video while rewinding
      video.currentTime = Math.max(0, video.currentTime - scrollSpeed);
    }

    lastScrollY.current = currentScrollY;
  }, []);


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);


  return (
    <video
      ref={videoRef}
      style={{ height: "300px" }}
      className="w-full object-cover z-[-1]"
      loop
      muted
      playsInline
    >
      <source src={BgVideo} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

const OfficeSection = ({ title, description, features, processes, transformation }) => {
  return (
    <motion.div
      className="card-container shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      style={{ backgroundColor: "#FCE7F3" }}
    >
      <div className="p-4 flex flex-col">
        <h2 className="font-bold text-xl mb-2" style={{ color: '#DC4F88' }}>{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>

        <h3 className="font-bold mt-4">Key Features:</h3>
        <ul className="list-disc pl-5 mb-2">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>

        <h3 className="font-bold">Core Processes:</h3>
        <ul className="list-disc pl-5 mb-2">
          {processes.map((process, index) => (
            <li key={index}>{process}</li>
          ))}
        </ul>

        <h3 className="font-bold">Digital Transformation:</h3>
        <p className="mb-4">{transformation}</p>

        {/* GIF Section */}
      </div>
    </motion.div>
  );
};


const AnimatedConnection = ({ isActive }) => (
  <div style={{ backgroundColor: "#DD4D85" }} className={`h-1 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
);


const TransformersVideo = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);


  const togglePlay = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };


  return (
    <div className="relative w-full aspect-video">
      <video
        ref={videoRef}
        className="w-full h-[350px] object-cover rounded-lg"
        loop
        muted
      >
        <source src={LogoVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button
        style={{ zIndex: 999 }}
        onClick={togglePlay}
        className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
      >
        {isPlaying ? <Pause size={24} /> : <Play size={24} />}
      </button>
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
        <p className="text-white text-2xl font-bold text-center px-4">
          Transforming Your Business
        </p>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const timelineRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 1000, // Adjust autoplay speed (in milliseconds)
    beforeChange: () => {
      if (isPaused) {
        sliderRef.current.slickPlay(); // Resume autoplay
        setIsPaused(false);
      }
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Pause autoplay when mouse enters
  const handleMouseEnter = () => {
    sliderRef.current.slickPause(); // Pause autoplay
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    sliderRef.current.slickPlay(); // Resume autoplay
    setIsPaused(false);
  };

  const handleSlideClick = () => {
    if (isPaused) {
      sliderRef.current.slickPlay(); // Resume autoplay
    } else {
      sliderRef.current.slickPause(); // Pause autoplay
    }
    setIsPaused(!isPaused);
  };


  useEffect(() => {
    if (isOpen && timelineRef.current) {
      const items = new DataSet([
        {
          id: 1,
          content: `
         <img src="${image1}" alt="Cave Paintings" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Cave Paintings</div>
            <div class="timeline-description">Early visual communication</div>
            <div class="timeline-tech">Tech: Natural pigments, primitive tools</div>
          </div>
        `,
          start: new Date(-35000, 0, 1).getTime()
        },
        {
          id: 2,
          content: `
          <img src="${image4}" alt="Cuneiform Writing" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Cuneiform Writing</div>
            <div class="timeline-description">Early writing system</div>
            <div class="timeline-tech">Tech: Clay tablets, stylus</div>
          </div>
        `,
          start: new Date(-3200, 0, 1).getTime()
        },
        {
          id: 3,
          content: `
          <img src="${imageAlp}" alt="Alphabetic Writing" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Alphabetic Writing</div>
            <div class="timeline-description">Phoenician alphabet</div>
            <div class="timeline-tech">Tech: Ink, papyrus</div>
          </div>
        `,
          start: new Date(-1050, 0, 1).getTime()
        },
        {
          id: 4,
          content: `
          <img src="${image2}" alt="Printing Press" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Printing Press</div>
            <div class="timeline-description">Mass production of books</div>
            <div class="timeline-tech">Tech: Movable type, mechanical press</div>
          </div>
        `,
          start: new Date(1440, 0, 1).getTime()
        },
        {
          id: 5,
          content: `
          <img src="${image6}" alt="Telegraph" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Telegraph</div>
            <div class="timeline-description">Long-distance communication</div>
            <div class="timeline-tech">Tech: Electrical signals, Morse code</div>
          </div>
        `,
          start: new Date(1844, 0, 1).getTime()
        },
        {
          id: 6,
          content: `
          <img src="${image3}" alt="Internet" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Internet (ARPANET)</div>
            <div class="timeline-description">Global network</div>
            <div class="timeline-tech">Tech: Packet switching, TCP/IP</div>
          </div>
        `,
          start: new Date(1969, 0, 1).getTime()
        },
        {
          id: 7,
          content: `
          <img src="${image7}" alt="Social Media" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">Social Media (Twitter)</div>
            <div class="timeline-description">Real-time global communication</div>
            <div class="timeline-tech">Tech: Web 2.0, mobile apps</div>
          </div>
        `,
          start: new Date(2006, 0, 1).getTime()
        },
        {
          id: 8,
          content: `
          <img src="${image5}" alt="AI Language Models" class="timeline-image">
          <div class="timeline-content">
            <div class="timeline-title">AI Language Models</div>
            <div class="timeline-description">Advanced AI assistants</div>
            <div class="timeline-tech">Tech: Neural networks, big data</div>
          </div>
        `,
          start: new Date(2020, 0, 1).getTime()
        }
      ]);

      const options = {
        zoomMin: 31_536_000_000 * 100,
        zoomMax: 31_536_000_000 * 10000,
        height: '80vh',
        start: new Date(-10000, 0, 1),
        end: new Date(),
      };

      const timeline = new Timeline(timelineRef.current, items, options);

      return () => {
        timeline.destroy();
      };
    }
  }, [isOpen]);

  const offices = [
    {
      title: "Front Office",
      description: "Customer-facing operations and services.",
      features: ["Customer Service", "Sales", "Marketing"],
      processes: ["Lead Generation", "Customer Onboarding", "Complaint Resolution"],
      transformation: "Implementing AI-powered chatbots and personalized customer journeys."
    },
    {
      title: "Middle Office",
      description: "Risk management and operational control.",
      features: ["Risk Assessment", "Compliance", "Quality Control"],
      processes: ["Risk Modeling", "Regulatory Reporting", "Audit Management"],
      transformation: "Utilizing big data analytics for real-time risk assessment and fraud detection."
    },
    {
      title: "Back Office",
      description: "Administrative and support functions.",
      features: ["Finance", "Human Resources", "IT Support"],
      processes: ["Payroll Processing", "Employee Onboarding", "IT Helpdesk"],
      transformation: "Automating routine tasks with RPA and implementing cloud-based ERP systems."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % offices.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center">Our Digital Transformation Journey</h1>

      <div
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Slider ref={sliderRef} {...settings}>
          {Array.from({ length: 5 }).map((_, index) => (
            <div className="card" key={index} onClick={handleSlideClick}>
              <TransformersVideo />
            </div>
          ))}
        </Slider>
      </div>

      <div className='card-view'>
        {offices.map((office, index) => (
          <OfficeSection key={index} {...office} />
        ))}
        <div style={{ width: "48%" }} className="flex justify-center items-center bg-pink-100 rounded-lg overflow-hidden">
          <img
            src={gifSrc}
            alt="logo"
            className="w-auto h-full"
          />
        </div>
      </div>

      <div className="relative p-4 border rounded-lg bg-gray-100 mb-8">
        <div className="flex justify-center items-center mb-4">
          <Brain className="w-12 h-12 text-purple-600" />
          <h2 className="text-2xl font-semibold ml-2">DOT AI System</h2>
        </div>
        <p className="text-center mb-4">
          Connecting all major departments, delivering communication, and making autonomous decisions
        </p>

        <h1 style={{ backgroundColor: "rgb(252, 231, 243)", color: "#DD4D85",display:"flex",justifyContent:"space-between",padding:"1.5%" }} className="text-center py-5 m-0" onClick={toggleAccordion}>
          Evolution of Communication
          {isOpen ? (
            <ArrowBigUp className="ml-2" /> // Up Arrow when accordion is open
          ) : (
            <ArrowBigDown className="ml-2" /> // Down Arrow when accordion is closed
          )}
        </h1>
        {isOpen && (
          <div ref={timelineRef} className="w-full h-[80vh]" />
        )}
        <div className="flex justify-around">
          {offices.map((_, index) => (
            <AnimatedConnection key={index} isActive={index === activeSection} />
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-100">
        <div className="flex items-center">
          <Shield className="w-8 h-8 text-green-600 mr-2" />
          <span className="font-semibold">Rule Engines</span>
        </div>
        <ArrowRight className="w-6 h-6" />
        <div className="flex items-center">
          <Building className="w-8 h-8 text-blue-600 mr-2" />
          <span className="font-semibold">Workflow Definitions</span>
        </div>
      </div>
    </div>
  );
};


export default Dashboard;
