import { EmptyState } from '@/components/ui/empty-state';
import { Screen } from '@/components/ui/screen';

export default function AttendanceScreen() {
  return (
    <Screen centered>
      <EmptyState
        icon={{ ios: 'checkmark.seal.fill', android: 'fact_check', web: 'fact_check' }}
        title="Attendance tracking is coming"
        message="Add subjects and record your attendance here after the Attendance phase. You'll see your percentage, classes you can miss, and more."
      />
    </Screen>
  );
}
