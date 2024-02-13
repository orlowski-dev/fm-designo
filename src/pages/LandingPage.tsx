import AboutUsSection from "../components/landing-page/about-us-section";
import DesignsSection from "../components/landing-page/designs";
import Hero from "../components/landing-page/hero";
import InviteToContact from "../components/landing-page/invite-to-contact";

const LandingPage = () => {
  return (
    <>
      <Hero />
      <DesignsSection />
      <AboutUsSection />
      <InviteToContact />
    </>
  );
};

export default LandingPage;
