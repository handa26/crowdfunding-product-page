import iconCheck from "../assets/icon-check.svg";

const ModalSuccess = ({ show, onClose }) => {
  return (
    <div className={`modal ${show ? "visible" : ""} px-[10px]`}>
      <div className="modal-content_success flex flex-col justify-center items-center font-commissioner">
        <img src={iconCheck} alt="icon-check" />
        <h2 className="text-neutral-black font-bold text-center text-[18px] mt-[25px] md:text-[28px] md:text-left">
          Thanks for your support!
        </h2>
        <p className="text-neutral-darkGray text-[14px] mt-[12px] text-center md:text-[16px]">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button className="bg-primary-moderateCyan text-[#fff] font-bold rounded-full p-2 w-[95px] h-[45px] flex align-middle items-center mt-[25px] justify-center transition-all duration-500 hover:bg-primary-darkCyan" onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
};

export default ModalSuccess;
