import { services } from "../assets/constants";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <section id="services" className="max-container max-sm:mt-12">
      <div className="flex flex-1 flex-col mb-10">
        <h2 className="font-palanquin text-3xl lg:text-4xl  capitalize font-bold lg:max-w-lg">
          <span className="xl:whitespace-nowrap relative z-10 pr-3">
            Our
          </span>
          <span className="text-purple-900">Services </span>
        </h2>
      </div>
      <div className="max-container flex justify-center flex-wrap gap-9">
        {services?.map((service) => (
          <ServiceCard key={service.label} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
