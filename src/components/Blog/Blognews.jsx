import React from "react";
import "./Blognews.css";
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

const Blognews = () => {
  const blogs = [
    {
      id: 1,
      date: "Luke Bieber July 25,2023 ",
      description:
        "There are always new artists emerging in the hip-hop scene that have unique and captivating sounds. Powfu, born Isaiah Faber, grew up in Vancouver, Canada, and has been gathering a large fanbase over the years with his new Lo-fi Hip-Hop style of music. In his music, he uses a distinct blend of melodic rap and emotional storytelling and captivates the listeners by drawing on their emotions created by his unique style.  Powfu began to create music in his teenage years, being inspired by many artists, such as B.o.B, Eminem and Chiddy Bang resulting in the particular sound that he is producing now. In 2017, he officially adopted the moniker Powfu and released his debut single DPocket Change, marking the beginning of a promising musical path.Powfu’s career really began to take off in 2019 when he released a track titled “Death Bed (Coffee for your Head)”. This song sampled another Lo-fi producer’s song named “Coffee” by “Beabadoobee”. The song quickly became trending on Tiktok, fueling its popularity and making it a hit worldwide. Today, the song has generated over 1.4 billion streams on Spotify, and 610 Million views on Youtube.His most recent EP, “Flooding The Gates” dropped in June 2nd, 2023. The album is a collection of written and recorded with fellow artists Ouse and Snow on the road during Powfu’s Flooding the GatesTour in June 2022. The album features the song Wallflower alongside an official music video directed by longtime collaborator Aze Avora.",
      url: "https://uploads-ssl.webflow.com/60f5fd209f7ad63864d67adf/64c0124306be5a56ce66f9aa_Photo%20Resizing%201041%20x%20581-3.png",
      title: "Powfu: The Rising Star of Lo-fi Hip-hop",
    },
    {
      id: 2,
      date: "Celeste Willis by July 7 , 2021 ",
      description:
        "After browsing SoundCloud for new beats, lo-fi hip hop artist Powfu (a.k.a. Isaiah Faber) came across Beabadoobee’s “Coffee.” This chill music inspired Powfu to write a song about someone who’s on their deathbed, but is longing to stay with his love. He’s afraid about what will happen here on earth once he passes on.Yeah, I don’t wanna fall asleep, I don’t wanna pass away I been thinking of our future ’cause I’ll never see those days In a video produced by Genius, Powfu explains that he watches a lot of romantic films, a lot of “cringy stuff” as he calls it. After watching these movies, he writes songs about how the characters may be feeling. “Death Bed” is about Powfu exploring the final thoughts of a person who knows they are dying. There’s regret, lament, a request for forgiveness, and memories of all the good times he shared with his lover.",
      url: "https://blog.sevenponds.com/wp-content/uploads/2021/07/Powfu-Death-Bed-1280x720-1-768x432.jpg",
      title: "“Death Bed” by Powfu, featuring Beabadoobee",
    },
    {
      id: 3,
      date: "Kerry Doole by September 9th, 2020 ",
      description:
        "Two months ago, the family of Isaiah Faber (aka Powfu) moved from Mission, B.C., to a new house in Chilliwack. The place is going to need a trophy room to display all the platinum plaques the 21-year-old singer-songwriter/producer is amassing for the international success of his blockbuster hit track “death bed (coffee for your head).” “The first one [for certified U.S. platinum sales] arrived a week ago,” says Powfu. “It’s pretty crazy to look at that.” More are coming, as the single has officially gone double-platinum in Canada and Ireland, and platinum in Australia, Sweden, Mexico, New Zealand, Italy, and Norway.Originally released in 2019, the breakthrough track made the Top 25 on the Billboard Hot 100, and has been streamed more than a billion times, and counting. Its success story helps illustrate the ways that such platforms as YouTube, SoundCloud, and TikTok can break a song. Powfu recalls that “death bed” got started when it was uploaded on YouTube. “It was getting a lot of views [currently at 178M] and then TikTok found it and took it the rest of the way,” he says. More than a million Tik Toks have been made with the song, and that phenomenon was followed by mass streaming on Spotify, and other outlets. A recent remix of “death bed” by U.S. pop-punk heavyweights Blink-182 has continued its momentum. The poignant lyrics of “death bed” have resonated deeply. “The thing to me that stood out about it was the story, talking about death,” says Powfu. “I’ve never heard a song with that kind of story. People like the melody and the rap, too, so I guess it all came together.”",
      url: "https://www.socanmagazine.ca/wp-content/uploads/2020/09/Powfu_Social.jpg",
      title:
        "HOW THE SONG HAPPENED: POWFU’S “DEATH BED (COFFEE FOR YOUR HEAD)”",
    },
  ];
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
  const categories = [
    "Tours(8)",
    "music(23)",
    "Performances(5)",
    "Shows(6)",
    "New(12)"
  ];
  const socialMediaIcons = [
    {
      icon: (
        <IconBrandTwitterFilled
        
          size={25}
        />
      ),
      iconName: "Twitter",
    },
    {
      icon: (
        <IconBrandInstagram
        
          size={25}
        />
      ),
      iconName: "Instagram",
    },
    {
      icon: (
        <IconBrandSpotify
        
          size={25}
        />
      ),
      iconName: "Spotify",
    },
    {
      icon: (
        <IconBrandSoundcloud
        
          size={25}
        />
      ),
      iconName: "Twitter",
    },
    {
      icon: (
        <IconBrandYoutube
        
          size={25}
        />
      ),
      iconName: "Youtube",
    },
    {
      icon: (
        <IconBrandFacebook
        
          size={25}
        />
      ),
      iconName: "Facebook",
    },
    {
      icon: (
        <IconBrandTidal
        
          size={25}
        />
      ),
      iconName: "Tidal",
    },
    {
      icon: (
        <IconBrandGooglePlay
        
          size={25}
        />
      ),
      iconName: "Google Play",
    },
  ];
  return (
    <>
      <div className="bg-[#1e3604] ">
        <div className="max-w-xs md:max-w-[700px] lg:max-w-[950px] xl:max-w-[1140px] mx-auto min-h-screen">
     <div className="flex flex-col md:flex-row gap-5">
     <div className="flex py-16 flex-col gap-5 w-full md:w-[70%]">
        {blogs.map((blog, index) => {
            return (
              <div className="blog_sec" key={index}>
                <div className="image w-[100%] h-[60%]">
                  <img src={blog.url} className="w-full h-full  object-cover " alt="" />
                </div>
                <div className="text_sec">
                  <div className="small_text py-5">
                    <p className="text-gray-300  ">{blog.date}</p>
                    <h6 className="text-white text-xl font-semibold ">{blog.title}</h6>
                    <p className=" py-5 text-md text-gray-400">{blog.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className=" w-full md:w-[30%] py-14  sidebarSticky">
            <div className="upper relative ">
                <h6 className="text-white text-xl pb-3 underlinecustom">Recent Posts</h6>
               <hr className="pb-5 " />
                <div className="flex flex-col gap-4 ">
                  {latestIGPosts?.map((image, index) => {
                    return (
                      <div className="flex gap-4 group ">
                        <div className="img w-32 h-24 ">
                      <a href={image.link}>
                      <img src={image.url} className="w-full h-full object-cover" alt="" />
                      </a>
                        </div>
                        <div className="text ">
                          <h6 className="text-white text-lg group-hover:text-black">{image.topic}</h6>
                          <p className="text-gray-400 text-md group-hover:text-black">{image.date}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
            </div>
            <div className="category my-10 relative">
            <h6 className="text-white text-xl pb-3 underlinecustom">Categories</h6>
                  <hr className="pb-5 " />
              {categories?.map((cate,index) =>{
                return (
               <div className="">
               <ul className=" ">
                <li className="py-3"><p className="m-0 p-0 text-white hover:text-black inline">{cate}</p></li>
               </ul>
               </div>
                )
              })}
            </div>
            <div className="Follow my-10  relative">
            <h6 className="text-white text-xl pb-3 underlinecustom">Follow Us </h6>
                  <hr className="pb-5 " />
                 <div className="flex gap-3 ">
                 {socialMediaIcons.map((icons,index) => {
                    return (
                      <span className="text-white hover:text-black">  {icons.icon}</span>
                    )
                  })}
                 </div>
              
            </div>
            <div className="Tags my-10  relative">
            <h6 className="text-white text-xl pb-3 underlinecustom">Tags </h6>
                  <hr className="pb-5 " />
              <div className="text-white tracking-wider">
                <p>Albums, Lyrics , Music , New , Lo-fi</p>
              </div>
            </div>
        
        </div>
     </div>
        </div>
      </div>
    </>
  );
};

export default Blognews;
