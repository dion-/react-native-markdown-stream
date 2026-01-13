import type { TextProps } from 'react-native';
import type { ReactNode } from 'react';
import { useComponents } from './ComponentContext';

export interface TextBlockProps extends TextProps {
  children: ReactNode;
}

export function TextBlock({ children, ...rest }: TextBlockProps) {
  const { Text } = useComponents();
  return <Text {...rest}>{children}</Text>;
}
