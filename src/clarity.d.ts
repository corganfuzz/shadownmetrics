import React from 'react';

declare module 'react' {
  namespace JSX {
    interface IntrinsicElements {
      'cds-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        shape?: string;
        size?: string;
        solid?: string | boolean;
        badge?: string;
        role?: string;
        'aria-label'?: string;
        'aria-current'?: string | boolean;
      };
      'clr-spinner': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'clr-medium'?: boolean | string;
        'aria-label'?: string;
      };
    }
  }
}
