import React from 'react';
import { CardProps } from '../../types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  padding = 'md',
  shadow = true,
  border = false,
}) => {
  const classes = [
    'card',
    `card-${padding}`,
    shadow ? 'shadow' : '',
    border ? 'border' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

export default Card;
