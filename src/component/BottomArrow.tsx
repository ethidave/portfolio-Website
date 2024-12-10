import React from "react";
import { useTheme } from "../Pages/theme";

interface Props {
  className?: string;
}

const BottomArrow = ({ className = "" }: Props) => {
  const { theme } = useTheme();

  return (
    <>
      {theme === "dark" && (
        <svg
          className={`text-gray-700 ${className}`}
          viewBox="0 0 46 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9224 21.2014C25.1291 21.2014 24.618 24.7796 24.618 27.3354C24.618 21.5421 21.5509 21.2014 17.9727 21.2014C24.618 21.2014 24.618 17.2824 24.618 14.8969C24.618 20.3494 27.8554 21.2014 30.9224 21.2014Z"
            fill="currentColor"
            stroke="currentColor"
          />
          <rect
            y="21.6981"
            width="0.999999"
            height="18"
            transform="rotate(-90 0 21.6981)"
            fill="currentColor"
          />
          <path
            d="M9.93715 16.8555C10.9514 13.0701 13.2829 9.77074 16.5123 7.55063C19.7417 5.33052 23.6571 4.33531 27.5547 4.74394C31.4522 5.15258 35.0762 6.93825 37.7749 9.77989C40.4736 12.6215 42.07 16.3327 42.2771 20.2461C42.4842 24.1596 41.2884 28.0185 38.9047 31.1291C36.5211 34.2398 33.1059 36.398 29.2732 37.2157C25.4406 38.0335 21.4419 37.4571 17.9962 35.5903C14.5505 33.7234 11.8839 30.6886 10.4757 27.0314"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
      {theme === "light" && (
        <svg
          className={`absolute bottom-4 h-12 w-12 right-7 text-opacity-5     ${className}`}
          width="46"
          height="42"
          viewBox="0 0 46 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.9224 21.2009C25.1291 21.2009 24.618 24.7791 24.618 27.335C24.618 21.5417 21.5509 21.2009 17.9727 21.2009C24.618 21.2009 24.618 17.2819 24.618 14.8964C24.618 20.3489 27.8554 21.2009 30.9224 21.2009Z"
            className={`${
              theme === "light"
                ? "fill-blue-200 stroke-blue-200   group-hover:fill-blue-600 group-hover:stroke-blue-600 "
                : ""
            } `}
            stroke="currentColor"
          />
          <rect
            y="21.6973"
            width="0.999999"
            height="18"
            transform="rotate(-90 0 21.6973)"
            className={`${
              theme === "light"
                ? "fill-blue-200 stroke-blue-200    group-hover:fill-blue-600 group-hover:stroke-blue-600 "
                : ""
            } `}
          />
          <path
            d="M9.93715 16.855C10.9514 13.0696 13.2829 9.77025 16.5123 7.55014C19.7417 5.33003 23.6571 4.33482 27.5547 4.74346C31.4522 5.15209 35.0762 6.93776 37.7749 9.7794C40.4736 12.621 42.07 16.3322 42.2771 20.2456C42.4842 24.1591 41.2884 28.018 38.9047 31.1287C36.5211 34.2393 33.1059 36.3975 29.2732 37.2152C25.4406 38.033 21.4419 37.4566 17.9962 35.5898C14.5505 33.7229 11.8839 30.6881 10.4757 27.0309"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </>
  );
};

export default BottomArrow;
