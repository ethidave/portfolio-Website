import Card from "../component/Card";
import { useTheme } from "../Pages/theme";

import { HiPhone, HiLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaTelegram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Contact = () => {
  const { theme } = useTheme();

  return (
    <>
      <div className="animate-fade-in-down">
        <div className="grid xl:grid-cols-7 grid-cols-1 xl:gap-14 p-5 md:grid-cols-2  xl:space-x-14  ">
          <div className="xl:col-span-2  ">
            <div className="p-5 md:p-0 mt-10 ">
              <h1
                className={`${
                  theme === "dark" ? "text-blue-600" : "text-yellow-400"
                }`}
              >
                Contact Info
              </h1>
              <div></div>
              <div className=" gap-5 flex   ">
                <Card
                  isBottomArrowVisible={false}
                  className="mt-10 h-[50px] w-[60px] flex items-center justify-center rounded-md "
                >
                  <HiOutlineMail
                    size={30}
                    className={`flex-shrink-0 ${
                      theme === "light" ? "text-blue-500" : "text-[#BDBEBE]"
                    }`}
                  />
                </Card>

                <div className="grid grid-cols-1 mt-7">
                  <h1 className="text-gray-500 text-md uppercase">mail us</h1>
                  <h1 className="text-white text-sm n">seedave95@gmail.com</h1>
                  <h1 className="text-white text-sm  ">
                    dawitteshome641@gmail.com
                  </h1>
                </div>
              </div>
              <div className="flex gap-5 mt-8">
                <Card
                  isBottomArrowVisible={false}
                  className="mt-10 h-[50px] w-[60px] flex items-center justify-center rounded-md"
                >
                  <HiPhone
                    size={30}
                    className={`flex-shrink-0 ${
                      theme === "light" ? "text-blue-500" : "text-[#BDBEBE]"
                    }`}
                  />
                </Card>
                <div className="grid grid-cols-1 mt-7">
                  <h1 className="text-gray-500 text-md uppercase">
                    contact us
                  </h1>
                  <h1 className="text-white text-sm uppercase">
                    +251-09-91-14-00-45
                  </h1>
                  <h1 className="text-white text-sm uppercase">
                    +251-09-91-14-00-45
                  </h1>
                </div>
              </div>
              <div className="flex gap-5 mt-8">
                <Card
                  isBottomArrowVisible={false}
                  className="mt-10 h-[50px] w-[60px] flex items-center justify-center rounded-md"
                >
                  <HiLocationMarker
                    size={35}
                    className={`flex-shrink-0 ${
                      theme === "light" ? "text-blue-500" : "text-[#BDBEBE]"
                    }`}
                  />
                </Card>
                <div className="grid grid-cols-1 mt-7">
                  <h1 className="text-gray-500 text-md uppercase">location</h1>
                  <h1 className="text-white text-sm">
                    Piyasa Sebara Babur, Addis Ababa Ethiopia
                  </h1>
                </div>
              </div>
              <div className="mt-20">
                <h1 className="text-white uppercase">Social Info</h1>
                <div className="flex gap-5 mt-5 ">
                  <Card
                    isBottomArrowVisible={false}
                    className={`rounded-full justify-center items-center hover:bg-gradient-to-tl   hover:from-white hover:to-white ${
                      theme === "light" ? "text-blue-600" : "text-[#BDBEBE]"
                    }`}
                  >
                    <a href="https://wa.me/+251991140045">
                      <FaWhatsapp
                        size={40}
                        className=" group-hover:text-black  "
                      />
                    </a>
                  </Card>
                  <Card
                    isBottomArrowVisible={false}
                    className={`rounded-full justify-center items-center hover:bg-gradient-to-tl hover:from-white hover:to-white ${
                      theme === "light" ? "text-blue-600" : "text-[#BDBEBE]"
                    }`}
                  >
                    <a href="https://github.com/ethidave/">
                      <FaGithub size={40} className=" group-hover:text-black" />
                    </a>
                  </Card>
                  <Card
                    isBottomArrowVisible={false}
                    className={`rounded-full justify-center items-center hover:bg-gradient-to-tl hover:from-white hover:to-white ${
                      theme === "light" ? "text-blue-600" : "text-[#BDBEBE]"
                    }`}
                  >
                    <a href="https://t.me/dave_t16">
                      <FaTelegram
                        size={40}
                        className=" group-hover:text-black"
                      />
                    </a>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:col-span-5  ">
            <Card
              isBottomArrowVisible={false}
              isTopArrowVisibleRight={true}
              className="mt-14 "
            >
              <h1 className="text-white text-4xl font-semibold p-5 text-center xl:text-left">
                Let's Work <span className="text-blue-800">together</span>
              </h1>
              <form
                action="https://formsubmit.co/seedave95@gmail.com"
                method="POST"
                className={`space-y-4  `}
              >
                <input
                  type="text"
                  name="name"
                  className={`${
                    theme === "light"
                      ? "bg-gradient-to-tl to-[#e3e3e3] from-[#ffffff] shadow-2xl"
                      : "bg-gradient-to-tl to-[#323232] from-[#242424]"
                  }  rounded-lg placeholder-gray-500 w-full h-[50px] p-5`}
                  placeholder="Name*"
                />
                <input
                  type="email"
                  name="email"
                  className={`${
                    theme === "light"
                      ? "bg-gradient-to-tl to-[#e3e3e3] from-[#ffffff] shadow-2xl"
                      : "bg-gradient-to-tl to-[#323232] from-[#242424]"
                  }  rounded-lg placeholder-gray-500 w-full h-[50px] p-5`}
                  placeholder="Your Email*"
                />
                <input
                  type="text"
                  name="Subject"
                  className={`${
                    theme === "light"
                      ? "bg-gradient-to-tl to-[#e3e3e3] from-[#ffffff] shadow-2xl"
                      : "bg-gradient-to-tl to-[#323232] from-[#242424]"
                  }  rounded-lg placeholder-gray-500 w-full h-[50px] p-5`}
                  placeholder="Your Subject*"
                />
                <textarea
                  name="message"
                  className={`${
                    theme === "light"
                      ? "bg-gradient-to-tl to-[#e3e3e3] from-[#ffffff] shadow-2xl"
                      : "bg-gradient-to-tl to-[#323232] from-[#242424]"
                  }  rounded-lg placeholder-gray-500 w-full h-[150px] p-5`}
                  placeholder="Your Message*"
                />
                <input type="hidden" name="_captcha" value="false"></input>
                <input
                  type="hidden"
                  name="_subject"
                  value="New submission!"
                ></input>
                <input type="hidden" name="_template" value="table"></input>
                <input
                  type="hidden"
                  name="_next"
                  value="http://localhost:5173/contact"
                ></input>
                <button
                  type="submit"
                  className="w-full h-[50px] text-white bg-gradient-to-tl to-[#323232] from-[#242424] rounded-lg"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
