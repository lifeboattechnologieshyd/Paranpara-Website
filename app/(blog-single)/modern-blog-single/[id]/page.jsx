import Form7 from "@/components/blog/commentForm/Form7";
import Comments from "@/components/blog/Comments";
import NewsLetterForm1 from "@/components/blog/newsletterForms/NewsLetterForm1";
import Slider3 from "@/components/blog/sliders/Slider3";
import Widget1 from "@/components/blog/widgets/Widget1";
import Footer2 from "@/components/footers/Footer2";
import Header8 from "@/components/headers/Header8";

import { modernMultipage } from "@/data/menu";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
import { allBlogs } from "@/data/blogs";
export const metadata = {
  title:
    "Modern Blogs Single || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default async function ModernBlogSinglePage(props) {
  const params = await props.params;
  const blog = allBlogs.filter((elm) => elm.id == params.id)[0] || allBlogs[0];
  return (
    <>
      <div className="theme-modern">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar">
            <Header8 links={modernMultipage} />
          </nav>{" "}
          <main id="main">
            <ParallaxContainer
              className="page-section pt-90 pb-90 pb-xs-40 bg-dark-alpha-60 parallax-5 light-content"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-modern/section-bg-7.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative z-index-1">
                <div className="mb-20">
                  <div className="mb-10">
                    <Link
                      href={`/modern-portfolio`}
                      className="link-hover-anim align-middle"
                      data-btn-animate="y"
                    >
                      <i className="icon-arrow-left2 size-14" /> Back to blog
                    </Link>
                  </div>
                  <hr className="white mt-0 mb-0" />
                </div>
                <h1 className="section-title-large font-alt uppercase mb-0 wow fadeRotateIn">
                  {blog.title || blog.postTitle}
                </h1>
                {/* Author, Categories, Comments */}
                <div
                  className="blog-item-data mt-30 mt-sm-10 mb-0 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-clock size-16" />
                      <span className="visually-hidden">Date:</span> December 25
                    </a>
                  </div>
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-user size-16" />
                      <span className="visually-hidden">Author:</span> John Doe
                    </a>
                  </div>
                  <div className="d-inline-block me-3">
                    <i className="mi-folder size-16" />
                    <span className="visually-hidden">Categories:</span>
                    <a href="#">Design</a>, <a href="#">Branding</a>
                  </div>
                  <div className="d-inline-block me-3">
                    <a href="#">
                      <i className="mi-message size-16" /> 5 Comments
                    </a>
                  </div>
                </div>
                {/* End Author, Categories, Comments */}
              </div>
              {/* Scroll Down */}
              <div
                className="local-scroll scroll-down-wrap-2 d-none d-lg-block wow fadeInUp"
                data-wow-offset={0}
              >
                <div className="full-wrapper text-end">
                  <span className="scroll-down-2">
                    <Image
                      src="/assets/images/demo-modern/arrow-down-1-white.svg"
                      alt="Scroll Down"
                      width={50}
                      height={73}
                    />
                  </span>
                </div>
              </div>
              {/* End Scroll Down */}
            </ParallaxContainer>
            <>
              {/* Section */}
              <section className="page-section">
                <div className="container relative">
                  <div className="row">
                    {/* Content */}
                    <div className="col-lg-8 mb-md-80">
                      {/* Post */}
                      <div className="blog-item mb-80 mb-xs-40">
                        <div className="blog-item-body">
                          {/* Media Gallery */}
                          <div className="blog-media mb-40 mb-xs-30">
                            <Slider3 />
                          </div>
                          <h4>Welcome to the Future of Learning:</h4>
                          <p>
                            Imagine a world where every learner—regardless of
                            age, background, or pace—receives the exact
                            education they need, when they need it. At ParanPara
                            Pvt. Ltd., this isn’t just imagination. It’s
                            happening.
                          </p>
                          <h4>
                            
                            Why Traditional Learning No Longer Works for All:
                          </h4>
                          <p>
                            The one-size-fits-all approach to education is
                            showing its age. Students today need more than
                            textbooks and chalkboards—they need engagement,
                            personalization, and real-time growth tracking. And
                            that’s where ParanPara steps in.
                          </p>
                          <h4>Enter the AI-Powered Classroom:</h4>
                          <p>
                            With our ParanPara Education Guarantee Initiative,
                            we’ve built an AI-powered daily learning system that
                            evolves with each learner. From curated lessons to
                            interactive challenges and real-time feedback, our
                            tech creates a personalized journey that empowers
                            every child.
                          </p>
                          <p>
                            Whether it’s Critical Thinking, Financial Literacy,
                            or Public Speaking, our AI understands a child's
                            learning needs and adjusts accordingly—ensuring
                            consistent academic progress and real-world skill
                            development.
                          </p>
                          {/* <blockquote>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Integer posuere erat a&nbsp;ante. Vestibulum
                              pellentesque, purus ut dignissim consectetur,
                              nulla erat ultrices purus.
                            </p>
                            <footer>
                              Someone famous in
                              <cite title="Source Title"> Source Title </cite>
                            </footer>
                          </blockquote> */}
                          <h4> Beyond Just Learning—We Create Ecosystems:</h4>
                          <p>
                            Education isn’t a solo act. At ParanPara, we believe
                            in collaboration—between students, educators, and
                            parents. Our AI tools don’t just track performance;
                            they build bridges between home and school, making
                            learning transparent, collaborative, and measurable.
                          </p>

                          <h4> Future-Proofing Young Minds</h4>
                          <p>
                            Aligned with our vision of a future-proof learning
                            ecosystem, our mission is to provide guaranteed,
                            structured, and joyful learning to every child. The
                            future demands adaptability, creativity, empathy,
                            and tech fluency—and we are preparing children for
                            it right from kindergarten.
                          </p>

                          <h4> Education. Redesigned.</h4>
                          <p>
                            We’re not just teaching. We’re engineering a
                            revolution—where every child is equipped, every
                            teacher is empowered, and every school is a center
                            of excellence. At ParanPara, the future of education
                            is now—AI-powered, personalized, and purpose-driven.
                          </p>

                          <h4>
                            Ready to explore the future of learning with
                            ParanPara?
                          </h4>
                          <p>
                            Let’s connect, collaborate, educate, and
                            support—together.
                          </p>
                        </div>
                      </div>
                      {/* End Post */}
                      {/* Comments */}
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">
                          Comments <small className="number">(3)</small>
                        </h4>
                        <ul className="media-list comment-list clearlist">
                          <Comments />
                        </ul>
                      </div>
                      {/* End Comments */}
                      {/* Add Comment */}
                      <div className="mb-80 mb-xs-40">
                        <h4 className="blog-page-title">Leave a comment</h4>
                        {/* Form */}
                        <Form7 />
                        {/* End Form */}
                      </div>
                      {/* End Add Comment */}
                      {/* Prev/Next Post */}
                      <div className="clearfix mt-40">
                        <a href="#" className="blog-item-more circle left">
                          <i className="mi-chevron-left" />
                          &nbsp;Prev post
                        </a>
                        <a href="#" className="blog-item-more circle right">
                          Next post&nbsp;
                          <i className="mi-chevron-right" />
                        </a>
                      </div>
                      {/* End Prev/Next Post */}
                    </div>
                    {/* End Content */}
                    {/* Sidebar */}
                    <div className="col-lg-4 col-xl-3 offset-xl-1">
                      {/* Search Widget */}
                      <Widget1 searchInputClass="form-control input-md search-field input-circle" />
                      {/* End Widget */}
                    </div>
                    {/* End Sidebar */}
                  </div>
                </div>
              </section>
              {/* End Section */}
              {/* Divider */}
              <hr className="mt-0 mb-0" />
              {/* End Divider */}
              {/* Newsletter Section */}
              <section className="small-section">
                <div className="container">
                  {/* Newsletter Form */}
                  <div className="row wow fadeInUp">
                    <div className="col-lg-8 offset-lg-2">
                      <h2 className="section-title-tiny mb-30">
                        <span className="icon-ellipse" /> Subscribe our
                        newsletter
                      </h2>
                      <NewsLetterForm1 />
                    </div>
                  </div>
                  {/* End Newsletter Form */}
                </div>
              </section>
            </>
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer2 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
