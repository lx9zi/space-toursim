import React, { useState, useEffect } from "react";

export default function Space() {
  const [spaceCraft, setSpaceCraft] = useState([]);
  const [spaceName, setSpaceName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/technology")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSpaceCraft(data);
      });
  }, []);

  useEffect(() => {
    showSpaceCraft("Launch vehicle");
  }, [spaceCraft]);

  function showSpaceCraft(name) {
    let checkName = spaceCraft.filter((space) => space.name === name);

    if (checkName) {
      setSpaceName(checkName);
    }
  }

  return (
    <div className="w-full min-h-screen bg-technology-desk bg-no-repeat bg-cover md:bg-technology-tablet lg:bg-technology-desk -z-forBackgorund">
      <div className="text-center font-body items-center flex flex-col-reverse lg:flex-row lg:justify-between w-4/5 m-auto lg:gap-24">
        <div className="lg:basis-1/2 mt-32 lg:mt-60 lg:w-1/2 lg:text-start lg:m-auto ">
          <h1 className="text-4xl uppercase text-WHITE pb-14">
            <span className=" text-GRAY mr-4">03</span> space launch 101
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 mt-12 ">
            <div className="flex justify-center lg:justify-start flex-row lg:flex-col gap-10 ">
              <span
                className="w-20 h-20 bg-GRAY rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => {
                  showSpaceCraft("Launch vehicle");
                }}
              >
                1
              </span>
              <span
                className="w-20 h-20 bg-GRAY rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => {
                  showSpaceCraft("Spaceport");
                }}
              >
                2
              </span>
              <span
                className="w-20 h-20 bg-GRAY rounded-full flex items-center justify-center cursor-pointer"
                onClick={() => {
                  showSpaceCraft("Space capsule");
                }}
              >
                3
              </span>
            </div>

            {spaceName.map((sp) => {
              return (
                <div className="flex flex-col text-GRAY" key={sp.name}>
                  <span className="text-GRAY">THE TERMINOLOGY…</span>
                  <h1 className="font-Header text-subHeader text-WHITE">
                    {sp.name}
                  </h1>
                  <p>{sp.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:basis-1/2 mt-32 lg:mt-60 lg:w-1/2 lg:text-start lg:m-auto ">
          {spaceName.map((sp) => {
            return (
              <>
                <img
                  className="w-full "
                  key={sp.name}
                  src={require(`../assets/technology/image-${sp.name
                    .replace(" ", "-")
                    .toLowerCase()}-portrait.jpg`)}
                  alt={sp.name}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
