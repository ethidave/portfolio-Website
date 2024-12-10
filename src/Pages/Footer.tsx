import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="grid grid-cols-1 text-center py-20 p-5">
        <h1 className="font-semibold mt-20 text-white text-2xl ">
          Dawt<span className="text-blue-600">.T</span>
        </h1>
        <div className="flex xl:gap-10 gap-5 md:gap-10  mt-9 text-nav_text_color uppercase  justify-center">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>about</Link>
          <Link to={"/works"}>Works</Link>
          <Link to={"/contact"}>contact</Link>
        </div>
        <h1 className="text-white mt-5 ">
          © All rights reserved by{" "}
          <span className="text-blue-600">DawitT.</span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
