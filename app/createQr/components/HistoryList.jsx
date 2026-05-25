"use client";
import React from 'react';
import { QRCode } from 'react-qr-code';
import { History, Trash2, ArrowUpRight, Copy, Calendar } from 'lucide-react';

export default function HistoryList({ history, onSelect, onDelete, onClear, onToast }) {
  
  const handleCopy = (url, e) => {
    e.stopPropagation(); 
    navigator.clipboard.writeText(url);
    onToast('Generated URL copied to clipboard!', 'success');
  };

  const formatDate = (timestamp) => {
    try {
      const date = new Date(timestamp);
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' - ' + date.toLocaleDateString([], { month: 'short', day: 'numeric' });
    } catch {
      return 'Recent';
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 md:p-8 space-y-6 bg-white border border-slate-200/80 shadow-md">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
          <History className="w-5 h-5 text-primary-500" />
          Recent Generations
        </h2>
        
        {history.length > 0 && (
          <button
            onClick={onClear}
            className="text-xs font-semibold text-rose-500 hover:text-rose-600 transition-colors px-2 py-1 rounded-lg hover:bg-rose-500/5 cursor-pointer"
          >
            Clear History
          </button>
        )}
      </div>

      {history.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-10 px-4 text-center border-2 border-dashed border-slate-200/50 rounded-2xl bg-slate-50/50">
          <div className="p-3.5 rounded-full bg-slate-100 text-slate-400 mb-3 animate-pulse-slow">
            <History className="w-6 h-6" />
          </div>
          <h4 className="text-sm font-bold text-slate-700">History is Empty</h4>
          <p className="text-xs text-slate-400 mt-1 max-w-[200px] leading-relaxed">
            Fill the dynamic form above and watch your generated codes accumulate here.
          </p>
        </div>
      ) : (
        <div className="max-h-[380px] overflow-y-auto space-y-3.5 pr-2.5">
          {history.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelect(item)}
              className="flex items-center justify-between gap-4 p-3.5 rounded-2xl bg-white hover:bg-slate-50/50 border border-slate-200 hover:border-primary-500/20 transition-all duration-200 cursor-pointer group shadow-sm hover:shadow"
            >
              
              {/* Left QR Mini Preview */}
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 p-1.5 flex items-center justify-center shrink-0 shadow-sm">
                <QRCode
                  value={item.url}
                  size={40}
                  fgColor={item.config?.fgColor || '#000000'}
                  bgColor={item.config?.bgColor || '#ffffff'}
                  level="M"
                  className="w-full h-full"
                />
              </div>

              {/* Middle Configuration Labels */}
              <div className="flex-1 min-w-0 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-primary-100 text-primary-700 uppercase tracking-wider">
                    {item.formData.grade}
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-slate-100 text-slate-600 uppercase tracking-wider">
                    {item.formData.type}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-slate-800 truncate group-hover:text-primary-500 transition-colors">
                  {item.formData.subject} • {item.formData.lesson}
                </h4>
                <p className="text-[10px] text-slate-400 flex items-center gap-1.5 mt-0.5 font-medium">
                  <Calendar className="w-3 h-3 shrink-0" />
                  {formatDate(item.timestamp)}
                </p>
              </div>

              {/* Right Action buttons */}
              <div className="flex items-center gap-1.5 shrink-0 opacity-80 md:opacity-0 group-hover:opacity-100 transition-all duration-200">
                <button
                  onClick={(e) => handleCopy(item.url, e)}
                  className="p-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-200 text-slate-500 transition-colors cursor-pointer shadow-sm"
                  title="Copy link"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); 
                    onDelete(item.id);
                  }}
                  className="p-2 rounded-xl bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-500/20 text-slate-500 hover:text-rose-500 transition-colors cursor-pointer shadow-sm"
                  title="Delete item"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
                <div 
                  className="p-1.5 rounded-lg text-primary-500 hidden md:block"
                  title="Load config"
                >
                  <ArrowUpRight className="w-4 h-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
