"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function ProgressBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
      setProgress(0);
      
      // Simulate progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 30;
        });
      }, 200);

      return interval;
    };

    const handleComplete = () => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 200);
    };

    // Start loading on route change
    const interval = handleStart();
    
    // Complete loading after a short delay (simulating page load)
    const timeout = setTimeout(handleComplete, 500);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [pathname, searchParams]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent">
      <div
        className="h-full bg-red-600 transition-all duration-200 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: "0 0 10px rgba(239, 68, 68, 0.5)",
        }}
      />
    </div>
  );
}