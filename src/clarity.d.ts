import * as React from 'react';

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
        dir?: string;
      };
      'clr-spinner': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'cds-layout'?: string;
        'aria-label'?: string;
      };
      'cds-navigation': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        expanded?: boolean | string;
      };
      'cds-navigation-item': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        active?: boolean | string;
      };
      'cds-navigation-start': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      'cds-navigation-group': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        expanded?: boolean | string;
      };
    }
  }
}
