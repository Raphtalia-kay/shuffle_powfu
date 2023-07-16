import { Table } from "@mantine/core";
import { IconPlayerRecord } from "@tabler/icons-react";
import React, { useEffect, useRef, useState } from "react";
import {
  MdPlayArrow,
  MdSmartDisplay,
  MdDownload,
  MdPauseCircleFilled,
} from "react-icons/md";

const SongList = () => {
  const DownloadButton = ({ fileUrl, fileName }) => {
    const downloadFile = async (fileUrl, fileName) => {
      // Fetch the file
      const response = await fetch(fileUrl);
      const blob = await response.blob();

      // Create a new object URL for the blob
      const blobUrl = URL.createObjectURL(blob);

      // Create a link and click it to start the download
      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${fileName}.m4a`; // or any other name you want

      // This is necessary as link.click() does not work on the latest firefox
      link.style.display = "none";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    };

    return (
      <button
        onClick={() => {
          downloadFile(fileUrl, fileName);
        }}
      >
        <MdDownload className="text-xl hover:text-black" />
      </button>
    );
  };
  const songs = [
    {
      id: 1,
      name: "Wallflower",
      url: "https://ucarecdn.com/9b78ab49-fc79-4e11-aaae-23c6a9beb996/",
      Uurl: "https://youtu.be/QvmYfkm54IQ",
      duration: "3:17",
    },
    {
      id: 2,
      name: "Don't wanna lose you",
      url: "https://ucarecdn.com/1f3d4753-904f-493e-a2c9-ee9f0d31e05d/",
      Uurl: "https://youtu.be/hTshQbUi_AI",
      duration: "2:20",
    },
    {
      id: 3,
      name: "See what I see",
      url: "https://ucarecdn.com/ff80ef1d-873b-4a1c-aa2e-76b7fbc2e9ec/",
      Uurl: "https://youtu.be/Ag1jI1zzVQQ",
      duration: "2:14",
    },
    {
      id: 4,
      name: "Welcome to my world",
      url: "https://ucarecdn.com/0ae7fd8b-d1ac-41cd-99cb-f3fec6185af8/",
      Uurl: "https://youtu.be/gr7bGyke7l4",
      duration: "2:25",
    },
    {
      id: 5,
      name: "Hold me",
      url: "https://ucarecdn.com/4a0d9783-db8e-4dce-acd4-08ed5c54896d/",
      Uurl: "https://youtu.be/mQIsrB73TwU",
      duration: "2:34",
    },
  ];

  const audioPlayerRef = useRef(null);
  const [audioPlayerSource, setAudioPlayerSource] = useState(null);
  const [isAudioPlayerPlaying, setIsAudioPlayerPlaying] = useState(false);

  useEffect(() => {
    audioPlayerRef.current.play();
  }, [audioPlayerSource]);

  const playSong = (url) => {
    if (url == audioPlayerSource) {
      if (isAudioPlayerPlaying) {
        setIsAudioPlayerPlaying(false);
        audioPlayerRef.current.pause();
      } else {
        audioPlayerRef.current.play();
      }
      return;
    }
    setAudioPlayerSource(url);
  };

  const rows = songs.map((song) => (
    <tr key={song.id} className="">
      <td className="text-white   cursor-pointer select-none">{song.id}.</td>
      <td className="text-white   cursor-pointer select-none">{song.name}</td>
      <td className="text-white   cursor-pointer select-none">
        {song.duration}
      </td>

      <td className="text-white   cursor-pointer select-none">
        <audio
          className="hidden"
          ref={audioPlayerRef}
          src={audioPlayerSource}
          autoPlay={false}
          onPlay={() => {
            setIsAudioPlayerPlaying(true);
          }}
        />
        <a onClick={() => playSong(song.url)}>
          {audioPlayerSource == song.url && isAudioPlayerPlaying ? (
            <MdPauseCircleFilled className="text-xl hover:text-black duration-700" />
          ) : (
            <MdPlayArrow className="text-xl hover:text-black duration-700" />
          )}
        </a>
      </td>
      <td className="text-white   cursor-pointer select-none">
        <a href={song.url}>
          <MdSmartDisplay className="text-xl hover:text-black duration-700" />{" "}
        </a>
      </td>
      <td className="text-white   duration-700  cursor-pointer select-none">
        <DownloadButton fileUrl={song.url} fileName={song.name} />
      </td>
    </tr>
  ));
  return (
    <>
      <Table verticalSpacing="md" fontSize="md">
        <tbody>{rows} </tbody>
      </Table>
    </>
  );
};

export default SongList;
