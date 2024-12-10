import Card from "../component/Card";
import profile from "../assets/por_profile.png";
import star from "../assets/star.png";
import star2 from "../assets/star2.png";
import { FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import sign from "../assets/sign.png";
import { useTheme } from "./theme";

const About = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="animate-fade-in-down">
        <div className="grid xl:grid-cols-7 grid-cols-1 p-4 mt-28 xl:space-x-10 ">
          <div className="col-span-2 flex justify-center items-center   ">
            <Card className="   h-[350px] " isBottomArrowVisible={false}>
              <img src={profile} className="rounded-3xl   " />
            </Card>
          </div>
          <div className="col-span-5">
            <div className="flex space-x-1 justify-center items-center mt-4 mr-9 xl:mr-0">
              {theme === "dark" ? (
                <img src={star} className={`xl:h-[50px] h-6 xl:mt-4 `} />
              ) : (
                <img src={star2} className={`xl:h-[50px] h-6 xl:mt-4 `} />
              )}
              <h2
                className={`  font-semibold xl:text-6xl  md:text-2xl  uppercase ${
                  theme === "light" ? "text-blue-500" : "text-white"
                } `}
              >
                self-Summary
              </h2>
              {theme === "dark" ? (
                <img src={star} className={`xl:h-[50px] h-6 xl:mt-4 `} />
              ) : (
                <img src={star2} className={`xl:h-[50px] h-6 xl:mt-4 `} />
              )}
            </div>
            <Card
              isBottomArrowVisible={false}
              isTopArrowVisible={true}
              className="mt-7"
            >
              <div className="mt-20">
                <h1 className="text-white text-3xl font-semibold">
                  {" "}
                  Dawit Teshome
                </h1>
                <h1 className="mt-3 text-white">
                  I am a web and Android developer based in Addis Ababa,
                  Ethiopia, with a passion for creating modern, 
                  <br /> user-focused
                  digital solutions.  With a strong background in web development and mobile
                  app design,
                  <br />  I bring innovative ideas to life, delivering high-quality products tailored to meet the
                  needs of diverse industries and clients.
                </h1>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid gap-6 p-4 grid-cols-1 md:grid-cols-2">
          <Card isBottomArrowVisible={false}>
            <h1 className="text-white uppercase font-semibold">experience</h1>
            <h2 className="text-gray-500 mt-3">2020 - 2024</h2>
            <h1 className="font-semibold text-white mt-5">Backend Developer</h1>
            <h2 className="text-gray-500 mt-1">Django</h2>
            <h1 className="font-semibold mt-5 text-white">Front Developer</h1>
            <h2 className="text-gray-500 mt-1">
              React with Typescript & Tailwind
            </h2>
            <h1 className="font-semibold mt-5 text-white">
              Android App Developer
            </h1>
            <h2 className="text-gray-500 mt-1">React Native</h2>
          </Card>
          <Card isBottomArrowVisible={false}>
            <h1 className="text-white uppercase font-semibold">education</h1>
            <h2 className="text-gray-500 mt-3">2004 - 2024</h2>
            <h1 className="font-semibold text-white mt-5">
              Bachelor Degree In Computer Science
            </h1>
            <h2 className="text-gray-500 mt-1">University of People</h2>
            <h1 className="font-semibold mt-5 text-white">Python Master</h1>
            <h2 className="text-gray-500 mt-1">University of Michigan</h2>
            <h1 className="font-semibold mt-5 text-white">Cyber Security </h1>
            <h2 className="text-gray-500 mt-1">IBM</h2>
          </Card>
        </div>
        <div className="grid xl:grid-cols-12 grid-cols-1 md:grid-cols-2 p-5 xl:gap-5 md:gap-5 space-y-5 md:space-y-0">
          <div className="xl:col-span-3 ">
            <Card>
              <Card isBottomArrowVisible={false} className="">
                <div className="flex gap-3 justify-center items-center ">
                  <div
                    className={`rounded-full  ${
                      theme === "light"
                        ? "bg-gradient-to-tl to-[#ffffff] from-[#f0e9e9] shadow-3xl rounded-3xl"
                        : "bg-gradient-to-tl   from-[#252424] to-[#323232] shadow-3xl  hover:bg-gradient-to-tl hover:to-[#ffffff] hover:from-[#ffffff] "
                    } h-16 w-16 flex items-center justify-center  hover:bg-black`}
                  >
                    <a href="https://t.me/dave_t16">
                      <FaTelegramPlane
                        size={45}
                        className={`hover:text-black ${
                          theme === "light" ? "text-blue-500" : ""
                        }`}
                      ></FaTelegramPlane>
                    </a>
                  </div>

                  <div
                    className={`rounded-full  ${
                      theme === "light"
                        ? "bg-gradient-to-tl to-[#ffffff] from-[#f0e9e9] shadow-3xl rounded-3xl"
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
              <div className="mt-8">
                <h2 className="text-gray-500 text-md">stay with me</h2>
                <h1 className="text-white font-bold text-xl text-md">
                  Profiles
                </h1>
              </div>
            </Card>
          </div>

          <div className="xl:col-span-6 ">
            <Card isTopArrowVisible={true}>
              <div className="xl:text-5xl   py-0 mt-16 xl:mt-16  md:py-5 text-3xl  md:mt-20       font-bold">
                <h1 className="text-white">Let's</h1>
                <h1 className="text-white">
                  Work <span className="text-blue-500">together.</span>
                </h1>
              </div>
            </Card>
          </div>

          <div className="xl:col-span-3 md:col-span-2">
            <Card className="">
              <div className="items-center justify-center flex py-5">
                <img src={sign} className="h-20 w-32" />
              </div>
              <div className="mt-8">
                <p className="uppercase text-gray-500">more about me </p>
                <h1 className="text-white">Credentials</h1>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
