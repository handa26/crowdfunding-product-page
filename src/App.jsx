import { useState } from "react";

import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Modal from "./components/Modal";
import ModalSuccess from "./components/ModalSuccess";
import MobileNav from "./components/MobileNav";

import logoMasterCraft from "./assets/logo-mastercraft.svg";
import iconBookmark from "./assets/icon-bookmark.svg";

import { rewards } from "./constants";

function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalSuccessVisible, setModalSuccessVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileNavbar = () => {
    setMobileMenuVisible((prevState) => !prevState);
  };

  const toggleModal = () => {
    setModalVisible((prevState) => !prevState);
  };

  const toggleModalSuccess = () => {
    setModalSuccessVisible((prevState) => !prevState);
  };

  return (
    <>
      <Modal
        show={modalVisible}
        onClose={toggleModal}
        toggleSuccess={toggleModalSuccess}
      />
      <ModalSuccess show={modalSuccessVisible} onClose={toggleModalSuccess} />
      <MobileNav mobileMenuVisible={mobileMenuVisible} />

      {/* Hero */}
      <div className="bg-image-hero-mobile bg-cover bg-center h-[500px] md:bg-image-hero-desktop">
        <Navbar
          handleClick={toggleMobileNavbar}
          mobileMenuVisible={mobileMenuVisible}
        />
      </div>

      <main className="container px-[15px] mx-auto bg-[#fff] w-[326px] h-full relative top-[-100px] rounded-lg shadow-md pb-[30px] md:px-[50px] md:w-[1080px]">
        <img
          src={logoMasterCraft}
          alt="mastercraft logo"
          className="absolute top-[-30px] right-[43%] md:right-[48%]"
        />

        <div className="text-center py-[45px] font-commissioner">
          <h1 className="text-neutral-black text-[32px] font-bold">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className="text-base text-[18px] text-neutral-darkGray">
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-row justify-center font-commissioner gap-3 md:justify-between md:gap-0">
          <button className="bg-primary-moderateCyan text-[#fff] font-bold rounded-full p-2 w-[185px] transition-all duration-500 hover:bg-primary-darkCyan">
            Back this project
          </button>

          <div className="flex flex-row gap-3 items-center">
            <button className="">
              <img src={iconBookmark} className="bg-[#fff]" alt="bookmark icon" />
            </button>
            <p className="text-neutral-darkGray font-bold hidden md:block">
              Bookmark
            </p>
          </div>
        </div>

        {/* Counter */}
        <div className="mt-[100px]">
          <div className="flex flex-col justify-center items-center text-center mb-[30px] font-commissioner md:flex-row md:justify-start md:text-left">
            <div className="pr-0 pb-[15px] md:pb-0 md:pr-[100px]">
              <h3 className="text-[34px] font-bold text-neutral-black">
                $89,914
              </h3>
              <p className="text-[14px] text-neutral-darkGray md:text-base">
                of $100,000 backed
              </p>
            </div>
            <div className="border-0 border-t-[1.5px] border-b-[1.5px] px-0 py-[15px] md:py-0 md:border-l-neutral-darkGray md:border-[1.5px] md:border-t-0 md:border-b-0 md:border-r-neutral-darkGray md:px-[100px]">
              <h3 className="text-[34px] font-bold text-neutral-black">
                5,007
              </h3>
              <p className="text-[14px] text-neutral-darkGray md:text-base">
                total backers
              </p>
            </div>
            <div className="pl-0 pt-[15px] md:pt-0 md:pl-[100px]">
              <h3 className="text-[34px] font-bold text-neutral-black">56</h3>
              <p className="text-[14px] text-neutral-darkGray md:text-basey">
                days left
              </p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="relative h-[12px] w-full bg-[#e0e0e0] rounded-full">
            <div className="absolute top-0 left-0 h-full bg-primary-moderateCyan animate-progress rounded-full"></div>
          </div>
        </div>

        {/* About */}
        <div className="mt-[126px] font-commissioner">
          <h4 className="text-[20px] text-neutral-black font-bold mb-[20px] md:text-[24px] md:mb-[30px]">
            About this project
          </h4>
          <p className="text-[14px] text-neutral-darkGray mb-[10px] md:text-base md:mb-[20px]">
            The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
            platform that elevates your screen to a more comfortable viewing
            height. Placing your monitor at eye level has the potential to
            improve your posture and make you more comfortable while at work,
            helping you stay focused on the task at hand.
          </p>
          <p className="text-[14px] text-neutral-darkGray md:text-base">
            Featuring artisan craftsmanship, the simplicity of design creates
            extra desk space below your computer to allow notepads, pens, and
            USB sticks to be stored under the stand.
          </p>
        </div>

        {/* Modals */}
        <div className="my-[25px]">
          {rewards.map((reward) => (
            <Card key={reward.title} {...reward} toggleModal={toggleModal} />
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
