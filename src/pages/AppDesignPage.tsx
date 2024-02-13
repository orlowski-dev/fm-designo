import DesignPageHero from "../components/design-page-hero";
import DesignProjectCard from "../components/design-project-card";
import DesignProjectsSection from "../components/design-projects-section";
import InviteToContact from "../components/landing-page/invite-to-contact";
import DesignPageLinksCardsSection from "../components/design-page-links-cards-section";
import { DesignCardLink } from "../components/landing-page/designs";

import airfilter from "../assets/app-design/desktop/image-airfilter.jpg";
import eyecam from "../assets/app-design/desktop/image-eyecam.jpg";
import faceit from "../assets/app-design/desktop/image-faceit.jpg";
import todo from "../assets/app-design/desktop/image-todo.jpg";
import loopstudios from "../assets/app-design/desktop/image-loopstudios.jpg";

const AppDesignPage = () => {
  return (
    <>
      <DesignPageHero
        title="App Design"
        description="Our mobile designs bring intuitive digital solutions
        to your customers right at their fingertips."
      />
      <DesignProjectsSection>
        <DesignProjectCard
          image={airfilter}
          title="Airfilter"
          description="Solving the problem of poor indoor air quality by filtering the air"
        />
        <DesignProjectCard
          image={eyecam}
          title="Eyecam"
          description="Product that lets you edit your favorite photos and videos at any time"
        />
        <DesignProjectCard
          image={faceit}
          title="Faceit"
          description="Get to meet your favorite internet superstar with the faceit app"
        />
        <DesignProjectCard
          image={todo}
          title="Todo"
          description="A todo app that features cloud sync with light and dark mode"
        />
        <DesignProjectCard
          image={loopstudios}
          title="Loopstudios"
          description="A VR experience app made for Loopstudios"
        />
      </DesignProjectsSection>
      <DesignPageLinksCardsSection>
        <DesignCardLink
          link="/web-design"
          title="Web design"
          slug="web-design"
        />
        <DesignCardLink
          link="/graphic-design"
          title="Graphic design"
          slug="graphic-design"
        />
      </DesignPageLinksCardsSection>
      <InviteToContact />
    </>
  );
};

export default AppDesignPage;
