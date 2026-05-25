"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

/* ─── icons as inline SVG ─── */
const IconBook     = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const IconClock    = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
const IconGrade    = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12.5V16c0 1.5 2.5 3 6 3s6-1.5 6-3v-3.5"/></svg>;
const IconSubject  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
const IconLesson   = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
const IconConcept  = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>;
const IconType     = () => <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 7 4 4 20 4 20 7"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="4" x2="12" y2="20"/></svg>;
const IconCheck    = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>;
const IconStar     = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;

function EbookContent() {
  const params = useSearchParams();
  const grade   = params.get("grade")   || "—";
  const subject = params.get("subject") || "—";
  const lesson  = params.get("lesson")  || "—";
  const concept = params.get("concept") || "—";
  const type    = params.get("type")    || "—";

  const meta = [
    { label: "Grade",   value: `Grade ${grade}`,     Icon: IconGrade   },
    { label: "Subject", value: subject,               Icon: IconSubject },
    { label: "Lesson",  value: `Lesson ${lesson}`,   Icon: IconLesson  },
    { label: "Concept", value: `Concept ${concept}`, Icon: IconConcept },
    { label: "Format",  value: type,                 Icon: IconType    },
  ];

  const steps = [
    "Content creation & review",
    "Expert curriculum alignment",
    "Quality checks & accessibility",
    "Final publishing & QR activation",
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0fdf4 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px 20px",
      fontFamily: "'Inter', 'Plus Jakarta Sans', system-ui, sans-serif",
    }}>

      {/* Card */}
      <div style={{
        width: "100%",
        maxWidth: "600px",
        background: "#ffffff",
        borderRadius: "24px",
        border: "1px solid #e8e8f0",
        boxShadow: "0 20px 60px rgba(99,102,241,0.08), 0 4px 20px rgba(0,0,0,0.06)",
        overflow: "hidden",
      }}>

        {/* Top gradient bar */}
        <div style={{
          height: "5px",
          background: "linear-gradient(90deg, #6366f1, #8b5cf6, #06b6d4)",
        }} />

        {/* Body */}
        <div style={{ padding: "40px 40px 36px" }}>

          {/* Logo / Brand */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "36px" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "12px",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
            }}>
              <div style={{ color: "#fff" }}><IconBook /></div>
            </div>
            <div>
              <div style={{ fontSize: "16px", fontWeight: 800, color: "#1e1b4b", letterSpacing: "-0.02em" }}>
                Paranpara
              </div>
              <div style={{ fontSize: "11px", fontWeight: 600, color: "#8b5cf6", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                Digital Learning
              </div>
            </div>
          </div>

          {/* Main heading */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "6px",
              background: "#fef3c7", color: "#d97706",
              fontSize: "12px", fontWeight: 700,
              padding: "5px 12px", borderRadius: "9999px",
              marginBottom: "16px",
              border: "1px solid #fde68a",
            }}>
              <IconClock />
              Coming Soon
            </div>

            <h1 style={{
              fontSize: "30px", fontWeight: 900, color: "#1e1b4b",
              lineHeight: 1.2, margin: "0 0 12px",
              letterSpacing: "-0.03em",
            }}>
              We're Building<br />
              <span style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                Something Amazing
              </span>
            </h1>

            <p style={{
              fontSize: "15px", color: "#64748b", lineHeight: 1.7,
              margin: 0, maxWidth: "480px",
            }}>
              This digital learning content is currently being prepared by our curriculum team. It will be live and accessible very soon!
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: "1px", background: "#f1f5f9", margin: "0 0 24px" }} />

          {/* Curriculum Info */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{ fontSize: "11px", fontWeight: 800, color: "#94a3b8", letterSpacing: "0.07em", textTransform: "uppercase", marginBottom: "12px" }}>
              Requested Curriculum
            </div>
            <div style={{
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "8px",
            }}>
              {meta.map(({ label, value, Icon }) => (
                <div key={label} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "10px 14px",
                  background: "#f8fafc",
                  borderRadius: "10px",
                  border: "1px solid #f1f5f9",
                }}>
                  <span style={{ color: "#6366f1", display: "flex", alignItems: "center", flexShrink: 0 }}>
                    <Icon />
                  </span>
                  <div>
                    <div style={{ fontSize: "10px", fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      {label}
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>
                      {value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress steps */}
          <div style={{
            background: "linear-gradient(135deg, #f5f3ff, #ede9fe)",
            borderRadius: "14px",
            padding: "20px",
            border: "1px solid #ddd6fe",
            marginBottom: "28px",
          }}>
            <div style={{ fontSize: "12px", fontWeight: 800, color: "#6d28d9", marginBottom: "14px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ color: "#8b5cf6" }}><IconStar /></span>
              What we're working on
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {steps.map((step, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{
                    width: "22px", height: "22px", borderRadius: "50%", flexShrink: 0,
                    background: i < 2 ? "#7c3aed" : "#e9d5ff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    {i < 2
                      ? <span style={{ color: "#fff" }}><IconCheck /></span>
                      : <span style={{ fontSize: "10px", fontWeight: 800, color: "#7c3aed" }}>{i + 1}</span>
                    }
                  </div>
                  <span style={{
                    fontSize: "13px",
                    fontWeight: i < 2 ? 600 : 500,
                    color: i < 2 ? "#4c1d95" : "#6d28d9",
                    textDecoration: i < 2 ? "none" : "none",
                    opacity: i < 2 ? 1 : 0.6,
                  }}>
                    {step}
                  </span>
                  {i < 2 && (
                    <span style={{ marginLeft: "auto", fontSize: "10px", fontWeight: 700, color: "#7c3aed", background: "#fff", padding: "2px 8px", borderRadius: "9999px" }}>
                      Done ✓
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Footer note */}
          <div style={{
            display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
            fontSize: "13px", color: "#94a3b8", textAlign: "center",
          }}>
            <span>Need help?</span>
            <a href="mailto:support@paranpara.com" style={{ color: "#6366f1", fontWeight: 700, textDecoration: "none" }}>
              support@paranpara.com
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div style={{
          padding: "14px 40px",
          background: "#f8fafc",
          borderTop: "1px solid #f1f5f9",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <span style={{ fontSize: "12px", color: "#94a3b8" }}>
            © {new Date().getFullYear()} Paranpara Learning
          </span>
          <span style={{
            fontSize: "11px", fontWeight: 700, color: "#8b5cf6",
            background: "#f5f3ff", padding: "3px 10px", borderRadius: "9999px",
            border: "1px solid #ede9fe",
          }}>
            Content Live Soon
          </span>
        </div>

      </div>
    </div>
  );
}

export default function EbookPage() {
  return (
    <Suspense fallback={
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
        <div style={{ color: "#6366f1", fontSize: "16px", fontWeight: 700 }}>Loading…</div>
      </div>
    }>
      <EbookContent />
    </Suspense>
  );
}
