import { footerLinks, socialMedia } from "../assets/constants";
import { copyrightSign } from "../assets/icons";
import { logo } from "../assets/images";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaFacebookF, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="max-container" id="footer">
      <div className="flex flex-1 flex-col items-start">
        <a href="#home">
          <img src={logo} width={250} alt="logo" />
        </a>
      </div>
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-1 flex-col items-start">
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 ">
            Driven by our core values of integrity, quality, and customer
            satisfaction, <span className="text-purple-900">iktefa</span> aims
            to create lasting partnerships with our clients, empowering them to
            thrive in a competitive marketplace.
            <br /> <br />
            Join us in our mission to nourish the world!
          </p>
          <div className="flex items-center gap-5 mt-8">
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin style={{ width: "24px", height: "24px" }} />
              </a>
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <a href={socialMedia.facebook} target="_blank" rel="noreferrer">
                <FaFacebookF style={{ width: "24px", height: "24px" }} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex  justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    key={link.name}
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal"
                  >
                    <a href={link.href}> {link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex  flex-col">
          <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
            Contact Us
          </h4>
          <h3 className="text-white-400 font-montserrat text-base leading-normal flex  items-center mb-3">
            <FaPhoneAlt className="text-white-400 font-montserrat text-base leading-normal mr-2 size-5" />
            +201143275741
          </h3>
          <h3 className="text-white-400 font-montserrat text-base leading-normal flex  items-center mb-3">
            <MdEmail className="text-white-400 font-montserrat text-base leading-normal mr-2 size-5" />
            sales@iktefa.com
          </h3>
          <h3 className="text-white-400 font-montserrat text-base leading-normal flex  items-center">
            <FaLocationDot className="text-white-400 font-montserrat text-base leading-normal mr-2 size-5" />
            West Park, Building E, Office 19 <br />
            6th of October City, Giza, Egypt
          </h3>
          {/* <Contact /> */}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-20 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        {/* <p className="font-montserrat cursor-pointer">Terms & Conditions</p> */}
      </div>
    </footer>
  );
};

export default Footer;
