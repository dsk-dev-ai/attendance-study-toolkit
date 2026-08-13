import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { Card } from '@/components/ui/card';
import { Screen } from '@/components/ui/screen';
import { Spacing } from '@/constants/theme';

function SettingRow({ label, value }: { label: string; value: string }) {
  return (
    <View style={styles.row}>
      <ThemedText>{label}</ThemedText>
      <ThemedText type="small" themeColor="textSecondary">
        {value}
      </ThemedText>
    </View>
  );
}

export default function SettingsScreen() {
  const version = Constants.expoConfig?.version ?? '1.0.0';

  return (
    <Screen scroll edges={['top', 'bottom']} contentContainerStyle={styles.container}>
      <Card contentContainerStyle={styles.group}>
        <SettingRow label="Theme" value="Follow system" />
      </Card>
      <Card contentContainerStyle={styles.group}>
        <SettingRow label="Version" value={version} />
        <SettingRow label="About" value="Attendance + Study Toolkit" />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: Spacing.three,
  },
  group: {
    gap: Spacing.one,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.two,
  },
});
