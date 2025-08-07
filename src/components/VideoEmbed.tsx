import React from 'react';

interface VideoEmbedProps {
  url: string;
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ url }) => {
  if (!url) return null;
  return (
    <div className="w-full aspect-video mb-4 rounded-lg overflow-hidden">
      <iframe
        src={url}
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="User video"
      ></iframe>
    </div>
  );
};

export default VideoEmbed;
