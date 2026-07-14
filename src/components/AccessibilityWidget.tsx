"use client";
import { useState } from "react";

export function AccessibilityWidget() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 left-6 z-50">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Barrierefreiheit"
        className="w-12 h-12 rounded-full bg-[#1e2a45] shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        {/* Simple person / stick figure */}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <circle cx="12" cy="5" r="2" />
          <line x1="12" y1="7" x2="12" y2="14" />
          <polyline points="8 11 12 9 16 11" />
          <line x1="12" y1="14" x2="9" y2="19" />
          <line x1="12" y1="14" x2="15" y2="19" />
        </svg>
      </button>
      {open && (
        <div className="absolute bottom-14 left-0 bg-white rounded-xl shadow-xl p-4 w-56 text-sm text-gray-700 space-y-2">
          <p className="font-semibold text-gray-900 mb-2">Barrierefreiheit</p>
          <button onClick={() => document.documentElement.style.fontSize = "120%"} className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100">Schrift vergrößern</button>
          <button onClick={() => document.documentElement.style.fontSize = ""} className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100">Schrift zurücksetzen</button>
          <button onClick={() => document.documentElement.classList.toggle("high-contrast")} className="block w-full text-left px-2 py-1 rounded hover:bg-gray-100">Kontrast umschalten</button>
        </div>
      )}
    </div>
  );
}
