import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Brain, Building, Shield, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';
import "./App.css"
import { Canvas, useFrame } from '@react-three/fiber';
import { Timeline, DataSet } from "vis-timeline/standalone";
import "vis-timeline/styles/vis-timeline-graph2d.css";
import { Box, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import LogoVideo from "../src/sample-video.mp4"
import BgVideo from "../src/bg-video.mp4"
import * as THREE from 'three';
import gifLogo from "../src/gif.gif"
import image1 from "../src/Images/cave paintings.gif"
import imageAlp from "../src/Images/imagealp.png"
import image2 from "../src/Images/image (1).png"
import image3 from "../src/Images/internet.gif"
import image4 from "../src/Images/image.png"
import image5 from "../src/Images/DOToption 2.gif"
import image6 from "../src/Images/image (5).png"
import image7 from "../src/Images/socialmedia.gif"

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

const RubiksCube = () => {
  const groupRef = useRef();
  const [chips, setChips] = useState([]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.x += 0.005;
      groupRef.current.rotation.y += 0.005;
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (chips.length < 26) {
        const newChip = {
          id: Date.now(),
          position: [
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
          ],
          color: `hsl(${Math.random() * 360}, 100%, 50%)`,
          isInside: false
        };
        setChips(prevChips => [...prevChips, newChip]);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [chips]);

  return (
    <group ref={groupRef}>
      <Box args={[3, 3, 3]} >
        <meshStandardMaterial color="gray" transparent opacity={0.5} />
      </Box>
      {chips.map((chip) => (
        <DataChip
          key={chip.id}
          position={[
            chip.isInside ? 0 : Math.sign(chip.position[0]) * 1.5,
            chip.isInside ? 0 : Math.sign(chip.position[1]) * 1.5,
            chip.isInside ? 0 : Math.sign(chip.position[2]) * 1.5
          ]}
          color={chip.color}
        />
      ))}
    </group>
  );
};

const DataChip = ({ position, color }) => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.position.lerp(new THREE.Vector3(...position), 0.1);
    }
  });

  return (
    <Box
      ref={meshRef}
      args={[0.2, 0.2, 0.05]}
    >
      <meshStandardMaterial color={color} />
    </Box>
  );
};




const RubiksCubeScene = () => {
  return (
    <div style={{ width: '100%', height: '300px' }}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RubiksCube />
        <OrbitControls />
      </Canvas>
    </div>
  );
};



const RubiksCubeGif = () => {
  return (
    <div className="w-full h-64 flex justify-center items-center bg-pink-100 rounded-lg overflow-hidden">
      <img
        src={gifLogo}
        alt="Rubik's Cube"
        className="w-auto h-full object-contain"
      />
    </div>
  );
};


const OfficeSection = ({ title, description, features, processes, transformation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  return (
    <div className="mb-4">
      <button
        style={{ backgroundColor: "#DC4F88" }}
        className="w-full text-left p-4 text-white rounded-t-lg focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ backgroundColor: "#FCE7F3" }}
            className="p-4 rounded-b-lg"
            ref={contentRef}
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Content Section */}
              <div className="w-full md:w-2/3">
                <p className="mb-4">{description}</p>

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
                <p>{transformation}</p>
              </div>

              {/* GIF Section */}
              <div className="w-full md:w-1/3 flex justify-center items-center">
                <RubiksCubeGif />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
};


const AnimatedConnection = ({ isActive }) => (
  <div className={`h-1 bg-blue-500 transition-all duration-500 ${isActive ? 'w-full' : 'w-0'}`} />
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
    <div className="relative w-full aspect-video mb-8">
      <video
        ref={videoRef}
        className="w-full h-full object-cover rounded-lg"
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

  useEffect(() => {
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
  }, []);


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
      <h1 className="text-4xl font-bold mb-8 text-center">Our Digital Transformation Journey</h1>
      <TransformersVideo />
      {offices.map((office, index) => (
        <OfficeSection key={index} {...office} />
      ))}


      <div className="relative p-4 border rounded-lg bg-gray-100 mb-8">
        <div className="flex justify-center items-center mb-4">
          <Brain className="w-12 h-12 text-purple-600" />
          <h2 className="text-2xl font-semibold ml-2">DOT AI System</h2>
        </div>
        <p className="text-center mb-4">
          Connecting all major departments, delivering communication, and making autonomous decisions
        </p>

        <h1 className="text-center py-5 bg-blue-500 text-white m-0">Evolution of Communication</h1>
        <div ref={timelineRef} className="w-full h-[80vh]" />
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
      <BackgroundVideo />
    </div>
  );
};


export default Dashboard;
