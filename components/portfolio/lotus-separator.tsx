"use client"

export function LotusSeparator() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-5 rounded-[1.75rem] border border-primary/15 bg-card/40 px-6 py-8 shadow-[0_0_36px_hsl(var(--primary)/0.06)] backdrop-blur overflow-hidden">
          <svg
            viewBox="0 0 200 200"
            className="h-44 w-44 overflow-visible"
            aria-hidden="true"
          >
            <g className="origin-center animate-[spin_18s_linear_infinite]">
              <path
                d="M100 38C84 58 79 82 82 113C97 106 105 93 108 73C111 57 108 45 100 38Z"
                fill="none"
                stroke="hsl(var(--primary) / 0.72)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M76 68C57 79 47 98 44 126C66 125 83 118 95 102C104 90 106 78 100 64"
                fill="none"
                stroke="hsl(var(--primary) / 0.62)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M124 68C143 79 153 98 156 126C134 125 117 118 105 102C96 90 94 78 100 64"
                fill="none"
                stroke="hsl(var(--primary) / 0.62)"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M100 76V146"
              fill="none"
              stroke="hsl(var(--primary) / 0.34)"
              strokeWidth="1.8"
              strokeDasharray="5 6"
              className="animate-[pulse_4s_ease-in-out_infinite]"
            />
            <path
              d="M70 150C82 160 92 164 100 164C108 164 118 160 130 150"
              fill="none"
              stroke="hsl(var(--primary) / 0.42)"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

          <div className="flex items-center gap-6">
            <pre className="font-mono text-[10px] leading-4 text-primary/50">
{`> lotus.loop
[ line art ]
[ slow rotation ]`}
            </pre>
            <div className="grid grid-cols-5 gap-1">
              {Array.from({ length: 25 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-2.5 w-2.5 rounded-[2px] ${
                    index === 12 || index % 6 === 0 ? "bg-primary/35" : "bg-border/80"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
