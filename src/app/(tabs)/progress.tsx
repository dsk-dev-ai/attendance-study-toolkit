import { EmptyState } from '@/components/ui/empty-state';
import { Screen } from '@/components/ui/screen';

export default function ProgressScreen() {
  return (
    <Screen centered>
      <EmptyState
        icon={{ ios: 'chart.bar.fill', android: 'bar_chart', web: 'bar_chart' }}
        title="Progress will appear here"
        message="Attendance trends, study sessions, and completed tasks will be summarized once data is available."
      />
    </Screen>
  );
}
