import  { ReactNode } from "react";
 
import Toparrow from "../assets/Top.png";
import BottomArrow from "./BottomArrow";
import { useTheme } from "../Pages/theme";

interface Props {
  children: ReactNode;
  isTopArrowVisible?: boolean;
  isBottomArrowVisible?: boolean;
  className?: string;
  isTopArrowVisibleRight?: boolean;
  isBottomArrow?: boolean;
}

const Card = ({
  className = "",
  isTopArrowVisibleRight = false,
  children,
  isTopArrowVisible = false,
  isBottomArrowVisible = true,
  
}: Props) => {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={`group p-7 relative    ${className}  ${
          theme === "dark"
            ? "bg-gradient-to-tl to-[#201f1f] from-[#121212] shadow-3xl rounded-3xl "
            : "bg-gradient-to-tl to-[#ffffff] from-[#ffffff] shadow-3xl rounded-3xl "
        }`}
      >
        {children}
        {isBottomArrowVisible && (
          <BottomArrow
            className={` absolute bottom-4 h-12 w-12 right-7 text-opacity-10 text-white  ${
              theme === "light"
                ? "group-hover:text-gray-300 "
                : "group-hover:text-white "
            }`}
          />
        )}

        {isTopArrowVisible && (
          <img src={Toparrow} className="absolute top-0 h-[80px] w-8 left-10" />
        )}
        {isTopArrowVisibleRight && (
          <img
            src={Toparrow}
            className="absolute top-0 h-[80px] w-8 right-10"
          />
        )}
      </div>
    </>
  );
};

export default Card;
