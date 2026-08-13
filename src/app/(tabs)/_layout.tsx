import { Tabs } from 'expo-router/js-tabs';
import { StyleSheet } from 'react-native';

import { TabIcon } from '@/components/tab-icon';
import { useTheme } from '@/hooks/use-theme';

export default function TabsLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.primary,
        tabBarInactiveTintColor: theme.textSecondary,
        tabBarStyle: {
          backgroundColor: theme.background,
          borderTopColor: theme.border,
          borderTopWidth: StyleSheet.hairlineWidth,
        },
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
        headerTitleStyle: { fontWeight: '600' },
        headerShadowVisible: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: (props) => (
            <TabIcon name={{ ios: 'house.fill', android: 'home', web: 'home' }} {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="attendance"
        options={{
          title: 'Attendance',
          tabBarIcon: (props) => (
            <TabIcon
              name={{ ios: 'checkmark.seal.fill', android: 'fact_check', web: 'fact_check' }}
              {...props}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="timetable"
        options={{
          title: 'Timetable',
          tabBarIcon: (props) => (
            <TabIcon
              name={{ ios: 'calendar', android: 'calendar_month', web: 'calendar_month' }}
              {...props}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="study"
        options={{
          title: 'Study',
          tabBarIcon: (props) => (
            <TabIcon name={{ ios: 'book.fill', android: 'school', web: 'school' }} {...props} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: (props) => (
            <TabIcon
              name={{ ios: 'chart.bar.fill', android: 'bar_chart', web: 'bar_chart' }}
              {...props}
            />
          ),
        }}
      />
    </Tabs>
  );
}
