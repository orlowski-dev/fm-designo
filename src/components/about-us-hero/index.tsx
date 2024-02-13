import "./about-us-hero.css";

import heroImgM from "../../assets/about/mobile/image-about-hero.jpg";
import heroImgT from "../../assets/about/tablet/image-about-hero.jpg";
import heroImgD from "../../assets/about/desktop/image-about-hero.jpg";

const AboutUsHero = () => {
  return (
    <div className="max-w-1112 mx-auto md:px-6">
      <section className="about-us-hero">
        <div className="about-us-hero_image-area">
          <img
            srcSet={`${heroImgM} 375w, ${heroImgT} 689w, ${heroImgD} 476w`}
            alt=""
            sizes="(max-width: 768px) 375px, (max-width: 1023px) 689px, 476px"
            className="w-full lg:w-[476px]"
          />
        </div>
        <div className="about-us-hero_content md:about-us-hero_content--md lg:about-us-hero_content--lg">
          <h1 className="text-h2 md:text-h1">About Us</h1>
          <p className="text-body">
            Founded in 2010, we are a creative agency that produces lasting
            results for our clients. We've partnered with many startups,
            corporations, and nonprofits alike to craft designs that make real
            impact. We're always looking forward to creating brands, products,
            and digital experiences that connect with our clients' audiences.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUsHero;
