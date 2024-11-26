import Contact from "../components/contact";

const Quote = () => {
  return (
    <section
      id="quote"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container  max-sm:mt-12"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-3xl lg:text-4xl capitalize font-bold lg:max-w-lg">
          <span className="bg-white xl:whitespace-nowrap relative z-10 pr-3">
            Request
          </span>
          <span className="text-purple-900">Quote</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text font-bold">
          Why requesting a quote?
        </p>
        <div className="mt-2">
          <ul className="list-disc ml-7">
            <li className=" info-text ">
              Our team is available to assist you in selecting the best
              products.
            </li>
            <li className=" info-text ">
              Get pricing based on your exact requirements and quantities.
            </li>
            <li className=" info-text ">
              Receive a clear and detailed quote with no hidden fees.
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex-1 flex justify-center items-center w-full `}>
        <Contact />
      </div>
    </section>
  );
};

export default Quote;
