import { useState } from "react";

function App() {
  const [annual, setAnnual] = useState(true);

  const toggleBilling = () => {
    setAnnual((prev) => !prev);
  };

  const toggleOptions = [
    {
      type: "Basic",
      price: annual ? 199.99 : 19.99, // Update price for annual billing
      storage: "500 GB Storage",
      allowed: "2 Users Allowed",
      send: "Send up to 3 GB",
    },
    {
      type: "Professional",
      price: annual ? 249.99 : 24.99, // Update price for annual billing
      storage: "1 TB Storage",
      allowed: "5 Users Allowed",
      send: "Send up to 10 GB",
    },
    {
      type: "Master",
      price: annual ? 399.99 : 39.99, // Update price for annual billing
      storage: "2 TB Storage",
      allowed: "10 Users Allowed",
      send: "Send up to 20 GB",
    },
  ];

  return (
    <main className="bg-Very-Light-Grayish-Blue montserrat-700 lg:min-h-screen bg-bottom-background bg-[length:280px_100px] lg:bg-[length:450px_300px] bg-no-repeat bg-left-bottom">
      <div className="bg-top-background bg-no-repeat bg-[length:280px_700px] lg:bg-[length:550px_550px] bg-right-top py-16 px-4">
        <div className="lg:flex flex-col justify-center items-center gap-10">
          <div className="flex justify-between items-center flex-col gap-8">
            <h1 className="text-xl md:text-2xl lg:text-2xl text-Grayish-Blue font-bold">
              Our Pricing
            </h1>
            <div className="flex gap-4 ">
              <span
                className={`text-[0.75rem] lg:text-base ${
                  annual ? "font-bold text-Grayish-Blue" : "text-Dark-Grayish-Blue"
                }`}
              >
                Annually
              </span>
              <span
                onClick={toggleBilling}
                className="hover:cursor-pointer hover:opacity-70 flex justify-start cursor-pointer items-center h-6 bg-gradient-to-tr from-[#a3a8f0] to-[#696fdd] relative w-[44px] rounded-full select-none"
              >
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  checked={annual}
                  onChange={toggleBilling}
                  className={`absolute block w-5 h-5 ml-[4px] rounded-full bg-white border appearance-none cursor-pointer transition-transform duration-300 ease-in-out ${
                    annual ? "transform translate-x-4" : "transform translate-x-0"
                  }`}
                />
                <label
                  htmlFor="toggle"
                  className="block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                />
              </span>
              <span
                className={`text-[0.75rem] lg:text-base ${
                  annual ? "font-bold text-Dark-Grayish-Blue" : "text-Grayish-Blue"
                }`}
              >
                Monthly
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8 gap-6 lg:gap-0">
            {toggleOptions.map((option, index) => (
              <div
                key={index}
                className={`lg:w-[20rem] 
                ${option.type === "Professional" ? "lg:-my-6 rounded-lg" : "rounded-lg"} 
                ${index === 0 ? "lg:rounded-l-lg lg:rounded-r-none" : ""} 
                ${index === 2 ? "lg:rounded-r-lg lg:rounded-l-none" : ""} 
                ${
                  option.type === "Professional"
                    ? "bg-gradient-to-tr from-[#a3a8f0] to-[#696fdd]"
                    : "bg-white"
                } py-8 shadow-lg px-6 text-center`}
              >
                <h2
                  className={`text-lg font-semibold ${
                    option.type === "Professional"
                      ? "text-white"
                      : "text-Grayish-Blue"
                  } `}
                >
                  {option.type}
                </h2>
                <p
                  className={`text-5xl font-bold flex items-center justify-center gap-2 ${
                    option.type === "Professional"
                      ? "text-white"
                      : "text-Dark-Grayish-Blue"
                  } my-4`}
                >
                  <span className="text-2xl">$</span>{option.price.toFixed(2)}
                </p>
                <ul className="text-Grayish-Blue-Text">
                  <li
                    className={`border-y border-y-Light-Grayish-Blue py-2 ${
                      option.type === "Professional"
                        ? "text-white"
                        : "text-Grayish-Blue"
                    }`}
                  >
                    {option.storage}
                  </li>
                  <li
                    className={`border-b border-b-Light-Grayish-Blue ${
                      option.type === "Professional"
                        ? "text-white"
                        : "text-Grayish-Blue"
                    } py-2`}
                  >
                    {option.allowed}
                  </li>
                  <li
                    className={`border-b border-b-Light-Grayish-Blue ${
                      option.type === "Professional"
                        ? "text-white"
                        : "text-Grayish-Blue"
                    } py-2`}
                  >
                    {option.send}
                  </li>
                </ul>
                <button
                  className={`uppercase text-sm ${
                    option.type === "Professional"
                      ? "bg-white mt-12 hover:bg-gradient-to-tr from-[#a3a8f0] to-[#696fdd] hover:border hover:border-white"
                      : "bg-gradient-to-tr from-[#a3a8f0] to-[#696fdd] mt-6 hover:bg-none hover:border hover:border-[#696fdd]"
                  } ${
                    option.type === "Professional" ? "text-[#696fdd] hover:text-white" : "text-white hover:text-[#696fdd]"
                  } w-full py-2 px-4 rounded-md`}
                >
                  Learn more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
