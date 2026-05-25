"use client";
import React from 'react';
import { QrCode, BookOpen, Layers } from 'lucide-react';

/**
 * HeroSection renders a premium, colorful dashboard intro with floating 3D shapes.
 */
export default function HeroSection() {
  return (
    <div className="relative overflow-hidden rounded-3xl mb-8 p-8 md:p-12 glass-card bg-grid-dots">
      {/* Decorative Floating Shapes */}
      <div className="absolute top-8 left-10 w-24 h-24 bg-gradient-to-tr from-primary-400 to-indigo-500 rounded-full blur-xl opacity-20 animate-float-slow -z-10" />
      <div className="absolute bottom-6 right-16 w-32 h-32 bg-gradient-to-br from-accent-500 to-indigo-500 rounded-2xl blur-xl opacity-25 animate-float-medium -z-10" />
      <div className="absolute -top-10 right-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-lg animate-pulse-slow -z-10" />

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left text column */}
        <div className="lg:col-span-8 space-y-6 text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-600 bg-clip-text text-transparent !m-0 !p-0">
            Paranpara Ebook <br/>
            <span className="text-slate-900">QR Portal</span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
            Instantly generate, brand, and catalog scannable QR codes linking directly to specific curriculum subjects, lessons, and interactive conceptual ebooks.
          </p>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/40 border border-white/60">
              <div className="p-2 rounded-xl bg-primary-500/10 text-primary-600">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Target</h4>
                <p className="text-sm font-semibold text-slate-800">Ebooks</p>
              </div>
            </div>

            <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/40 border border-white/60">
              <div className="p-2 rounded-xl bg-secondary-500/10 text-secondary-600">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Format</h4>
                <p className="text-sm font-semibold text-slate-800">Dynamic UI</p>
              </div>
            </div>

            <div className="flex items-center gap-3 col-span-2 sm:col-span-1 px-4 py-3 rounded-2xl bg-white/40 border border-white/60">
              <div className="p-2 rounded-xl bg-accent-500/10 text-accent-600">
                <QrCode className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Quality</h4>
                <p className="text-sm font-semibold text-slate-800">1024px PNG</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right illustration column */}
        <div className="hidden lg:col-span-4 lg:flex justify-center relative">
          {/* Animated Glow Halo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-accent-500/20 rounded-full blur-3xl scale-90 animate-pulse-slow" />
          
          <div className="relative p-6 rounded-3xl bg-white/40 border border-white/50 shadow-xl backdrop-blur-md animate-float-slow">
            {/* Corner styling to simulate a scanning target frame */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-primary-500 rounded-tl-2xl" />
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-primary-500 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-primary-500 rounded-bl-2xl" />
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-primary-500 rounded-br-2xl" />
            
            {/* Stand-in premium vector-like grid representation */}
            <div className="w-40 h-40 bg-slate-100 rounded-xl flex items-center justify-center p-3 relative overflow-hidden">
              <QrCode className="w-full h-full text-slate-800 opacity-80" />
              {/* Laser scan animation bar */}
              <div className="absolute left-0 right-0 h-1 bg-accent-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] animate-scan" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
