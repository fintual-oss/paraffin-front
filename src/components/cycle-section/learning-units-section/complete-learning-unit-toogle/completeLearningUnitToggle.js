import useCurrentUser from '@hooks/useCurrentUser';
import { CompleteLearningUnitToggleNoAuth } from './CompleteLearningUnitToggleNoAuth';
import { CompleteLearningUnitToggleAuth } from './CompleteLearningUnitToggleAuth';

export const CompleteLearningUnitToggle = ({
  learningUnit,
  showSuccess,
  mutate,
}) => {
  const currentUser = useCurrentUser();
  if (currentUser) {
    return (
      <CompleteLearningUnitToggleAuth
        learningUnit={learningUnit}
        showSuccess={showSuccess}
        mutate={mutate}
      />
    );
  }

  return <CompleteLearningUnitToggleNoAuth />;
};
