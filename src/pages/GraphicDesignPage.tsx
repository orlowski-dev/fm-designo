import DesignPageHero from "../components/design-page-hero";
import DesignProjectCard from "../components/design-project-card";
import DesignProjectsSection from "../components/design-projects-section";
import InviteToContact from "../components/landing-page/invite-to-contact";
import DesignPageLinksCardsSection from "../components/design-page-links-cards-section";
import { DesignCardLink } from "../components/landing-page/designs";

import change from "../assets/graphic-design/desktop/image-change.jpg";
import boxedWater from "../assets/graphic-design/desktop/image-boxed-water.jpg";
import science from "../assets/graphic-design/desktop/image-science.jpg";

const GraphicDesignPage = () => {
  return (
    <>
      <DesignPageHero
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      <DesignProjectsSection>
        <DesignProjectCard
          image={change}
          title="Tim Brown"
          description="A book cover designed for Tim Brown's new release, 'Change'"
        />
        <DesignProjectCard
          image={boxedWater}
          title="Boxed Wather"
          description="A simple packaging concept made for Boxed Water"
        />
        <DesignProjectCard
          image={science}
          title="Science!"
          description="A poster made in collaboration with the Federal Art Project"
        />
      </DesignProjectsSection>
      <DesignPageLinksCardsSection>
        <DesignCardLink
          link="/app-design"
          title="App design"
          slug="app-design"
        />
        <DesignCardLink
          link="/web-design"
          title="Web design"
          slug="web-design"
        />
      </DesignPageLinksCardsSection>
      <InviteToContact />
    </>
  );
};

export default GraphicDesignPage;
