"use client";
import React, { useRef } from 'react';
import { Palette, Maximize, Upload, X, Check } from 'lucide-react';

const fgPresets = [
  { name: 'Midnight', value: '#0f172a' },
  { name: 'Indigo', value: '#312e81' },
  { name: 'Royal Purple', value: '#581c87' },
  { name: 'Deep Teal', value: '#0f766e' },
  { name: 'Crimson', value: '#7f1d1d' },
];

const bgPresets = [
  { name: 'Snow', value: '#ffffff' },
  { name: 'Slate Ice', value: '#f8fafc' },
  { name: 'Sand Cream', value: '#fafaf9' },
  { name: 'Mint Light', value: '#f0fdfa' },
  { name: 'Alice Blue', value: '#f0f9ff' },
];

const LOGO_PRESETS = [
  { 
    id: 'cap', 
    name: 'Edu Cap', 
    svgPath: 'M22 10v6M2 10l10-5 10 5-10 5z M6 12.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-3.5'
  },
  { 
    id: 'book', 
    name: 'Open Book', 
    svgPath: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zm20 0h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'
  },
  { 
    id: 'sparkle', 
    name: 'Portal Star', 
    svgPath: 'M12 3v18M3 12h18 M12 3l3 3-3 3 M12 21l-3-3 3-3 M3 12l3-3-3 3 M21 12l-3 3 3-3'
  }
];

export default function QRConfigurator({ config, onChange }) {
  const fileInputRef = useRef(null);

  const handleFgChange = (val) => onChange({ ...config, fgColor: val });
  const handleBgChange = (val) => onChange({ ...config, bgColor: val });
  const handleSizeChange = (val) => onChange({ ...config, size: parseInt(val) });
  
  const handlePresetLogoSelect = (preset) => {
    const svgContent = `<svg xmlns="http://www.w3.org/2059/svg" viewBox="0 0 24 24" fill="none" stroke="${config.fgColor}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">${preset.svgPath}</svg>`;
    const dataUri = `data:image/svg+xml;utf8,${encodeURIComponent(svgContent)}`;
    onChange({ ...config, logoId: preset.id, logoSrc: dataUri });
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 1024 * 1024) {
        alert("Logo file is too large. Please select an image under 1MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        onChange({ ...config, logoId: 'custom', logoSrc: event.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const clearLogo = () => {
    onChange({ ...config, logoId: 'none', logoSrc: null });
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      padding: '24px 28px',
    }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #f1f5f9' }}>
        <Palette size={18} color="#8b5cf6" strokeWidth={2.3} />
        <h2 style={{ fontSize: '17px', fontWeight: 800, color: '#0f172a', margin: 0 }}>Design Customizer</h2>
      </div>

      {/* 3-column horizontal layout */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', alignItems: 'start' }}>

        {/* ── Column 1: QR Colors ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <h3 style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#94a3b8', margin: 0 }}>
            QR Code Colors
          </h3>

          {/* Foreground */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '8px' }}>
              Foreground
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              {fgPresets.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleFgChange(color.value)}
                  title={color.name}
                  style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    backgroundColor: color.value,
                    border: config.fgColor === color.value ? '2.5px solid #6366f1' : '1.5px solid #e2e8f0',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.15s',
                    outline: config.fgColor === color.value ? '2px solid #c7d2fe' : 'none',
                    outlineOffset: '1px',
                  }}
                >
                  {config.fgColor === color.value && <Check size={13} color="#ffffff" strokeWidth={3} />}
                </button>
              ))}
              <div style={{ position: 'relative', width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #e2e8f0', overflow: 'hidden', cursor: 'pointer' }}>
                <input type="color" value={config.fgColor} onChange={(e) => handleFgChange(e.target.value)}
                  style={{ position: 'absolute', inset: 0, width: '150%', height: '150%', transform: 'translate(-15%, -15%)', cursor: 'pointer', border: 'none', padding: 0, background: 'transparent' }}
                  title="Custom color" />
              </div>
            </div>
          </div>

          {/* Background */}
          <div>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#64748b', display: 'block', marginBottom: '8px' }}>
              Background
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px' }}>
              {bgPresets.map((color) => (
                <button
                  key={color.value}
                  onClick={() => handleBgChange(color.value)}
                  title={color.name}
                  style={{
                    width: '30px', height: '30px', borderRadius: '50%',
                    backgroundColor: color.value,
                    border: config.bgColor === color.value ? '2.5px solid #6366f1' : '1.5px solid #e2e8f0',
                    cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'transform 0.15s',
                    outline: config.bgColor === color.value ? '2px solid #c7d2fe' : 'none',
                    outlineOffset: '1px',
                  }}
                >
                  {config.bgColor === color.value && <Check size={13} color="#1e293b" strokeWidth={3} />}
                </button>
              ))}
              <div style={{ position: 'relative', width: '30px', height: '30px', borderRadius: '50%', border: '1.5px solid #e2e8f0', overflow: 'hidden', cursor: 'pointer' }}>
                <input type="color" value={config.bgColor} onChange={(e) => handleBgChange(e.target.value)}
                  style={{ position: 'absolute', inset: 0, width: '150%', height: '150%', transform: 'translate(-15%, -15%)', cursor: 'pointer', border: 'none', padding: 0, background: 'transparent' }}
                  title="Custom background" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '-12px', top: 0, bottom: 0, width: '1px', background: '#f1f5f9' }} />

          {/* ── Column 2: Logo ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#94a3b8', margin: 0 }}>
              Center Logo
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {/* None */}
              <button onClick={clearLogo} style={{
                display: 'inline-flex', alignItems: 'center', gap: '5px',
                padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700,
                border: `1.5px solid ${config.logoId === 'none' ? '#a5b4fc' : '#e2e8f0'}`,
                background: config.logoId === 'none' ? '#eef2ff' : '#ffffff',
                color: config.logoId === 'none' ? '#4f46e5' : '#475569',
                cursor: 'pointer',
              }}>
                <X size={12} strokeWidth={2.5} /> No Logo
              </button>

              {LOGO_PRESETS.map((preset) => (
                <button key={preset.id} onClick={() => handlePresetLogoSelect(preset)} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '5px',
                  padding: '6px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700,
                  border: `1.5px solid ${config.logoId === preset.id ? '#a5b4fc' : '#e2e8f0'}`,
                  background: config.logoId === preset.id ? '#eef2ff' : '#ffffff',
                  color: config.logoId === preset.id ? '#4f46e5' : '#475569',
                  cursor: 'pointer',
                }}>
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={preset.svgPath} />
                  </svg>
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Upload row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <button onClick={() => fileInputRef.current?.click()} style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                padding: '8px 12px', borderRadius: '10px',
                border: `1.5px dashed ${config.logoId === 'custom' ? '#a5b4fc' : '#cbd5e1'}`,
                background: config.logoId === 'custom' ? '#eef2ff' : '#fafafa',
                color: config.logoId === 'custom' ? '#4f46e5' : '#64748b',
                fontSize: '12px', fontWeight: 700, cursor: 'pointer',
              }}>
                <Upload size={13} strokeWidth={2.3} />
                {config.logoId === 'custom' ? 'Logo Uploaded ✓' : 'Upload Logo'}
              </button>

              {config.logoSrc && (
                <div style={{ position: 'relative', width: '38px', height: '38px', borderRadius: '10px', border: '1px solid #e2e8f0', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                  <img src={config.logoSrc} alt="Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  <button onClick={clearLogo} style={{
                    position: 'absolute', top: '-4px', right: '-4px',
                    width: '16px', height: '16px', borderRadius: '50%',
                    background: '#ef4444', border: 'none', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <X size={9} color="#ffffff" strokeWidth={3} />
                  </button>
                </div>
              )}
            </div>

            <input type="file" ref={fileInputRef} onChange={handleLogoUpload} accept="image/*" style={{ display: 'none' }} />
          </div>
        </div>

        {/* ── Column 3: Resolution ── */}
        <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ position: 'absolute', left: '-12px', top: 0, bottom: 0, width: '1px', background: '#f1f5f9' }} />

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <h3 style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#94a3b8', margin: 0 }}>
              QR Resolution
            </h3>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#6366f1', background: '#eef2ff', padding: '3px 10px', borderRadius: '8px' }}>
              {config.size} × {config.size}px
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Maximize size={15} color="#94a3b8" strokeWidth={2} style={{ flexShrink: 0 }} />
            <input
              type="range" min="200" max="400" step="10" value={config.size}
              onChange={(e) => handleSizeChange(e.target.value)}
              style={{ flex: 1, height: '5px', cursor: 'pointer', accentColor: '#6366f1' }}
            />
          </div>

          <p style={{ fontSize: '11px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
            Exports are auto-scaled to 1024 × 1024 px high-definition.
          </p>
        </div>

      </div>
    </div>
  );
}
