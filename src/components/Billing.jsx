

// eslint-disable-next-line react/prop-types
const Billing = ({yearly, toggle}) => {
    return (
      <div className="flex flex-col gap-6 justify-center items-center">
          <div className="manrope-600 flex gap-2">
            <span
              className={`text-[0.75rem] ${
                !yearly
                  ? "font-bold text-Dark-Desaturated-Blue-Text-CTA-Background"
                  : "text-Grayish-Blue-Text"
              }`}
            >
              Monthly Billing
            </span>
            <span
              onClick={toggle}
              className={`flex justify-start cursor-pointer items-center h-5 ${yearly ? "bg-Strong-Cyan-Slider-Background" : "bg-Light-Grayish-Blue-Toggle-Background"}  relative w-10 rounded-full select-none`}
            >
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                checked={yearly}
                onChange={toggle}
                className={`absolute block w-4 h-4 ml-1 rounded-full bg-white bg- border appearance-none cursor-pointer transition-transform duration-300 ease-in-out ${
                  yearly ? "transform translate-x-4" : "transform translate-x-0"
                }`}
              />
              <label
                htmlFor="toggle"
                className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              />
            </span>
            <span
              className={`text-[0.75rem] ${
                yearly
                  ? "font-bold text-Dark-Desaturated-Blue-Text-CTA-Background"
                  : "text-Grayish-Blue-Text"
              }`}
            >
              Yearly Billing
            </span>
            <span className="manrope-800 text-xs text-Light-Red-Discount-Text px-[6px] rounded-full bg-Light-Grayish-Red-Discount-Background flex justify-center items-center">
              -25%<span className="hidden lg:block manrope-800 text-xs text-Light-Red-Discount-Text ml-[2px]"> discount</span>
            </span>
          </div>
        </div>
    )
  }
  
  export default Billing