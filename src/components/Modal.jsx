import { useState } from "react";

import { rewards } from "../constants/index";

import iconCloseModal from "../assets/icon-close-modal.svg";

const Modal = ({ show, onClose, toggleSuccess }) => {
  const [modalSelected, setModalSelected] = useState("no-reward");

  const toggleModalSuccess = () => {
    toggleSuccess();
    onClose();
  };

  return (
    <div className={`modal ${show ? "visible" : ""}`}>
      <div className="modal-content relative">
        <h2 className="font-commissioner text-neutral-black text-[18px] font-bold mb-[10px] md:text-[24px]">
          Back this project
        </h2>
        <p className="font-commissioner text-neutral-darkGray text-[14px] md:text-base">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <button onClick={onClose} className="absolute top-[12px] right-[12px]">
          <img src={iconCloseModal} alt="close modal" />
        </button>

        {/* Cards */}
        <div className="mt-[25px]">
          {/* Card */}
          <div
            className={`w-[100%] h-auto py-[10px] my-[10px] px-[20px] flex flex-col justify-between cursor-pointer font-commissioner border-[1px] border-[#e3e3e3] rounded-md ${
              modalSelected === "no-reward"
                ? "border-primary-moderateCyan"
                : "border-[#e3e3e3]"
            } md:h-[154px]`}
            onClick={() => setModalSelected("no-reward")}
          >
            <div className="font-commissioner">
              <div className="flex flex-row justify-start gap-[10px] mb-[10px]">
                <input
                  type="radio"
                  className="w-[22px]"
                  name="reward"
                  onChange={() => {}}
                  checked={modalSelected === "no-reward"}
                />
                <h5 className="font-bold text-[14px] text-neutral-black md:text-[18px]">
                  Pledge with no reward
                </h5>
              </div>
              <p className="text-[14px] text-neutral-darkGray ml-[32px] md:text-[16px]">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </div>
          </div>

          {rewards.map(({ title, desc, stock, price, pledge }) => (
            <div
              key={title}
              className={`w-[100%] ${
                modalSelected === title
                  ? "h-auto md:h-[200px]"
                  : "h-auto md:h-[154px]"
              } py-[10px] my-[10px] px-[20px] flex flex-col justify-between ${
                stock ? "cursor-pointer" : "cursor-not-allowed"
              } font-commissioner border-[1px] border-[#e3e3e3] rounded-md ${
                stock ? "" : "opacity-80"
              } ${
                modalSelected === title
                  ? "border-primary-moderateCyan"
                  : "border-[#e3e3e3]"
              }`}
              onClick={() => stock && setModalSelected(title)}
            >
              <div className="font-commissioner">
                <div className="flex flex-row justify-start gap-[10px] mb-[10px]">
                  <input
                    type="radio"
                    className="w-[22px]"
                    name="reward"
                    disabled={!stock}
                    onChange={() => {}}
                    checked={modalSelected === title}
                  />
                  <div className="flex flex-col gap-1 items-start md:flex-row md:items-center md:gap-3">
                    <h5 className="font-bold text-[14px] text-neutral-black md:text-[18px]">
                      {title}
                    </h5>
                    <p
                      className={`text-[14px] text-primary-moderateCyan ${
                        modalSelected === title ? "font-bold" : "font-normal"
                      } md:text-base`}
                    >
                      {pledge}
                    </p>
                  </div>
                </div>
                <p className="text-[14px] text-neutral-darkGray ml-[32px] md:text-[16px]">
                  {desc}
                </p>
              </div>

              {/* Showed if card selected */}
              {modalSelected === title ? (
                <>
                  <hr className="my-3 md:my-0" />
                  <div className="flex flex-col justify-between gap-3 items-center font-commissioner md:flex-row md:gap-0">
                    <p className="text-base text-neutral-darkGray">
                      Enter your pledge
                    </p>

                    <div className="flex justify-between gap-3">
                      <div className="relative">
                        <span className="absolute left-[20px] top-[9px] text-neutral-darkGray">
                          $
                        </span>
                        <input
                          type="number"
                          min={`${price}`}
                          defaultValue={price}
                          className="p-2 pl-5 pb-3 text-center w-[95px] h-[45px] rounded-full border-neutral-darkGray border-[1.5px] text-neutral-black font-bold"
                        />
                      </div>
                      <button
                        className="bg-primary-moderateCyan text-[#fff] font-bold rounded-full p-2 w-[110px] h-[45px] flex align-middle items-center justify-center transition-all duration-500 hover:bg-primary-darkCyan md:w-[95px]"
                        onClick={toggleModalSuccess}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
