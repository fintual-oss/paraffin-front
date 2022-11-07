import useCurrentUser from '@hooks/useCurrentUser';
import { CompleteLearningUnitToggleNoAuth } from './CompleteLearningUnitToggleNoAuth';
import { CompleteLearningUnitToggleAuth } from './CompleteLearningUnitToggleAuth';

export const CompleteLearningUnitToggle = ({ unit, showSuccess }) => {
  const currentUser = useCurrentUser();
  if (currentUser) {
    return (
      <CompleteLearningUnitToggleAuth unit={unit} showSuccess={showSuccess} />
    );
  }

  return <CompleteLearningUnitToggleNoAuth />;
};
