'use client';

import { useEffect, useRef } from 'react';

export function useSwipe(
  callbackUp: () => void,
  callbackDown: () => void,
  minSwipeDistance = 50,
  elementId: string | null = null
): void {
  const startYRef = useRef<number | null>(null);

  useEffect(() => {
    const element = elementId ? document.getElementById(elementId) : document.body;

    const handleTouchStart = (e: TouchEvent) => {
      if (startYRef.current === null || !e.touches || e.touches.length === 0) return;
      startYRef.current = e.touches[0]?.clientY ?? 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (startYRef.current === null || !e.touches || e.touches.length === 0) return;

      const currentY = e.touches[0]?.clientY ?? 0;
      const swipeDistance = startYRef.current - currentY;

      if (Math.abs(swipeDistance) > minSwipeDistance) {
        // Prevent the default scroll behavior while swiping
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (startYRef.current === null) return; // No touchstart recorded

      const endY = e.changedTouches[0]?.clientY ?? 0;
      const swipeDistance = startYRef.current - endY;

      if (swipeDistance > minSwipeDistance) {
        callbackUp();
      } else if (swipeDistance < -minSwipeDistance) {
        callbackDown();
      }

      // Reset startYRef
      startYRef.current = null;
    };

    element!.addEventListener('touchstart', handleTouchStart);
    element!.addEventListener('touchmove', handleTouchMove);
    element!.addEventListener('touchend', handleTouchEnd);

    return () => {
      element!.removeEventListener('touchstart', handleTouchStart);
      element!.removeEventListener('touchmove', handleTouchMove);
      element!.removeEventListener('touchend', handleTouchEnd);
    };
  }, [callbackUp, callbackDown, minSwipeDistance, elementId]);
}
