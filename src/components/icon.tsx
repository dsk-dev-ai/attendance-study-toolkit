import { SymbolView, type SymbolViewProps } from 'expo-symbols';
import type { ColorValue } from 'react-native';

type IconProps = {
  name: SymbolViewProps['name'];
  size?: number;
  color?: ColorValue;
};

export function Icon({ name, size = 24, color }: IconProps) {
  return <SymbolView name={name} size={size} tintColor={color} />;
}
