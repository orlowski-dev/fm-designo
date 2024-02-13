import type { ReactElement } from "react";
import { FbIcon, YtIcon, TwIcon, PinterestIcon, IgIcon } from "../icons";
import navLinks from "../navigation/navLinks";

const LinkIcon = ({ icon, href }: { icon: ReactElement; href: string }) => {
  return (
    <a
      href={href}
      target="_blank"
      className="  text-peach hover:text-light-peach transition-colors"
    >
      {icon}
    </a>
  );
};

const Footer = () => {
  return (
    <div className="bg-black text-white">
      <div className="mx-auto max-w-1112 py-6">
        <footer>
          <div className="mx-6 md:flex items-center justify-between md:py-8 md:border-b-1 border-b-dark-grey">
            <div className="pb-6 md:pb-0 border-b-1 border-b-dark-grey md:border-0">
              <img src="/logo-light.svg" alt="logo white" className="mx-auto" />
            </div>
            <nav className="p-6 md:p-0">
              <ul className="flex flex-col gap-2 md:flex-row md:gap-8">
                {navLinks.map((navLink, index: number) => (
                  <li key={index}>
                    <a
                      href={navLink.link}
                      className="uppercase text-body block p-1 text-center hover:underline"
                    >
                      {navLink.pageName}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="flex flex-col py-12 px-6 gap-12 md:flex-row md:justify-between md:items-end">
            <div className="text-light-grey flex flex-col gap-12 md:flex-row lg:gap-40">
              <address className="grid gap-2 text-center not-italic md:text-left">
                <span className="text-body font-bold">
                  Designo Central Office
                </span>
                <span>3886 Wellington Street</span>
                <span>Toronto, Ontario M9C 3J5</span>
              </address>
              <address className="grid gap-2 text-center not-italic md:text-left">
                <span className="text-body font-bold">
                  Contact Us (Central Offiece)
                </span>
                <a href="tel:+12538638967" className="hover:underline">
                  P : +1 253-863-8967
                </a>
                <a href="mainto:contact@designo.co" className="hover:underline">
                  M : contact@designo.co
                </a>
              </address>
            </div>
            <div className="flex justify-center gap-5">
              <LinkIcon href="/" icon={<FbIcon />} />
              <LinkIcon href="/" icon={<YtIcon />} />
              <LinkIcon href="/" icon={<TwIcon />} />
              <LinkIcon href="/" icon={<PinterestIcon />} />
              <LinkIcon href="/" icon={<IgIcon />} />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
