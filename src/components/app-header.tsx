import { router } from 'expo-router';
import { Pressable, StyleSheet, View } from 'react-native';

import { Icon } from '@/components/icon';
import { ThemedText } from '@/components/themed-text';
import { Spacing } from '@/constants/theme';
import { useTheme } from '@/hooks/use-theme';

export function AppHeader() {
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <ThemedText style={styles.brand}>Attendance + Study Toolkit</ThemedText>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Open settings"
        hitSlop={Spacing.two}
        onPress={() => router.push('/settings')}
        style={({ pressed }) => pressed && styles.pressed}>
        <Icon
          name={{ ios: 'gearshape.fill', android: 'settings', web: 'settings' }}
          size={24}
          color={theme.text}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.three,
  },
  brand: {
    fontSize: 22,
    fontWeight: '700',
  },
  pressed: {
    opacity: 0.6,
  },
});
