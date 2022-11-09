import { CompleteToggle } from '@components/common/complete-toggle/CompleteToggle';
import useCurrentUser from '@hooks/useCurrentUser';
import useLoginDialog from '@hooks/useLoginDialog';
import ResourceCompleteButtonAuth from './ResourceCompleteButtonAuth';

const ResourceCompleteButton = ({ resourceId }) => {
  const currentUser = useCurrentUser();
  const loginDialog = useLoginDialog();

  if (currentUser) {
    return <ResourceCompleteButtonAuth resourceId={resourceId} />;
  }

  return (
    <div
      className="cardEvaluation"
      onClick={() => {
        loginDialog.setDisplayLoginDialog(true);
      }}
      onKeyPress={null}
      role="button"
      tabIndex="0"
      data-pr-tooltip="Ingresa para poder completar un recurso"
      data-pr-position="left"
    >
      <CompleteToggle disabled={true} />
    </div>
  );
};

export default ResourceCompleteButton;
