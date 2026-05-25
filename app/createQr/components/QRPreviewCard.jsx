"use client";
import React from 'react';
import { QRCode } from 'react-qr-code';
import { Copy, Download, Printer, ExternalLink, QrCode, AlertCircle } from 'lucide-react';
import { downloadQRCode, printQRCode } from '../utils/qrHelper';

export default function QRPreviewCard({ url, config, onCopy, onToast, isValid }) {
  const svgId = 'ebook-qr-code-svg';

  const handleCopy = async () => {
    if (!url) return;
    try {
      await navigator.clipboard.writeText(url);
      onCopy('Dynamic URL copied to clipboard!');
    } catch {
      onToast('Failed to copy URL.', 'error');
    }
  };

  const handleDownload = async () => {
    try {
      const fileName = `paranpara-qr-${Date.now()}.png`;
      onToast('Rendering high-resolution PNG…', 'info');
      await downloadQRCode(svgId, 1024, config.fgColor, config.bgColor, config.logoSrc, fileName);
      onToast('QR Code downloaded successfully!', 'success');
    } catch (err) {
      console.error(err);
      onToast('Download failed. Try again.', 'error');
    }
  };

  const handlePrint = () => {
    onToast('Preparing print layout…', 'info');
    printQRCode(svgId, 'Ebook Access QR Code', url);
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '20px',
    }}>

      {/* Header */}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          fontSize: '17px', fontWeight: 800, color: '#0f172a', margin: 0,
        }}>
          <QrCode size={19} color="#8b5cf6" strokeWidth={2.3} style={{ flexShrink: 0 }} />
          QR Preview
        </h2>

        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '5px',
          fontSize: '10px', fontWeight: 800,
          padding: '4px 10px', borderRadius: '9999px',
          letterSpacing: '0.07em', textTransform: 'uppercase',
          background: isValid ? '#f0fdf4' : '#fffbeb',
          color:      isValid ? '#16a34a' : '#d97706',
          border:     `1px solid ${isValid ? '#bbf7d0' : '#fde68a'}`,
        }}>
          <span style={{
            width: '6px', height: '6px', borderRadius: '50%',
            background: isValid ? '#22c55e' : '#f59e0b',
            display: 'inline-block',
          }} />
          {isValid ? 'Ready' : 'Pending'}
        </span>
      </div>

      {/* QR Canvas */}
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '256px',
        aspectRatio: '1',
        background: config.bgColor || '#ffffff',
        borderRadius: '16px',
        border: '1.5px solid #e2e8f0',
        boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: '16px',
      }}>

        {/* Awaiting config overlay */}
        {!isValid && (
          <div style={{
            position: 'absolute', inset: 0, zIndex: 10,
            background: 'rgba(255,255,255,0.92)',
            borderRadius: '16px',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            gap: '8px', padding: '20px', textAlign: 'center',
          }}>
            <AlertCircle size={30} color="#f59e0b" strokeWidth={2} />
            <p style={{ fontSize: '13px', fontWeight: 700, color: '#334155', margin: 0 }}>Form Incomplete</p>
            <p style={{ fontSize: '11px', color: '#64748b', margin: 0, maxWidth: '160px', lineHeight: 1.5 }}>
              Fill all five dropdowns to generate the QR code
            </p>
          </div>
        )}

        <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <QRCode
            id={svgId}
            value={url || 'https://paranpara.com'}
            size={200}
            fgColor={config.fgColor}
            bgColor={config.bgColor}
            level="H"
            style={{ width: '100%', height: '100%' }}
          />

          {isValid && config.logoSrc && (
            <div style={{
              position: 'absolute',
              width: '40px', height: '40px',
              background: config.bgColor,
              border: `1.5px solid ${config.fgColor}22`,
              borderRadius: '8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              overflow: 'hidden',
            }}>
              <img src={config.logoSrc} alt="Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
            </div>
          )}
        </div>
      </div>

      {/* URL Display */}
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
          Live Endpoint
        </span>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '10px 12px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '10px',
          overflow: 'hidden',
        }}>
          <code style={{
            fontSize: '11px', color: '#334155', flex: 1,
            overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            fontFamily: 'ui-monospace, monospace',
          }}>
            {url || 'Awaiting parameters…'}
          </code>
          {isValid && (
            <button
              onClick={handleCopy}
              title="Copy URL"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '30px', height: '30px', flexShrink: 0,
                background: '#ffffff', border: '1px solid #e2e8f0',
                borderRadius: '8px', cursor: 'pointer',
                color: '#64748b', transition: 'all 0.15s',
              }}
              onMouseOver={e => e.currentTarget.style.background = '#f1f5f9'}
              onMouseOut={e => e.currentTarget.style.background = '#ffffff'}
            >
              <Copy size={13} strokeWidth={2.2} />
            </button>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ width: '100%', display: 'flex', gap: '10px' }}>
        <button
          onClick={handleDownload}
          disabled={!isValid}
          style={{
            flex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            padding: '11px 16px',
            background: isValid ? '#2563eb' : '#eff6ff',
            color:      isValid ? '#ffffff' : '#93c5fd',
            border: 'none',
            borderRadius: '12px',
            fontSize: '13px', fontWeight: 700,
            cursor: isValid ? 'pointer' : 'not-allowed',
            boxShadow: isValid ? '0 2px 12px rgba(37,99,235,0.25)' : 'none',
            transition: 'all 0.15s',
          }}
          onMouseOver={e => { if (isValid) e.currentTarget.style.background = '#1d4ed8'; }}
          onMouseOut={e => { if (isValid) e.currentTarget.style.background = '#2563eb'; }}
        >
          <Download size={16} strokeWidth={2.3} style={{ flexShrink: 0 }} />
          Download PNG
        </button>

        <button
          onClick={handlePrint}
          disabled={!isValid}
          style={{
            flex: 1,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            padding: '11px 16px',
            background: '#ffffff',
            color: isValid ? '#334155' : '#94a3b8',
            border: '1.5px solid #e2e8f0',
            borderRadius: '12px',
            fontSize: '13px', fontWeight: 700,
            cursor: isValid ? 'pointer' : 'not-allowed',
            opacity: isValid ? 1 : 0.5,
            transition: 'all 0.15s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
          onMouseOver={e => { if (isValid) e.currentTarget.style.background = '#f8fafc'; }}
          onMouseOut={e => { if (isValid) e.currentTarget.style.background = '#ffffff'; }}
        >
          <Printer size={16} strokeWidth={2.3} style={{ flexShrink: 0 }} />
          Print Flyer
        </button>
      </div>

      {/* External link */}
      {isValid && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '5px',
            fontSize: '12px', fontWeight: 600, color: '#6366f1',
            textDecoration: 'none', transition: 'color 0.15s',
          }}
          onMouseOver={e => e.currentTarget.style.color = '#4f46e5'}
          onMouseOut={e => e.currentTarget.style.color = '#6366f1'}
        >
          Test target endpoint
          <ExternalLink size={13} strokeWidth={2.2} />
        </a>
      )}
    </div>
  );
}
