const ProductCard = ({ imgURL, name, special ,width}) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full justify-center text-center">
      <div className="text-center flex justify-center">
        <img src={imgURL} alt={name} className={`${width}`} />
      </div>
      <p className="font-montserrat text-xl leading-normal text-slate-gray">
        Nouriva
      </p>
      <h3 className="mt-2  text-lg lg:text-xl leading-normal font-semibold font-palanquin">
        {name}
      </h3>
    </div>
  );
};

export default ProductCard;
