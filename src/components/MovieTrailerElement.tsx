import React from "react";

interface Props {
  videoId: string;
}

export const MovieTrailerElement: React.FC<Props> = ({ videoId }) => {
  console.log(videoId);
  return (
    <iframe
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      frameBorder={"0"}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; "
      allowFullScreen
    ></iframe>
  );
};
