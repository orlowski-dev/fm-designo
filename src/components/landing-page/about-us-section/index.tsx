import { default as ill1 } from "../../../assets/home/desktop/illustration-passionate.svg";
import { default as ill2 } from "../../../assets/home/desktop/illustration-resourceful.svg";
import { default as ill3 } from "../../../assets/home/desktop/illustration-friendly.svg";
import "./about-us-section.css";

interface AboutUsSectionCardProps {
  title: string;
  image: string;
  description: string;
}

const AboutUsSectionCard = ({
  title,
  image,
  description,
}: AboutUsSectionCardProps) => {
  return (
    <article className="about-us-section_card">
      <div className="about-us-section_card_illustration">
        <img src={image} about={title + " image"} />
      </div>
      <div className="space-y-6">
        <h2 className="about-us-section_card_title">{title}</h2>
        <p className="about-us-section_card_desc">{description}</p>
      </div>
    </article>
  );
};

const AboutUsSection = () => {
  return (
    <div className="px-6 max-w-1112 mx-auto">
      <section className="about-us-section">
        <AboutUsSectionCard
          image={ill1}
          title="Passionate"
          description="Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions."
        />
        <AboutUsSectionCard
          image={ill2}
          title="Resourcefull"
          description="Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients' needs."
        />
        <AboutUsSectionCard
          image={ill3}
          title="Friendly"
          description=" We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide."
        />
      </section>
    </div>
  );
};

export default AboutUsSection;
