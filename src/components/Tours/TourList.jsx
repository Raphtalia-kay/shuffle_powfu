import React from 'react'
import { Table } from "@mantine/core";

const TourList = () => {
    const tourData = [
        {
          id: 1,
          date: "Sat, Sep 23",
          club: "Lovelee",
          location: "Amsterdam, netherlands",
          status: "Sold Out",
        },
        {
          id: 2,
          date: "Sun, Sep 24",
          club: "Frannz Club",
          location: "Berlin, Germany",
          status: "Buy Tickets",
        },
        {
          id: 3,
          date: "Tue, Sep 26",
          club: "Biko Club",
          location: "Miland, Italy",
          status: "Buy Tickets",
        },
        {
          id: 4,
          date: "Sun, Sep 28",
          club: "Razzmatazz",
          location: "Barcelona, Spain",
          status: "Buy Tickets",
        },
        {
          id: 5,
          date: "Tue, Sep 30",
          club: "Kranhalle",
          location: "Munchen, Germany",
          status: "Sold Out",
        },
        {
          id: 6,
          date: "Sun, Oct 1",
          club: "Les Etdiles",
          location: "Paris, France",
          status: "Buy Tickets",
        },
        {
          id: 7,
          date: "Sun, Oct 3",
          club: "02 Academy Islington",
          location: "London, United Kingdom",
          status: "Buy Tickets",
        },
        {
          id: 8,
          date: "Wed, Oct 4",
          club: "02 Institute",
          location: "Birmingham, United Kingdom",
          status: "Buy Tickets",
        },
        {
          id: 9,
          date: "Wed, Oct 6",
          club: "Gorilla",
          location: "Manchester, United Kingdom",
          status: "Buy Tickets",
        },
        {
          id: 10,
          date: "Wed, Oct 4",
          club: "The Academy, middle Abbey Street",
          location: "Dublin, Ireland",
          status: "Buy Tickets",
        },
      ];
      const rows = tourData.map((tour) => (
        <tr key={tour.id} className="group">
          <td className="text-white text-xs group-hover:text-black  cursor-pointer select-none transition-colors duration-500">
            {tour.date}
          </td>
          <td className="text-white text-xs group-hover:text-black  cursor-pointer select-none transition-colors duration-500">
            {tour.club}
          </td>
          <td className="text-white text-xs group-hover:text-black  cursor-pointer select-none transition-colors duration-500">
            {tour.location}
          </td>
          <td className="text-white text-xs group-hover:text-black  cursor-pointer select-none transition-colors duration-500">
            <button
              className={
                tour.status === "Sold Out"
                  ? "text-red-500 w-20 py-2 rounded-md md:py-2  md:rounded-lg  group-hover:text-black border-[1px] border-black md:w-36   "
                  : "text-white w-20 py-2 rounded-md md:py-2  md:rounded-lg  group-hover:text-black border-[1px] border-black md:w-36  "
              }
            >
              {tour.status}
            </button>
          </td>
        </tr>
      ));
  return (
    <>
    
        <div className="bg-[#1E3604]  backdrop-blur-sm ">
          <div className="max-w-xs  md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto min-h-screen flex flex-col justify-center items-center  pt-10 ">
            {/* Text  */}
            <div className="md:pb-2">
              <h3 className="text-xl md:text-4xl font-semibold text-center text-white">
                Powfu tour dates 2023
              </h3>
              <p className="text-md md:text-xl  text-center text-white pt-[8px]">
                Powfu is currently touring across 7 countries and has 10
                upcoming concerts.
              </p>
            </div>
            <Table verticalSpacing="md" >
              <thead>
                <tr>
                  <th className=" cursor-pointer select-none">
                    {" "}
                    <h1 className="py-0 text-white text-lg md:text-xl font-semibold ">
                      Date
                    </h1>{" "}
                  </th>
                  <th className="  cursor-pointer select-none">
                    <h1 className="py-0 text-white text-lg md:text-xl font-semibold ">Club</h1>
                  </th>
                  <th className="  cursor-pointer select-none">
                    <h1 className="py-0 text-white text-lg md:text-xl font-semibold ">
                      Location
                    </h1>
                  </th>
                  <th className="  cursor-pointer select-none">
                    <h1 className="py-0 text-white text-lg md:text-xl font-semibold ">Order</h1>
                  </th>
                </tr>
              </thead>
              <tbody>{rows} </tbody>
            </Table>
          </div>
        </div>
      
    </>
  )
}

export default TourList
