import { EmptyState } from '@/components/ui/empty-state';
import { Screen } from '@/components/ui/screen';

export default function TimetableScreen() {
  return (
    <Screen centered>
      <EmptyState
        icon={{ ios: 'calendar', android: 'calendar_month', web: 'calendar_month' }}
        title="Your timetable will live here"
        message="Plan your weekly classes and see today's schedule in a future phase."
      />
    </Screen>
  );
}
