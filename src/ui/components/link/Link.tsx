import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import './Link.scss';
import { LinkProps } from './types';

export const Link = ({
  children,
  href,
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <ReactRouterLink to={href} className="link">
      {children}
    </ReactRouterLink>
  );
};
