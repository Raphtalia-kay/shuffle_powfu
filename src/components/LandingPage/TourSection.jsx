import React from "react";

const TourSection = () => {
  const tourData = [
    {
      date: "Sat, Sep 23",
      club: "Lovelee",
      location: "Amsterdam, netherlands",
      status: "Sold Out",
    },
    {
        date: "Sun, Sep 24",
        club: "Frannz Club",
        location: "Berlin, Germany",
        status: "Buy now",
      },
      {
        date: "Tue, Sep 26",
        club: "Biko Club",
        location: "Miland, Italy",
        status: "Buy now",
      },
      {
        date: "Sun, Sep 28",
        club: "Razzmatazz",
        location: "Barcelona, Spain",
        status: "Buy now",
      },
      {
        date: "Tue, Sep 30",
        club: "Kranhalle",
        location: "Munchen, Germany",
        status: "Sold out",
      },
      {
        date: "Sun, Oct 1",
        club: "Les Etdiles",
        location: "Paris, France",
        status: "Buy now",
      },
      {
        date: "Sun, Oct 3",
        club: "02 Academy Islington",
        location: "London, United Kingdom",
        status: "Buy now",
      },
      {
        date: "Wed, Oct 4",
        club: "02 Institute",
        location: "Birmingham, United Kingdom",
        status: "Buy now",
      },
      {
        date: "Wed, Oct 6",
        club: "Gorilla",
        location: "Manchester, United Kingdom",
        status: "Buy now",
      },
      {
        date: "Wed, Oct 4",
        club: "The Academy, middle Abbey Street",
        location: "Dublin, Ireland",
        status: "Buy now",
      },
  ];
  return <>
  <section className="bg-[#1E3604]  ">
        <div className="max-w-[1140px] mx-auto pt-10 ">
          {/* Text  */}
          <div className="pb-20">
            <h3 className="text-4xl font-semibold text-center text-white">
            Powfu tour dates 2023
            </h3>
            <p className="text-xl  text-center text-white pt-[8px]">
            Powfu is currently touring across 7 countries and has 10 upcoming concerts.
            </p>
          </div>
          </div>
          </section>
   
  </>;
};

export default TourSection;
