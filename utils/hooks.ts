// utils/hooks.ts
import { useState, useEffect } from 'react';

/**
 * Custom hook to determine if the current viewport width matches a desktop size.
 * @param breakpoint The minimum width (in pixels) to be considered desktop. Defaults to 1024.
 * @returns True if the viewport width is greater than the breakpoint, false otherwise.
 */
export function useIsDesktop(breakpoint = 1024): boolean {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if window is defined (for server-side rendering or build time)
    if (typeof window === 'undefined') {
      // Potentially set a default or handle server-side logic if needed
      // For now, we'll assume client-side execution for the hook's primary purpose.
      // If rendering server-side and you need a specific behavior, you might initialize
      // isDesktop based on user-agent or other server-side detectable factors,
      // though this hook is primarily for client-side responsiveness.
      return;
    }

    const updateMedia = () => {
      setIsDesktop(window.innerWidth > breakpoint);
    };

    // Initial check
    updateMedia();

    // Listen for window resize
    window.addEventListener('resize', updateMedia);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', updateMedia);
  }, [breakpoint]); // Re-run effect if breakpoint changes

  return isDesktop;
}