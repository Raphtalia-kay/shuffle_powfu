import { Button, Flex, Grid, Input, Tooltip } from "@mantine/core";
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
      url: "https://scontent-iad3-1.cdninstagram.com/v/t39.30808-6/357210975_18267372838145068_145038954363737782_n.jpg?stp=dst-jpg_e35_s1080x1080_sh0.08&_nc_ht=scontent-iad3-1.cdninstagram.com&_nc_cat=104&_nc_ohc=SKYxOu_FVWUAX8C4Mth&edm=AP_V10EAAAAA&ccb=7-5&ig_cache_key=MzEzOTAxNDAzMzk3OTE3NTM5OA%3D%3D.2-ccb7-5&oh=00_AfDpys7f9jr1nDEI2Jev08KYohlsf3qDT9t4Jkc5VISI_g&oe=64A919AF&_nc_sid=2999b8",
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
        <div className="max-w-[1140px] mx-auto py-24 text-white ">
          {/* Text  */}
          <Grid className=" ">
            <Grid.Col md={6} lg={3}>
              <div className="pb-5">
                <h4 className="text-2xl font-semibold pb-8">Bookings</h4>
                <p className="text-base">Powfu (@pow.fu) Management </p>
                <p className="text-base">London, United Kingdom</p>
              </div>
              <div className="">
                <p className="text-base"> Email : Powfu@fake.com</p>
                <p className="text-base">https://soundcloud.com/powfu</p>
                <p>
                  <a href="https://www.powfuofficial.com/" className="text-base">powfuofficial.com</a>
                </p>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <div className="pb-5">
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
                          <h6>{image.topic}</h6>
                          <p>{image.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <div className="pb-5">
                <h4 className="text-2xl font-semibold pb-8">Record Labels</h4>
                <p className="text-base">2018-present </p>
                <p className="text-base">ColumbiaRobots + Humans</p>
                <Flex className="gap-5 pt-5">
                <Tooltip label="instagram" >

                 <IconBrandInstagram size={20} className="hover:scale-110" />
                 </Tooltip>
                <Tooltip label="facebook" >

                  <IconBrandFacebook size={20} className="hover:scale-110" />
                 </Tooltip>
                <Tooltip label="twitter" >

                  <IconBrandTwitter size={20}  className="hover:scale-110"/>
                 </Tooltip>
                <Tooltip label="soundcloud" >

                  <IconBrandSoundcloud size={20} className="hover:scale-110" />
                 </Tooltip>
                
                </Flex>
              </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
              <div className="pb-5 ">
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
                <IconSend size={20}/>
               </button>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UpperFooter;
