import React, { createContext, useContext } from 'react';
import { Text as BaseText, Pressable } from 'react-native';
import type { Content } from 'mdast';

export interface ComponentContextValue {
  Text: typeof BaseText;
  Block: React.ComponentType<
    React.ComponentProps<typeof Pressable> & { node: Content }
  >;
}

const DefaultBlock: React.ComponentType<
  React.ComponentProps<typeof Pressable> & { node: Content }
> = ({ node, ...props }) => <Pressable {...props} />;

const ComponentContext = createContext<ComponentContextValue>({
  Text: BaseText,
  Block: DefaultBlock,
});

export const ComponentProvider = ComponentContext.Provider;

export function useComponents(): ComponentContextValue {
  return useContext(ComponentContext);
}
