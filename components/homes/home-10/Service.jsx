import React from "react";

export default function Service() {
  return (
    <>
      <ul
        className="nav nav-tabs tpl-alt-tabs mb-20 mb-xs-0 wow fadeInUp"
        role="tablist"
      >
        <li className="nav-item" role="presentation">
          <a
            href="#service-branding"
            className="nav-link active"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="true"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={64}
                height={64}
                viewBox="0 0 58 64"
                aria-hidden="true"
              > {/*
              
              FOR ICONS REPLACE PATH OR COMPLTE SVG 

              */}
                <path d="M40.875 10c8.625 0 15.125 5.375 15.125 14.5 0 3.875-1.625 8.875-5.125 13.125s-5.625 6.5-12.5 11-10.375 5.375-10.375 5.375-3.5-0.875-10.375-5.375-9-6.75-12.5-11-5.125-9.25-5.125-13.125c0-9.125 6.5-14.5 15.125-14.5 4.875 0 10.25 2.25 12.875 6.625 2.625-4.375 8-6.625 12.875-6.625zM49.375 36.375c1.5-1.75 2.75-3.875 3.5-6.125 0.75-2 1.125-3.875 1.125-5.75 0-3.75-1.25-7-3.625-9.25-1.125-1-2.5-1.875-4.125-2.375-1.625-0.625-3.5-0.875-5.375-0.875-4.75 0-9.125 2.25-11.125 5.625l-1.75 2.875-1.75-2.875c-2-3.375-6.375-5.625-11.125-5.625-1.875 0-3.75 0.25-5.375 0.875-1.625 0.5-3 1.375-4.125 2.375-2.375 2.25-3.625 5.5-3.625 9.25 0 1.875 0.375 3.75 1.125 5.75 0.75 2.25 2 4.375 3.5 6.125 3.375 4 5.25 6.125 12.125 10.625 5 3.375 8.125 4.5 9.25 4.875 1.125-0.375 4.25-1.5 9.25-4.875 6.875-4.5 8.75-6.625 12.125-10.625z" />
              </svg>
            </div>
            LOGICAL PATH
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-ui-ux-design"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={60}
                height={64}
                viewBox="0 0 60 64"
                aria-hidden="true"
              >
                <path d="M60 48h-22v2h8v2h-32.125v-2h8v-2h-21.875v-36h60v36zM2 14v32h56v-32h-56z" />
              </svg>
            </div>
            Technology
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-animation"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={64}
                viewBox="0 0 50 64"
                aria-hidden="true"
              >
                <path d="M0 11h50v42h-50v-42zM9 51v-6h-7v6h7zM9 43v-6h-7v6h7zM9 35v-6h-7v6h7zM9 27v-6h-7v6h7zM9 19v-6h-7v6h7zM39 51v-18h-28v18h28zM39 31v-18h-28v18h28zM48 51v-6h-7v6h7zM48 43v-6h-7v6h7zM48 35v-6h-7v6h7zM48 27v-6h-7v6h7zM48 19v-6h-7v6h7z" />
              </svg>
            </div>
            Skills
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-development"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={64}
                viewBox="0 0 48 64"
                aria-hidden="true"
              >
                <path d="M24.125 20c3.25 0 6.25 1.25 8.5 3.5s3.5 5.25 3.5 8.5-1.25 6.25-3.5 8.5-5.25 3.5-8.5 3.5-6.25-1.25-8.5-3.5-3.5-5.25-3.5-8.5 1.25-6.25 3.5-8.5 5.25-3.5 8.5-3.5zM24.125 42c5.5 0 10-4.5 10-10s-4.5-10-10-10-10 4.5-10 10 4.5 10 10 10zM17.25 10.375c-1.25 0.375-2.5 0.875-3.75 1.5 0.25 1 0.125 2 0 3-0.25 1.625-1 3.125-2.25 4.375-1.5 1.5-3.625 2.375-5.75 2.375-0.5 0-1.125 0-1.625-0.125-0.625 1.25-1.125 2.5-1.5 3.75 0.875 0.5 1.5 1.25 2.125 2.125 1 1.375 1.5 3 1.5 4.625s-0.5 3.25-1.5 4.625c-0.625 0.875-1.25 1.625-2.125 2.125 0.375 1.25 0.875 2.5 1.5 3.75 0.5-0.125 1.125-0.125 1.625-0.125 2.125 0 4.25 0.875 5.75 2.375 1.25 1.25 2 2.75 2.25 4.375 0.125 1 0.25 2 0 3 1.25 0.625 2.5 1.125 3.75 1.5 0.5-0.875 1.25-1.5 2.125-2.125 1.375-1 3-1.5 4.625-1.5s3.25 0.5 4.625 1.5c0.875 0.625 1.625 1.25 2.125 2.125 1.25-0.375 2.5-0.875 3.75-1.5-0.25-1-0.125-2 0-3 0.25-1.625 1-3.125 2.25-4.375 1.5-1.5 3.625-2.375 5.75-2.375 0.5 0 1.125 0 1.625 0.125 0.625-1.25 1.125-2.5 1.5-3.75-0.875-0.5-1.5-1.25-2.125-2.125-1-1.375-1.5-3-1.5-4.625s0.5-3.25 1.5-4.625c0.625-0.875 1.25-1.625 2.125-2.125-0.375-1.25-0.875-2.5-1.5-3.75-0.5 0.125-1.125 0.125-1.625 0.125-2.125 0-4.25-0.875-5.75-2.375-1.25-1.25-2-2.75-2.25-4.375-0.125-1-0.25-2 0-3-1.25-0.625-2.5-1.125-3.75-1.5-0.5 0.875-1.25 1.5-2.125 2.125-1.375 1-3 1.5-4.625 1.5s-3.25-0.5-4.625-1.5c-0.875-0.625-1.625-1.25-2.125-2.125zM29.75 8v0c2.5 0.625 5 1.625 7.125 3-1 2.25-0.625 5 1.25 6.875 1.25 1.25 2.75 1.75 4.375 1.75 0.875 0 1.75-0.125 2.5-0.5 1.375 2.125 2.375 4.625 3 7.125-2.375 0.875-4 3.125-4 5.75s1.75 4.875 4 5.75c-0.625 2.5-1.625 5-3 7.125-0.75-0.375-1.625-0.5-2.5-0.5-1.625 0-3.125 0.5-4.375 1.75-1.875 1.875-2.25 4.625-1.25 6.875-2.125 1.375-4.625 2.375-7.125 3-0.875-2.25-3.125-4-5.75-4s-4.875 1.75-5.75 4c-2.5-0.625-5-1.625-7.125-3 1-2.25 0.625-5-1.25-6.875-1.25-1.25-2.75-1.75-4.375-1.75-0.875 0-1.75 0.125-2.5 0.5-1.375-2.125-2.375-4.625-3-7.125 2.25-0.875 4-3.125 4-5.75s-1.625-4.875-4-5.75c0.625-2.5 1.625-5 3-7.125 0.75 0.375 1.625 0.5 2.5 0.5 1.625 0 3.125-0.5 4.375-1.75 1.875-1.875 2.25-4.625 1.25-6.875 2.125-1.375 4.625-2.375 7.125-3 0.875 2.375 3.125 4 5.75 4s4.875-1.625 5.75-4z" />
              </svg>
            </div>
            Community
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            href="#service-photography"
            className="nav-link"
            data-bs-toggle="tab"
            role="tab"
            aria-selected="false"
          >
            <div className="alt-tabs-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={48}
                height={64}
                viewBox="0 0 48 64"
                aria-hidden="true"
              >
                <path d="M44.25 20c2.25 0 3.75 1.625 3.75 3.875v22c0 2.25-1.5 4.125-3.75 4.125h-40c-2.25 0-4.25-1.875-4.25-4.125v-22c0-2.25 2-3.875 4.25-3.875h1.625v-2h4.25v2h1.625c4-4.5 5.375-6 6.875-6h11c1.5 0 2.875 1.5 6.875 6h7.75zM46 45.875v-22c0-1.125-0.625-1.875-1.75-1.875h-8.625l-0.625-0.375c-0.375-0.5-0.875-1-1.25-1.375-1.5-1.625-2.5-3-3.25-3.75-0.625-0.625-0.875-0.5-0.875-0.5h-11s-0.25 0-0.875 0.5c-0.75 0.625-1.75 1.75-3.125 3.375-0.375 0.5-0.875 1.25-1.375 1.75l-0.625 0.375h-8.375c-1.125 0-2.25 0.875-2.25 1.875v22c0 1.125 1.125 2.125 2.25 2.125h40c1 0 1.75-1 1.75-2.125zM24 23.75c5.875 0 10.75 4.75 10.75 10.625s-4.875 10.625-10.75 10.625-10.75-4.75-10.75-10.625 4.875-10.625 10.75-10.625zM24 43c4.75 0 8.75-3.875 8.75-8.625s-4-8.625-8.75-8.625-8.75 3.875-8.75 8.625 4 8.625 8.75 8.625zM36 26.125v-2.125h2.125v2.125h-2.125zM20 34.375c0-2.625 1.375-4 4-4s4 1.375 4 4-1.375 4-4 4-4-1.375-4-4z" />
              </svg>
            </div>
            Outcomes
          </a>
        </li>
      </ul>
      {/* End Nav tabs */}
      {/* Tab panes */}
      <div className="tab-content tpl-tabs-cont">
        {/* Service Item */}
        <div
          className="tab-pane fade show active"
          id="service-branding"
          role="tabpanel"
        >
          <div className="row">
            <div
              className="col-lg-4 mb-md-40 mb-xs-30 wow linesAnimIn"
              data-splitting="lines"
            >
              <blockquote className="mt-0 mb-0">
                <p className="mb-20 mb-sm-10">
                Every learning experience at ParanPara is intentionally structured, personalized, and designed to feel effortless and joyful.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn"
              data-splitting="lines"
            >
             Our deep experience and AI-powered systems guide each learner along a personalized path—shaped by daily goals and real-time feedback. Unlike rigid routines, our approach sparks curiosity through stories, games, and interactive visuals. 
            </div>
            <div
              className="col-md-6 col-lg-4 wow linesAnimIn"
              data-splitting="lines"
            >
            Aligned with global education standards, our curriculum goes beyond academics. We nurture financial discipline, emotional intelligence, value systems, and real-world awareness, preparing every child not just for school, but for life.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div
          className="tab-pane fade"
          id="service-ui-ux-design"
          role="tabpanel"
        >
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                Technology at ParanPara is intelligent, intuitive, and impactful—making learning personalized, measurable, and limitless for every learner.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
            We ensure our technology has a multiplying effect on students. It personalizes the pace, adapts to their needs, and opens up possibilities beyond the classroom. Parents stay informed through intuitive updates and real-time insights.
            </div>
            <div className="col-md-6 col-lg-4">
            Our tech empowers teachers and school management with smart dashboards. This tech-enabled triangle of student–teacher–parent ensures transparency, collaboration, and continuous growth—amplifying outcomes across the board.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-animation" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                Academic strength is just the beginning. We build the mindset, confidence, habits, and skills needed for life beyond school.
                </p>
                <footer>Chip Kidd</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
            At ParanPara, we blend academic learning with future-centric skills. Backed by years of experience, our curriculum fosters critical thinking, public speaking, ethical reasoning, and financial literacy—right from the early years.
            </div>
            <div className="col-md-6 col-lg-4">
            We align with global academic standards while keeping the child’s pace and individuality at the core. We also instill habits like discipline and emotional resilience, creating well-rounded, confident learners.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-development" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                Learning thrives when students, teachers, and families grow together—collaborating, supporting, and inspiring one another.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
            ParanPara creates a tightly connected learning ecosystem where collaboration is at the heart of progress. Parents & Teachers are equipped with actionable insights, intuitive feedback tools, transforming them from observers into active contributors. 
            </div>
            <div className="col-md-6 col-lg-4">
            This triangle of trust among students, teachers, and parents ensures that everyone is aligned and supported. Growth is no longer a one-way street; it becomes a shared experience and adds transparency & clarity into everyday learning.
            </div>
          </div>
        </div>
        {/* End Service Item */}
        {/* Service Item */}
        <div className="tab-pane fade" id="service-photography" role="tabpanel">
          <div className="row">
            <div className="col-lg-4 mb-md-40 mb-xs-30">
              <blockquote className="mt-0 mb-0">
                <p>
                From daily wins to long-term impact, learning with ParanPara is built for outcomes that matter, growing everyday acagemically & personally.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
            We focus on visible, measurable progress, starting with the small stuff. Every day brings goals, feedback, and opportunities for improvement. Regular acknowledgements and real-time nudges help students build confidence and stay on track.
            </div>
            <div className="col-md-6 col-lg-4">
            These micro-successes add up, creating momentum that feels good and fuels consistency. Our outcomes go beyond grades. We prepare learners for long-term success, adapting to change,  making informed decisions, and growing with self-belief.
            </div>
          </div>
        </div>
        {/* End Service Item */}
      </div>{" "}
    </>
  );
}
