import { about } from "../assets/images";

const About = () => {
  return (
    <section
      id="about"
      className="flex justify-between items-center max-lg:flex-col-reverse gap-10 w-full max-container "
    >
      <div className={`flex-1 flex justify-center items-center w-full `}>
        <img
          src={about}
          alt="about"
          width={550}
          height={600}
          className="object-contain rounded-lg"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-3xl lg:text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-3xl lg:text-4xl font-palanquin font-bold">
            Global Trade
          </span>
          <span className="text-purple-900"> Experts</span>
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-justify text-left">
          At <span className="text-purple-900">iktefa</span>, we specialize in
          turning opportunities into success stories. Whether you’re looking for
          premium Egyptian food products, smart export solutions, or tailored
          consultancy for food manufacturers, we’ve got you covered. Leveraging
          over 20 years of industry expertise, we ensure our clients get
          top-quality products, efficient services, and unmatched customer
          satisfaction. With responsible sourcing and a commitment to
          sustainability at our core,{" "}
          <span className="text-purple-900">iktefa </span> is here to help you
          grow, save, and thrive in the global marketplace.
        </p>
      </div>
    </section>
  );
};

export default About;
