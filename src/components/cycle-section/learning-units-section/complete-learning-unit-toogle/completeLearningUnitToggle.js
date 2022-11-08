import useCurrentUser from '@hooks/useCurrentUser';
import { CompleteLearningUnitToggleNoAuth } from './CompleteLearningUnitToggleNoAuth';
import { CompleteLearningUnitToggleAuth } from './CompleteLearningUnitToggleAuth';

export const CompleteLearningUnitToggle = ({ unit, showSuccess, mutate }) => {
  const currentUser = useCurrentUser();
  if (currentUser) {
    return (
      <CompleteLearningUnitToggleAuth
        unit={unit}
        showSuccess={showSuccess}
        mutate={mutate}
      />
    );
  }

  return <CompleteLearningUnitToggleNoAuth />;
};
