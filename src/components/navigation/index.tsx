import type { Variants } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const menuBgVarianst: Variants = {
  open: {
    display: "block",
    opacity: 1,
    transition: { duration: 0.13 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.13 },
    transitionEnd: {
      display: "none",
    },
  },
};

const navLinkAnimVariants: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.13 },
  },
  closed: {
    y: -10,
    opacity: 1,
    transition: { duration: 0.13 },
  },
};

const navLinks = [
  { link: "/our-company", pageName: "Our company" },
  { link: "/locations", pageName: "Locations" },
  { link: "/contact", pageName: "Contact" },
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const id = useId();

  // close mobile menu on width change
  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <div className="flex items-center">
      <button
        role="button"
        aria-controls={id}
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        className="text-[1.5rem] w-6 h-6 md:hidden text-black hover:text-light-peach transition-colors"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* mobile nav */}
      <motion.nav
        id={id}
        variants={menuBgVarianst}
        initial="closed"
        animate={isMenuOpen ? "open" : "closed"}
        className="md:hidden h-mobile-menu absolute w-full bg-black bg-opacity-65 top-[4.6875rem] left-0"
      >
        <div className="bg-black text-white px-6 py-10">
          <ul className="grid gap-3">
            {navLinks.map((navLink, index: number) => (
              <motion.li
                key={index}
                variants={navLinkAnimVariants}
                initial="closed"
                animate={isMenuOpen ? "open" : "closed"}
              >
                <a href={navLink.link} className="text-h3 uppercase block py-1">
                  {navLink.pageName}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
      <nav className="hidden md:block">
        <ul className="flex gap-8">
          {navLinks.map((navLink, index: number) => (
            <li key={index}>
              <a
                href={navLink.link}
                className="p-1 text-[0.875rem] text-dark-grey hover:underline uppercase tracking-[2px]"
              >
                {navLink.pageName}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
