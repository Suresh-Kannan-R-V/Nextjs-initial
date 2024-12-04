"use client";

import { useCallback } from "react";

export function useScrollToSection(offset = 80) {
  return useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    },
    [offset]
  );
}
