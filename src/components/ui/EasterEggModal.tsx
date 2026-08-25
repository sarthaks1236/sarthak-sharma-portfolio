import React from 'react';
import { X, Zap } from 'lucide-react';
import { sound } from '../../audio/soundSystem';

interface EasterEggModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EasterEggModal: React.FC<EasterEggModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-obsidian/90 backdrop-blur-2xl animate-fadeIn">
      <div className="relative max-w-lg w-full p-8 rounded-3xl bg-gradient-to-b from-[#0a1224] to-[#050811] border border-brand-cyan/50 shadow-[0_0_60px_rgba(0,240,255,0.3)] text-white">
        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-2 text-brand-cyan mb-4">
          <Zap className="w-6 h-6 animate-pulse" />
          <span className="text-xs font-mono font-bold tracking-widest uppercase">
            EASTER EGG PROTOCOL UNLOCKED
          </span>
        </div>

        <h3 className="text-3xl font-display font-black tracking-tight text-white mb-2">
          ARVINEX VENTURE
        </h3>
        <p className="text-sm font-mono text-brand-cyan mb-6">
          QUANTUM GROWTH CORE INITIALIZED
        </p>

        <div className="space-y-4 text-sm text-gray-300 leading-relaxed font-sans mb-6">
          <p>
            You discovered the secret interaction! The 3D particle system has transitioned into hyper-drive mode with maximum energy surge.
          </p>
          <div className="p-4 rounded-xl bg-brand-blue/10 border border-brand-blue/30 font-mono text-xs text-brand-cyan">
            "Marketing is not just about making noise — it is the systemic science of connecting business value with real human demand."
          </div>
        </div>

        <button
          onClick={() => {
            sound.playClick();
            onClose();
          }}
          className="w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-blue to-brand-cyan text-white font-mono font-bold tracking-wider hover:opacity-95 transition-opacity"
        >
          RESUME EXPERIENCE
        </button>
      </div>
    </div>
  );
};
