import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/joy/Button';
import { forwardRef } from 'react';
import { buttonStyle } from './style';

interface ButtonProps extends MUIButtonProps {}

/**
 * @see {@link https://mui.com/joy-ui/react-button MUIButton}
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { children, sx, ...rest } = props;
    return (
      <MUIButton
        ref={ref}
        sx={[
          {
            ...buttonStyle.rootSx,
          },
          ...(Array.isArray(sx) ? sx : [sx]),
        ]}
        {...rest}
      >
        {children}
      </MUIButton>
    );
  },
);

// Assigning a display name for better debugging.
Button.displayName = 'Button';
