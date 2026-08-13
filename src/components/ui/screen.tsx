import type { PropsWithChildren } from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  type StyleProp,
  type ViewStyle,
} from 'react-native';
import { SafeAreaView, type Edge } from 'react-native-safe-area-context';

import { MaxContentWidth, Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type ScreenProps = PropsWithChildren<{
  /** Renders children inside a ScrollView. Defaults to `true`. */
  scroll?: boolean;
  /** Centers children vertically and horizontally. */
  centered?: boolean;
  /** Safe area edges applied by the container. */
  edges?: Edge[];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}>;

export function Screen({
  scroll = true,
  centered = false,
  edges = ['top'],
  style,
  contentContainerStyle,
  children,
}: ScreenProps) {
  const theme = useTheme();

  const inner = (
    <View style={[styles.inner, contentContainerStyle, centered && styles.centered]}>
      {children}
    </View>
  );

  return (
    <SafeAreaView
      edges={edges}
      style={[styles.safeArea, { backgroundColor: theme.background }, style]}>
      {scroll ? (
        <ScrollView
          contentContainerStyle={[styles.scrollContent, centered && styles.scrollCentered]}>
          {inner}
        </ScrollView>
      ) : (
        inner
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  scrollCentered: {
    justifyContent: 'center',
  },
  inner: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.four,
    paddingBottom: Spacing.four,
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
