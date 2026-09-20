"use client";

import { useEffect, useState, useCallback } from "react";

const LINES = [
  { text: "George", mono: false },
  { text: "Lazaridis", mono: false },
  { text: "// full-stack web developer", mono: true },
];

export function Preloader({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<"typing" | "hold" | "reveal" | "done">(
    "typing",
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [showCaret, setShowCaret] = useState(true);
  const [pixelFrame, setPixelFrame] = useState(0);

  const pixelChars = ["█", "▓", "▒", "░"];

  // Caret blink
  useEffect(() => {
    const interval = setInterval(() => setShowCaret((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setPixelFrame((frame) => frame + 1), 120);
    return () => clearInterval(interval);
  }, []);

  // Typing effect
  useEffect(() => {
    if (phase !== "typing") return;

    const line = LINES[currentLine];
    if (!line) {
      setPhase("hold");
      return;
    }

    if (currentChar < line.text.length) {
      const speed = line.mono ? 40 : 60 + Math.random() * 40;
      const timeout = setTimeout(() => setCurrentChar((c) => c + 1), speed);
      return () => clearTimeout(timeout);
    }

    // Line complete, move to next
    const timeout = setTimeout(() => {
      setCurrentLine((l) => l + 1);
      setCurrentChar(0);
    }, 300);
    return () => clearTimeout(timeout);
  }, [phase, currentLine, currentChar]);

  // Hold, then reveal
  useEffect(() => {
    if (phase !== "hold") return;
    const timeout = setTimeout(() => setPhase("reveal"), 600);
    return () => clearTimeout(timeout);
  }, [phase]);

  // Fallback: ensure completion even if transitionend doesn't fire
  useEffect(() => {
    if (phase !== "reveal") return;
    const timeout = setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 900);
    return () => clearTimeout(timeout);
  }, [phase, onComplete]);

  const handleTransitionEnd = useCallback(() => {
    if (phase === "reveal") {
      setPhase("done");
      onComplete();
    }
  }, [phase, onComplete]);

  if (phase === "done") return null;

  const getPixelatedText = (text: string, revealed: number) => {
    return text
      .split("")
      .map((char, index) => {
        if (index < revealed) return char;
        if (char === " ") return " ";
        return pixelChars[(pixelFrame + index) % pixelChars.length];
      })
      .join("");
  };

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-700 ease-in-out ${
        phase === "reveal"
          ? "opacity-0 scale-105 pointer-events-none"
          : "opacity-100 scale-100"
      }`}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-8 h-8 border-l-2 border-t-2 border-primary/30" />
      <div className="absolute top-8 right-8 w-8 h-8 border-r-2 border-t-2 border-primary/30" />
      <div className="absolute bottom-8 left-8 w-8 h-8 border-l-2 border-b-2 border-primary/30" />
      <div className="absolute bottom-8 right-8 w-8 h-8 border-r-2 border-b-2 border-primary/30" />

      <div className="relative text-center">
        {LINES.map((line, lineIndex) => {
          const isActive = lineIndex <= currentLine;
          const displayText =
            lineIndex < currentLine
              ? line.text
              : lineIndex === currentLine
                ? line.mono
                  ? line.text.slice(0, currentChar)
                  : getPixelatedText(line.text, currentChar)
                : "";
          const isCurrentLine = lineIndex === currentLine && phase === "typing";

          return (
            <div
              key={lineIndex}
              className={`transition-opacity duration-300 ${isActive ? "opacity-100" : "opacity-0"}`}
            >
              {line.mono ? (
                <p className="font-mono text-sm md:text-base text-primary/60 mt-4 tracking-wider">
                  {displayText}
                  {isCurrentLine && (
                    <span
                      className={`inline-block w-[2px] h-4 bg-primary/60 ml-0.5 align-middle transition-opacity duration-100 ${
                        showCaret ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  )}
                </p>
              ) : (
                <h1
                  className={`text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1] ${
                    lineIndex === 1 ? "text-primary" : "text-foreground"
                  }`}
                >
                  {displayText}
                  {isCurrentLine && (
                    <span
                      className={`inline-block w-[3px] h-[0.85em] ml-1 align-middle transition-opacity duration-100 ${
                        lineIndex === 1 ? "bg-primary" : "bg-foreground"
                      } ${showCaret ? "opacity-100" : "opacity-0"}`}
                    />
                  )}
                </h1>
              )}
            </div>
          );
        })}

        <pre className="mt-8 font-mono text-[10px] leading-4 text-primary/45">
{`[ boot ]
pixel stream: ${String(Math.min(99, pixelFrame * 3)).padStart(2, "0")}%
identity map: george.lazaridis`}
        </pre>

        {/* Progress bar */}
        <div className="mt-10 mx-auto w-48 h-px bg-border overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-300 ease-out"
            style={{
              width: `${phase === "hold" || phase === "reveal" ? 100 : (currentLine / LINES.length) * 100 + (currentChar / (LINES[currentLine]?.text.length || 1)) * (100 / LINES.length)}%`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
