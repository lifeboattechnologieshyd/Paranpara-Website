import Map from "@/components/common/Map";

import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Contact from "@/components/homes/home-10/Contact";

import { strongMultiPages } from "@/data/menu";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import ParallaxContainer from "@/components/common/ParallaxContainer";
const dark = false;
const onePage = false;
export const metadata = {
  title:
    "Paranpara Education Policy Pvt Ltd",
  description:
    "ParanPara Education - Smarter Solutions for Smarter Education & Strong Futures",
};
export default function StrongContactPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
            <Header10 links={strongMultiPages} />
          </nav>
          <main className="main">
            <ParallaxContainer
              className="page-section bg-dark-alpha-30 light-content parallax-5"
              style={{
                backgroundImage:
                  "url(/assets/images/demo-strong/section-bg-1.jpg)",
              }}
              id="home"
            >
              <div className="container position-relative pt-sm-30">
                {/* Home Section Content */}
                <div className="home-content text-center">
                  <h1 className="hs-title-7 mb-0">
                    <span className="wow charsAnimIn-2" data-splitting="chars">
                      Contact <span className="font-alt">Us</span>
                    </span>
                  </h1>
                </div>
                {/* End Home Section Content */}
              </div>
            </ParallaxContainer>
            <section
              className={`page-section  scrollSpysection  ${
                dark ? "bg-dark-1 light-content" : ""
              }`}
              id="contact"
            >
              <Contact />
            </section>
            <div className="google-map">
              <Map />
            </div>
          </main>

          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
