import { FaChevronRight } from "react-icons/fa";
import "./designs.css";

interface DesignCardLinkProps {
  link: string;
  title: string;
  slug: string;
}

export const DesignCardLink = ({ link, slug, title }: DesignCardLinkProps) => {
  return (
    <a href={link} className={`designs-section_card ${slug}`}>
      <div className="designs-section_card_hover"></div>
      <div className="designs-section_card_content">
        <span className="uppercase text-[1.75rem] font-medium tracking-[0.0875rem]">
          {title}
        </span>
        <span className="flex items-center gap-2 uppercase text-body font-medium tracking-[0.3125rem]">
          View projects <FaChevronRight className="text-peach" />
        </span>
      </div>
    </a>
  );
};

const DesignsSection = () => {
  return (
    <div className="my-28 max-w-1112 mx-auto px-6">
      <section className="designs-section">
        <DesignCardLink
          link="/web-design"
          title="Web design"
          slug="web-design"
        />
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
      </section>
    </div>
  );
};

export default DesignsSection;
