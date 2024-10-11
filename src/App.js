import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Brain, Building, Shield, Play, Pause, ArrowBigDown, ArrowBigUp } from 'lucide-react';
import "./App.css"
import { Timeline, DataSet } from "vis-timeline/standalone";
import Slider from 'react-slick';
import { Image, Row, Col } from "antd"
import gifTitle from "../src/title-bg.gif"
import "vis-timeline/styles/vis-timeline-graph2d.css";
import dopsContent from "../src/DOTcontent1.jpg"
import dopsGif from "../src/DOToption 2.gif"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gifBg from "../src/bgImage.gif"
import gifBack from "../src/dragon.png"
import gifSrc from "../src/gif1.gif"
import image1 from "../src/Images/cave paintings.gif"
import imageAlp from "../src/Images/imagealp.png"
import image2 from "../src/Images/image (1).png"
import image3 from "../src/Images/internet.gif"
import image4 from "../src/Images/image.png"
import image5 from "../src/Images/DOToption 2.gif"
import image6 from "../src/Images/image (5).png"
import image7 from "../src/Images/socialmedia.gif"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const OfficeSection = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        x: 0, // Move to center (original position)
        transition: { duration: 0.1, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const ref1 = useRef(null);

  // Carousel settings for smooth transitions
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col xl={10} sm={24} xs={24} lg={10} md={10}>
          <h1 style={{ textAlign: "center" }} className="title">Folded into Perfection: The Harmony of Wrapdrive</h1>
          <motion.div
            className="card-container overflow-hidden flex-1 m-2"
            whileHover={{ scale: 1.05 }}
            ref={ref1}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Slider {...settings}>
              <div className='wrapdrive-container'>
                <p className="intro">
                  In the delicate art of Origami, a single crease can transform a flat sheet into a work of art. Similarly, the subtle connections between systems and processes can elevate an organization from chaos to harmony.
                </p>
                <p className="main-content">
                  Wrapdrive is the vessel that brings order to your digital landscape, weaving together disparate threads into a cohesive tapestry. With each integration, the boundaries between systems blur, and the beauty of simplicity emerges.
                </p>
              </div>

              <div className='wrapdrive-container'>
                <p className="main-content">
                  As the intricate patterns of Origami reveal hidden symmetry, Wrapdrive uncovers new efficiencies, streamlining workflows and unlocking innovation. By consolidating access and security, Wrapdrive:
                </p>
                <ul className="features-list">
                  <li>Protects the delicate balance of your organization's ecosystem</li>
                  <li>Fosters collaboration and knowledge sharing</li>
                  <li>Unfolds new possibilities for growth and productivity</li>
                </ul>
                <p className="closing">
                  Experience the elegance of Wrapdrive, where complexity meets simplicity.
                </p>
              </div>
            </Slider>
          </motion.div>
        </Col>
        <Col xl={14} md={14} lg={14} xs={24} sm={24}>
          <Row  style={{ display: "flex", flexDirection: "column" }}>
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              ref={ref}
              initial={{ opacity: 0, x: -200 }}
              animate={controls}
            >
              <div>
                <img src={gifBack} alt="Transformation GIF" className="w-[60%] h-auto rounded-lg" />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              ref={ref}
              initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
              animate={controls}
            >
              <div style={{ display: "flex", justifyContent: "end" }}>
                <img src={gifSrc} alt="Transformation GIF" className="w-[60%] h-auto rounded-lg" />
              </div>
            </motion.div>
          </Row>
        </Col>
      </Row>

      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col xl={14} md={14} lg={14} xs={24} sm={24}>
          <Row style={{ display: "flex", flexDirection: "column" }}>
            <motion.div
              className="mb-4"
              whileHover={{ scale: 1.05 }}
              ref={ref}
              initial={{ opacity: 0, x: -200 }}
              animate={controls}
            >
              <div>
                <img src={dopsContent} alt="Transformation GIF" className="w-[60%] h-auto rounded-lg" />
              </div>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              ref={ref}
              initial={{ opacity: 0, x: -200 }} // Start off-screen to the left
              animate={controls}
            >
              <div style={{ display: "flex", justifyContent: "end" }}>
                <img src={dopsGif} alt="Transformation GIF" className="w-[60%] h-auto rounded-lg" />
              </div>
            </motion.div>
          </Row>
        </Col>

        <Col xl={10} sm={24} xs={24} lg={10} md={10}>
          <h1 style={{ textAlign: "center" }}  className="title">Introducing DOT: The Shape-Shifting AI Catalyst</h1>
          <motion.div
            className="card-container overflow-hidden flex-1 m-2"
            whileHover={{ scale: 1.05 }}
            ref={ref}
            initial={{ opacity: 0, x: -200 }}
            animate={controls}
          >
            <Slider {...settings}>
              <div className="wrapdrive-container">
                <p className="intro">
                  Imagine a force that seamlessly integrates with your organization's core, adapting to its unique contours. Inspired by the timeless puzzle of Tetris, DOT is the compounding AI system that revolutionizes digital transformation.
                </p>
              </div>

              <div className="wrapdrive-container">
                <p className="main-content">
                  Born from our founding team's decade-long expertise and the latest advancements in AI, DOT is the master builder of efficient systems. This formless and omnipresent intelligence shapeshifts to:
                </p>
                <ul className="features-list">
                  <li>Understand legacy systems and modernization needs</li>
                  <li>Streamline conversational flows with cutting-edge AI</li>
                  <li>Seamlessly integrate with existing infrastructure</li>
                </ul>
              </div>

              <div className="wrapdrive-container">
                <p className="main-content">
                  DOT's AI agents are the ultimate puzzle solvers, fitting perfectly into your organization's landscape. They:
                </p>
                <ul className="features-list">
                  <li>Identify gaps and optimize workflows</li>
                  <li>Enhance user experiences through intuitive interfaces</li>
                  <li>Fortify security with adaptive threat detection</li>
                </ul>
              </div>

              <div className="wrapdrive-container">
                <p className="main-content">
                  With DOT, transformation is no longer a puzzle. Our AI system:
                </p>
                <ul className="features-list">
                  <li>Compounds knowledge with each interaction</li>
                  <li>Evolves alongside your organization's growth</li>
                  <li>Unlocks hidden potential through data-driven insights</li>
                </ul>
              </div>

              <div className="wrapdrive-container">
                <p className="closing">
                  Experience the limitless possibilities of DOT, where technology seamlessly merges with innovation.
                </p>
              </div>
            </Slider>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

const Dashboard = () => {
  const timelineRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
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

  return (
    <div className="background-image container mx-auto p-4">
      <div className='content'>

        <div className='content-title-card'>
          <div>
            <Image preview={false} src={gifTitle} />
          </div>
          <h1 className="text-4xl font-bold text-center">Our Digital Transformation Journey</h1>
          <div>
            <Image preview={false} src={gifTitle} />
          </div>
        </div>
        <div className='card-view'>
          <OfficeSection />
        </div>
        <div className="relative p-4 border rounded-lg bg-gray-100 mb-8">
          <h1 style={{ backgroundColor: "rgb(252, 231, 243)", color: "#DD4D85", display: "flex", justifyContent: "space-between", padding: "1.5%" }} className="text-center py-5 m-0" onClick={toggleAccordion}>
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
    </div>
  );
};


export default Dashboard;
