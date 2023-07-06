import React from 'react';

import cn from "classnames";

import styles from "./Typography.module.scss";

type Props = {
  variant?: 'h1' | 'subtitle1' | 'subtitle2';
  className?: string;
  children?: React.ReactNode
  fontWeight?: "regular" | "bold" | "bolder"
}

export const Typography: React.FC<Props> = ({ variant = 'subtitle1', className, fontWeight = "regular", children }) => {
  const variantClassName = styles[variant];
  const fontWeightClassName = styles[fontWeight];

  const Component = variant.startsWith("subtitle") ? 'span' : variant;

  return React.createElement(Component, { className: cn(variantClassName, className, fontWeightClassName) }, children);
};
