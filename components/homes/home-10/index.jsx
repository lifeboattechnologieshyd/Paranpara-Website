"use client";

import Team from "./Team";
import Service from "./Service";

import Portfolio from "./Portfolio";
import Features from "./Features";

import Testimonials from "./Testimonials";
import Blog from "./Blog";
import Newsletter from "./Newsletter";
import Contact from "./Contact";
import Link from "next/link";
import { useEffect } from "react";
import { featuresListData } from "@/data/features";
import Image from "next/image";

export default function Home10({ onePage = false, dark = false }) {
  useEffect(() => {
    const addPaddingLeft = () => {
      document.getElementById("paddingLeft").style.paddingLeft = `${
        (window.innerWidth -
          document.getElementById("paddingLeftContainer").offsetWidth) /
        2
      }px`;
    };
    const addPaddingRight = () => {
      document.getElementById("paddingRight").style.paddingRight = `${
        (window.innerWidth -
          document.getElementById("paddingRightContainer").offsetWidth) /
        2
      }px`;
    };
    addPaddingLeft();
    addPaddingRight();
    window.addEventListener("resize", addPaddingLeft);
    window.addEventListener("resize", addPaddingRight);
    return () => {
      window.removeEventListener("resize", addPaddingLeft);
      window.removeEventListener("resize", addPaddingRight);
    };
  }, []);

  return (
    <>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="about"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">About ParanPara</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
              Smart Solutions <span className="font-alt">for</span> Smarter Education
                <span className="font-alt"> &</span> Stronger Futures
              </h3>   
            </div>
          </div>

          <div className="row">
            <div className="col-sm-4 mb-xs-50">
              <div className="call-action-4-images">
                <div className="call-action-4-image-1">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/school-pic.jpg" // group of creaters left - back
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                  />
                </div>
                <div className="call-action-4-image-2">
                  <Image
                    width={500}
                    height={692}
                    src="/assets/images/BIGMASTER.jpg"   // group of creaters left - front
                    alt="Image description"
                    className="wow scaleOutIn"
                    data-wow-duration="1.2s"
                    data-wow-offset="0"
                  />
                </div>
              </div>
            </div>

            <div className="col-sm-8 col-lg-6 col-xl-4 offset-xl-1 mt-n10">
              <div className="wow linesAnimIn" data-splitting="lines">
                <p className="lead mt-0 mb-40">
                Our founder,Dr.J.S.Paranjyothi, has dedicated over 40 years to advancing education, equipping lakhs of students and educators with the skills, discipline, and confidence to succeed.
                </p>
                <p className="mb-40">
                At ParanPara, we go beyond academics—fostering discipline, confidence, and career growth through advanced global learning techniques. We leverage AI-powered apps and platforms to equip schools, teachers, and parents with smarter tools to shape future-ready students.
                </p>
              </div>

              <div className="local-scroll wow fadeInUp" data-wow-offset="0">
                {onePage ? (
                  <>
                    <a
                      href=""
                      className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                    >
                      <span>
                        Learn More
                        <span className="visually-hidden">About Us</span>
                      </span>
                    </a>
                  </>
                ) : (
                  <>
                    <Link
                        // href={`/${dark ? "-dark" : ""}`}
                        href=""
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Learn More</span>
                      </Link>
                  </>
                )}
              </div>
            </div>

            <div className="col-lg-2 offset-xl-1 d-none d-lg-block">
              <div className="round overflow-hidden">
                <Image
                  width={330}
                  height={894}
                  src="/assets/images/speech.jpg" // group of creaters right - front
                  alt="Image description"
                  className="wow scaleOutIn"
                  data-wow-duration="1.2s"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="team"
      >
        <div className="container">
          <div className="row">
            {/* Left Column 
            
            FOR IMAGES GO TO TEAM.JS
            
            */}
            <div className="col-xl-5 d-flex align-items-center team-1-column-sticky mb-lg-90 mb-sm-50">
              <div>
                <h2 className="section-caption-border">OUR SOLUTIONS</h2>  
                <h3 className="section-title-strong mb-40">
                Smarter<span className="font-alt">Approach to</span> Education
                </h3>  
                <p className="mb-40">
                From school management to family enrichment, and from curriculum innovation to teacher training, ParanPara delivers transformative solutions.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      {" "}
                      <a
                        // href="#contact"
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Join our Team</span>
                      </a>
                    </>
                  ) : (
                    <>
                      {" "}
                      <Link
                        href={`/${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-large btn-round btn-hover-anim"
                      >
                        <span>Join our Team</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/* End Left Column */}
            {/* Right Column */}
            <div className="col-xl-6 offset-xl-1">
              <Team />
              {/*
        visit team component
        
        */}


            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="services"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-caption-border">The ParanPara Way</h2>
              <h3 className="section-title-strong mb-90 mb-sm-50">
              Not Just 
                <span className="font-alt"> Education</span> Total Transformation
                
              </h3>
            </div>
          </div>
          {/* Nav tabs */}

          <Service />

          {/*
        visit services component
        
        */}
          {/* End Tab panes */}
        </div>
      </section>
      <section className="pt-30">
        <div id="paddingLeftContainer" className="container"></div>
        <div className="row g-0">
          <div className="col-lg-6">
            <div
              id="paddingLeft"
              className={`split-column-left ${
                dark ? "bg-dark-2" : "bg-dark-1"
              }  light-content position-relative d-flex align-items-center`}
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 end-0 pt-2 pe-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg" // background image for - LOOKING FOR EXCLISIVE - content
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                Let’s Build the 
                  <span className="font-alt"> Future</span>  of Learning.?
                </h2>
                <p className="mb-50">
                Join us in creating smart, engaging, and impactful education for every student. Get on our tech platforms and give us a chance to demonstrate how we can transform learning and lives.
                </p>
                <div className="local-scroll">
                  {onePage ? (
                    <>
                      <a
                        href="#contact"
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </a>
                    </>
                  ) : (
                    <>
                      <Link
                        href={`/${dark ? "-dark" : ""}`}
                        className="btn btn-mod btn-white btn-w btn-large btn-round btn-hover-anim"
                      >
                        <span>Start a Project</span>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              className="split-image-right"
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              <Image
                width={1100}
                height={930}
                src="/assets/images/next.jpg" // beside image of - LOOKING FOR EXCLISIVE - content
                alt="Image Description"
              />
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section  scrollSpysection  overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="portfolio"
      >
        <Portfolio />  {/*
        visit portfolio component
        visit porfolio.js to upload images 
        
        */}
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
      >
        <Features />

        {/*
        visit features component
        
        */}
      </section>
      <section className="pt-30">
        <div id="paddingRightContainer" className="container" />
        <div className="row g-0">
          <div className="col-lg-6 mt-n30 mt-md-0 mb-30 mb-md-0">
            <div
              id="paddingRight"
              className={`split-column-right ${
                dark ? "bg-dark-2" : "bg-dark-1"
              } light-content position-relative d-flex align-items-center`}
              data-rellax-y=""
              data-rellax-speed="0.5"
              data-rellax-percentage="0.5"
            >
              {/* Decorative Dots */}
              <div className="position-absolute top-0 start-0 pt-2 ps-2 opacity-02">
                <Image
                  width={192}
                  height={222}
                  src="/assets/images/demo-strong/decoration.svg" // bg image for - FLEXIBLE RESPONSIVE  - CONTENT
                  alt=""
                />
              </div>
              {/* End Decorative Dots */}
              <div>
                <h2 className="section-title mb-30">
                Why ParanPara Is   <span className="font-alt">the Right Partner</span> for You!,
                </h2>
                <p className="mb-50">
                Whether you’re a school looking to upgrade, a teacher aiming to make a deeper impact, or a parent wanting the best for your child. We are here to support you with our powerful tech & proven experience,
                </p>
                {/* Features List */}
                <div className="row mt-n20">
                  {/* Features List Item */}
                  {featuresListData.map((item, index) => (
                    <div
                      key={index}
                      className="col-sm-6 col-lg-12 col-xl-6 d-flex mt-20"
                    >
                      <div className="features-list-icon">
                        <i className="mi-check" />
                      </div>
                      <div className="features-list-text">{item.text}</div>
                    </div>
                  ))}
                  {/* End Features List Item */}
                </div>
                {/* End Features List */}
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex align-items-stretch order-lg-first">
            <div className="split-image-left">
              <Image
                width={1100}
                height={930}
                src="/assets/images/why.jpg" // right side image of - FLEXIBLE RESPONSIVE  - CONTENT
                alt="Image Description"
              />
              {/* Circle Text */}
              <div className="position-absolute bottom-0 start-0 ps-4 pb-4 d-none d-sm-block">
                <Image
                  src="/assets/images/demo-strong/circle-text.svg"
                  width={138}
                  height={138}
                  alt="Image Description"
                />
              </div>
              {/* End Circle Text */}
            </div>
          </div>
        </div>
      </section>
      <section
        className={`page-section overflow-hidden  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
      >
        <div className="container">
          <div className="row mb-90 mb-sm-50">
            <div className="col-md-10 offset-md-1 col-lg-8 offset-lg-2 text-center">
              <h2 className="section-title-strong mb-40">
              Impact  <span className="font-alt">in Action</span>
              </h2>
              <p className="mb-0">
              We’re building more than just learning systems—we’re building trust, impact, and futures together. These stories come from the people who matter most: parents, teachers, and school leaders. Each one is a reflection of how ParanPara is helping children grow with confidence, clarity, and purpose—at home, in class, and beyond.
              </p>
            </div>
          </div>
          <Testimonials />

          {/*
          
          go to testimonials component
          */}
        </div>
      </section>
      <hr className={`mt-0 mb-0 ${dark ? "white" : ""} `} />
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="blog"
      >
        <Blog />

       {/*
          
          go to BLOGS component
          */}
      </section>
      <section
        className="page-section bg-dark-1 light-content"
        style={{
          backgroundImage:
            "url(/assets/images/bg.jpg)", // background image between LATEST NEWS and LETS WORK TOGETHER
        }}
      >
        <Newsletter />

         {/*
          
          go to NEWSLETTER component
          */}
      </section>
      <section
        className={`page-section  scrollSpysection  ${
          dark ? "bg-dark-1 light-content" : ""
        }`}
        id="contact"
      >
        <Contact />
         {/*
          
          go to contact component
          */}
      </section>
    </>
  );
}
