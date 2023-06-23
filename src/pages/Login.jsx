import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between bg-[#F5F5F5] items-center w-full ">
      <div className="flex h-[60px] sm:h-[80px] sm:min-h-screen justify-center items-center w-full sm:w-[65%] bg-black">
        <h1 className="text-white font-bold text-[2rem] md:text-[3rem] lg:text-[4.5rem]">
          Board.
        </h1>
      </div>
      <div className="flex flex-col mt-14 w-full gap-6 justify-center items-center">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex flex-col justify-between items-start px-6 gap-2">
            <h2 className="text-[18px] sm:text-[36px] text-black font-bold sm:leading-[43.88px]">
              Sign In
            </h2>
            <p className="text-[16px] font-lato sm:leading-[19.2px] text-black">
              Sign in to your account
            </p>
          </div>
          <div className="flex justify-center items-center gap-[10px]">
            <button className="text-[12px] text-[#858585] w-[160px] sm:w-[180px] border-[2px] rounded-lg bg-white h-[40px] px-6 border-black">
              Sign in with Google
            </button>
            <button className="text-[12px] text-[#858585] w-[150px] sm:w-[180px] border-[2px] rounded-lg bg-white h-[40px] px-6 border-black">
              Sign in with Apple
            </button>
          </div>
          <div className="flex bg-white rounded-2xl flex-col items-center mx-auto">
            <form className="flex flex-col text-black px-10 py-6 gap-4">
              <div className="flex flex-col justify-between gap-2">
                <h1 className="text-[16px] font-lato leading-[19.2px]">
                  Email Address
                </h1>
                <input
                  className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                  placeholder="Email..."
                />
              </div>
              <div className="flex flex-col justify-between gap-2">
                <h1 className="text-[16px] font-lato leading-[19.2px]">
                  Password
                </h1>
                <input
                  className="bg-[#EAEAEA] w-[280px] sm:w-[325px] h-[40px] px-6 rounded-xl"
                  placeholder="Password..."
                />
              </div>
              <p className="text-[#346BD4] cursor-pointer">Forgot password?</p>
              <button className="bg-black rounded-xl w-[280px] sm:w-[325px] h-[40px] font-bold text-white">
                Sign In
              </button>
            </form>
          </div>
          <p className="text-[#858585] mx-auto">
            Don’t have an account?{" "}
            <span className="text-[#346BD4] cursor-pointer">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
