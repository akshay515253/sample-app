import React, { useEffect, useRef } from 'react';
import { Building, Shield } from 'lucide-react';
import "./App.css"
import Slider from 'react-slick';
import { Row, Col } from "antd"
import "vis-timeline/styles/vis-timeline-graph2d.css";
import dopsContent from "../src/DOTcontent1.jpg"
import dopsGif from "../src/DOToption 2.gif"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import gifBack from "../src/dragon.png"
import gifSrc from "../src/gif1.gif"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import groupPic from "../src/founders_new-fotor-ai-art-effects-20241011163944-transformed.png"
import ReactCarousel, { AFTER, CENTER, BEFORE } from "react-carousel-animated";
import eshwar from "../src/Easwar-Murthy-CEO.png"
import himanshu from "../src/HImanshu.png"
import dotImage1 from "../src/dotImage1.png"
import dotImage2 from "../src/dotImage2.png"
import dotImage3 from "../src/dotImage3.png"
import dotImage4 from "../src/dotImage4.png"
import dotImage5 from "../src/dotImage5.png"
import videoMp4 from "../src/video.mp4"
import "react-carousel-animated/dist/style.css";

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
        x: 0,
        transition: { duration: 0.05, ease: "easeOut" },
      });
    }
  }, [controls, inView]);

  const ref1 = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <>
      <Row style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <Col xl={8} sm={24} xs={24} lg={8} md={8}>
          <h1 style={{ textAlign: "center" }} className="title">Folded into Perfection: The Harmony of Wrapdrive</h1>
          <motion.div
            className="card-container overflow-hidden flex-1 m-2"
            whileHover={{ scale: 1.05 }}
            ref={ref1}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
          >
             <Slider {...settings}>
            {/* <ReactCarousel
              carouselConfig={{
                transform: {
                  rotateY: {
                    [BEFORE]: () => "rotateY(25deg)",
                    [CENTER]: () => "rotateY(0deg)",
                    [AFTER]: () => "rotateY(-25deg)",
                  },
                },
              }}
              itemBackgroundStyle={{
                backgroundColor: "#f9f9f9",
                borderRadius: "3px",
                boxShadow: "8px 12px 14px -6px black",
              }}
              containerBackgroundStyle={{
                filter: "blur(7px)",
              }}
              itemMaxWidth={100}
              carouselHeight="350px"
              autoSlide={true}
              autoSlideInterval={1000}    // Set the interval for auto sliding (3000ms = 3 seconds)
            > */}
              <div className='wrapdrive-container bg-red-500 text-white'>
                <p className="intro font-inter">
                  In the delicate art of Origami, a single crease can transform a flat sheet into a work of art. Similarly, the subtle connections between systems and processes can elevate an organization from chaos to harmony.
                </p>
                <p className="main-content font-inter">
                  Wrapdrive is the vessel that brings order to your digital landscape, weaving together disparate threads into a cohesive tapestry. With each integration, the boundaries between systems blur, and the beauty of simplicity emerges.
                </p>
              </div>

              <div className='wrapdrive-container bg-blue-500 text-white'>
                <p className="main-content font-inter">
                  As the intricate patterns of Origami reveal hidden symmetry, Wrapdrive uncovers new efficiencies, streamlining workflows and unlocking innovation. By consolidating access and security, Wrapdrive:
                </p>
                <ul className="features-list">
                  <li>Protects the delicate balance of your organization's ecosystem</li>
                  <li>Fosters collaboration and knowledge sharing</li>
                  <li>Unfolds new possibilities for growth and productivity</li>
                </ul>
              </div>

              <div className='wrapdrive-container bg-gray-200 text-black'>
                <p className="closing font-inter">
                  Experience the elegance of Wrapdrive, where complexity meets simplicity.
                </p>
              </div>
            {/* </ReactCarousel> */}
            </Slider>
          </motion.div>
        </Col>
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

      <Row style={{ display: "flex", alignItems: "center", gap: "20px" }}>
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

        <Col xl={8} sm={24} xs={24} lg={8} md={8}>
          <h1 style={{ textAlign: "center" }} className="title">DOT: Shape-Shifting AI Catalyst</h1>
          <motion.div
            className="card-container overflow-hidden flex-1 m-2"
            whileHover={{ scale: 1.05 }}
            ref={ref}
            initial={{ opacity: 0, x: -200 }}
            animate={controls}
          >
            <Slider {...settings}>
              <div className="wrapdrive-container bg-yellow-200 text-black">
                <p className="intro font-inter">
                  Imagine a force that seamlessly integrates with your organization's core, adapting to its unique contours. Inspired by the timeless puzzle of Tetris, DOT is the compounding AI system that revolutionizes digital transformation.
                </p>
              </div>

              <div className="wrapdrive-container bg-green-400">
                <p className="main-content font-inter">
                  Born from our founding team's decade-long expertise and the latest advancements in AI, DOT is the master builder of efficient systems. This formless and omnipresent intelligence shapeshifts to:
                </p>
                <ul className="features-list1">
                  <li>Understand legacy systems and modernization needs</li>
                  <li>Streamline conversational flows with cutting-edge AI</li>
                  <li>Seamlessly integrate with existing infrastructure</li>
                </ul>
              </div>

              <div className="wrapdrive-container bg-blue-200">
                <p className="main-content font-inter">
                  DOT's AI agents are the ultimate puzzle solvers, fitting perfectly into your organization's landscape. They:
                </p>
                <ul className="features-list1">
                  <li>Identify gaps and optimize workflows</li>
                  <li>Enhance user experiences through intuitive interfaces</li>
                  <li>Fortify security with adaptive threat detection</li>
                </ul>
              </div>

              <div className="wrapdrive-container bg-red-200">
                <p className="main-content font-inter">
                  With DOT, transformation is no longer a puzzle. Our AI system:
                </p>
                <ul className="features-list1">
                  <li>Compounds knowledge with each interaction</li>
                  <li>Evolves alongside your organization's growth</li>
                  <li>Unlocks hidden potential through data-driven insights</li>
                </ul>
                <p className="closing font-inter">
                  Experience the limitless possibilities of DOT, where technology seamlessly merges with innovation.
                </p>
              </div>

              <div>
                <img src={dotImage1} alt="Transformation GIF" className="w-[100%] h-[100%] rounded-lg" />
              </div>

              <div>
                <img src={dotImage2} alt="Transformation GIF" className="w-[100%] h-[100%] rounded-lg" />
              </div>

              <div>
                <img src={dotImage3} alt="Transformation GIF" className="w-[100%] h-[100%] rounded-lg" />
              </div>

              <div>
                <img src={dotImage4} alt="Transformation GIF" className="w-[100%] h-[100%] rounded-lg" />
              </div>

              <div>
                <img src={dotImage5} alt="Transformation GIF" className="w-[100%] h-[100%] rounded-lg" />
              </div>
            </Slider>
          </motion.div>
        </Col>
      </Row>

      <Row style={{ display: "flex", alignItems: "center", gap: "20px", justifyContent: "space-around" }}>
        <Col xl={8} md={8} lg={8} xs={24} sm={24}>
          <h1 style={{ textAlign: "center" }} className="title">Our Story</h1>
          <div style={{ textAlign: "center" }}>
            <p className="closing font-inter">
              {`Easwar Murthy and Himanshu Gupta co-founded iorta Technology Solutions in 2017.

              Before stepping out on their own, Easwar and Himanshu spent years in techno-functional roles within prominent corporations in the insurance industry.

              Driven by a shared vision to address industry-wide challenges using technology, they embarked on a journey to make a difference.

              It’s been 7 years since then.

              Today, iorta stands as a leading InsurTech company in India, making transformative changes that impact the lives of enterprise users and end-users of financial platforms.`}
            </p>
          </div>
        </Col>
        <Col xl={11} sm={24} xs={24} lg={11} md={11}>
          <motion.div
            className="card-container overflow-hidden flex-1 m-2"
            whileHover={{ scale: 1.05 }}
            ref={ref1}
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Slider {...settings}>
              <div>
                <img src={groupPic} alt="Transformation GIF" className="w-[100%] h-[100%] rounded-lg" />
              </div>

              <div>
                <img src={himanshu} alt="Transformation GIF" className="w-[100%] h-auto rounded-lg" />
                <div style={{ textAlign: "center" }}>
                  <div>
                    HIMANSHU GUPTA
                  </div>
                  <div>
                    Founder & Chief Operating Officer (COO)
                  </div>
                </div>
              </div>

              <div>
                <img src={eshwar} alt="Transformation GIF" className="w-[100%] h-auto rounded-lg" />
                <div style={{ textAlign: "center" }}>
                  <div>
                    EASWARA MURTHY
                  </div>
                  <div>
                    Founder & Chief Executive Officer (CEO)
                  </div>
                </div>
              </div>
            </Slider>
          </motion.div>
        </Col>
      </Row>
    </>
  );
};

const Dashboard = () => {

  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, [])

  return (
    <div className="container mx-auto p-4">
      <div className='content'>

        <div className='background-image'>
          <h1 className="text-4xl font-bold text-center"><i>iorta</i> Technology Solutions</h1>
        </div>
        <div className='card-view'>
          <OfficeSection />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <video
            ref={videoRef}
            className="w-full h-[100px] object-none rounded-lg"
            loop
            muted
          >
            <source src={videoMp4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="flex justify-between items-center p-4 border rounded-lg bg-gray-100">
          <div className="flex items-center">
            <Shield className="w-8 h-8 text-green-600 mr-2" />
            <span className="font-semibold">Rule Engines</span>
          </div>
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
