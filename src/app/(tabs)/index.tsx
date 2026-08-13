import { StyleSheet, View } from 'react-native';

import { AppHeader } from '@/components/app-header';
import { Card } from '@/components/ui/card';
import { EmptyState } from '@/components/ui/empty-state';
import { Screen } from '@/components/ui/screen';
import { Section } from '@/components/ui/section';
import { Spacing } from '@/constants/theme';

export default function HomeScreen() {
  return (
    <Screen scroll>
      <AppHeader />
      <View style={styles.sections}>
        <Section title="Attendance">
          <Card>
            <EmptyState
              compact
              icon={{ ios: 'checkmark.seal.fill', android: 'fact_check', web: 'fact_check' }}
              title="No subjects yet"
              message="Track your attendance by adding subjects in an upcoming phase."
            />
          </Card>
        </Section>

        <Section title="Today's timetable">
          <Card>
            <EmptyState
              compact
              icon={{ ios: 'calendar', android: 'calendar_month', web: 'calendar_month' }}
              title="No classes today"
              message="Your weekly timetable will appear here."
            />
          </Card>
        </Section>

        <Section title="Today's tasks">
          <Card>
            <EmptyState
              compact
              icon={{ ios: 'checkmark.circle.fill', android: 'check_circle', web: 'check_circle' }}
              title="No tasks yet"
              message="Study tasks for today will show up here."
            />
          </Card>
        </Section>

        <Section title="Focus">
          <Card>
            <EmptyState
              compact
              icon={{ ios: 'timer', android: 'timer', web: 'timer' }}
              title="Ready when you are"
              message="Start a focus session with the upcoming Focus feature."
            />
          </Card>
        </Section>

        <Section title="Upcoming exam">
          <Card>
            <EmptyState
              compact
              icon={{ ios: 'flag.fill', android: 'flag', web: 'flag' }}
              title="No upcoming exams"
              message="Exam countdowns will appear here."
            />
          </Card>
        </Section>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  sections: {
    gap: Spacing.five,
  },
});
