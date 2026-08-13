import type { SymbolViewProps } from 'expo-symbols';
import type { ColorValue } from 'react-native';

import { Icon } from '@/components/icon';

type TabBarIconProps = {
  focused: boolean;
  color: ColorValue;
  size: number;
};

type TabIconProps = TabBarIconProps & {
  name: SymbolViewProps['name'];
};

export function TabIcon({ name, color, size }: TabIconProps) {
  return <Icon name={name} size={size} color={color} />;
}
