"use client";
import React, { useEffect } from 'react';
import { CheckCircle2, XCircle, AlertCircle, X } from 'lucide-react';

/**
 * Toast component that displays a message and automatically self-destructs after a duration.
 */
export default function Toast({ message, type = 'success', onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <XCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <AlertCircle className="w-5 h-5 text-indigo-500 shrink-0" />
  };

  const styles = {
    success: 'border-emerald-500/20 bg-emerald-50/95 text-emerald-800',
    error: 'border-rose-500/20 bg-rose-50/95 text-rose-800',
    info: 'border-indigo-500/20 bg-indigo-50/95 text-indigo-800'
  };

  return (
    <div className={`fixed bottom-6 right-6 flex items-center gap-3 px-4 py-3 rounded-2xl border shadow-xl backdrop-blur-md transition-all duration-300 z-50 select-none animate-slide-up ${styles[type]}`}>
      {icons[type]}
      <p className="text-sm font-semibold tracking-wide">{message}</p>
      <button 
        onClick={onClose} 
        className="p-1 rounded-lg hover:bg-black/5 text-current transition-colors cursor-pointer"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
