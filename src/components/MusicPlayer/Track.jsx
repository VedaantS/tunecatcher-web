import React from 'react';

const Track = ({ isPlaying, isActive, activeSong, fullScreen }) => (
  <div className={`flex-1 flex items-center justify-start ${fullScreen ? 'hidden':''}`}>
    <div className={`${isPlaying && isActive ? 'animate-[spin_15s_linear_infinite]' : ''} hidden sm:block h-16 w-16 mr-4`}>
      <img src={activeSong?.image?.[2].link || 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Solid_white.png?20060513000852'} alt="cover art" className="rounded-full"/>
    </div>
    <div className={`w-[190px] select-none cursor-pointer`}>
      <p className="truncate text-white font-bold text-lg">
        {activeSong?.name ? activeSong?.name.replace("&#039;", "'").replace("&amp;", "&") : 'Song'}
      </p>
      <p className="truncate text-gray-300">
        {activeSong?.primaryArtists ? activeSong?.primaryArtists : 'Artist'}
      </p>
    </div>
  </div>
);

export default Track;
