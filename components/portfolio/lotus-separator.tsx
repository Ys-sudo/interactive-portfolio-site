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
                d="M100 34C89 51 84 74 86 108C96 102 102 91 105 73C107 57 106 44 100 34Z"
                fill="none"
                stroke="hsl(var(--primary) / 0.74)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M72 70C56 82 47 99 44 124C61 122 76 115 88 101C97 90 100 80 97 67"
                fill="none"
                stroke="hsl(var(--primary) / 0.64)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M128 70C144 82 153 99 156 124C139 122 124 115 112 101C103 90 100 80 103 67"
                fill="none"
                stroke="hsl(var(--primary) / 0.64)"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <path
              d="M100 78V146"
              fill="none"
              stroke="hsl(var(--primary) / 0.34)"
              strokeWidth="1.6"
              strokeDasharray="5 6"
              className="animate-[pulse_4s_ease-in-out_infinite]"
            />
            <path
              d="M74 150C84 158 92 161 100 161C108 161 116 158 126 150"
              fill="none"
              stroke="hsl(var(--primary) / 0.42)"
              strokeWidth="1.6"
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
