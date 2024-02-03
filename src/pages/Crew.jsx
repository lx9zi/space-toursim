import React, { useEffect, useState } from "react";

export default function Crew() {
  const [crews, setCrews] = useState([]);
  const [crewName, setCrewName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/crew")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCrews(data);
      });
  }, []);

  useEffect(() => {
    showCrew("Douglas Hurley");
  }, [crews]);

  function showCrew(name) {
    let checkName = crews.filter((Crew) => Crew.name === name);

    if (checkName) {
      setCrewName(checkName);
    }
  }

  return (
    <div className="w-full min-h-screen bg-stars-desk bg-no-repeat bg-cover md:bg-stars-tablet lg:bg-stars-desk -z-forBackgorund">
      <div className="text-center font-body items-center flex flex-col-reverse lg:flex-row lg:justify-between w-4/5 m-auto lg:gap-24">
        <div className="lg:basis-1/2 mt-32 lg:mt-60 lg:w-1/2 lg:text-start lg:m-auto relative">
          <h1 className="text-4xl uppercase text-WHITE pb-14">
            <span className=" text-GRAY mr-4">02</span> meet your crew
          </h1>

          {crewName.map((crew) => {
            return (
              <div key={crew.name}>
                <h1 className="text-GRAY font-Header text-xsmallHeader uppercase">
                  {crew.role}
                </h1>
                <h1 className="text-WHITE font-Header text-smallHeader uppercase">
                  {crew.name}
                </h1>
                <p className="text-GRAY lg:w-8/12">{crew.bio}</p>
              </div>
            );
          })}

          <div className="flex gap-4 mt-0 lg:mt-12 justify-center lg:justify-start lg:static absolute -top-10 right-1/2 lg:translate-x-0 lg:translate-y-0 translate-x-1/2 -translate-y-1/">
            <span
              className={"w-4 h-4 bg-GRAY rounded-full cursor-pointer"}
              onClick={() => {
                showCrew("Douglas Hurley");
              }}
            ></span>
            <span
              className="w-4 h-4 bg-GRAY rounded-full cursor-pointer"
              onClick={() => {
                showCrew("Mark Shuttleworth");
              }}
            ></span>
            <span
              className="w-4 h-4 bg-GRAY rounded-full cursor-pointer"
              onClick={() => {
                showCrew("Victor Glover");
              }}
            ></span>
            <span
              className="w-4 h-4 bg-GRAY rounded-full cursor-pointer"
              onClick={() => {
                showCrew("Anousheh Ansari");
              }}
            ></span>
          </div>
        </div>

        <div className="lg:basis-1/2 mt-32 lg:mt-60 lg:w-1/2 lg:text-start lg:m-auto ">
          <div className="text-GRAY flex gap-10 uppercase"></div>

          {crewName.map((crew) => {
            return (
              <div key={crew.name} className="text-white">
                <img
                  src={require(`../assets/crew/image-${crew.name
                    .replace(" ", "-")
                    .toLowerCase()}.png`)}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
