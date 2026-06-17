"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts"
import type { PerformancePoint } from "@/lib/mock-dashboard"
import { MOCK_DOGS } from "@/lib/mock-dashboard"

const METRICS = [
  { key: "accuracy", label: "Accuracy %", color: "#6D7935" },
  { key: "articles", label: "Articles Found", color: "#E0B841" },
  { key: "speed", label: "Relative Speed", color: "#745947" },
] as const

interface PerformanceChartProps {
  data: Record<string, PerformancePoint[]>
}

export function PerformanceChart({ data }: PerformanceChartProps) {
  const dogIds = Object.keys(data)
  const [selectedDog, setSelectedDog] = useState(dogIds[0])

  const chartData = data[selectedDog] ?? []

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h2 className="font-display text-lg font-bold text-foreground">Performance Over Time</h2>
        {/* Dog selector */}
        <div className="flex flex-wrap gap-2">
          {dogIds.map((id) => {
            const dog = MOCK_DOGS.find((d) => d.id === id)
            return (
              <button
                key={id}
                type="button"
                onClick={() => setSelectedDog(id)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                  selectedDog === id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground/70 hover:bg-muted/80"
                }`}
              >
                {dog?.name ?? id}
              </button>
            )
          })}
        </div>
      </div>

      <div className="h-60">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 4, right: 4, bottom: 0, left: -16 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "var(--muted-foreground)" }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                fontSize: 12,
                color: "var(--foreground)",
              }}
            />
            <Legend
              iconType="circle"
              iconSize={8}
              wrapperStyle={{ fontSize: 11, color: "var(--muted-foreground)" }}
            />
            {METRICS.map((m) => (
              <Line
                key={m.key}
                type="monotone"
                dataKey={m.key}
                name={m.label}
                stroke={m.color}
                strokeWidth={2}
                dot={{ r: 3, fill: m.color }}
                activeDot={{ r: 5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
