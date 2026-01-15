import React, { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { Text as BaseText, View } from 'react-native';
import type { Content } from 'mdast';

export interface ComponentContextValue {
  Text: typeof BaseText;
  Block: React.ComponentType<{ node: Content; children?: ReactNode }>;
}

const DefaultBlock: React.ComponentType<
  React.ComponentProps<typeof View> & { node: Content }
> = ({ node, ...props }) => <View {...props} />;

const ComponentContext = createContext<ComponentContextValue>({
  Text: BaseText,
  Block: DefaultBlock,
});

export const ComponentProvider = ComponentContext.Provider;

export function useComponents(): ComponentContextValue {
  return useContext(ComponentContext);
}
