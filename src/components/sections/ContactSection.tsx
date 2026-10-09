import React, { useState } from 'react';
import { CONTACT_INFO, PERSONAL_INFO } from '../../data/portfolioData';
import { sound } from '../../audio/soundSystem';
import {
  Mail,
  Phone,
  MessageCircle,
  Instagram,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  ArrowUpRight,
  FileDown,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  onHoverStateChange?: (text: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onHoverStateChange }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'Marketing Strategy',
    message: ''
  });
  const [copied, setCopied] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleCopy = (text: string, label: string) => {
    sound.playClick();
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playEnergySurge();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);

      // Trigger pre-filled mailto
      const subject = encodeURIComponent(`Executive Project Enquiry for Sarthak Sharma: ${formData.projectType} (${formData.name})`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nProject Scope: ${formData.projectType}\n\nMessage Details:\n${formData.message}`
      );
      window.location.href = `mailto:${CONTACT_INFO.email}?subject=${subject}&body=${body}`;
    }, 600);
  };

  const handleWhatsAppForward = () => {
    sound.playClick();
    const text = encodeURIComponent(
      `Hi Sarthak, my name is ${formData.name || 'a visitor'} (${formData.email || 'Email'}). I am reaching out regarding ${formData.projectType}: "${formData.message || 'I would like to discuss working together on marketing strategy.'}"`
    );
    window.open(`https://wa.me/917876337056?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-28 px-4 sm:px-8 max-w-7xl mx-auto relative z-10">
      <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-brand-cyan uppercase mb-4">
        <Mail className="w-4 h-4" />
        <span>CONTACT / 12</span>
      </div>

      <div className="mb-14">
        <h2 className="kinetic-title text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white uppercase leading-[0.88]">
          LET'S BUILD <br />
          SOMETHING <br />
          <span className="text-brand-cyan text-glow-cyan">THAT GROWS.</span>
        </h2>
        <p className="text-base sm:text-lg font-mono text-gray-300 mt-4 max-w-xl">
          Direct engagement channel for CMO advisory, marketing strategy, and high-performance digital asset engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Direct Contact Channels */}
        <div className="lg:col-span-5 space-y-4">
          {/* WhatsApp Direct 1-Click Action */}
          <a
            href={CONTACT_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover(900)}
            className="p-6 rounded-3xl bg-gradient-to-r from-emerald-950/40 via-green-900/30 to-emerald-950/40 hover:from-emerald-900/60 hover:to-green-900/50 transition-all duration-300 border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.25)] flex items-center justify-between group"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-emerald-500/20 text-emerald-400">
                <MessageCircle className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </div>
              <div>
                <div className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>1-CLICK DIRECT WHATSAPP</span>
                </div>
                <div className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {CONTACT_INFO.phone}
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-5 h-5 text-emerald-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>

          {/* Email */}
          <div className="p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-brand-blue/20 text-brand-cyan">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase">EMAIL</div>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(CONTACT_INFO.email, 'email')}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              title="Copy Email"
            >
              {copied === 'email' ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Phone */}
          <div className="p-6 rounded-3xl glass-panel hover:glass-panel-active transition-all duration-300 border border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-2xl bg-brand-cyan/20 text-brand-cyan">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-mono text-gray-400 uppercase">DIRECT PHONE</div>
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-base font-bold text-white hover:text-brand-cyan transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </div>
            </div>
            <button
              onClick={() => handleCopy(CONTACT_INFO.phone, 'phone')}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white"
              title="Copy Phone"
            >
              {copied === 'phone' ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-2 gap-4">
            <a
              href="https://instagram.com/arvinex.sarthak"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover(950)}
              className="p-5 rounded-2xl glass-panel hover:glass-panel-active transition-all border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <Instagram className="w-5 h-5 text-pink-400" />
                <span className="text-xs font-mono font-bold text-white">{CONTACT_INFO.instagram}</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            <a
              href="https://linkedin.com/in/sarthaksharma"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover(950)}
              className="p-5 rounded-2xl glass-panel hover:glass-panel-active transition-all border border-white/10 flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3">
                <Linkedin className="w-5 h-5 text-blue-400" />
                <span className="text-xs font-mono font-bold text-white">LinkedIn</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Download Portfolio PDF Card */}
          <div className="p-6 rounded-3xl glass-panel border border-brand-cyan/30 flex items-center justify-between">
            <div className="space-y-1">
              <div className="text-xs font-mono text-brand-cyan uppercase">OFFICIAL ASSET</div>
              <div className="text-sm font-bold text-white">Executive Portfolio Deck</div>
              <div className="text-xs text-gray-400 font-mono">12-Page Complete Strategy Profile</div>
            </div>

            <a
              href={PERSONAL_INFO.pdfDeckUrl}
              download="Sarthak_Sharma_CMO_Portfolio.pdf"
              onClick={() => sound.playClick()}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-2xl bg-brand-blue hover:bg-blue-500 text-white text-xs font-mono font-bold transition-all shadow-[0_0_20px_rgba(0,102,255,0.4)]"
            >
              <FileDown className="w-4 h-4" />
              <span>DOWNLOAD</span>
            </a>
          </div>
        </div>

        {/* Right Interactive Contact Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="p-8 sm:p-10 rounded-3xl glass-panel-active border-2 border-brand-cyan/40 shadow-[0_0_50px_rgba(0,102,255,0.3)] space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase">NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase">EMAIL *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase">COMPANY / BRAND</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  placeholder="Company Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-gray-400 uppercase">PROJECT SCOPE</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#0a0d14] border border-white/10 text-white focus:outline-none focus:border-brand-cyan text-sm font-sans"
                >
                  <option value="Marketing Strategy">Marketing Strategy & Direction</option>
                  <option value="Online + Offline Marketing">Online + Offline Marketing</option>
                  <option value="Website Planning & Design">Website Planning & Design</option>
                  <option value="Lead Generation System">Lead Generation System</option>
                  <option value="CMO Advisory">CMO Advisory / Long-Term Mandate</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-mono text-gray-400 uppercase">MESSAGE DETAILS *</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell me about your commercial objectives, timeline, and goals..."
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan text-sm font-sans"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSending}
                onMouseEnter={() => {
                  sound.playHover(1100);
                  onHoverStateChange?.('SEND');
                }}
                onMouseLeave={() => onHoverStateChange?.('')}
                className="flex-1 w-full py-4 rounded-xl bg-gradient-to-r from-brand-blue via-blue-600 to-brand-cyan text-white font-mono font-bold tracking-wider hover:shadow-[0_0_35px_rgba(0,240,255,0.6)] transition-all flex items-center justify-center space-x-2 group disabled:opacity-50"
              >
                <span>{isSending ? 'PREPARING ENQUIRY...' : 'START THE CONVERSATION'}</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                type="button"
                onClick={handleWhatsAppForward}
                className="w-full sm:w-auto px-6 py-4 rounded-xl bg-emerald-900/40 hover:bg-emerald-800/60 border border-emerald-500/50 text-emerald-300 font-mono font-bold text-xs tracking-wider flex items-center justify-center space-x-2 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                title="Send Enquiry Directly to WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WHATSAPP INSTEAD</span>
              </button>
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-green-950/50 border border-green-500/50 text-green-300 text-xs font-mono text-center space-y-2 animate-fadeIn">
                <div className="flex items-center justify-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span className="font-bold">ENQUIRY PREPARED FOR SARTHAK SHARMA!</span>
                </div>
                <p className="text-gray-300 text-[11px]">
                  Your mail client has been opened. You can also click the "WhatsApp Instead" button above to send it instantly via WhatsApp!
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
