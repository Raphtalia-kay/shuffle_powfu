import { Button, Flex, Grid, Input } from "@mantine/core";
import { IconAt, IconBrandFacebook, IconBrandInstagram, IconBrandSoundcloud, IconBrandTwitter } from "@tabler/icons-react";
import React from "react";

const UpperFooter = () => {
  return (
    <>
      {/* #0a1201 */}
      <div className="bg-[#121f02]  ">
        <div className="max-w-[1140px] mx-auto py-24 text-white ">
          {/* Text  */}
          <Grid className=" ">
            <Grid.Col md={6} lg={3}>
             <div className="pb-5">
             <h4 className="text-2xl font-semibold pb-5">Bookings</h4>
              <p >Powfu (@pow.fu) Management </p>
              <p >London, United Kingdom</p>

             </div>
             <div className="">
               <p> Email : Powfu@fake.com</p>
                <p>https://soundcloud.com/powfu</p>
                <p><a href="https://www.powfuofficial.com/">powfuofficial.com</a></p>
             </div>

            </Grid.Col>
            <Grid.Col md={6} lg={3}>
            <div className="pb-5">
             <h4 className="text-2xl font-semibold pb-5">Latest Posts</h4>
            
             </div>
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
            <div className="pb-5">
             <h4 className="text-2xl font-semibold pb-5">Record Labels</h4>
              <p >2018-present </p>
              <p >	
ColumbiaRobots + Humans</p>
        <Flex className="gap-5 pt-5">
          <IconBrandInstagram size={25}/>
          <IconBrandFacebook size={25}/>
          <IconBrandTwitter size={25}/>
          <IconBrandSoundcloud size={25}/>
        </Flex>
             </div>
           
            </Grid.Col>
            <Grid.Col md={6} lg={3}>
            <div className="pb-5 ">
            <h4 className="text-2xl font-semibold pb-5" >Ticket alert - Never miss an event!</h4>
            </div>
           <div className="relative">
           <Input
      
      placeholder="Your email"
      className=" "
      classNames={{
        input : "bg-red-500"
      }}
    />
    <Button className="bg-[#1E3604] right-0 
     top-0 text-base absolute">Subscribe</Button>
           </div>
            </Grid.Col>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default UpperFooter;
