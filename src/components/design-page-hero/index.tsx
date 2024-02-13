import "./design-page-hero.css";

export interface DesignPageHeroProps {
  title: string;
  description: string;
}

const DesignPageHero = ({ title, description }: DesignPageHeroProps) => {
  return (
    <div className="max-w-1112 mx-auto md:p-6">
      <section className="design-page-hero-section md:design-page-hero-section--md lg:design-page-hero-section--lg">
        <h1 className="design-page-hero-section_title">{title}</h1>
        <p className="design-page-hero-section_desc">{description}</p>
      </section>
    </div>
  );
};

export default DesignPageHero;
