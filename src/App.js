import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Linkedin, Github, Mail } from 'lucide-react';
import './App.css';
import profile from './photo.jpg';
import git from './git.png';
import javascript from './js-logo.png';
import node from './js.png';
import mongo from './mongo-db.png';
import next from './nextjs.png';
import react from './react.png';
import tailwind from './tailwind.png';
import typescript from './typescript.png';
import project1 from './project1.png';
import project2 from './project2.png';
import project3 from './project3.png';
import project4 from './project4.png';
import project5 from './project5.png';
import project6 from './project6.png';
import RainEffect from './RainEffect';
// Sample data for cards
const cardData = [
  {
    id: 1,
    image: project1, // Update with actual image path
    title: "UPGRADE ENGLISH",
    description: "This innovative web application, built on Next.js and styled with Tailwind CSS, empowers users to enhance their English speaking skills through a seamless process of speech recording, AI- powered transcription, and intelligent analysis.",
    tags: ["Next.js", "Javascript", "2024"],
    link: "https://upgrade-english.vercel.app/",
  },
  {
    id: 2,
    image: project2,
    title: "Netflix clone",
    description: "This ambitious Netflix clone, crafted using React.js for a dynamic front-end, Node.js and Express.js for a robust back-end, and MongoDB for efficient data management, delivers a seamless streaming experience while leveraging various APIs to enrich its content offerings.",
    tags: ["Design System", "dynamic page", "React"],
    link: "https://netflix-front-end-ten.vercel.app/",
  },
  {
    id: 3,
    image: project3,
    title: "YouTube clone",
    description: "This ambitious Netflix clone, crafted using React.js for a dynamic front-end, Node.js and Express.js for a robust back-end, and MongoDB for efficient data management, delivers a seamless streaming experience while leveraging various APIs to enrich its content offerings.",
    tags: ["API call", "React.js", "Javascript"],
    link: "https://you-tube-lac.vercel.app/",
  },
  {
    id: 4,
    image: project4,
    title: "Prompt AI",
    description: "Promptopia is an open-source AI prompting tool built with Next.js, designed for discovering, creating, and sharing creative prompts. It features seamless authentication and provides a modern platform for prompt-based creativity.",
    tags: ["Google login", "Next.js", "Auth"],
    link: "https://next-prompt-ashen.vercel.app/",
  },
  {
    id: 5,
    image: project5,
    title: "Backend dashbord",
    description: "This admin dashboard provides a comprehensive overview of data through various graphs and visualizations, allowing users to easily analyze key metrics and insights in an intuitive interface.",
    tags: ["static data", "React", "view point"],
    link: "https://ui-react-dashboard.vercel.app/",
  },
  {
    id: 6,
    image: project6,
    title: "Portfolio",
    description: "this is my first portifolio",
    tags: ["first portfolio", "React.js", "simple"],
    link: "https://portfolio-six-eta-43.vercel.app/",
  },
  // Add more card data as needed
];

const DraggableCard = ({ card }) => {
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change this breakpoint if needed
    };

    // Check screen size on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const handleDoubleClick = () => {
    window.open(card.link, '_blank');
  };


  return (
    !isMobile ? (
      <Draggable>
        <div
          className="p-4 w-screen lg:w-[100%] bg-[#1114176b] border-solid border-[0.01rem] rounded-lg shadow-lg text-[#E4E3E5] space-y-4"
          onDoubleClick={handleDoubleClick}
        >
          <a href={card.link} onClick={(e) => e.preventDefault()}>
            <img src={card.image} alt={card.title} className="rounded-lg" />
          </a>
          <h3 className="text-lg font-bold">{card.title}</h3>
          <p className="text-sm text-gray-400">{card.description}</p>
          <div className="flex flex-wrap gap-2">
            {card.tags.map((tag, index) => (
              <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded-lg">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Draggable>

    ) : (
      <div>
        <a href={card.link}>
          <div className=" p-4 w-screen lg:w-[100%]  bg-[#1114176b] border-solid border-[0.01rem] rounded-lg shadow-lg text-[#E4E3E5] space-y-4">
            <img src={card.image} alt={card.title} className="rounded-lg" />
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p className="text-sm text-gray-400">{card.description}</p>
            <div className="flex flex-wrap gap-2">
              {card.tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded-lg">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </div>
    )
  );
};


function App() {
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Change this breakpoint if needed
    };

    // Check screen size on component mount
    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    cardRefs.current.forEach(ref => {
      if (ref) {
        ref.style.transition = 'transform 0.3s ease-out';
      }
    });
  }, []);

  const handleDrag = (index, e, data) => {
    if (cardRefs.current[index]) {
      cardRefs.current[index].style.transition = 'none';
    }
  };

  const handleStop = (index, e, data) => {
    const currentRef = cardRefs.current[index];
    if (!currentRef) return;
    currentRef.style.transition = 'transform 0.3s ease-out';
  };
  return (
    <div>
      <div className="h-[150vh] w-full overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(0,_0,_0,_0.8),_rgba(0,_0,_0,_1)),_radial-gradient(circle_at_80%_40%,_rgba(0,_255,_255,_0.1),_rgba(0,_0,_0,_0.9)),_radial-gradient(circle_at_50%_80%,_rgba(255,_0,_255,_0.1),_rgba(0,_0,_0,_0.8))] bg-blend-screen">
        <div className="grid-overlay"></div>
        <div className="container mx-auto px-0 lg:px-4 py-8 text-[#E4E3E5] z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mx-0 mb-10 lg:mx-10">
            {[0, 1].map(index => (
              // Conditionally render the Draggable component based on isMobile state
              !isMobile ? (
                <Draggable
                  key={index}
                  onDrag={(e, data) => handleDrag(index, e, data)}
                  onStop={(e, data) => handleStop(index, e, data)}
                >
                  <div
                    ref={el => (cardRefs.current[index] = el)}
                    className={`bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-4 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                      } ${index === 1 ? 'flex justify-between items-center' : ''}`}
                  >
                    {/* Content */}
                    {index === 0 && (
                      <div>
                        <div className="flex items-center mb-4 text-[#E4E3E5]">
                          <div className="w-12 h-12 rounded-full mr-4">
                            <img
                              src={profile}
                              className="w-12 h-12 rounded-full"
                              alt="profile"
                            />
                          </div>
                          <h2 className="text-3xl text-[#E4E3E5] font-bold">
                            Madhusudhan
                          </h2>
                        </div>
                        <p className="text-lg text-[#E4E3E5] mb-2">
                          I am passionate about building beautiful and functional user
                          interfaces.
                        </p>
                        <p className="text-lg text-[#E4E3E5]">Currently work solo.</p>
                      </div>
                    )}
                    {index === 1 && (
                      <div className="flex flex-wrap">
                        <div className="text-[#E4E3E5]">
                          <p className="text-xs text-gray-400">2024 CV</p>
                          <h3 className="text-3xl font-bold">RESUME</h3>
                        </div>
                        <div className="flex space-x-2 p-5">
                          <a
                            href="https://drive.google.com/uc?export=download&id=11q7_NcXuUnpXFMhxKkAFmCUqmmeEMc7I" // Google Drive direct download link
                            download
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation(); // Prevent drag from interfering
                              }}
                              className="p-2 bg-gray-700 rounded-full"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="80"
                                height="80"
                                style={{
                                  stroke: 'white',
                                  transition: 'stroke-dasharray 1s ease',
                                }}
                                className="animated-svg"
                              >
                                <path
                                  d="M19 15v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4M12 3v12m0 0l-4-4m4 4l4-4"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  fill="none"
                                  strokeDasharray="60"
                                  strokeDashoffset="0"
                                />
                              </svg>
                            </button>
                          </a>
                          <a
                            href="https://drive.google.com/file/d/11q7_NcXuUnpXFMhxKkAFmCUqmmeEMc7I/view?usp=sharing"
                            onClick={e => {
                              e.stopPropagation(); // Prevent drag from interfering
                            }}
                          >
                            <button className="p-2 bg-gray-700 rounded-full">
                              <svg
                                className="eye-icon"
                                fill="none"
                                stroke="white"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                width="80"
                                height="80"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  className="eyeball"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                              </svg>
                            </button>
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                </Draggable>
              ) : (
                // Render without Draggable on mobile
                <div
                  onDrag={(e, data) => handleDrag(index, e, data)}
                  onStop={(e, data) => handleStop(index, e, data)}
                  key={index}
                  ref={el => (cardRefs.current[index] = el)}
                  className={`bg-[#1114176b] border-solid border-[0.5px] border-white rounded-lg p-4 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
                    } ${index === 1 ? 'flex justify-between items-center' : ''}`}
                >
                  {index === 0 && (
                    <div>
                      <div className="flex items-center mb-4 text-[#E4E3E5]">
                        <div className="w-12 h-12 rounded-full mr-4">
                          <img
                            src={profile}
                            className="w-12 h-12 rounded-full"
                            alt="profile"
                          />
                        </div>
                        <h2 className="text-3xl text-[#E4E3E5] font-bold">
                          Madhusudhan
                        </h2>
                      </div>
                      <p className="text-lg text-[#E4E3E5] mb-2">
                        I am passionate about building beautiful and functional user
                        interfaces.
                      </p>
                      <p className="text-lg text-[#E4E3E5]">Currently work solo.</p>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex flex-wrap">
                      <div className="text-[#E4E3E5]">
                        <p className="text-xs text-gray-400">2024 CV</p>
                        <h3 className="text-3xl font-bold">RESUME</h3>
                      </div>
                      <div className="flex space-x-2 p-5">
                        <a
                          href="https://drive.google.com/uc?export=download&id=11q7_NcXuUnpXFMhxKkAFmCUqmmeEMc7I" // Google Drive direct download link
                          download
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent drag from interfering
                            }}
                            className="p-2 bg-gray-700 rounded-full"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              width="80"
                              height="80"
                              style={{
                                stroke: 'white',
                                transition: 'stroke-dasharray 1s ease',
                              }}
                              className="animated-svg"
                            >
                              <path
                                d="M19 15v4a2 2 0 01-2 2H7a2 2 0 01-2-2v-4M12 3v12m0 0l-4-4m4 4l4-4"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                strokeDasharray="60"
                                strokeDashoffset="0"
                              />
                            </svg>
                          </button>
                        </a>
                        <a
                          href="https://drive.google.com/file/d/11q7_NcXuUnpXFMhxKkAFmCUqmmeEMc7I/view?usp=sharing"
                          onClick={e => {
                            e.stopPropagation(); // Prevent drag from interfering
                          }}
                        >
                          <button className="p-2 bg-gray-700 rounded-full">
                            <svg
                              className="eye-icon"
                              fill="none"
                              stroke="white"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              width="80"
                              height="80"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                className="eyeball"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                              />
                            </svg>
                          </button>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              )
            ))}
          </div>
          <div className="grid grid-cols-1  lg:grid-cols-[10%_30%_55%] gap-10 mx-0 mb-10 lg:mx-10 ">
            <div className="flex gap-4 flex-row lg:flex-col justify-around">
              {[2, 3].map(index => (
                !isMobile ? (
                  <Draggable
                    key={index}
                    onDrag={(e, data) => handleDrag(index, e, data)}
                    onStop={(e, data) => handleStop(index, e, data)}
                  >
                    <div
                      ref={el => (cardRefs.current[index] = el)}
                      className="bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-4 flex items-center justify-center w-20 h-20"
                    >
                      {index === 2 && <a href='https://www.linkedin.com/in/madhu-sudhan-232089220/'><Linkedin className="w-12 h-12 " /> </a>}
                      {index === 3 && <a href="https://github.com/madhusudhan123-star"><Github className="w-12 h-12 " /> </a>}
                    </div>
                  </Draggable>
                ) : (
                  <div
                    key={index}
                    onDrag={(e, data) => handleDrag(index, e, data)}
                    onStop={(e, data) => handleStop(index, e, data)}
                  >
                    <div
                      ref={el => (cardRefs.current[index] = el)}
                      className="bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-4 flex items-center justify-center w-20 h-20"
                    >
                      {index === 2 && <a href='https://www.linkedin.com/in/madhu-sudhan-232089220/'><Linkedin className="w-12 h-12 " /> </a>}
                      {index === 3 && <a href="https://github.com/madhusudhan123-star"><Github className="w-12 h-12 " /> </a>}
                    </div>
                  </div>
                )
              ))}
            </div>
            <Draggable
              onDrag={(e, data) => handleDrag(4, e, data)}
              onStop={(e, data) => handleStop(4, e, data)}
            >
              <div
                ref={(el) => (cardRefs.current[4] = el)}
                className="bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-4 containers"
              >
                <p className="text-xs text-gray-400 mb-2">CURRENTLY USING</p>
                <h3 className="text-xl font-bold ">TECH I ❤️</h3>
                <div className='w-[200px] overflow-hidden relative'>
                  <div className="flex gap-5 space-x-4 mt-4 continuous-slide icon-slider w-[85rem]">
                    {/* Original images */}
                    <div className="w-12 h-12 rounded"><img src={git} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={javascript} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={node} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={mongo} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={next} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={react} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={tailwind} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={typescript} alt='hi' /></div>
                    {/* Duplicated images */}
                    <div className="w-12 h-12 rounded"><img src={git} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={javascript} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={node} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={mongo} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={next} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={react} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={tailwind} alt='hi' /></div>
                    <div className="w-12 h-12 rounded"><img src={typescript} alt='hi' /></div>
                  </div>
                  <div className="shadow-left"></div>
                  <div className="shadow-right"></div>
                </div>

              </div>
            </Draggable>
            <Draggable
              onDrag={(e, data) => handleDrag(4, e, data)}
              onStop={(e, data) => handleStop(4, e, data)}
            >
              <div
                ref={el => (cardRefs.current[4] = el)}
                className="bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-4 "
              >
                <p className="text-xs text-gray-400 mb-2"></p>
                <h3 className="text-xl font-bold ">EXPERIENCE</h3>
                <div className="flex justify-between items-start space-y-8 flex-wrap">
                  {/* Left Section */}
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Front End Developer</h2>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-4 text-right">
                    <div>
                      <h2 className=" text-xl">Freelance</h2>
                      <p className="">Jan 2024 - Present</p>
                      <p className="">India, Hyderabad</p>
                    </div>

                  </div>
                </div>
              </div>
            </Draggable>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 mx-0 mb-10 lg:mx-10">
            {!isMobile ? (
              <div className='flex flex-col items-center'>
                <div className='w-full'>
                  <div className=" rounded-lg p-4 w-full h-full">
                    <div className='grid grid-cols-2 gap-5'>
                      <Draggable onDrag={(e, data) => handleDrag(5, e, data)} onStop={(e, data) => handleStop(5, e, data)}>
                        <div className='bg-[#1114176b] border-solid border-[0.5px] w-full h-full rounded-lg p-4 flex justify-center'>
                          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=dmadhusudhan98@gmail.com'><Mail className="w-12 h-12" /></a>
                        </div>
                      </Draggable>
                      <Draggable
                        onDrag={(e, data) => handleDrag(5, e, data)}
                        onStop={(e, data) => handleStop(5, e, data)}
                      >
                        <div className='bg-[#1114176b] border-solid border-[0.5px] w-full h-full rounded-lg  flex justify-center items-center'>
                          <a href=''>Coming Soon</a>
                        </div>

                      </Draggable>

                    </div>
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <Draggable onDrag={(e, data) => handleDrag(6, e, data)} onStop={(e, data) => handleStop(6, e, data)} >
                    <div className=" w-[50%]">
                      <div><a href='https://maps.app.goo.gl/DoY5xGRoYDMkifTb6'><img className='rounded-lg' src="https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/static/-97.73,30.3039,8.13,14/300x300?access_token=pk.eyJ1Ijoiam9zaHVhYnJpZ2F0aSIsImEiOiJjbHV3N2MxMnIwOWU1MmtrbGo3bDVidHhqIn0.ssKSeQ92WDAmwPfUyhs1QQ" /></a></div>
                    </div>
                  </Draggable>
                  <div className='flex flex-col w-[50%] gap-2'>
                    <Draggable onDrag={(e, data) => handleDrag(6, e, data)} onStop={(e, data) => handleStop(6, e, data)}>
                      <div className="bg-[#1114176b] border-solid border-[0.5px] w-full pb-10 h-full rounded-lg flex justify-center items-center p-4">
                        <p className="text-lg rotate-[-20deg] text-[0.8rem] leading-5">
                          "Eager to{' '}
                          <span className="inline-block transition-transform duration-300 hover:scale-150 hover:text-[1.5rem]  origin-center">
                            <span className="inline-block "> contribute </span>
                          </span>{' '}
                          my expertise to ventures that push the boundaries of possibility.
                          {' '}
                          <span className="inline-block transition-transform duration-300 hover:scale-150 hover:text-[1.5rem]  origin-center">
                            <span className="inline-block "> Open to work, </span>
                          </span>{' '} ready to elevate your projects to unprecedented heights"
                        </p>
                      </div>
                    </Draggable>
                    <Draggable onDrag={(e, data) => handleDrag(6, e, data)} onStop={(e, data) => handleStop(6, e, data)}>
                      <div className="bg-[#1114176b] border-solid border-[0.5px] w-full rounded-lg flex justify-center items-center p-4">
                        <p className="text-lg leading-5">Have Word with me.</p>
                        <p className='items-end'> WhatsApp:6309792221</p>
                      </div>
                    </Draggable>
                  </div>
                </div>
              </div>
            ) : (
              <div className='flex flex-col items-center flex-wrap'>
                <div className='w-full'>
                  <div className=" rounded-lg p-4 w-full h-full">
                    <div className='grid grid-cols-2 gap-5'>
                      <div >
                        <div className='bg-[#1114176b] border-solid border-[0.5px] w-full h-full rounded-lg p-4 flex justify-center'>
                          <a href='https://mail.google.com/mail/?view=cm&fs=1&to=dmadhusudhan98@gmail.com'><Mail className="w-12 h-12" /></a>
                        </div>
                      </div>
                      <div>
                        <div className='bg-[#1114176b] border-solid border-[0.5px] w-full h-full rounded-lg  flex justify-center items-center'>
                          <a href=''>Coming Soon</a>
                        </div>

                      </div>

                    </div>
                  </div>
                </div>
                <div className='flex w-full gap-5 flex-wrap'>
                  <div>
                    <div className=" w-screen flex items-center justify-center">
                      <div><a href='https://maps.app.goo.gl/DoY5xGRoYDMkifTb6'><img className='rounded-lg' src="https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/static/-97.73,30.3039,8.13,14/300x300?access_token=pk.eyJ1Ijoiam9zaHVhYnJpZ2F0aSIsImEiOiJjbHV3N2MxMnIwOWU1MmtrbGo3bDVidHhqIn0.ssKSeQ92WDAmwPfUyhs1QQ" /></a></div>
                    </div>
                  </div>
                  <div className='flex flex-col w-full gap-2 '>
                    <div>
                      <div className="bg-[#1114176b] border-solid border-[0.5px] w-full pb-10 h-full rounded-lg flex justify-center items-center p-4">
                        <p className="text-lg text-[0.8rem] leading-5">
                          "Eager to{' '}
                          <span className="inline-block transition-transform duration-300 hover:scale-150 hover:text-[1.5rem]  origin-center">
                            <span className="inline-block "> contribute </span>
                          </span>{' '}
                          my expertise to ventures that push the boundaries of possibility.
                          {' '}
                          <span className="inline-block transition-transform duration-300 hover:scale-150 hover:text-[1.5rem]  origin-center">
                            <span className="inline-block "> Open to work, </span>
                          </span>{' '} ready to elevate your projects to unprecedented heights"
                        </p>
                      </div>
                    </div>
                    <div >
                      <div className="bg-[#1114176b] border-solid border-[0.5px] w-full rounded-lg flex justify-center items-center p-4">
                        <p className="text-lg leading-5">Have Word with me.</p>{' '}
                        <p className='items-end'> WhatsApp:6309792221</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {cardData.map((card) => (
              !isMobile ? (
                <div>
                  <DraggableCard key={card.id} card={card} />
                </div>
              ) : (
                <div
                  key={card.id}
                  onDrag={(e, data) => handleDrag(card.id, e, data)}
                  onStop={(e, data) => handleStop(card.id, e, data)}
                >
                  <DraggableCard card={card} />
                </div>
              )
            ))}
          </div>
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
}

export default App;