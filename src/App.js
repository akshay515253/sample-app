import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Brain, Building, Shield, Play, Pause, ChevronDown, ChevronUp } from 'lucide-react';
import { useCallback } from 'react';
import LogoVideo from "../src/sample-video.mp4"
import BgVideo from "../src/bg-video.mp4"


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



const OfficeSection = ({ title, description, features, processes, transformation, isActive }) => {
  const [isExpanded, setIsExpanded] = useState(false);


  return (
    <div className={`p-4 border rounded-lg transition-all duration-500 ${isActive ? 'bg-blue-100 shadow-lg' : 'bg-gray-100'}`}>
      <h3 className="text-xl font-semibold mb-2 flex justify-between items-center">
        {title}
        <button onClick={() => setIsExpanded(!isExpanded)} className="text-blue-500 hover:text-blue-700">
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </h3>
      <p className="mb-2 text-gray-600">{description}</p>
      {isExpanded && (
        <>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc pl-5">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <h4 className="font-semibold mb-2">Core Processes:</h4>
            <ul className="list-disc pl-5">
              {processes.map((process, index) => (
                <li key={index}>{process}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Digital Transformation:</h4>
            <p>{transformation}</p>
          </div>
        </>
      )}
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
    <div style={{ height: 400 }} className="relative w-full aspect-video mb-8">
      <video
        style={{ height: 400 }}
        ref={videoRef}
        className="w-full h-400 object-cover rounded-lg"
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
          Transforming Your Business:<br />From Traditional to Digital
        </p>
      </div>
    </div>
  );
};


const Dashboard = () => {
  const [activeSection, setActiveSection] = useState(0);


  const offices = [
    {
      title: 'Front Office',
      description: 'Direct interface with customers, handling sales, marketing, and customer service.',
      features: ['CRM Integration', 'Customer Portal', 'Sales Analytics', 'Marketing Automation'],
      processes: ['Lead Generation', 'Customer Onboarding', 'Sales Pipeline Management', 'Customer Support Ticketing'],
      transformation: 'AI-powered chatbots for 24/7 customer support, predictive analytics for sales forecasting, and personalized marketing campaigns driven by machine learning algorithms.'
    },
    {
      title: 'Middle Office',
      description: 'Bridges front and back offices, focusing on risk management, compliance, and operations.',
      features: ['Risk Assessment Tools', 'Compliance Monitoring', 'Process Automation', 'Data Analytics Dashboard'],
      processes: ['Risk Modeling', 'Regulatory Reporting', 'Operational Efficiency Analysis', 'Quality Assurance'],
      transformation: 'Implementing blockchain for transparent and secure transactions, using AI for real-time risk assessment, and leveraging big data for more accurate compliance monitoring.'
    },
    {
      title: 'Back Office',
      description: 'Handles administrative and support tasks, including finance, HR, and IT infrastructure.',
      features: ['ERP System', 'HR Management Software', 'IT Service Management', 'Financial Reporting Tools'],
      processes: ['Payroll Processing', 'IT Support Ticketing', 'Financial Reconciliation', 'Employee Onboarding'],
      transformation: 'Cloud migration for scalable IT infrastructure, RPA (Robotic Process Automation) for routine tasks, and advanced analytics for financial forecasting and HR insights.'
    },
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

      <div className="grid grid-cols-1 gap-4 mb-8">
        {offices.map((office, index) => (
          <OfficeSection key={index} {...office} isActive={index === activeSection} />
        ))}
      </div>

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
