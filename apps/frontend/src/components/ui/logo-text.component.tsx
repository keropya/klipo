import React from 'react';

export const LogoTextComponent = () => {
  return (
    <div className="flex items-center gap-[12px]">
      <img
        src="/klipo.png"
        alt="Klipo"
        width={40}
        height={40}
        className="rounded-[10px]"
      />
      <span className="text-[26px] font-bold tracking-tight">Klipo</span>
    </div>
  );
};
