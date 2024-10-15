"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { ThemeProvider , ThemeSwitcher } from "@/components/ui/theme-provider";

export default function Home() {
  const words = [
    { text: "Hi", className: "text-black-500" },
    { text: "Shivaji", className: "text-black-500" },
    { text: "Here", className: "text-black-500" }
  ];
  
 
  return (
    <div className="flex justify-center items-center min-h-screen">
      <ThemeProvider>
        <div className="fixed top-4 right-4 z-50">
          <ThemeSwitcher />
        </div>
    
      <TypewriterEffectSmooth
        words={words}
        className="custom-class"
        cursorClassName="custom-cursor-class"
      />
      </ThemeProvider>
    </div>
  );
}



