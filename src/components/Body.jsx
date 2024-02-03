import React from "react";

export default function Body() {
  return (
    <div className="w-full min-h-screen bg-space bg-no-repeat bg-cover md:bg-space-tablet lg:bg-space-desk -z-forBackgorund">
      <div className="text-center font-body items-center flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:basis-1/2 mt-32 lg:mt-80 lg:w-1/2 lg:text-start lg:m-auto">
          <p className=" text-GRAY text-2xl  uppercase lg:text-smallHeader text-xsmallHeader">
            So, you want to travel to
          </p>
          <h1 className="text-white py-4  uppercase  lg:text-Header text-smallHeader font-Header">
            Space
          </h1>
          <p className="text-GRAY max-w-11/12 font-thin lg:w-3/5 lg:text-xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className=" w-36 rounded-full bg-white h-36 mt-20 m-auto grid place-content-center lg:mt-80 lg:w-52 lg:h-52 lg:font-bold ">
          <h1 className="uppercase text-2xl font-light">explore</h1>
        </div>
      </div>
    </div>
  );
}
