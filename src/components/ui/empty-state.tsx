import type { SymbolViewProps } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

import { Icon } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

import { Button } from './button';

type EmptyStateProps = {
  icon?: SymbolViewProps['name'];
  title: string;
  message?: string;
  action?: { label: string; onPress?: () => void };
  /** Smaller variant for inline placeholders. */
  compact?: boolean;
};

export function EmptyState({ icon, title, message, action, compact = false }: EmptyStateProps) {
  const theme = useTheme();

  return (
    <View style={[styles.container, !compact && styles.standalone]}>
      {icon && (
        <Icon
          name={icon}
          size={compact ? 28 : 48}
          color={theme.textSecondary}
        />
      )}
      <ThemedText
        type={compact ? 'smallBold' : 'subtitle'}
        style={styles.title}>
        {title}
      </ThemedText>
      {message && (
        <ThemedText type="small" themeColor="textSecondary" style={styles.message}>
          {message}
        </ThemedText>
      )}
      {action && (
        <Button variant="secondary" size="sm" onPress={action.onPress}>
          {action.label}
        </Button>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: Spacing.two,
  },
  standalone: {
    gap: Spacing.three,
  },
  title: {
    textAlign: 'center',
  },
  message: {
    textAlign: 'center',
    maxWidth: 420,
  },
});
