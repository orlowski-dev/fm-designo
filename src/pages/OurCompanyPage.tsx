import AboutUsHero from "../components/about-us-hero";
import InviteToContact from "../components/landing-page/invite-to-contact";
import StoryCard from "../components/story-card";

import worldClassM from "../assets/about/mobile/image-world-class-talent.jpg";
import worldClassT from "../assets/about/tablet/image-world-class-talent.jpg";
import worldClassD from "../assets/about/desktop/image-world-class-talent.jpg";
import realDealM from "../assets/about/mobile/image-real-deal.jpg";
import realDealT from "../assets/about/tablet/image-real-deal.jpg";
import realDealD from "../assets/about/desktop/image-real-deal.jpg";

const OurCompanyPage = () => {
  return (
    <>
      <AboutUsHero />
      <div className="max-w-1112 mx-auto md:px-6 md:my-28">
        <section className="md:rounded-xl overflow-hidden">
          <StoryCard
            images={{
              img1: worldClassM,
              img2: worldClassT,
              img3: worldClassD,
            }}
            title="World-class talent"
          >
            <div className="space-y-6">
              <p>
                We are a crew of strategists, problem-solvers, and
                technologists. Every design is thoughtfully crafted from concept
                to launch, ensuring success in its given market. We are
                constantly updating our skills in a myriad of platforms.
              </p>
              <p>
                Our team is multi-disciplinary and we are not merely interested
                in form — content and meaning are just as important. We give
                great importance to craftsmanship, service, and prompt delivery.
                Clients have always been impressed with our high-quality
                outcomes that encapsulates their brand's story and mission.
              </p>
            </div>
          </StoryCard>
        </section>
      </div>
      <div className="max-w-1112 mx-auto md:px-6 md:my-28">
        <section className="md:rounded-xl overflow-hidden">
          <StoryCard
            images={{
              img1: realDealM,
              img2: realDealT,
              img3: realDealD,
            }}
            title="The real deal"
            imagePositon="right"
          >
            <div className="space-y-6">
              <p>
                As strategic partners in our clients' businesses, we are ready
                to take on any challenge as our own. Solving real problems
                require empathy and collaboration, and we strive to bring a
                fresh perspective to every opportunity. We make design and
                technology more accessible and give you tools to measure
                success.
              </p>
              <p>
                We are visual storytellers in appealing and captivating ways. By
                combining business and marketing strategies, we inspire
                audiences to take action and drive real results.
              </p>
            </div>
          </StoryCard>
        </section>
      </div>
      <InviteToContact />
    </>
  );
};

export default OurCompanyPage;
