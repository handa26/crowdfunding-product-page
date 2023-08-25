const Card = ({ title, pledge, desc, left, stock, toggleModal }) => {
  return (
    <div className="w-[100%] h-auto py-[20px] my-[10px] px-[30px] flex flex-col justify-around font-commissioner border-[1px] border-[#e3e3e3] rounded-md md:h-[246px]">
      <div className="flex flex-col justify-between md:flex-row">
        <h5 className="font-bold text-[16px] md:text-[20px]">{title}</h5>
        <p className="text-primary-moderateCyan text-[14px] md:text-[18px]">{pledge}</p>
      </div>
      <p className="text-neutral-darkGray text-[14px] my-[15px] md:text-[18px] md:my-[20px]">{desc}</p>
      <div className="flex flex-col justify-between items-start gap-3 md:flex-row md:items-center md:gap-0">
        <p className="font-bold text-[24px] flex items-center">
          {left}{" "}
          <span className="text-[16px] text-neutral-darkGray font-normal ml-[10px]">
            left
          </span>
        </p>
        {stock ? (
          <button onClick={toggleModal} className="bg-primary-moderateCyan text-[#fff] font-bold rounded-full py-[12px] w-[185px] transition-all duration-500 hover:bg-primary-darkCyan">
            Select Reward
          </button>
        ) : (
          <button className="bg-neutral-darkGray text-[#fff] font-bold rounded-full py-[12px] w-[185px] opacity-50 cursor-not-allowed" disabled>
            Out of stock
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
