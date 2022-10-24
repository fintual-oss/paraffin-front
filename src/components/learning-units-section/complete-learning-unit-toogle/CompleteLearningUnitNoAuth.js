import Link from 'next/link';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';

export const CompleteLearningUnitToggleNoAuth = () => {
  return (
    <Link href="/users/sign_in">
      <div>
        <CompleteLearningUnitToggle className="p-disabled" tooltip="Necesita ingresar para completar" />
      </div>
    </Link>
  );
};
