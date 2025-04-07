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
            <img
                src="/assets/images/services-1.jpg"
                alt="Icon"
                width={48}
                height={64}
                
              />
            </div>
            Logical Path
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
               <img
                src="/assets/images/servives-2.jpg"
                alt="Icon"
                width={48}
                height={64}
              />
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
            <img
                src="/assets/images/services-3.jpg"
                alt="Icon"
                width={48}
                height={64}
              />
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
            <img
                src="/assets/images/services-4.jpg"
                alt="Icon"
                width={48}
                height={64}
              />
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
            <img
                src="/assets/images/services-5.jpg"
                alt="Icon"
                width={48}
                height={64}
                padding={30}
              />
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
                  Every learning experience at ParanPara is intentionally
                  structured, personalized, and designed to feel effortless and
                  joyful.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div
              className="col-md-6 col-lg-4 mb-sm-30 wow linesAnimIn"
              data-splitting="lines"
            >
              Our deep experience and AI-powered systems guide each learner
              along a personalized path—shaped by daily goals and real-time
              feedback. Unlike rigid routines, our approach sparks curiosity
              through stories, games, and interactive visuals.
            </div>
            <div
              className="col-md-6 col-lg-4 wow linesAnimIn"
              data-splitting="lines"
            >
              Aligned with global education standards, our curriculum goes
              beyond academics. We nurture financial discipline, emotional
              intelligence, value systems, and real-world awareness, preparing
              every child not just for school, but for life.
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
                  Technology at ParanPara is intelligent, intuitive, and
                  impactful—making learning personalized, measurable, and
                  limitless for every learner.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              We ensure our technology has a multiplying effect on students. It
              personalizes the pace, adapts to their needs, and opens up
              possibilities beyond the classroom. Parents stay informed through
              intuitive updates and real-time insights.
            </div>
            <div className="col-md-6 col-lg-4">
              Our tech empowers teachers and school management with smart
              dashboards. This tech-enabled triangle of student–teacher–parent
              ensures transparency, collaboration, and continuous
              growth—amplifying outcomes across the board.
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
                  Academic strength is just the beginning. We build the mindset,
                  confidence, habits, and skills needed for life beyond school.
                </p>
                <footer>Chip Kidd</footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              At ParanPara, we blend academic learning with future-centric
              skills. Backed by years of experience, our curriculum fosters
              critical thinking, public speaking, ethical reasoning, and
              financial literacy—right from the early years.
            </div>
            <div className="col-md-6 col-lg-4">
              We align with global academic standards while keeping the child’s
              pace and individuality at the core. We also instill habits like
              discipline and emotional resilience, creating well-rounded,
              confident learners.
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
                  Learning thrives when students, teachers, and families grow
                  together—collaborating, supporting, and inspiring one another.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              ParanPara creates a tightly connected learning ecosystem where
              collaboration is at the heart of progress. Parents & Teachers are
              equipped with actionable insights, intuitive feedback tools,
              transforming them from observers into active contributors.
            </div>
            <div className="col-md-6 col-lg-4">
              This triangle of trust among students, teachers, and parents
              ensures that everyone is aligned and supported. Growth is no
              longer a one-way street; it becomes a shared experience and adds
              transparency & clarity into everyday learning.
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
                  From daily wins to long-term impact, learning with ParanPara
                  is built for outcomes that matter, growing everyday
                  acagemically & personally.
                </p>
                <footer></footer>
              </blockquote>
            </div>
            <div className="col-md-6 col-lg-4 mb-sm-30">
              We focus on visible, measurable progress, starting with the small
              stuff. Every day brings goals, feedback, and opportunities for
              improvement. Regular acknowledgements and real-time nudges help
              students build confidence and stay on track.
            </div>
            <div className="col-md-6 col-lg-4">
              These micro-successes add up, creating momentum that feels good
              and fuels consistency. Our outcomes go beyond grades. We prepare
              learners for long-term success, adapting to change, making
              informed decisions, and growing with self-belief.
            </div>
          </div>
        </div>
        {/* End Service Item */}
      </div>{" "}
    </>
  );
}
