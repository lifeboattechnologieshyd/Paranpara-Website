// import Hero from "@/components/preview/Hero";
// import ParallaxContainer from "@/components/common/ParallaxContainer";
// import Showcase from "@/components/preview/Showcase";
// import Multipage from "@/components/preview/Multipage";
// import Onepage from "@/components/preview/Onepage";
// import Intro from "@/components/preview/Intro";
// import Testomonials from "@/components/preview/Testomonials";
// import FooterPreview from "@/components/footers/FooterPreview";
// import HeaderPreview from "@/components/headers/HeaderPreview";

// export const metadata = {
//   title:
//     "Preview Page || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
//   description:
//     "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
// };

// export default function Home() {
//   return (
//     <>
//       <div className="theme-main">
//         <div className="page" id="top">
//           {/* Navigation Panel */}
//           <nav className="main-nav transparent stick-fixed wow-menubar">
//             <HeaderPreview />
//           </nav>
//           {/* End Navigation Panel */}
//           <main id="main">
//             {/* Home Section */}
//             <ParallaxContainer
//               className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
//               style={{
//                 backgroundImage:
//                   "url(/assets/images/full-width-images/section-bg-1.jpg)",
//               }}
//               id="home"
//             >
//               <Hero />
//             </ParallaxContainer>
//             {/* End Home Section */}
//             {/* Showcases Section */}
//             <section className="full-wrapper mt-n90">
//               <Showcase />
//             </section>
//             {/* End Showcases Section */}
//             {/* Multi Page Demos Section */}
//             <section className="page-section overflow-hidden" id="multi-page">
//               <Multipage />
//             </section>
//             {/* End Multi Page Demos Section */}
//             {/* Divider */}
//             <hr className="mt-0 mb-0" />
//             {/* End Divider */}
//             {/* One Page Demos Section */}
//             <section className="page-section overflow-hidden" id="one-page">
//               <Onepage />
//             </section>
//             {/* End One Page Demos Section */}
//             {/* Divider */}
//             <hr className="mt-0 mb-0" />
//             {/* End Divider */}
//             {/* Intro Sections Demos Section */}
//             <section
//               className="page-section overflow-hidden"
//               id="intro-sections"
//             >
//               <Intro />
//             </section>
//             {/* End Intro Sections Demos Section */}
//             {/* Divider */}
//             <hr className="mt-0 mb-0" />
//             {/* End Divider */}
//             {/* Testimonials Section */}
//             <section className="page-section">
//               <Testomonials />
//             </section>
//             {/* End Testimonials Section */}
//           </main>
//           {/* Footer */}
//           <footer className="page-section footer bg-gray-light-1 pb-30">
//             <FooterPreview />
//           </footer>
//           {/* End Footer */}
//         </div>
//       </div>
//     </>
//   );
// }

import Footer9 from "@/components/footers/Footer9";
import Header10 from "@/components/headers/Header10";
import Home10 from "@/components/homes/home-10";
import Hero1 from "@/components/homes/home-10/heros/Hero1";
import Hero2 from "@/components/homes/home-10/heros/Hero2";
import { strongMultiPages } from "@/data/menu";
import dynamic from "next/dynamic";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title: "Paranpara Education Policy Pvt Ltd",
  description:
    "ParanPara Education - Smarter Solutions for Smarter Education & Strong Futures",
};
export default function Home10ImageParallaxMultiPage() {
  return (
    <>
      <div className="theme-strong">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent stick-fixed wow-menubar wch-unset">
              <Header10 links={strongMultiPages} />
            </nav>{" "}
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-alpha-30 light-content parallax-5 scrollSpysection"
              style={{
                backgroundImage: "url(/assets/images/hero-1.jpg)",
              }}
              id="home"
            >
              <Hero2 />
            </ParallaxContainer>

            <Home10 />
          </main>
          <footer className="footer-1 bg-dark-1 light-content">
            <Footer9 />

            {/*
            GO TO FOOTER COMPONENT FROM HERE */}
          </footer>
        </div>
      </div>{" "}
    </>
  );
}
