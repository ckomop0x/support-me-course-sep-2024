'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useState } from 'react';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/Tooltip';

interface LightDarkToggleProps {
  className?: string;
}

export function LightDarkToggle({ className }: LightDarkToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={className}
          onClick={() => {
            setIsDarkMode(prevState => !prevState);
            document.body.classList.toggle('dark');
          }}
        >
          {isDarkMode ? <MoonIcon /> : <SunIcon />}
        </TooltipTrigger>
        <TooltipContent>
          {isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
