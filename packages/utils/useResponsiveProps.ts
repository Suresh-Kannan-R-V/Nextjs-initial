'use client';

import { useLayoutEffect, useState } from 'react';
import { useWindowSize } from './useWindowSize';

export type ResponsiveVariants<T> = {
  mobile?: Partial<T>;
  tablet?: Partial<T>;
  laptop?: Partial<T>;
  desktop?: Partial<T>;
};

export function useResponsiveProps<T>(responsiveVariants?: ResponsiveVariants<T>): Partial<T> {
  const { isMobile, isTablet, isLaptop, isDesktop } = useWindowSize();

  const getResponsiveProps = () => {
    if (!responsiveVariants) {
      return {};
    }
    if (isDesktop && responsiveVariants.desktop) {
      return responsiveVariants.desktop;
    } else if (isLaptop && responsiveVariants.laptop) {
      return responsiveVariants.laptop;
    } else if (isTablet && responsiveVariants.tablet) {
      return responsiveVariants.tablet;
    } else if (isMobile && responsiveVariants.mobile) {
      return responsiveVariants.mobile;
    }
  };

  const [responsiveProps, setResponsiveProps] = useState<Partial<T>>(getResponsiveProps()!);

  useLayoutEffect(() => {
    const result = getResponsiveProps()!;
    setResponsiveProps(result);
  }, [isMobile, isTablet, isLaptop, isDesktop, responsiveVariants]);

  return responsiveProps;
}
