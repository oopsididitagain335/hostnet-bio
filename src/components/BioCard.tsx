import React from 'react';
import LinkItem from './LinkItem';
import VideoEmbed from './VideoEmbed';
import Badge from './Badge';

interface BioCardProps {
  user: {
    name: string;
    username: string;
    avatar: string;
    banner: string;
    bio: string;
    links: { label: string; url: string }[];
    theme: 'light' | 'dark';
    customCSS?: string;
    videoUrl: string;
    badges: string[];
  };
}

const BioCard: React.FC<BioCardProps> = ({ user }) => {
  const isOwner = user.username === 'ceosolace';

  return (
    <div className="container">
      {user.banner && (
        <div className="w-full h-32 sm:h-48 rounded-lg overflow-hidden mb-4">
          <img src={user.banner} alt="Banner" className="w-full h-full object-cover" />
        </div>
      )}

      <div className="-mt-16 mb-6 flex justify-center">
        <img
          src={user.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.username)}`}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 object-cover"
        />
      </div>

      <div className="text-center mb-4">
        <h1 className="text-2xl font-bold">{user.name || user.username}</h1>
        <p className="text-gray-600 dark:text-gray-400">@{user.username}</p>
        {user.bio && <p className="mt-3 text-sm">{user.bio}</p>}
      </div>

      <div className="flex flex-wrap justify-center mb-4">
        {isOwner && <Badge name="Owner" isOwner />}
        {user.badges?.map((badge: string, i: number) => (
          <Badge key={i} name={badge} color="indigo" />
        ))}
      </div>

      <VideoEmbed url={user.videoUrl} />

      <div className="space-y-3 mt-4">
        {user.links?.map((link, i) => (
          <LinkItem key={i} href={link.url} label={link.label} />
        ))}
      </div>

      {/* Buy Me a Coffee Embed */}
      <div className="mt-6 border-t pt-6">
        <iframe
          src="https://coff.ee/solacedev/embed"
          style={{ width: '100%', height: '400px', border: 'none' }}
          title="Support me"
        ></iframe>
      </div>

      {/* Inject custom CSS safely */}
      {user.customCSS && (
        <style
          dangerouslySetInnerHTML={{
            __html: `/* Custom CSS for @${user.username} */\n${user.customCSS}`,
          }}
          id={`custom-css-${user.username}`}
        />
      )}
    </div>
  );
};

export default BioCard;
