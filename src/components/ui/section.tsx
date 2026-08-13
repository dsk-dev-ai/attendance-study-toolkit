import type { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

type SectionProps = PropsWithChildren<{
  title: string;
  action?: { label: string; onPress?: () => void };
}>;

export function Section({ title, action, children }: SectionProps) {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ThemedText type="smallBold" themeColor="textSecondary" style={styles.title}>
          {title.toUpperCase()}
        </ThemedText>
        {action && (
          <Pressable onPress={action.onPress} hitSlop={Spacing.two}>
            <ThemedText type="small" style={{ color: theme.primary }}>
              {action.label}
            </ThemedText>
          </Pressable>
        )}
      </View>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.two,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    letterSpacing: 0.6,
  },
});
