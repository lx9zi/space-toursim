import React, { useEffect, useState } from "react";

export default function Distnation() {
  const [data, setData] = useState([]);
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/destinations")
      .then((res) => {
        return res.json();
      })
      .then((dt) => {
        setData(dt);
      });
  }, []);

  useEffect(() => {
    showPlanets("Moon");
  }, [data]);

  function showPlanets(name) {
    let checkPlanets = data.filter((planet) => planet.name === name);
    if (checkPlanets) {
      setPlanets(checkPlanets);
    }
  }

  return (
    <div className="w-full min-h-screen bg-stars-desk bg-no-repeat bg-cover md:bg-stars-tablet lg:bg-stars-desk -z-forBackgorund">
      <div className="text-center font-body items-center flex flex-col lg:flex-row lg:justify-between w-4/5 m-auto lg:gap-24">
        <div className="lg:basis-1/2 mt-32 lg:mt-60 lg:w-1/2 lg:text-start lg:m-auto ">
          <h1 className="text-4xl uppercase text-WHITE">
            <span className=" text-GRAY mr-4">01</span> pick your destination
          </h1>

          {planets.map((planet) => {
            return (
              <img
                key={planet.name}
                className="my-20 w-full sm:ml-0"
                src={require(`../assets/destination/image-${planet.name.toLowerCase()}.png`)}
                alt={planet.name}
              />
            );
          })}
        </div>

        <div className="lg:basis-1/2  lg:w-1/2 lg:text-start lg:m-auto ">
          <div className="text-GRAY flex gap-10 uppercase lg:justify-start justify-center">
            <a
              className=" hover:text-WHITE cursor-pointer active-link"
              onClick={() => {
                showPlanets("Moon");
              }}
            >
              Moon
            </a>
            <a
              className="hover:text-WHITE cursor-pointer active-link"
              onClick={() => {
                showPlanets("Mars");
              }}
            >
              Mars
            </a>
            <a
              className="hover:text-WHITE cursor-pointer active-link"
              onClick={() => {
                showPlanets("Europa");
              }}
            >
              Europa
            </a>
            <a
              className="hover:text-WHITE cursor-pointer active-link"
              onClick={() => {
                showPlanets("Titan");
              }}
            >
              Titan
            </a>
          </div>

          {planets.map((planet) => {
            return (
              <div key={planet.name} className="text-white md:items-center">
                <h1 className="text-smallHeader lg:text-Header font-Header uppercase">
                  {planet.name}
                </h1>
                <p className="text-2xl lg:w-4/5 text-GRAY border-b border-GRAY pb-12">
                  {planet.description}
                </p>

                <div className="flex justify-between mt-5 lg:w-3/5">
                  <div className="flex flex-col pt-7 uppercase">
                    <p className="text-GRAY font-subHeader text-avgDis tracking-distance">
                      avg. distance
                    </p>
                    <h6 className="font-Header text-travel">
                      {planet.distance}
                    </h6>
                  </div>
                  <div className="flex flex-col pt-7 uppercase">
                    <p className="text-GRAY font-subHeader text-avgDis tracking-distance">
                      est. travle time
                    </p>
                    <h6 className="font-Header text-travel">{planet.travel}</h6>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
