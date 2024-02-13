import DesignPageHero from "../components/design-page-hero";
import DesignProjectCard from "../components/design-project-card";
import DesignProjectsSection from "../components/design-projects-section";
import InviteToContact from "../components/landing-page/invite-to-contact";

import express from "../assets/web-design/desktop/image-express.jpg";
import transfer from "../assets/web-design/desktop/image-transfer.jpg";
import photon from "../assets/web-design/desktop/image-photon.jpg";
import builder from "../assets/web-design/desktop/image-builder.jpg";
import blogr from "../assets/web-design/desktop/image-blogr.jpg";
import camp from "../assets/web-design/desktop/image-camp.jpg";
import DesignPageLinksCardsSection from "../components/design-page-links-cards-section";
import { DesignCardLink } from "../components/landing-page/designs";

const WebDesignPage = () => {
  return (
    <>
      <DesignPageHero
        title="Web Design"
        description="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
      />
      <DesignProjectsSection>
        <DesignProjectCard
          image={express}
          title="Express"
          description="A multi-carrier shipping website for ecommerce businesses"
        />
        <DesignProjectCard
          image={transfer}
          title="Transfer"
          description="Site for low-cost money transfers and sending money within seconds"
        />
        <DesignProjectCard
          image={photon}
          title="Photon"
          description="A state-of-the-art music player with high-resolution audio and DSP effects"
        />
        <DesignProjectCard
          image={builder}
          title="Builder"
          description="Connects users with local contractors based on their location"
        />
        <DesignProjectCard
          image={blogr}
          title="Blogr"
          description="Blogr is a platform for creating an online blog or publication"
        />
        <DesignProjectCard
          image={camp}
          title="Camp"
          description="Get expert training in coding, data, design, and digital marketing"
        />
      </DesignProjectsSection>
      <DesignPageLinksCardsSection>
        <DesignCardLink
          link="/app-design"
          title="App design"
          slug="app-design"
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

export default WebDesignPage;
