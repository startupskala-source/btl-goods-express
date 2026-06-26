"use client";

import { motion } from "motion/react";

export interface BrazilPin {
  city: string;
  uf: string;
  lat: number;
  lng: number;
  hq?: boolean;
}

interface BrazilMapProps {
  pins: BrazilPin[];
  color?: string;
}

// Bounding box of continental Brazil
const BBOX = { minLng: -74, maxLng: -34, minLat: -34, maxLat: 5.5 };
const VIEW_W = 600;
const VIEW_H = 640;

function project(lat: number, lng: number) {
  const x = ((lng - BBOX.minLng) / (BBOX.maxLng - BBOX.minLng)) * VIEW_W;
  const y = ((BBOX.maxLat - lat) / (BBOX.maxLat - BBOX.minLat)) * VIEW_H;
  return { x, y };
}

// Simplified but recognizable Brazil silhouette (hand-tuned to bbox above).
const BRAZIL_PATH =
  "M 470 70 L 495 95 L 510 130 L 525 175 L 520 215 L 540 245 L 555 280 L 560 320 L 545 360 L 525 395 L 500 425 L 475 455 L 450 485 L 420 510 L 390 525 L 360 535 L 330 530 L 305 510 L 285 480 L 270 445 L 260 410 L 250 375 L 235 345 L 215 320 L 190 305 L 165 295 L 140 280 L 120 255 L 110 225 L 105 195 L 115 165 L 130 140 L 150 120 L 175 105 L 205 95 L 240 90 L 275 95 L 310 90 L 345 80 L 380 70 L 415 65 L 450 65 Z";

export function BrazilMap({ pins, color = "oklch(0.38 0.14 18)" }: BrazilMapProps) {
  const hq = pins.find((p) => p.hq);
  const hqPt = hq ? project(hq.lat, hq.lng) : null;

  return (
    <div className="relative w-full">
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="block h-auto w-full"
        role="img"
        aria-label="Mapa do Brasil com filiais"
      >
        <defs>
          <linearGradient id="brz-fill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.92" />
            <stop offset="100%" stopColor={color} stopOpacity="0.75" />
          </linearGradient>
          <filter id="brz-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor={color} floodOpacity="0.25" />
          </filter>
          <radialGradient id="brz-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft glow behind map */}
        <ellipse cx={VIEW_W / 2} cy={VIEW_H / 2} rx={VIEW_W / 2.2} ry={VIEW_H / 2.4} fill="url(#brz-glow)" opacity="0.25" />

        {/* Brazil shape */}
        <motion.path
          d={BRAZIL_PATH}
          fill="url(#brz-fill)"
          stroke={color}
          strokeWidth="2"
          strokeLinejoin="round"
          filter="url(#brz-shadow)"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
        />

        {/* Connecting arcs from HQ */}
        {hqPt &&
          pins
            .filter((p) => !p.hq)
            .map((p, i) => {
              const end = project(p.lat, p.lng);
              const mx = (hqPt.x + end.x) / 2;
              const my = Math.min(hqPt.y, end.y) - 40;
              const d = `M ${hqPt.x} ${hqPt.y} Q ${mx} ${my} ${end.x} ${end.y}`;
              return (
                <motion.path
                  key={`arc-${p.uf}`}
                  d={d}
                  fill="none"
                  stroke="white"
                  strokeOpacity="0.85"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.9 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.4 + i * 0.12, ease: "easeOut" }}
                />
              );
            })}

        {/* Pins */}
        {pins.map((p, i) => {
          const pt = project(p.lat, p.lng);
          const r = p.hq ? 9 : 6;
          return (
            <motion.g
              key={p.uf}
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + i * 0.08 }}
            >
              {p.hq && (
                <>
                  <circle cx={pt.x} cy={pt.y} r={r * 2.2} fill={color} opacity="0.18">
                    <animate attributeName="r" values={`${r};${r * 3};${r}`} dur="2.4s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="2.4s" repeatCount="indefinite" />
                  </circle>
                  <circle cx={pt.x} cy={pt.y} r={r * 1.5} fill={color} opacity="0.22" />
                </>
              )}
              <circle cx={pt.x} cy={pt.y} r={r + 2} fill="white" />
              <circle cx={pt.x} cy={pt.y} r={r} fill={color} />
              <circle cx={pt.x} cy={pt.y} r={r / 2.4} fill="white" />
              <text
                x={pt.x + r + 6}
                y={pt.y + 4}
                fontSize={p.hq ? 16 : 13}
                fontWeight={p.hq ? 800 : 700}
                fill={color}
                style={{ fontFamily: "Barlow, sans-serif", letterSpacing: "0.04em" }}
              >
                {p.uf}
              </text>
            </motion.g>
          );
        })}
      </svg>
    </div>
  );
}

export default BrazilMap;