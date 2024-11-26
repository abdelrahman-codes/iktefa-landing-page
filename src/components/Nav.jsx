import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { logo } from "../assets/images";
import { navLinks, socialMedia } from "../assets/constants/index.js";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";

const Nav = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (event, id) => {
    event.preventDefault(); // Prevent default anchor behavior
    const section = document.getElementById(id);
    if (section) {
      const sectionTop =
        section.getBoundingClientRect().top + window.scrollY - 100; // Adjusting for the offset
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth", // Smooth scrolling
      });
    }
  };

  return (
    <header
      className={`padding-x py-4 z-20 w-full fixed top-0 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex lg:justify-between justify-between items-center max-container">
        <a href="#home">
          <img src={logo} alt="logo" width={120} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-28 max-lg:hidden">
          {navLinks.map((item, index) => {
            let isButton = false;
            if (index === 4) isButton = true;
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(event) =>
                    scrollToSection(event, item.href.substring(1))
                  } // Remove '#' for the id
                  className={`font-montserrat leading-normal text-lg ${
                    isScrolled ? "text-white" : "text-black"
                  }  ${
                    isButton
                      ? "bg-purple-900 py-2 px-3 text-white rounded-md	"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <div>
          <FiMenu
            onClick={() => setMenu(true)}
            className={`text-3xl cursor-pointer lg:hidden transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-black"
            }`}
          />
        </div>
        <div
          className={`fixed h-full w-screen lg:hidden top-0 right-0 transition-all duration-300 ${
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setMenu(false)}
        >
          <section className="text-white bg-black flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="text-white mt-0 text-3xl cursor-pointer"
            />
            <ul className="flex flex-1 flex-col justify-start">
              {navLinks.map((item, index) => {
                let isButton = false;
                if (index === 4) isButton = true;
                return (
                  <li
                    key={item.label}
                    className={`mb-7  ${
                      isButton
                        ? "bg-purple-900 py-2 px-2 text-white rounded-md	"
                        : ""
                    }`}
                  >
                    <a
                      href={item.href}
                      onClick={(event) =>
                        scrollToSection(event, item.href.substring(1))
                      } // Remove '#' for the id
                      className="font-montserrat leading-normal text-lg text-white"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div>
              <div className="flex w-fill items-center justify-around mb-5">
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <a
                    href={socialMedia.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin
                      style={{ width: "24px", height: "24px", color: "black" }}
                    />
                  </a>
                </div>
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <a
                    href={socialMedia.facebook}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaFacebookF
                      style={{ width: "24px", height: "24px", color: "black" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
