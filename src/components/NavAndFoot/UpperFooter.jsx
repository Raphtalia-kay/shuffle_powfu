import { Button, Flex, Grid, Input, SimpleGrid, Tooltip } from "@mantine/core";
import {
  IconAt,
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandTwitter,
  IconSend,
} from "@tabler/icons-react";
import React from "react";

const UpperFooter = () => {
  const latestIGPosts = [
    {
      id: 1,
      url: "https://files.datathistle.com/images/2023/03/22/1476652a-2896-41d7-9e5e-e97b9c8dfd6f-tablet-landscape-large-16-9-LST565371.jpg",
      topic: "Gathered by the Lantern",
      date: "March 21 , 2023",
      link: "https://www.instagram.com/p/CqDplcYJUcp/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 2,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHmDJgA4HPmqo5S3AbVgJdz0BsiRKC8peH1w&usqp=CAU",
      topic: "Released official song",
      date: "July 2, 2023",
      link: "https://www.instagram.com/p/CuQBKL4STXn/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      id: 3,
      url: "https://i.pinimg.com/564x/2b/0b/ef/2b0bef883a22f38e9487c0beba079cc1.jpg",
      topic: "Fallout snippet",
      date: "June 17 , 2023",
      link: "https://www.instagram.com/reel/CtkuAnUAGc8/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
  ];
  return (
    <>
      {/* #0a1201 */}
      <div className="bg-[#121f02]  ">
        <div className=" max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto py-10 md:py-24 text-white ">
          {/* Text  */}
         
          <SimpleGrid
      cols={4}
      spacing="lg"
      breakpoints={[
        { maxWidth: '62rem', cols: 2, spacing: 'md' },
        { maxWidth: '48rem', cols: 2, spacing: 'sm' },
        { maxWidth: '36rem', cols: 1, spacing: 'sm' },
      ]}
    >
      <div>
      <div className=" md:pb-5">
                <h4 className="text-2xl font-semibold pb-8">Bookings</h4>
                <p className=" text-sm text-gray-300 md:text-base">
                  Powfu (@pow.fu) Management{" "}
                </p>
                <p className=" text-sm text-gray-300 md:text-base">
                  London, United Kingdom
                </p>
              </div>
              <div className="">
                <p className=" text-sm text-gray-300 md:text-base">
                  {" "}
                  Email : Powfu@fake.com
                </p>
                <p className=" text-sm  text-gray-600 md:text-base">
                  https://soundcloud.com/powfu
                </p>
                <p>
                  <a
                    href="https://www.powfuofficial.com/"
                    className=" text-sm text-gray-300 md:text-base"
                  >
                    powfuofficial.com
                  </a>
                </p>
              </div>
      </div>
      <div><div className=" md:pb-5">
                <h4 className="text-2xl font-semibold pb-8">Latest IG Posts</h4>
                <div className="flex flex-col gap-4">
                  {latestIGPosts?.map((image, index) => {
                    return (
                      <div className="flex gap-4">
                        <div className="img w-10">
                          <a href={image.link}>
                            <img src={image.url} alt="" />
                          </a>
                        </div>
                        <div className="text">
                          <h6 className="text-sm text-gray-300 md:text-base">
                            {image.topic}
                          </h6>
                          <p className="text-sm text-gray-300 md:text-base">
                            {image.date}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div></div>
      <div><div className=" md:pb-5">
                <h4 className="text-2xl font-semibold pb-8">Record Labels</h4>
                <p className="text-sm text-gray-300 md:text-base">
                  2018-present{" "}
                </p>
                <p className="text-sm text-gray-300 md:text-base">
                  ColumbiaRobots + Humans
                </p>
                <Flex className="gap-5 pt-5">
                  <Tooltip label="instagram">
                    <IconBrandInstagram size={20} className="hover:scale-110" />
                  </Tooltip>
                  <Tooltip label="facebook">
                    <IconBrandFacebook size={20} className="hover:scale-110" />
                  </Tooltip>
                  <Tooltip label="twitter">
                    <IconBrandTwitter size={20} className="hover:scale-110" />
                  </Tooltip>
                  <Tooltip label="soundcloud">
                    <IconBrandSoundcloud
                      size={20}
                      className="hover:scale-110"
                    />
                  </Tooltip>
                </Flex>
              </div></div>
      <div>  <div className=" md:pb-5 ">
                <h4 className="text-2xl font-semibold pb-8">
                  Ticket alert - Never miss an event!
                </h4>
              </div>
              <div className="relative overflow-hidden rounded-md">
                <Input
                  variant="unstyled"
                  placeholder="    Your email Address"
                  className=" "
                  classNames={{
                    input: "bg-[#E6E6E6]",
                  }}
                />
                <button className="bg-[#1E3604] text-white px-5 py-2 absolute right-0  top-0 hover:bg-[#1E3604]  ">
                  <IconSend size={20} />
                </button>
              </div></div>
     
    </SimpleGrid>
        </div>
      </div>
    </>
  );
};

export default UpperFooter;
