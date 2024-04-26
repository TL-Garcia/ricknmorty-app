import React from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';

interface LinkProps {
  href: string;
}

export const Link = ({
  children,
  href,
}: React.PropsWithChildren<LinkProps>) => {
  return <ReactRouterLink to={href}>{children}</ReactRouterLink>;
};
