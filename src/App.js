import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Brain, Building, Shield, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import LogoVideo from "../src/sample-video.mp4"
import BgVideo from "../src/bg-video.mp4"
import * as THREE from 'three';


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
      className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
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


const OfficeSection = ({ title, description, features, processes, transformation }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);


  return (
    <div className="mb-4">
      <button
        className="w-full text-left p-4 bg-blue-500 text-white rounded-t-lg focus:outline-none"
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
            className="bg-white p-4 rounded-b-lg"
            ref={contentRef}
          >
            <p className="mb-4">{description}</p>
            <RubiksCubeScene />
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
  const [activeSection, setActiveSection] = useState(0);
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
      <BackgroundVideo />
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
