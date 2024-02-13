import { LinkButton } from "../../button";
import "./invite-to-contact.css";

const InviteToContact = () => {
  return (
    <div className="relative">
      <div className="bg-black w-full h-[50%] absolute bottom-0 left-0 -z-10"></div>
      <div className="p-6 max-w-1112 mx-auto">
        <section className="invite-to-contact-section md:invite-to-contact-section--md lg:invite-to-contact-section--lg">
          <div className="space-y-4">
            <h2 className="font-medium text-[2rem] md:text-h2 leading-[2rem] max-w-80 mx-auto lg:mx-0">
              Let's talk about your project
            </h2>
            <p className="text-body max-w-[426px] mx-auto">
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </p>
          </div>
          <LinkButton href="/contact" variant="dark">
            Get in touch
          </LinkButton>
        </section>
      </div>
    </div>
  );
};

export default InviteToContact;
