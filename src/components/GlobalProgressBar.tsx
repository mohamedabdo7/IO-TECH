"use client";
import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function GlobalProgressBar() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    let progressInterval: NodeJS.Timeout | null = null;
    let timeoutId: NodeJS.Timeout | null = null;

    const startProgress = () => {
      setIsLoading(true);
      setProgress(0);

      if (progressInterval) clearInterval(progressInterval);

      progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 85) return 85; // Stop at 85% until navigation completes
          return prev + Math.random() * 15 + 5; // Faster progress
        });
      }, 100);

      // Fallback to complete after 10 seconds
      timeoutId = setTimeout(() => {
        completeProgress();
      }, 10000);
    };

    const completeProgress = () => {
      if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }

      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    };

    // Method 1: Override router methods
    const originalPush = router.push;
    const originalReplace = router.replace;
    const originalBack = router.back;

    router.push = async (...args) => {
      startProgress();
      return originalPush.apply(router, args);
    };

    router.replace = async (...args) => {
      startProgress();
      return originalReplace.apply(router, args);
    };

    router.back = () => {
      startProgress();
      return originalBack.call(router);
    };

    // Method 2: Listen for link clicks (backup method)
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");

      if (link && link.href) {
        try {
          const url = new URL(link.href);
          const currentUrl = new URL(window.location.href);

          // Check if it's an internal link and different path
          if (
            url.origin === currentUrl.origin &&
            url.pathname !== currentUrl.pathname &&
            !link.target &&
            !link.download
          ) {
            setTimeout(startProgress, 50); // Small delay
          }
        } catch (error) {
          console.error("Failed to parse URL:", error);
          // Invalid URL, ignore
        }
      }
    };

    // Method 3: Listen for popstate (browser navigation)
    const handlePopState = () => {
      startProgress();
    };

    // Add event listeners
    document.addEventListener("click", handleLinkClick, true); // Use capture phase
    window.addEventListener("popstate", handlePopState);

    // Cleanup function
    return () => {
      // Restore original router methods
      router.push = originalPush;
      router.replace = originalReplace;
      router.back = originalBack;

      // Remove event listeners
      document.removeEventListener("click", handleLinkClick, true);
      window.removeEventListener("popstate", handlePopState);

      // Clear intervals and timeouts
      if (progressInterval) clearInterval(progressInterval);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [router]);

  // Complete progress when pathname changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
      }, 300);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Don't render if not loading
  if (!isLoading) return null;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-200 ease-out shadow-sm"
          style={{
            width: `${progress}%`,
            boxShadow: "0 0 8px rgba(59, 130, 246, 0.4)",
          }}
        />
      </div>

      {/* Debug indicator (remove this in production) */}
      {process.env.NODE_ENV === "development" && (
        <div className="fixed top-2 right-2 z-[9999] bg-black text-white px-2 py-1 text-xs rounded">
          Loading: {progress.toFixed(0)}%
        </div>
      )}
    </>
  );
}
