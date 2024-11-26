import { hero } from "../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-36 xl:pt-0">
        <h1 className="mt-2 lg:mt-7 font-palanquin text-3xl lg:text-5xl font-bold">
          <span className=" xl:whitespace-nowrap xl:pr-10 max-sm::p-0">
            Welcome to <span className="text-purple-900">iktefa</span>
          </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-sm lg:text-lg leading-6 lg:leading-8 mt-3 lg:mt-6 lg:mb-14 max-w-sm ">
          Your Trusted Partner for Food Export and Manufacturing Solutions
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center xl:min-h-screen bg-center px-3 ">
        <img
          src={hero}
          alt="product collection"
          height={500}
          width={750}
          className="object-contain xl:mt-20"
        />
      </div>
    </section>
  );
};

export default Hero;
