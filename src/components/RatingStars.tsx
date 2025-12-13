"use client";
import React, { useState } from "react";

type Props = {
  rating?: number;
  editable?: boolean;
  onChange?: (r: number) => void;
};

export default function RatingStars({ rating = 0, editable = false, onChange }: Props) {
  const [value, setValue] = useState<number>(rating);
  const ICON_SIZE = 18; // fixed size to prevent runtime changes

  const handleSet = (i: number) => {
    if (!editable) return;
    setValue(i);
    onChange && onChange(i);
  };

  return (
    <div style={{ display: "inline-flex", gap: 6, alignItems: "center" }}>
      {Array.from({ length: 5 }).map((_, i) => {
        const idx = i + 1;
        const filled = idx <= value;
        return (
          <button
            key={idx}
            aria-label={`${idx} star`}
            onClick={() => handleSet(idx)}
            disabled={!editable}
            style={{
              background: "transparent",
              border: "none",
              padding: 0,
              cursor: editable ? "pointer" : "default",
              lineHeight: 0,
            }}
          >
            <svg
              width={ICON_SIZE}
              height={ICON_SIZE}
              viewBox="0 0 24 24"
              fill={filled ? "#FBBF24" : "none"}
              stroke={filled ? "#F59E0B" : "#6b7280"}
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 .587l3.668 7.431L24 9.753l-6 5.847L19.335 24 12 19.897 4.665 24 6 15.6 0 9.753l8.332-1.735z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
