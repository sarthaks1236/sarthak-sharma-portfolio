import React, { useState } from 'react';
import { sound } from '../../audio/soundSystem';
import { Volume2, VolumeX } from 'lucide-react';

export const AudioToggle: React.FC = () => {
  const [muted, setMuted] = useState(sound.getMuted());

  const handleToggle = () => {
    const isNowMuted = sound.toggleMute();
    setMuted(isNowMuted);
  };

  return (
    <button
      onClick={handleToggle}
      title={muted ? "Enable Atmospheric Sound" : "Mute Sound"}
      className={`p-2 rounded-full transition-all duration-300 border flex items-center space-x-1.5 ${
        !muted
          ? 'bg-brand-cyan/15 border-brand-cyan/50 text-brand-cyan shadow-[0_0_15px_rgba(0,240,255,0.4)]'
          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
      }`}
    >
      {!muted ? (
        <>
          <Volume2 className="w-4 h-4" />
          <span className="hidden xl:inline-block text-[10px] font-mono tracking-widest uppercase">
            AUDIO ON
          </span>
          <div className="flex items-center space-x-0.5 h-3">
            <span className="w-0.5 h-2 bg-brand-cyan animate-pulse" />
            <span className="w-0.5 h-3 bg-brand-cyan animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-brand-cyan animate-pulse delay-150" />
          </div>
        </>
      ) : (
        <>
          <VolumeX className="w-4 h-4" />
          <span className="hidden xl:inline-block text-[10px] font-mono tracking-widest text-gray-400">
            SOUND OFF
          </span>
        </>
      )}
    </button>
  );
};
