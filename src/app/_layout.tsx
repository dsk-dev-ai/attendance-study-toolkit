import { DarkTheme, DefaultTheme, Stack, ThemeProvider, type ErrorBoundaryProps } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import * as SystemUI from 'expo-system-ui';
import { useEffect } from 'react';
import { useColorScheme } from 'react-native';

import { ErrorState } from '@/components/ui/error-state';
import { Screen } from '@/components/ui/screen';
import { Colors } from '@/constants/theme';

export function ErrorBoundary({ error, retry }: ErrorBoundaryProps) {
  return (
    <Screen centered>
      <ErrorState message={error.message} onRetry={retry} />
    </Screen>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === 'dark';

  useEffect(() => {
    SystemUI.setBackgroundColorAsync(isDark ? Colors.dark.background : Colors.light.background);
  }, [isDark]);

  const sceneBackground = isDark ? Colors.dark.background : Colors.light.background;

  return (
    <ThemeProvider value={isDark ? DarkTheme : DefaultTheme}>
      <StatusBar style="auto" />
      <Stack screenOptions={{ contentStyle: { backgroundColor: sceneBackground } }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="settings"
          options={{ title: 'Settings', headerShown: true, headerBackButtonDisplayMode: 'minimal' }}
        />
      </Stack>
    </ThemeProvider>
  );
}
