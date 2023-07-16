import { Table } from "@mantine/core";
import {
  IconBrandFacebook,
  IconBrandGooglePlay,
  IconBrandInstagram,
  IconBrandSoundcloud,
  IconBrandSpotify,
  IconBrandTidal,
  IconBrandTwitter,
  IconBrandTwitterFilled,
  IconBrandYoutube,
} from "@tabler/icons-react";
import React from "react";

const SocialMediaIcon = ({ bgColor, icon, iconName }) => {
  return (
    <>
      <td className={`py-12 group bg-[${bgColor}]`}>
        <div className="flex flex-col justify-center text-white  items-center translate-y-0 group-hover:-translate-y-3 transition-all duration-300">
          {icon}
          <span className="opacity-0 group-hover:opacity-30 absolute translate-y-8">
            {iconName}
          </span>
        </div>
      </td>
    </>
  );
};

const SocialMediacard = () => {
  const socialMediaIcons = [
    {
      icon: (
        <IconBrandTwitterFilled
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Twitter",
    },
    {
      icon: (
        <IconBrandInstagram
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Instagram",
    },
    {
      icon: (
        <IconBrandSpotify
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Spotify",
    },
    {
      icon: (
        <IconBrandSoundcloud
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Twitter",
    },
    {
      icon: (
        <IconBrandYoutube
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Youtube",
    },
    {
      icon: (
        <IconBrandFacebook
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Facebook",
    },
    {
      icon: (
        <IconBrandTidal
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Tidal",
    },
    {
      icon: (
        <IconBrandGooglePlay
          className="text-white text-opacity-10 group-hover:text-white"
          size={35}
        />
      ),
      iconName: "Google Play",
    },
  ];

  return (
    <>
      <div className="    ">
        <Table verticalSpacing="lg ">
          <tbody>
            <tr>
              {socialMediaIcons?.map((item, index) => {
                return (
                  <SocialMediaIcon
                    key={index}
                    bgColor={index % 2 == 0 ? "#152602" : "#264104"}
                    icon={item?.icon}
                    iconName={item?.iconName}
                  />
                );
              })}
              {/* <td className="py-10  group bg-[#264104]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center  text-white  items-center">
                  <IconBrandInstagram className="text-white" size={35} />
                  Twitter
                </div>
              </td>
              <td className="py-10  group bg-[#152602]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center text-white  items-center ">
                  <IconBrandSpotify className="text-white" size={35} />
                  Twitter
                </div>
              </td>
              <td className="py-10  group  bg-[#264104]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center text-white  items-center">
                  <IconBrandSoundcloud className="text-white" size={35} />
                  Twitter
                </div>
              </td>
              <td className="py-10  group bg-[#152602]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center text-white  items-center ">
                  <IconBrandYoutube className="text-white" size={35} />
                  Twitter
                </div>
              </td>
              <td className="py-10  group  bg-[#264104]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center text-white  items-center">
                  <IconBrandFacebook className="text-white" size={35} />
                  Twitter
                </div>
              </td>
              <td className="py-10  group bg-[#152602]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center text-white  items-center">
                  <IconBrandTidal className="text-white" size={35} />
                  Twitter
                </div>
              </td>
              <td className="py-10  group  bg-[#264104]">
                {" "}
                <div className="flex flex-col group-hover:scale-110 justify-center text-white  items-center ">
                  <IconBrandGooglePlay className="text-white" size={35} />
                  Twitter
                </div>
              </td> */}
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default SocialMediacard;
