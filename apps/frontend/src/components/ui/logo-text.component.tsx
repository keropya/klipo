import React from 'react';

export const LogoTextComponent = () => {
  return (
    <svg
      width="120"
      height="40"
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Klipo"
    >
      <rect x="0" y="4" width="32" height="32" rx="9" fill="#612BD3" />
      <path d="M13 12.5V27.5L25 20L13 12.5Z" fill="white" />
      <text
        x="42"
        y="29"
        fill="currentColor"
        fontFamily="Plus Jakarta Sans, Inter, system-ui, sans-serif"
        fontSize="26"
        fontWeight="700"
        letterSpacing="-0.5"
      >
        Klipo
      </text>
    </svg>
  );
};
