import Card from "../component/Card";
import star from "../assets/star.png";
import star2 from "../assets/star2.png";
import work_1 from "../assets/work_1.jpg";
import work_2 from "../assets/service.png";
import work_3 from "../assets/work_forex.png";
import work_4 from "../assets/logo2.png";
import work_5 from "../assets/billionaire.webp";
import { useTheme } from "./theme";

const Works = () => {
  const { theme } = useTheme();
  return (
    <>
      <div className="animate-fade-in-down">
        <div className="grid xl:grid-cols-9 md:grid-cols-2 grid-cols-1 gap-10 p-5">
          <div className="xl:col-span-3 mt-10">
            <div>
              <Card>
                <img src={work_1} className="rounded-3xl h-64" />
                <div className="mt-5 text-white">
                  <h1 className="uppercase">Web Development</h1>
                  <a
                    href="https://greensoberconsultancy.com/"
                    className="text-blue-600 py-4"
                  >
                    Visit
                  </a>
                </div>
              </Card>
              <Card className="mt-5">
                <img src={work_2} className="rounded-3xl h-[370px] w-96" />
                <div className="mt-5 text-white">
                  <h1 className="uppercase">Shopping Website</h1>
                  <a
                    href="https://captrade.org/"
                    className="text-blue-600 py-4"
                  >
                    Visit
                  </a>
                </div>
              </Card>
            </div>
          </div>

          <div className="xl:col-span-6 mt-10">
            <div className="flex items-center justify-center">
              {theme === "dark" ? (
                <img src={star} className={`xl:h-[50px] h-6 xl:mt-4`} />
              ) : (
                <img src={star2} className={`xl:h-[50px] h-6 xl:mt-4`} />
              )}
              <h1 className="text-white uppercase xl:text-7xl text-4xl font-semibold text-nowrap">
                All Projects
              </h1>
              {theme === "dark" ? (
                <img src={star} className={`xl:h-[50px] h-6 xl:mt-4`} />
              ) : (
                <img src={star2} className={`xl:h-[50px] h-6 xl:mt-4`} />
              )}
            </div>
            <div className="grid xl:grid-cols-2 md:grid-cols-1 gap-7 mt-7">
              <Card>
                <img src={work_3} className="rounded-3xl h-64" />
                <div className="mt-5 text-white">
                  <h1 className="uppercase">Forex Website</h1>
                  <a
                    href="https://olaxxminingfx.net/"
                    className="text-blue-600 py-4"
                  >
                    Visit
                  </a>
                </div>
              </Card>
              <Card>
                <img src={work_4} className="rounded-3xl h-64" />
                <div className="mt-5 text-white">
                  <h1 className="uppercase">Service Provider Website</h1>
                  <a
                    href="https://captrade.org/"
                    className="text-blue-600 py-4"
                  >
                    Visit
                  </a>
                </div>
              </Card>
              <Card>
                <img src={work_5} className="rounded-3xl h-64 w-80" />
                <div className="mt-5 text-white">
                  <h1 className="uppercase">Betting Prediction App</h1>
                  <a
                    href="https://apkpure.com/billionaire-betting-tips/com.mikiapps.billionairebet"
                    className="text-blue-600 py-4"
                  >
                    Visit
                  </a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
