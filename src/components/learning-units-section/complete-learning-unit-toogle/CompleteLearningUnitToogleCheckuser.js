import useCurrentUser from '@hooks/useCurrentUser';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import Link from 'next/link';
import { Skeleton } from 'primereact/skeleton';
import { ToggleButton } from 'primereact/togglebutton';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';
import styles from './CompleteLearningUnitToogle.module.scss';
import { CompleteLearningUnitToggleAuth } from './CompleteLearningUnitToogleAuth';

export const CompleteLearningUnitToggleCheckuser = ({ unit, showSuccess }) => {
  const currentUser = useCurrentUser();

  const toogleButton = () => {
    if (currentUser) {
      return <CompleteLearningUnitToggleAuth unit={unit} showSuccess={showSuccess} />;
    } else {
      return (
        <Link href="/users/sign_in">
          <div>
            <CompleteLearningUnitToggle disabled={true} />
          </div>
        </Link>
      );
    }
  };
  return <div className={styles.checkbox}>{toogleButton()}</div>;
};
