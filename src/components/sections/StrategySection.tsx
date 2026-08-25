import React, { useState, useEffect } from 'react';
import { STRATEGY_NODES } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import { Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface StrategySectionProps {
  selectedNodeId: string;
  onSelectNode: (id: string) => void;
  onHoverStateChange?: (text: string) => void;
}

export const StrategySection: React.FC<StrategySectionProps> = ({
  selectedNodeId,
  onSelectNode,
  onHoverStateChange
}) => {
  const activeNodeData =
    STRATEGY_NODES.find((n) => n.id === selectedNodeId) || STRATEGY_NODES[0];

  const handleSelect = (nodeId: string) => {
    sound.playClick();
    onSelectNode(nodeId);
  };

  const handleHover = (nodeId: string) => {
    sound.playHover(780);
    onSelectNode(nodeId);
    onHoverStateChange?.('INSPECT');
  };

  return (
    <section id="strategy" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Cpu className="w-4 h-4 animate-spin" />
        <span>SIGNATURE 3D ENGINE / 03</span>
      </div>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl font-black text-white uppercase leading-[0.9]">
            THE STRATEGY <br />
            <span className="text-brand-cyan text-glow-cyan">OPERATING SYSTEM.</span>
          </h2>
          <p className="text-sm font-mono text-gray-400 mt-2 max-w-xl">
            A cohesive strategic engine connecting core marketing pillars with commercial acquisition mechanics.
          </p>
        </div>

        <div className="text-xs font-mono text-gray-300 px-4 py-2 rounded-full bg-white/5 border border-brand-cyan/30 self-start md:self-auto flex items-center space-x-2 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
          <span>CLICK OR HOVER TABS TO INSPECT</span>
        </div>
      </div>

      {/* Strategy Node Control HUD */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Node Grid Selector */}
        <div className="lg:col-span-5 space-y-3">
          {STRATEGY_NODES.map((node) => {
            const isCurrent = node.id === activeNodeData.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => handleSelect(node.id)}
                onMouseEnter={() => handleHover(node.id)}
                onMouseLeave={() => onHoverStateChange?.('')}
                className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer border flex items-center justify-between group ${
                  isCurrent
                    ? 'bg-gradient-to-r from-brand-blue/30 to-brand-cyan/20 border-brand-cyan shadow-[0_0_30px_rgba(0,240,255,0.3)] translate-x-2'
                    : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-brand-cyan/40'
                }`}
              >
                <div className="flex items-center space-x-3.5">
                  <div
                    className="w-3.5 h-3.5 rounded-full transition-transform duration-300 group-hover:scale-125"
                    style={{
                      backgroundColor: node.color,
                      boxShadow: isCurrent ? `0 0 15px ${node.color}` : `0 0 5px ${node.color}`
                    }}
                  />
                  <div>
                    <div className="text-sm sm:text-base font-mono font-bold text-white tracking-wider group-hover:text-brand-cyan transition-colors">
                      {node.label}
                    </div>
                    <div className="text-xs text-gray-400 font-mono">
                      {node.subtitle}
                    </div>
                  </div>
                </div>
                <ArrowRight
                  className={`w-5 h-5 transition-all duration-300 ${
                    isCurrent
                      ? 'text-brand-cyan translate-x-1'
                      : 'text-gray-600 group-hover:text-gray-300'
                  }`}
                />
              </button>
            );
          })}
        </div>

        {/* Dynamic Detail Card */}
        <div className="lg:col-span-7 sticky top-28">
          <div className="p-8 sm:p-10 rounded-3xl glass-panel-active border-2 border-brand-cyan/50 shadow-[0_0_50px_rgba(0,102,255,0.35)] space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-cyan animate-ping" />
                <span className="text-xs font-mono text-brand-cyan font-bold tracking-widest uppercase">
                  NODE SPECIFICATION
                </span>
              </div>
              <span className="px-2.5 py-0.5 rounded-full bg-brand-cyan/10 border border-brand-cyan/30 text-[10px] font-mono text-brand-cyan uppercase">
                STATUS: ACTIVE
              </span>
            </div>

            <div>
              <h3 className="text-3xl sm:text-5xl font-display font-black text-white mb-2 tracking-tight">
                {activeNodeData.label}
              </h3>
              <p className="text-sm sm:text-base font-mono text-brand-cyan font-semibold">
                {activeNodeData.subtitle}
              </p>
            </div>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-sans font-light">
              {activeNodeData.description}
            </p>

            <div className="p-4 rounded-xl bg-obsidian/80 border border-white/10 flex items-center justify-between text-xs font-mono text-gray-400">
              <span>ORBITAL 3D COORDINATES</span>
              <span className="text-brand-cyan font-bold">
                [{activeNodeData.position.join(', ')}]
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
