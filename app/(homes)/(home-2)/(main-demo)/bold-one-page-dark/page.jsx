import Footer2 from "@/components/footers/Footer2";

import Header2 from "@/components/headers/Header2";

import Home2 from "@/components/homes/home-2";
import Hero from "@/components/homes/home-2/heros/Hero";
import { boldOnepage } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "Home 2 Main Demo Onepage Dark || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};
export default function Home2MainDemoOnepageDark() {
  return (
    <>
      <div className="theme-bold">
        {" "}
        <div className="dark-mode">
          <div className="page bg-dark-1" id="top">
            <nav className="main-nav dark dark-mode transparent stick-fixed wow-menubar">
              <Header2 links={boldOnepage} />{" "}
            </nav>
            <main id="main">
              <ParallaxContainer
                className="home-section bg-dark-alpha-60 light-content parallax-5 scrollSpysection"
                style={{
                  backgroundImage:
                    "url(/assets/images/full-width-images/section-bg-13.jpg)",
                }}
                id="home"
              >
                <Hero />
              </ParallaxContainer>

              <Home2 onePage dark />
            </main>
            <footer className="footer-1 bg-dark-2 light-content">
              <Footer2 />
            </footer>
          </div>{" "}
        </div>
      </div>
    </>
  );
}
