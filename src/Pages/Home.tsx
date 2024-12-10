import Card from "../component/Card";
import profile from "../assets/profile.png";
import sign from "../assets/sign.png";
import work from "../assets/works.png";
import gfont from "../assets/gfonts.png";

import { FaAndroid, FaCode, FaTelegramPlane } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import Marquee from "react-fast-marquee";
import { useTheme } from "./theme";
import { FaWhatsapp } from "react-icons/fa";
const Home = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="animate-fade-in-down">
        <div className="grid xl:grid-cols-2  grid-cols-1 mt-5   gap-4 p-5">
          <Card className=" ">
            <div className="xl:flex md:flex p-4  ">
              <div className="justify-center items-center flex ">
                <img
                  src={profile}
                  className=" xl:h-[190px] w-[230px]     rounded-tl-3xl rounded-br-3xl"
                />
              </div>

              <div className="xl:p-2 xl:ml-5 md:mt-3 md:ml-9    ml-2 mt-8 xl:mt-3 ">
                <p className="text-gray-500 text-xl xl:text-sm ">
                  A Web Developer
                </p>
                <h1 className="text-white font-medium text-4xl ">
                  Dawit
                  <span className="block xl:block xl:ml-0 sm:block md:inline md:ml-2 ">
                    Teshome.
                  </span>
                </h1>

                <p className="text-gray-500 ml-1 mt-3 text-nowrap text-sm xl:text-sm">
                  i am Web Developer based{" "}
                  <span className="block xl:block md:inline">in Ethiopia.</span>
                </p>
              </div>
            </div>
          </Card>

          <div className=" ">
            <Card
              className="h-14 text-white items-center py-4"
              isBottomArrowVisible={false}
            >
              <Marquee speed={100}>
                <h1 className="mr-2 text-lg font-semibold">
                  • Am{" "}
                  <span className="text-blue-500">Web & App Developer</span>{" "}
                </h1>
                <h1 className="mr-2 text-lg font-semibold">
                  • Am{" "}
                  <span className="text-blue-500">Web & App Developer</span>{" "}
                </h1>
                <h1 className="mr-2 text-lg font-semibold">
                  • Am{" "}
                  <span className="text-blue-500">Web & App Developer</span>{" "}
                </h1>
              </Marquee>
            </Card>
            <div className="grid xl:grid-cols-2 md:grid-cols-2 gap-2 mt-2">
              <Card className="">
                <div className="items-center justify-center flex py-5">
                  <img src={sign} className="h-20 w-32" />
                </div>
                <div className="mt-7">
                  <p className="uppercase text-gray-500">more about me </p>
                  <h1 className="text-white">Credentials</h1>
                </div>
              </Card>
              <Card className="">
                <div className="flex justify-center">
                  <img src={work} className="" />
                </div>

                <div className="mt-7 ">
                  <p className="uppercase text-gray-500">showcase </p>
                  <h1 className="text-white">Projects</h1>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid  xl:grid-cols-12 md:grid-cols-2 p-4 grid-cols-1 gap-2">
          <Card className="xl:col-span-3">
            <div className="justify-center flex">
              <img src={gfont} className=" mt-5 " />
            </div>

            <div className="xl:mt-10">
              <p className="text-gray-500 text-md uppercase font-semibold">
                blog
              </p>
              <h1 className="text-white ">GFonts</h1>
            </div>
          </Card>
          <Card className="xl:col-span-6  ">
            <div className="flex xl:gap-12 gap-7 p-5 justify-center mt-3">
              <FaAndroid size={50}></FaAndroid>
              <FaCode size={50}></FaCode>
              <FaReact size={50}></FaReact>
              <MdDesignServices size={50}></MdDesignServices>
            </div>
            <div className="xl:mt-20 sm:mt-20 mt-10">
              <p className="text-gray-500 uppercase text-md">specialization</p>
              <h1 className="text-white text-xl">Services Offering</h1>
            </div>
          </Card>

          <Card className=" xl:col-span-3 md:col-span-2  ">
            <Card
              isBottomArrowVisible={false}
              className={`${
                theme === "light"
                  ? "bg-gradient-to-tl to-[#f1f0f0b8] from-[#f1f0f027] shadow-3xl rounded-3xl"
                  : "bg-gradient-to-tl  to-[#252424] from-[#181717] shadow-2xl rounded-3xl"
              }`}
            >
              <div className="flex gap-5 items-center justify-center ">
                <div
                  className={`rounded-full  ${
                    theme === "light"
                      ? "bg-gradient-to-tl to-[#ffffff] from-[#ffffff] shadow-3xl rounded-3xl"
                      : "bg-gradient-to-tl   from-[#252424] to-[#323232] shadow-3xl  hover:bg-gradient-to-tl hover:to-[#ffffff] hover:from-[#ffffff] "
                  } h-16 w-16 flex items-center justify-center  hover:bg-black`}
                >
                  <a href="https://t.me/dave_t16">
                    <FaTelegramPlane
                      size={32}
                      className={`hover:text-black ${
                        theme === "light" ? "text-blue-500" : ""
                      }`}
                    ></FaTelegramPlane>
                  </a>
                </div>

                <div
                  className={`rounded-full  ${
                    theme === "light"
                      ? "bg-gradient-to-tl to-[#ffffff] from-[#ffffff] shadow-3xl rounded-3xl"
                      : "bg-gradient-to-tl   from-[#252424] to-[#323232] shadow-3xl  hover:bg-gradient-to-tl hover:to-[#ffffff] hover:from-[#ffffff] "
                  } h-16 w-16 flex items-center justify-center  hover:bg-black`}
                >
                  <a href="https://wa.me/+251991140045">
                    <FaWhatsapp
                      size={45}
                      className={`hover:text-black ${
                        theme === "light" ? "text-blue-500" : ""
                      }`}
                    ></FaWhatsapp>
                  </a>
                </div>
              </div>
            </Card>
            <div className="xl:mt-14 mt-4 ">
              <p className="Uppercase text-gray-500 text-md">stay with me</p>
              <h1 className="text-white font-semibold text-xl">Profiles</h1>
            </div>
          </Card>
        </div>

        <div className="grid xl:grid-cols-2 grid-cols-1  p-3 text-white gap-5">
          <Card isBottomArrowVisible={false} className="">
            <div className="xl:flex gap-4  justify-center space-y-5 xl:space-y-0  ">
              <Card
                className={`h-48 shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-tl to-[#ffffff] from-[#f7f7f7] shadow-3xl rounded-3xl"
                    : "bg-gradient-to-tl  to-[#252424] from-[#181717] shadow-2xl rounded-3xl"
                }`}
                isBottomArrowVisible={false}
              >
                <div className="text-center items-center mt-3">
                  <h1 className="text-4xl font-semibold">07</h1>
                  <p className="uppercase text-gray-500 text-xl mt-4">
                    years <br /> experience
                  </p>
                </div>
              </Card>
              <Card
                className={`h-48 shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-tl to-[#ffffff] from-[#f7f7f7] shadow-3xl rounded-3xl"
                    : "bg-gradient-to-tl  to-[#252424] from-[#181717] shadow-2xl rounded-3xl"
                }`}
                isBottomArrowVisible={false}
              >
                <div className="text-center items-center mt-3">
                  <h1 className="text-4xl font-semibold">+5</h1>
                  <p className="uppercase text-gray-500 text-xl mt-4">
                    Client <br /> worldwide
                  </p>
                </div>
              </Card>
              <Card
                className={`h-48 shadow-2xl ${
                  theme === "light"
                    ? "bg-gradient-to-tl to-[#ffffff] from-[#f7f7f7] shadow-3xl rounded-3xl"
                    : "bg-gradient-to-tl  to-[#252424] from-[#181717] shadow-2xl rounded-3xl"
                }`}
                isBottomArrowVisible={false}
              >
                <div className="text-center items-center mt-3">
                  <h1 className="text-4xl font-semibold">07</h1>
                  <p className="uppercase text-gray-500 text-xl mt-4">
                    years <br /> experience
                  </p>
                </div>
              </Card>
            </div>
          </Card>
          <Card isTopArrowVisible={true}>
            <div className="xl:text-5xl sm:text-7xl text-4xl py-6 mt-8   font-bold">
              <h1 className="">Let's</h1>
              <h1 className="">
                Work <span className="text-blue-500">together.</span>
              </h1>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
