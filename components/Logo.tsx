"use client";

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = "", width = 150, height = 50 }: LogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div style={{ width, height }} />;
  }

  const logoSrc = resolvedTheme === 'dark' 
    ? '/images/logo-dark.png' 
    : '/images/logo-light.png';

  return (
    <Image
      src={logoSrc}
      alt="Daniel Romero"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
