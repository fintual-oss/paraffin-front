import Link from 'next/link';
import { Tooltip } from 'primereact/tooltip';
import { CompleteLearningUnitToggle } from './CompleteLearningUnitToogle';

export const CompleteLearningUnitToggleNoAuth = () => {
  return (
    <Link href="/users/sign_in">
      <div>
        <Tooltip target="disabled-toggle" tooltipOptions={{ showOnDisabled: true }} />
        <span className="disabled-toggle" data-pr-tooltip="A Disabled Button">
          <CompleteLearningUnitToggle className="p-disabled" />
        </span>
      </div>
    </Link>
  );
};
