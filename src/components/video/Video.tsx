import React from 'react';

interface VideoProps {
  videoId: string;
}

const Video: React.FC<VideoProps> = ({ videoId }) => {
  return (
    <div className="video">
      <iframe
        width="560"
        height="815"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="Embedded Video"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
