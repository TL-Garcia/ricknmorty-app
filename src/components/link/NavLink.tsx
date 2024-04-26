import React from 'react';
import { NavLink as ReactRouterLink } from 'react-router-dom';
import './Link.scss';
import { LinkProps } from './types';

export const NavLink = ({
  children,
  href,
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <ReactRouterLink to={href} className="link">
      {children}
    </ReactRouterLink>
  );
};
