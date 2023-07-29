import { Grid, Table } from "@mantine/core";
import {
  IconPlayerPlay,
  IconPlayerTrackNext,
  IconPlayerTrackPrev,
} from "@tabler/icons-react";
import React from "react";

const Content = () => {
  return (
    <>
      <div className="first max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto flex flex-col md:flex-row  gap-4 min-h-screen ">
        <div className="second md:w-[48%] py-16   ">
          <div className="head_sec pb-4 ">
            <h2 className="text-black uppercase font-semibold text-[40px]">
              About me
            </h2>
            <p className="text-gray-500 pt-2 text-[20px]">
              Follow him on instagram @powfu
            </p>
          </div>
          <div className="body_sec">
            <p className="text-gray-700 text-[16px] leading-6">
              Isaiah Faber, known professionally as Powfu, is a Canadian rapper,
              singer, songwriter, and record producer. He is the son of Dave
              Faber from the band Faber Drive.
            </p>
            <p className="text-gray-700 text-[16px] py-2 leading-6">
            The majority of his music contains
              themes of melancholic heartbreak and somber relationships. Since
              releasing his first song, “Pocket Change,” to SoundCloud in
              February 2017, Powfu has amassed over 5 million plays throughout
              all of his platforms.
            </p>
            <p className="text-gray-700 text-[16px] py-2 leading-6">
              {" "}
              The top-charting song being “I Could Never Be Loved” with over 1
              million plays to date. He’s even been featured on Ouse ツ’s most
              popular song, “Lovemark.” Powfu is known for his somber and lo-fi
              type music with releases like “Death Bed,” “Breakfast With the
              Moon,” and “I Could Never Be Loved.”
            </p>
            <p  className="text-gray-700 text-[16px] py-2 leading-6">The EPs Drinking Under the Streetlights and Tell Me Your Feelings and I Won't Tell You Mine appeared in 2021. Surrounded by Hounds and Serpents followed in 2022.</p>
          </div>
          <div className="playlist pt-2 ">
            <Table>
              <tbody className="bg-[#1e3604] h-[70px] ">
                <tr>
                  <td className="text-white">
                    <IconPlayerTrackNext />{" "}
                  </td>
                  <td className="text-white">
                    <IconPlayerPlay />
                  </td>
                  <td className="text-white">
                    <IconPlayerTrackPrev />
                  </td>
                  <td className="text-white ">
                    <p className="text-[16px] text-center">Death Bed</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>

        <div className="third md:w-[49%]  pl-4 md:px-0 md:py-16">
          <div className="  ">
            <Grid gutter="xs" grow>
              <Grid.Col span={4} >
                <div className="w-72 h-72">
                  <img
                    className="w-full h-full"
                    src="https://i.pinimg.com/564x/f0/15/2f/f0152f745d8cbb11caf67a484e29dcb3.jpg"
                    alt=""
                  />
                </div>
              </Grid.Col>
              <Grid.Col span={4} >
                {" "}
                <div className="w-72 h-72">
                  <img
                    className="w-full h-full"
                    src="https://i.pinimg.com/564x/e7/07/8c/e7078c89f90d712b0e35b9c12efcb204.jpg"
                    alt=""
                  />
                </div>{" "}
              </Grid.Col>
              <Grid.Col span={4} >
                {" "}
                <div className="w-72 h-72">
                  <img
                    className="w-full h-full"
                    src="https://i.pinimg.com/564x/8d/bd/ec/8dbdec624fb1611b67ffcbaf0aa5b1ee.jpg"
                    alt=""
                  />
                </div>
              </Grid.Col>
              <Grid.Col span={4} >
                {" "}
                <div className="w-72 h-72">
                  <img
                    className="w-full h-full"
                    src="https://i.pinimg.com/564x/8c/0a/cb/8c0acbb0c078e7e1a2be4e7e569d5016.jpg"
                    alt=""
                  />
                </div>
              </Grid.Col>
              {/* <Grid.Col span={4} >
                {" "}
                <div className="">
                  <img
                    src="https://i.pinimg.com/564x/e7/07/8c/e7078c89f90d712b0e35b9c12efcb204.jpg"
                    alt=""
                  />
                </div>
              </Grid.Col> */}
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
