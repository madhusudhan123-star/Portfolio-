import React, { useState, useRef, useEffect } from 'react';
import Draggable from 'react-draggable';
import { Linkedin, Github, Mail } from 'lucide-react';
import { Mouse, Move } from 'lucide-react';
import './App.css';
import maps from './map.webp'
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
import project7 from './project7.png';
import project8 from './project8.png';
import project9 from './project9.png';
import project10 from './project10.png';
import project11 from './project11.png';
import project12 from './project12.png';
import project13 from './project13.png';
import project14 from './project14.png';
import project15 from './project15.png';
import project16 from './project16.png';
import project17 from './project17.png';
import project18 from './project18.png';
import project19 from './project19.png';
import project20 from './project20.png';
import project21 from './project21.png';
import project22 from './project22.png';
import project23 from './project23.png';
import project24 from './project24.png';
import project25 from './project25.png';
import project26 from './project26.png';
import project27 from './project27.png';
import project28 from './project28.png';
import project29 from './project29.png';
import project30 from './project30.png';
import project31 from './project31.png';
import project32 from './project32.png';
import project33 from './project33.png';
import project34 from './project34.png';
// Sample data for cards
const cardData = [
  {
    id: 10,
    image: project10,
    title: "Sacred Relm",
    description: "Spiritual e-commerce platform offering sacred items and religious products. Features elegant design, secure payments, and category-based product organization for spiritual and religious merchandise.",
    tags: ["E-commerce", "Spiritual", "React.js"],
    link: "https://sacredrelm.com",
    category: "e-commerce"
  },
  {
    id: 11,
    image: project11,
    title: "Sri Astro Veda",
    description: "Professional astrology services platform with multi-language support (Telugu, Hindi, English). Features Razorpay payment integration, WhatsApp API notifications, horoscope reports, and comprehensive astrology consultation services.",
    tags: ["Astrology", "Payment Integration", "WhatsApp API"],
    link: "https://sriastroveda.com",
    category: "complete application"
  },
  {
    id: 12,
    image: project12,
    title: "Camp Hairr",
    description: "Specialized fragrance e-commerce platform featuring multiple fragrance collections integrated into a single landing page. Built with React.js offering perfume catalogs, scent descriptions, customer reviews, and streamlined checkout process for premium fragrance shopping experience.",
    tags: ["Fragrance", "React.js", "E-commerce"],
    link: "https://camphairr.com",
    category: "e-commerce"
  },
  {
    id: 1,
    image: project1, // Update with actual image path
    title: "UPGRADE ENGLISH",
    description: "This innovative web application, built on Next.js and styled with Tailwind CSS, empowers users to enhance their English speaking skills through a seamless process of speech recording, AI- powered transcription, and intelligent analysis.",
    tags: ["Next.js", "Javascript", "2024"],
    link: "https://upgrade-english.vercel.app/",
    category: "complete application"
  },
  {
    id: 2,
    image: project2,
    title: "Netflix clone",
    description: "This ambitious Netflix clone, crafted using React.js for a dynamic front-end, Node.js and Express.js for a robust back-end, and MongoDB for efficient data management, delivers a seamless streaming experience while leveraging various APIs to enrich its content offerings.",
    tags: ["Design System", "dynamic page", "React"],
    link: "https://netflix-front-end-ten.vercel.app/",
    category: "complete application"
  },
  {
    id: 3,
    image: project3,
    title: "YouTube clone",
    description: "This ambitious Netflix clone, crafted using React.js for a dynamic front-end, Node.js and Express.js for a robust back-end, and MongoDB for efficient data management, delivers a seamless streaming experience while leveraging various APIs to enrich its content offerings.",
    tags: ["API call", "React.js", "Javascript"],
    link: "https://you-tube-lac.vercel.app/",
    category: "complete application"
  },
  {
    id: 4,
    image: project4,
    title: "Prompt AI",
    description: "Promptopia is an open-source AI prompting tool built with Next.js, designed for discovering, creating, and sharing creative prompts. It features seamless authentication and provides a modern platform for prompt-based creativity.",
    tags: ["Google login", "Next.js", "Auth"],
    link: "https://next-prompt-ashen.vercel.app/",
    category: "complete application"
  },
  {
    id: 5,
    image: project5,
    title: "Backend dashbord",
    description: "This admin dashboard provides a comprehensive overview of data through various graphs and visualizations, allowing users to easily analyze key metrics and insights in an intuitive interface.",
    tags: ["static data", "React", "view point"],
    link: "https://ui-react-dashboard.vercel.app/",
    category: "application"
  },
  {
    id: 6,
    image: project6,
    title: "Portfolio",
    description: "this is my first portifolio",
    tags: ["first portfolio", "React.js", "simple"],
    link: "https://portfolio-six-eta-43.vercel.app/",
    category: "application"
  },
  {
    id: 7,
    image: project7,
    title: "Dr Joints",
    description: "A comprehensive e-commerce platform for natural joint pain relief products. Built with React.js and featuring customer testimonials, and optimized product catalog for health and wellness solutions.",
    tags: ["E-commerce", "React.js", "Health"],
    link: "https://drjoints.in",
    category: "single product"
  },
  {
    id: 8,
    image: project8,
    title: "Beyond Slim",
    description: "A modern weight management and wellness e-commerce platform offering natural health products. Features responsive design, product filtering, and integrated payment gateway for seamless customer experience.",
    tags: ["E-commerce", "Health", "Payment Gateway"],
    link: "https://beyondslim.in",
    category: "single product"
  },
  {
    id: 9,
    image: project9,
    title: "Sampoorna Rogya",
    description: "Complete healthcare solutions platform providing comprehensive health services and products. Built with React.js featuring appointment booking, product catalog for diverse customer base.",
    tags: ["Healthcare", "Next.js", "Booking System"],
    link: "https://sampoornarogya.com",
    category: "single product"
  },
  {
    id: 13,
    image: project13,
    title: "Glow Glaz",
    description: "Comprehensive ayurvedic e-commerce platform featuring natural health and wellness products. Built with React.js offering ayurvedic medicines, herbal supplements, beauty products, and traditional remedies. Includes secure payment processing, product filtering, customer reviews, and mobile-responsive design similar to Dr Joints, Beyond Slim, and Sampoorna Rogya platforms.",
    tags: ["Ayurvedic", "E-commerce", "Health", "React.js"],
    link: "https://glowglazecommerce.vercel.app",
    category: "e-commerce"
  },
  {
    id: 14,
    image: project14,
    title: "Diafree Ayush",
    description: "Specialized healthcare platform for diabetes management through Ayurvedic solutions. Features product recommendations, health tracking capabilities, and educational content for diabetes care.",
    tags: ["Healthcare", "Ayurvedic", "Diabetes Management"],
    link: "https://diafreeayush.com",
    category: "single product"
  },
  {
    id: 15,
    image: project15,
    title: "Dr Alco Free",
    description: "Dedicated platform for alcohol addiction recovery and support. Built with React.js offering treatment programs, consultation booking, and resource materials for addiction recovery solutions.",
    tags: ["Healthcare", "Recovery", "Consultation"],
    link: "https://dralcofree.com",
    category: "single product"
  },
  {
    id: 16,
    image: project16,
    title: "Surya Media",
    description: "Professional media company website showcasing digital marketing services, content creation, and brand development solutions. Features portfolio showcase, service listings, and client testimonials.",
    tags: ["Media", "Digital Marketing", "Portfolio"],
    link: "https://suryamedia.co.in",
    category: "application"
  },
  {
    id: 17,
    image: project17,
    title: "Rice Cooker",
    description: "Interactive kitchen appliance showcase platform built with React.js. Features product demonstrations, specifications comparison, and modern responsive design for home appliance marketing and sales.",
    tags: ["React.js", "Product Showcase", "Responsive"],
    link: "https://rice-cooker-kappa.vercel.app/",
    category: "single product"
  },
  {
    id: 18,
    image: project18,
    title: "N Salons",
    description: "Professional salon services platform offering appointment booking, service catalog, and customer management. Built with React.js featuring responsive design, online booking system, and service showcase for beauty and wellness business.",
    tags: ["Salon", "Booking System", "React.js"],
    link: "https://nsalons.in/",
    category: "salon"
  },
  {
    id: 19,
    image: project19,
    title: "Mother",
    description: "Dedicated platform for mother and child care services. Features parenting resources, health tracking, appointment scheduling, and community support built with modern React.js architecture and responsive design.",
    tags: ["Healthcare", "React.js", "Community"],
    link: "https://mother-nu.vercel.app/",
    category: "single product"
  },
  {
    id: 20,
    image: project20,
    title: "Agent Sigma",
    description: "Specialized call center platform designed for agents to efficiently manage multiple client orders and process payments. Built with React.js featuring client database management, order placement interface, payment gateway integration, and real-time order tracking. Streamlines the order-to-payment workflow for call center operations with multi-client support and transaction success monitoring.",
    tags: ["Call Center", "Order Management", "Payment Processing", "React.js"],
    link: "https://agent-sigma-livid.vercel.app/",
    category: "complete application"
  },
  {
    id: 21,
    image: project21,
    title: "Lakshmi Nilayam",
    description: "Professional real estate platform specializing in apartment sales and housing solutions. Built with React.js featuring property listings, virtual tours, price comparisons, and inquiry management system. Includes mortgage calculator, property search filters, customer testimonials, and responsive design optimized for property buyers and real estate agents.",
    tags: ["Real Estate", "Property Sales", "React.js", "Apartments"],
    link: "https://lakshminilayam.com/",
    category: "real estate"
  },
  {
    id: 22,
    image: project22,
    title: "MCR CMS",
    description: "Agricultural management platform specifically designed for Mulkanoor village farming community. Built with React.js featuring crop management systems, agricultural resource sharing, farming schedules, and village-specific agricultural data management. Includes crop yield tracking, farming technique documentation, seasonal planning tools, and community collaboration features for local farmers and agricultural cooperatives.",
    tags: ["Agriculture", "Village Platform", "Crop Management", "React.js"],
    link: "https://mcrcms.coop/",
    category: "agricultural"
  },
  {
    id: 23,
    image: project23,
    title: "Maharashtra Agro",
    description: "Comprehensive agricultural platform serving Maharashtra farmers and agribusiness community. market price updates.",
    tags: ["Agriculture", "Market Platform"],
    link: "https://maharashtraagro.in",
    category: "agricultural"
  },
  {
    id: 24,
    image: project24,
    title: "Teamworks Digital",
    description: "Creative video production service landing page showcasing professional video editing and content creation capabilities for businesses.",
    tags: ["Video Production", "Creative Services"],
    link: "https://teamworksdigital-b594.vercel.app",
    category: "landing Page"
  },
  {
    id: 25,
    image: project25,
    title: "Dr. Joints",
    description: "Ayurvedic wellness product landing page designed for Dubai market launch, featuring traditional healing solutions and product benefits.",
    tags: ["E-commerce", "Healthcare", "Ayurveda"],
    link: "https://drjoints.ae",
    category: "single product"
  },
  {
    id: 26,
    image: project26,
    title: "RG Pack",
    description: "Corporate website for packaging company showcasing industrial packaging solutions and company services.",
    tags: ["Corporate", "Manufacturing"],
    link: "https://rgpack.vercel.app",
    category: "complete website"
  },
  {
    id: 27,
    image: project27,
    title: "Teamwork Digital Agency",
    description: "Digital marketing agency platform featuring service offerings and portfolio. Project 70% complete (discontinued).",
    tags: ["Digital Marketing", "Agency"],
    link: "https://teamwork-hazel.vercel.app",
    category: "complete website"
  },
  {
    id: 28,
    image: project28,
    title: "Glow Glaz",
    description: "Single product showcase landing page highlighting beauty product features and benefits with clean design.",
    tags: ["E-commerce", "Beauty"],
    link: "https://glowglaz-vert.vercel.app",
    category: "single product"
  },
  {
    id: 29,
    image: project29,
    title: "Lakshmi Real Estate",
    description: "Real estate campaign landing page designed to generate leads and showcase property investment opportunities.",
    tags: ["Real Estate", "Lead Generation"],
    link: "https://lakshminewlandingpage.vercel.app",
    category: "real estate"
  },
  {
    id: 30,
    image: project30,
    title: "Projector Store",
    description: "E-commerce landing page for projector sales featuring product specifications, pricing, and integrated checkout system.",
    tags: ["E-commerce", "Electronics"],
    link: "https://projector-opal.vercel.app",
    category: "single product"
  },
  {
    id: 31,
    image: project31,
    title: "Vlog Camera Store",
    description: "Product landing page for vlogging cameras with detailed specifications, pricing, and seamless checkout experience.",
    tags: ["E-commerce", "Electronics", "Photography"],
    link: "https://vlog-camera.vercel.app",
    category: "single product"
  },
  {
    id: 32,
    image: project32,
    title: "ISN Electronics",
    description: "Electronics product showcase platform featuring modern design and comprehensive product information.",
    tags: ["E-commerce", "Electronics"],
    link: "https://isn-ele.vercel.app",
    category: "e-commerce"
  },
  {
    id: 33,
    image: project33,
    title: "D-52 Diabetes Care",
    description: "Health product landing page focused on diabetes management solutions with clear product benefits and information.",
    tags: ["E-commerce", "Healthcare"],
    link: "https://d-52.vercel.app",
    category: "single product"
  },
  {
    id: 34,
    image: project34,
    title: "Premium Shilajit",
    description: "Single-page product showcase for authentic shilajit with compressed content design, clear benefits, and compelling product presentation.",
    tags: ["E-commerce", "Wellness", "Ayurveda"],
    link: "https://shilajit-gamma.vercel.app",
    category: "landing Page"
  },
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
      // <Draggable>
      //   <div
      //     className="p-4 w-screen lg:w-[100%] bg-[#1114176b] border-solid border-[0.01rem] rounded-lg shadow-lg text-[#E4E3E5] space-y-4"
      //     onDoubleClick={handleDoubleClick}
      //   >
      //     <a href={card.link} onClick={(e) => e.preventDefault()}>
      //       <img src={card.image} alt={card.title} className="rounded-lg" />
      //     </a>
      //     <h3 className="text-lg font-bold">{card.title}</h3>
      //     <p className="text-sm text-gray-400">{card.description}</p>
      //     <div className="flex flex-wrap gap-2">
      //       {card.tags.map((tag, index) => (
      //         <span key={index} className="bg-gray-700 text-xs px-2 py-1 rounded-lg">
      //           {tag}
      //         </span>
      //       ))}
      //     </div>
      //   </div>
      // </Draggable>
      <Draggable>
        <div
          className="group relative p-4 w-screen lg:w-[100%] bg-[#1114176b] border border-white/10 rounded-lg shadow-lg text-[#E4E3E5] space-y-4 cursor-grab active:cursor-grabbing focus:outline-none focus:ring-2 focus:ring-white/20"
          onDoubleClick={handleDoubleClick}
          onKeyDown={(e) => { if (e.key === 'Enter') handleDoubleClick(); }}
          tabIndex={0}
          role="button"
          aria-label={`Open ${card.title} (double click)`}
          title="Double click to open • Drag to move"
        >
          {/* Tooltip */}
          <div className="hidden md:block pointer-events-none absolute -top-2 right-2 -translate-y-full opacity-0 translate-y-1 scale-95 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-focus-within:opacity-100 transition-all duration-200 ease-out z-20">
            <div className="relative rounded-md bg-black/80 backdrop-blur-md ring-1 ring-white/10 shadow-xl px-3 py-2 text-xs text-white">
              <div className="flex items-start gap-2">
                <Mouse className="h-3.5 w-3.5 opacity-80" />
                <div>
                  <p className="font-medium leading-tight">Double click to open</p>
                  <p className="text-[11px] text-gray-300 leading-tight">Drag card to reposition</p>
                </div>
              </div>
              {/* Arrow */}
              <span className="absolute right-3 -bottom-1 h-2 w-2 rotate-45 bg-black/80 ring-1 ring-white/10"></span>
            </div>
          </div>

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

          {/* Optional: a tiny “Drag” chip at bottom-right */}
          <div className="pointer-events-none absolute bottom-2 right-2 hidden md:flex items-center gap-1 rounded bg-white/10 px-2 py-0.5 text-[10px] text-white/90 ring-1 ring-white/10">
            <Move className="h-3 w-3" />
            Drag
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
  const [selectedCategory, setSelectedCategory] = useState('all');
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
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

  const categories = [
    { value: 'all', label: 'All Projects', count: cardData.length },
    { value: 'complete application', label: 'Complete App', count: cardData.filter(c => c.category === 'complete application').length },
    { value: 'single product', label: 'Single Product', count: cardData.filter(c => c.category === 'single product').length },
    { value: 'e-commerce', label: 'E-commerce', count: cardData.filter(c => c.category === 'e-commerce').length },
    { value: 'application', label: 'Application', count: cardData.filter(c => c.category === 'application').length },
    { value: 'complete website', label: 'Complete Website', count: cardData.filter(c => c.category === 'complete website').length },
    { value: 'landing Page', label: 'Landing Page', count: cardData.filter(c => c.category === 'landing Page').length },
    { value: 'agricultural', label: 'Agricultural', count: cardData.filter(c => c.category === 'agricultural').length },
    { value: 'real estate', label: 'Real Estate', count: cardData.filter(c => c.category === 'real estate').length },
    { value: 'salon', label: 'Salon', count: cardData.filter(c => c.category === 'salon').length }
  ];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'all' ? cardData : cardData.filter(card => card.category === selectedCategory);

  return (
    <div>
      <div className="h-[150vh] w-full overflow-x-hidden bg-[radial-gradient(circle_at_20%_20%,_rgba(0,_0,_0,_0.8),_rgba(0,_0,_0,_1)),_radial-gradient(circle_at_80%_40%,_rgba(0,_255,_255,_0.1),_rgba(0,_0,_0,_0.9)),_radial-gradient(circle_at_50%_80%,_rgba(255,_0,_255,_0.1),_rgba(0,_0,_0,_0.8))] bg-blend-screen">
        <div className="grid-overlay"></div>
        <div className="px-0 lg:px-4 py-8 text-[#E4E3E5] z-10">
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
                          Full-Stack Developer with 1 year of professional experience and 2 years of freelance expertise in building dynamic,
                          responsive, and user-focused web applications. Proficient in JavaScript (ES6+) , React.js , Next.js, Node.js, and
                          Webflow , with a proven record of delivering 30+ successful projects for clients across e-commerce and service domains.
                          Passionate about crafting innovative digital solutions, optimizing performance, and leveraging modern technologies
                          to drive impactful user experiences.
                        </p>
                        <p className="text-lg text-[#E4E3E5]">
                          Solo builder — from idea to launch.
                        </p>

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
                        I craft elegant interfaces that make people smile and product metrics climb.
                      </p>
                      <p className="text-lg text-[#E4E3E5]">
                        Solo builder — from idea to launch.
                      </p>

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
                    <h2 className="text-4xl font-bold">Website Developer</h2>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-4 text-right">
                    <div>
                      <h2 className=" text-xl">Israelites Shopping Network</h2>
                      <p className="">India, Hyderabad</p>
                    </div>

                  </div>
                </div>

                <div className="flex justify-between items-start space-y-8 flex-wrap">
                  {/* Left Section */}
                  <div className="space-y-4">
                    <h2 className="text-4xl font-bold">Front End Developer</h2>
                  </div>

                  {/* Right Section */}
                  <div className="space-y-4 text-right">
                    <div>
                      <h2 className=" text-xl">Freelance</h2>
                      <p className="">India, Hyderabad</p>
                    </div>

                  </div>
                </div>
                
              </div>
            </Draggable>
          </div>
          <div className="mx-0 lg:mx-10 mb-10">
            {!isMobile ? (
              <Draggable>
                <div className="bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-6 w-fit">
                  <h3 className="text-xl font-bold mb-4">Filter Projects</h3>
                  <div className="flex flex-wrap gap-3">
                    {categories.map((category) => (
                      <button
                        key={category.value}
                        onClick={() => setSelectedCategory(category.value)}
                        className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                          selectedCategory === category.value
                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {category.label} ({category.count})
                      </button>
                    ))}
                  </div>
                </div>
              </Draggable>
            ) : (
              <div className="bg-[#1114176b] border-solid border-[0.5px] rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Filter Projects</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 text-sm ${
                        selectedCategory === category.value
                          ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      }`}
                    >
                      {category.label} ({category.count})
                    </button>
                  ))}
                </div>
              </div>
            )}
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
                      {/* <Draggable
                        onDrag={(e, data) => handleDrag(5, e, data)}
                        onStop={(e, data) => handleStop(5, e, data)}
                      >
                        <div className='bg-[#1114176b] border-solid border-[0.5px] w-full h-full rounded-lg  flex justify-center items-center'>
                          <a href=''>Coming Soon</a>
                        </div>
                      </Draggable> */}

                    </div>
                  </div>
                </div>
                <div className='flex w-full gap-5'>
                  <Draggable onDrag={(e, data) => handleDrag(6, e, data)} onStop={(e, data) => handleStop(6, e, data)} >
                    <div className=" w-[50%]">
                      <div><a href='https://maps.app.goo.gl/b3F1VZfuvArrooYr9'><img className='rounded-lg' src={maps} /></a></div>
                    </div>
                  </Draggable>
                  <div className='flex flex-col w-[50%] gap-2'>
                    <Draggable onDrag={(e, data) => handleDrag(6, e, data)} onStop={(e, data) => handleStop(6, e, data)}>
                      <div className="bg-[#1114176b] border-solid border-[0.5px] w-full pb-10 h-full rounded-lg flex justify-center items-center p-4">
                        <p className="text-lg text-[0.8rem] leading-7 leading-5">
                          34 projects built. Infinite rules broken. Your crazy idea is next.
                          Bring your wildest idea — I’ll build it, launch it, and make the internet notice.
                        </p>
                      </div>
                    </Draggable>
                    <Draggable onDrag={(e, data) => handleDrag(6, e, data)} onStop={(e, data) => handleStop(6, e, data)}>
                      <div className="bg-[#1114176b] border-solid border-[0.5px] w-full rounded-lg flex justify-center items-center p-4">
                        <p className="text-lg leading-5">Let's talk — I build what others call "can't be done."</p>
                        <p className="mt-1">
                          <a
                            href="https://wa.me/916309792221"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-sm font-medium"
                          >
                            WhatsApp: +91 63097 92221
                          </a>
                        </p>
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
                          <a href='mailto:dmadhusudhan98@gmail.com'><Mail className="w-12 h-12" /></a>
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
                      <div><a href='https://maps.app.goo.gl/b3F1VZfuvArrooYr9'><img className='rounded-lg' src="https://api.mapbox.com/styles/v1/mapbox/navigation-night-v1/static/-97.73,30.3039,8.13,14/300x300?access_token=pk.eyJ1Ijoiam9zaHVhYnJpZ2F0aSIsImEiOiJjbHV3N2MxMnIwOWU1MmtrbGo3bDVidHhqIn0.ssKSeQ92WDAmwPfUyhs1QQ" /></a></div>
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
            {/* {cardData.map((card) => (
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
            ))} */}
            {filteredProjects.map((card) => (
              !isMobile ? (
                <div key={card.id}>
                  <DraggableCard card={card} />
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