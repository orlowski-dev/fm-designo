import { LinkButton } from "../../button";
import "./hero.css";

const Hero = () => {
  return (
    <div className="max-w-1112 mx-auto md:px-6">
      <section className="md:rounded-xl hero-home md:hero-home--md lg:hero-home--lg">
        <div className="hero-home_content">
          <h1 className="text-[2rem] font-medium md:text-h1">
            Award-winning custom designs and digital branding solutions
          </h1>
          <p className="text-body max-w-[440px] mx-auto lg:mx-0">
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
          <p className="text-center lg:text-left">
            <LinkButton href="/our-company" variant="dark">
              Learn more
            </LinkButton>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Hero;
