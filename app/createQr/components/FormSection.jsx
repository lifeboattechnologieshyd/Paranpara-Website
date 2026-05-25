"use client";
import React from 'react';
import { BookOpen, Layers, GraduationCap, Compass, FileType, RefreshCw } from 'lucide-react';
import { dataService } from '../services/qrDataService';

export default function FormSection({ formData, onChange, errors, onReset }) {
  const grades    = dataService.getGrades();
  const subjects  = dataService.getSubjects(formData.grade);
  const lessons   = dataService.getLessons(formData.grade, formData.subject);
  const concepts  = dataService.getConcepts(formData.grade, formData.subject, formData.lesson);
  const types     = dataService.getTypes();

  const renderField = ({ id, label, step, Icon, value, options, disabled, placeholder }) => {
    const hasError   = errors?.[id];
    const isComplete = !disabled && !!value;

    /* colour tokens */
    const borderColor = hasError  ? '#fca5a5'
                      : isComplete ? '#bfdbfe'
                      : disabled   ? '#e2e8f0'
                      : '#e2e8f0';

    const ringColor   = hasError  ? 'rgba(239,68,68,0.12)'
                      : isComplete ? 'rgba(59,130,246,0.10)'
                      : 'transparent';

    const iconColor   = disabled   ? '#cbd5e1'
                      : isComplete ? '#2563eb'
                      : '#94a3b8';

    const badgeBg     = disabled   ? '#f1f5f9'
                      : isComplete ? '#eff6ff'
                      : '#eff6ff';

    const badgeTxt    = disabled   ? '#94a3b8'
                      : isComplete ? '#1d4ed8'
                      : '#3b82f6';

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', width: '100%' }}>

        {/* Label row */}
        <label
          htmlFor={id}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            color: '#64748b',
            paddingLeft: '2px',
            userSelect: 'none',
            cursor: 'default',
          }}
        >
          {/* Step badge */}
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '20px',
            height: '20px',
            minWidth: '20px',
            borderRadius: '50%',
            fontSize: '10px',
            fontWeight: 800,
            background: badgeBg,
            color: badgeTxt,
            border: `1px solid ${badgeTxt}22`,
            lineHeight: 1,
          }}>
            {step}
          </span>
          {label}
        </label>

        {/* Select wrapper */}
        <div style={{
          position: 'relative',
          borderRadius: '12px',
          border: `1.5px solid ${borderColor}`,
          background: disabled ? '#f8fafc' : '#ffffff',
          boxShadow: disabled ? 'none' : `0 0 0 3px ${ringColor}, 0 1px 3px rgba(0,0,0,0.04)`,
          opacity: disabled ? 0.55 : 1,
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}>

          {/* Left Icon */}
          <span style={{
            position: 'absolute',
            left: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            color: iconColor,
            lineHeight: 0,
          }}>
            <Icon size={17} strokeWidth={2.2} />
          </span>

          {/* Native select */}
          <select
            id={id}
            value={value}
            disabled={disabled}
            onChange={(e) => {
              if (!disabled) {
                const v = e.target.value;
                if (id === 'grade')   onChange({ grade: v, subject: '', lesson: '', concept: '' });
                else if (id === 'subject') onChange({ subject: v, lesson: '', concept: '' });
                else if (id === 'lesson')  onChange({ lesson: v, concept: '' });
                else onChange({ [id]: v });
              }
            }}
            style={{
              width: '100%',
              padding: '11px 40px 11px 42px',
              background: 'transparent',
              border: 'none',
              outline: 'none',
              appearance: 'none',
              WebkitAppearance: 'none',
              MozAppearance: 'none',
              fontSize: '14px',
              fontWeight: 600,
              color: disabled ? '#94a3b8' : value ? '#0f172a' : '#94a3b8',
              cursor: disabled ? 'not-allowed' : 'pointer',
              fontFamily: 'inherit',
              lineHeight: '1.4',
            }}
          >
            <option value="" disabled>
              {placeholder}
            </option>
            {options.map((opt) => (
              <option key={opt} value={opt} style={{ color: '#0f172a', background: '#ffffff' }}>
                {opt}
              </option>
            ))}
          </select>

          {/* Chevron */}
          <span style={{
            position: 'absolute',
            right: '14px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: '#94a3b8',
            display: 'flex',
            alignItems: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </div>

        {/* Error message */}
        {hasError && (
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#e11d48', paddingLeft: '4px' }}>
            {errors[id]}
          </span>
        )}
      </div>
    );
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '18px',
      border: '1px solid #e2e8f0',
      boxShadow: '0 1px 8px rgba(0,0,0,0.06)',
      padding: '28px',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    }}>

      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: '20px',
        borderBottom: '1px solid #f1f5f9',
      }}>
        <h2 style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '17px',
          fontWeight: 800,
          color: '#0f172a',
          margin: 0,
        }}>
          <Layers size={19} color="#6366f1" strokeWidth={2.3} style={{ flexShrink: 0 }} />
          Curriculum Builder
        </h2>

        <button
          onClick={onReset}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '12px',
            fontWeight: 600,
            padding: '7px 14px',
            borderRadius: '10px',
            border: '1px solid #e2e8f0',
            background: '#ffffff',
            color: '#475569',
            cursor: 'pointer',
            transition: 'all 0.15s',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}
          onMouseOver={e => e.currentTarget.style.background = '#f8fafc'}
          onMouseOut={e => e.currentTarget.style.background = '#ffffff'}
        >
          <RefreshCw size={13} strokeWidth={2.3} />
          Reset Form
        </button>
      </div>

      {/* Fields Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
      }}>

        {renderField({
          id: 'grade', label: 'Grade Level', step: '1',
          Icon: GraduationCap, value: formData.grade, options: grades,
          disabled: false, placeholder: 'Select grade…',
        })}

        {renderField({
          id: 'subject', label: 'Subject Area', step: '2',
          Icon: BookOpen, value: formData.subject, options: subjects,
          disabled: !formData.grade, placeholder: formData.grade ? 'Select subject…' : 'Choose grade first',
        })}

        {renderField({
          id: 'lesson', label: 'Lesson Module', step: '3',
          Icon: Compass, value: formData.lesson, options: lessons,
          disabled: !formData.subject, placeholder: formData.subject ? 'Select lesson…' : 'Choose subject first',
        })}

        {renderField({
          id: 'concept', label: 'Key Concept', step: '4',
          Icon: Layers, value: formData.concept, options: concepts,
          disabled: !formData.lesson, placeholder: formData.lesson ? 'Select concept…' : 'Choose lesson first',
        })}

        {/* Full width row */}
        <div style={{ gridColumn: '1 / -1' }}>
          {renderField({
            id: 'type', label: 'Content Format', step: '5',
            Icon: FileType, value: formData.type, options: types,
            disabled: false, placeholder: 'Select format…',
          })}
        </div>

      </div>

      {/* Progress bar */}
      {(() => {
        const filled = [formData.grade, formData.subject, formData.lesson, formData.concept, formData.type].filter(Boolean).length;
        const pct = (filled / 5) * 100;
        return (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#94a3b8' }}>
                {filled === 5 ? '✓ All fields complete — QR ready' : `${filled} of 5 fields filled`}
              </span>
              <span style={{ fontSize: '11px', fontWeight: 700, color: pct === 100 ? '#16a34a' : '#3b82f6' }}>
                {Math.round(pct)}%
              </span>
            </div>
            <div style={{ height: '4px', background: '#f1f5f9', borderRadius: '9999px', overflow: 'hidden' }}>
              <div style={{
                height: '100%',
                width: `${pct}%`,
                background: pct === 100 ? 'linear-gradient(90deg,#22c55e,#16a34a)' : 'linear-gradient(90deg,#6366f1,#3b82f6)',
                borderRadius: '9999px',
                transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1)',
              }} />
            </div>
          </div>
        );
      })()}

      {/* Info note */}
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '10px',
        padding: '12px 16px',
        background: '#f8faff',
        border: '1px solid #e0e7ff',
        borderLeft: '3px solid #6366f1',
        borderRadius: '10px',
        fontSize: '12px',
        color: '#475569',
        lineHeight: '1.6',
      }}>
        <span style={{ fontWeight: 700, color: '#1e293b', whiteSpace: 'nowrap' }}>Tip:</span>
        Each dropdown unlocks the next. Generated QR links directly to the curriculum endpoint.
      </div>

    </div>
  );
}
