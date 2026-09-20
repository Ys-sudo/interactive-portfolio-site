"use client"

export function LotusSeparator() {
  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-5 rounded-[1.75rem] border border-primary/15 bg-card/40 px-6 py-8 shadow-[0_0_36px_hsl(var(--primary)/0.06)] backdrop-blur overflow-hidden">
          <svg
            viewBox="0 0 200 200"
            className="h-44 w-44 overflow-visible [perspective:900px]"
            aria-hidden="true"
          >
            <g className="origin-center lotus-y-spin [transform-box:fill-box]">
              <path
                d="M100 34C91 48 87 69 89 102C97 95 102 85 104 69C106 56 105 44 100 34Z"
                fill="none"
                stroke="hsl(var(--primary) / 0.74)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M71 69C57 79 48 95 45 118C61 117 74 111 85 99C93 89 96 79 94 68"
                fill="none"
                stroke="hsl(var(--primary) / 0.64)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M129 69C143 79 152 95 155 118C139 117 126 111 115 99C107 89 104 79 106 68"
                fill="none"
                stroke="hsl(var(--primary) / 0.64)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M100 80V146"
              fill="none"
              stroke="hsl(var(--primary) / 0.34)"
              strokeWidth="1.4"
              strokeDasharray="5 6"
              className="animate-[pulse_4s_ease-in-out_infinite]"
            />
            <path
              d="M76 149C85 156 92 159 100 159C108 159 115 156 124 149"
              fill="none"
              stroke="hsl(var(--primary) / 0.42)"
              strokeWidth="1.4"
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
