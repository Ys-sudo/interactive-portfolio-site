"use client";

import Image from "next/image";
import { useState } from "react";
import { Navigation } from "@/components/portfolio/navigation";
import { Footer } from "@/components/portfolio/footer";
import { MagneticCursor } from "@/components/portfolio/magnetic-cursor";
import { ScrollProgress } from "@/components/portfolio/scroll-progress";
import { PORTFOLIO_SECTION_IMAGES } from "@/lib/portfolio";
import { scheduleData } from "@/lib/schedule-data";

type ScheduleMode = "base" | "light" | "progress";

export default function SchedulePage() {
  const [mode, setMode] = useState<ScheduleMode>("base");

  const modes: { id: ScheduleMode; label: string }[] = [
    { id: "base", label: "Standard" },
    { id: "light", label: "Light" },
    { id: "progress", label: "Progressive" },
  ];

  const currentDayPlan =
    scheduleData.dayPlans[mode as keyof typeof scheduleData.dayPlans];

  return (
    <>
      <MagneticCursor />
      <ScrollProgress />
      <Navigation />

      <main className="relative min-h-screen overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50" />

        {/* Glow effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-32">
          {/* Header */}
          <section className="mb-16">
            <div className="mb-8 max-w-3xl overflow-hidden rounded-[2rem] border border-border bg-card/70">
              <div className="aspect-[16/7] relative">
                <Image
                  src={PORTFOLIO_SECTION_IMAGES.schedule}
                  alt="Feature image for schedule page"
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/25 to-transparent" />
                <div className="absolute left-5 top-5 rounded-xl border border-primary/20 bg-background/75 px-3 py-2 backdrop-blur">
                  <pre className="font-mono text-[10px] leading-4 text-primary/55">
{`// routine.loader
[] focus
[] movement
[] recovery`}
                  </pre>
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-balance leading-tight mb-6">
              My <span className="text-primary">Schedule</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A daily system designed to protect the nervous system, circulation
              and eyes while working 8+ hours at a computer—with space for
              movement, creativity, relationships and calm.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              <span className="text-primary font-semibold">Key principle:</span>{" "}
              Breaks = regulation. Blocks = action.{" "}
              <span className="font-semibold">70% execution = success.</span>
            </p>
          </section>

          {/* Mode selector */}
          <section className="mb-12">
            <div className="flex gap-3 flex-wrap">
              {modes.map((m) => (
                <button
                  key={m.id}
                  onClick={() => setMode(m.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all text-sm ${
                    mode === m.id
                      ? "bg-primary text-primary-foreground"
                      : "border border-border text-muted-foreground hover:border-primary hover:text-foreground"
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>
          </section>

          {/* Daily schedule cards */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground">
              Daily Schedule
            </h2>
            <div className="space-y-3">
              {currentDayPlan.map((item, index) => (
                <div
                  key={index}
                  className="group bg-card/50 border border-border rounded-lg p-5 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="text-sm font-mono text-primary font-semibold mb-2">
                        {item.time}
                      </div>
                      <h3 className="text-base font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Weekly structure */}
          <section className="mb-20">
            <h2 className="text-2xl font-bold mb-8 text-foreground">
              Weekly Structure
            </h2>
            <div className="space-y-4">
              {scheduleData.weekPlan.map((day, index) => (
                <div
                  key={index}
                  className="group bg-card/50 border border-border rounded-lg p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
                >
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-foreground mb-1">
                      {day.day}
                    </h3>
                    <p className="text-sm text-primary font-medium italic">
                      {day.theme}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {/* Work */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-3">
                        Work
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>• {day.work.focus}</p>
                        <p>
                          • Intensity:{" "}
                          <span className="text-foreground">
                            {day.work.intensity}
                          </span>
                        </p>
                        {day.work.notes && <p>• {day.work.notes}</p>}
                      </div>
                    </div>

                    {/* Movement */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-3">
                        Movement
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>• {day.movement.type}</p>
                        <p>
                          • Time:{" "}
                          <span className="text-foreground">
                            {day.movement.duration}
                          </span>
                        </p>
                        <p>
                          • Intensity:{" "}
                          <span className="text-foreground">
                            {day.movement.intensity}
                          </span>
                        </p>
                        {day.movement.notes && <p>• {day.movement.notes}</p>}
                      </div>
                    </div>

                    {/* Art */}
                    <div>
                      <h4 className="font-semibold text-foreground text-sm mb-3">
                        Art
                      </h4>
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p>• {day.art.type}</p>
                        <p>
                          • Time:{" "}
                          <span className="text-foreground">
                            {day.art.duration}
                          </span>
                        </p>
                        {day.art.notes && <p>• {day.art.notes}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
