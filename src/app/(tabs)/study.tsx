import { EmptyState } from '@/components/ui/empty-state';
import { Screen } from '@/components/ui/screen';

export default function StudyScreen() {
  return (
    <Screen centered>
      <EmptyState
        icon={{ ios: 'book.fill', android: 'school', web: 'school' }}
        title="Plan your studies here"
        message="Create tasks, track exam countdowns, and manage your study plan in a future phase."
      />
    </Screen>
  );
}
