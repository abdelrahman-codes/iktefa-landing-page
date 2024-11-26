const ServiceCard = ({ icon, label, subtext }) => {
  return (
    <div className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
      {/* Flex container for icon and label */}
      <div className="flex items-center space-x-4">
        {/* Icon */}
        <div className="w-11 h-11 flex justify-center items-center bg-purple-900 rounded-full">
          {icon}
        </div>
        {/* Label */}
        <h3 className="font-palanquin text-xl lg:text-3xl font-bold">
          {label}
        </h3>
      </div>
      {/* Subtext */}
      <p className="mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
