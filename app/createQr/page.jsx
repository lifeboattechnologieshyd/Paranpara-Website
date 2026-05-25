"use client";
import React, { useState, useEffect } from 'react';

import FormSection from "./components/FormSection";
import QRPreviewCard from "./components/QRPreviewCard";
import QRConfigurator from "./components/QRConfigurator";
import HistoryList from "./components/HistoryList";
import Toast from "./components/Toast";
import { useLocalStorage } from "./hooks/useLocalStorage";

import "./qr-styles.css";

export default function CreateQrPage() {
  // 1. Form Selections State
  const [formData, setFormData] = useState({
    grade: '',
    subject: '',
    lesson: '',
    concept: '',
    type: 'General'
  });

  // 2. Custom Validation Errors
  const [errors, setErrors] = useState({});

  // 3. QR Code Configuration state (saved in localStorage)
  const [qrConfig, setQrConfig] = useLocalStorage('paranpara_qr_design', {
    fgColor: '#0f172a', // Midnight
    bgColor: '#ffffff', // Snow
    size: 280,
    logoId: 'none',
    logoSrc: null
  });

  // 4. Generation History (saved in localStorage)
  const [history, setHistory] = useLocalStorage('paranpara_qr_history', []);

  // 5. Toast Notifications state
  const [toast, setToast] = useState(null);

  // Helper: Trigger Toast
  const triggerToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  // Compile Dynamic URL from form selections
  const compileUrl = () => {
    const { grade, subject, lesson, concept, type } = formData;
    if (!grade || !subject || !lesson || !concept || !type) return '';
    return `https://paranpara.com/ebook?grade=${encodeURIComponent(grade)}&subject=${encodeURIComponent(subject)}&lesson=${encodeURIComponent(lesson)}&concept=${encodeURIComponent(concept)}&type=${encodeURIComponent(type)}`;
  };

  const generatedUrl = compileUrl();
  const isValid = !!(formData.grade && formData.subject && formData.lesson && formData.concept && formData.type);

  // Validate form in real-time when inputs change
  useEffect(() => {
    const nextErrors = {};
    if (formData.grade && !formData.subject) nextErrors.subject = 'Subject area is required';
    if (formData.subject && !formData.lesson) nextErrors.lesson = 'Lesson module is required';
    if (formData.lesson && !formData.concept) nextErrors.concept = 'Concept field is required';
    setErrors(nextErrors);
  }, [formData]);

  // Debounced History auto-saver
  useEffect(() => {
    if (isValid && generatedUrl) {
      const timer = setTimeout(() => {
        setHistory((prev) => {
          const filtered = prev.filter((item) => item.url !== generatedUrl);
          const newEntry = {
            id: Date.now().toString(),
            url: generatedUrl,
            formData: { ...formData },
            config: { ...qrConfig },
            timestamp: Date.now()
          };
          return [newEntry, ...filtered].slice(0, 10);
        });
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [generatedUrl, isValid, qrConfig]);

  // Handler: Change Form Field
  const handleFormChange = (updates) => {
    setFormData((prev) => {
      const updated = { ...prev, ...updates };
      const clearedErrors = { ...errors };
      Object.keys(updates).forEach((key) => {
        delete clearedErrors[key];
      });
      setErrors(clearedErrors);
      return updated;
    });
  };

  // Handler: Load Configuration from History
  const handleSelectHistoryItem = (item) => {
    setFormData(item.formData);
    setQrConfig(item.config || {
      fgColor: '#0f172a',
      bgColor: '#ffffff',
      size: 280,
      logoId: 'none',
      logoSrc: null
    });
    triggerToast('Configuration loaded from history!', 'success');
  };

  // Handler: Delete History Item
  const handleDeleteHistoryItem = (id) => {
    setHistory((prev) => prev.filter((item) => item.id !== id));
    triggerToast('History entry deleted.', 'info');
  };

  // Handler: Clear All History
  const handleClearHistory = () => {
    setHistory([]);
    triggerToast('Generation history cleared.', 'info');
  };

  // Handler: Reset Form Fields
  const handleResetForm = () => {
    setFormData({
      grade: '',
      subject: '',
      lesson: '',
      concept: '',
      type: 'General'
    });
    setErrors({});
    triggerToast('Form fields cleared.', 'info');
  };

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Scoped tailwind classes namespace wrapper */}
      <div className="qr-portal-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-6">
        


        {/* Row 1: Form (left) + QR Preview (right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Curriculum Form — left */}
          <div className="lg:col-span-7 xl:col-span-8">
            <FormSection
              formData={formData}
              onChange={handleFormChange}
              errors={errors}
              onReset={handleResetForm}
            />
          </div>

          {/* QR Preview — right */}
          <div className="lg:col-span-5 xl:col-span-4">
            <QRPreviewCard
              url={generatedUrl}
              config={qrConfig}
              isValid={isValid}
              onCopy={triggerToast}
              onToast={triggerToast}
            />
          </div>

        </div>

        {/* Row 2: Design Customizer — full width horizontal */}
        <QRConfigurator
          config={qrConfig}
          onChange={setQrConfig}
        />

        {/* Row 3: Recent Generations — full width at bottom */}
        <HistoryList
          history={history}
          onSelect={handleSelectHistoryItem}
          onDelete={handleDeleteHistoryItem}
          onClear={handleClearHistory}
          onToast={triggerToast}
        />

      </div>

      {/* Toast Notification Portal */}
      {toast && (
        <div className="qr-portal-container">
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        </div>
      )}
    </div>
  );
}
