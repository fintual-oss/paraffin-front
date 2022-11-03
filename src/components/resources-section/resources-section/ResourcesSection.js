import { useRouter } from 'next/router';
import React, { useState } from 'react';
import useGet from '@hooks/useGet';
import { endpoints } from '@utils/endpoints';
import { Skeleton } from 'primereact/skeleton';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import AddNewResourceModal from '@components/resources-section/add-new-resource-modal/AddNewResourceModal';
import LearningUnitInformation from '@components/resources-section/learning-unit-information/LearningUnitInformation';
import ResourcesScroller from '../resources-scroller/ResourcesScroller';
import ResourceSection from '@components/resource-section/resource-section/ResourceSection';
import styles from './ResourcesSection.module.scss';
import useLoginDialog from '@hooks/useLoginDialog';
import useCurrentUser from '@hooks/useCurrentUser';
import { LoginDialog } from '@components/login-dialog/loginDialog';

const ResourcesSection = ({ learningUnitId }) => {
  const router = useRouter();
  const [displayBasic, setDisplayBasic] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeResource, setActiveResource] = useState(null);
  const currentUser = useCurrentUser();
  const loginDialog = useLoginDialog();

  const {
    data: learningUnit,
    isLoading: isLoadingUnit,
    isError: isErrorUnit,
  } = useGet(endpoints('learningUnit', learningUnitId));

  const {
    data: resources,
    isLoading: isLoadingResources,
    isError: isErrorResources,
    mutate: mutateResources,
  } = useGet(endpoints('learningUnitResources', learningUnitId));

  if (isLoadingUnit || isLoadingResources) {
    return <Skeleton shape="rectangle" width="100%" height="100%" />;
  }
  if (isErrorUnit || isErrorResources) {
    return 'error';
  }

  const saveResourceHandler = (bodyValues) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: bodyValues,
    };
    fetch(
      endpoints('learningUnitResources', learningUnitId),
      requestOptions
    ).then(() => {
      mutateResources();
      setDisplayBasic(false);
    });
  };

  const modalHandlers = {
    onHide: () => setDisplayBasic(false),
    onSave: saveResourceHandler,
  };

  const resourceSidebarOnHideHandler = () => {
    setSidebarVisible(false);
    setActiveResource(null);
  };

  const resourceViewButtonHandler = (resource) => {
    setActiveResource(resource);
    setSidebarVisible(true);
  };

  const addNewResourceButton = () => {
    if (currentUser) {
      return <Button icon="pi pi-plus" onClick={() => setDisplayBasic(true)} />;
    }

    return (
      <div
        onClick={() => loginDialog.setDisplayLoginDialog(true)}
        onKeyPress={null}
        role="button"
        tabIndex="0"
      >
        <Button
          icon="pi pi-plus"
          disabled
          tooltip="Ingresa para agregar un recurso"
          tooltipOptions={{ showOnDisabled: true, position: 'left' }}
        />
      </div>
    );
  };

  const header = () => {
    return (
      <div className={styles.resourceHeader}>
        {learningUnit?.name}
        <div className={styles.navButtons}>
          <Button
            label="Volver"
            icon="pi pi-arrow-left"
            onClick={() => router.back()}
          />
          {addNewResourceButton()}
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Panel header={header}>
        <LearningUnitInformation learningUnit={learningUnit} />
        <LoginDialog />
        {displayBasic && (
          <AddNewResourceModal
            handlers={modalHandlers}
            learningUnitId={learningUnitId}
          />
        )}
        <ResourcesScroller
          resources={resources}
          resourceViewButtonHandler={(resource) =>
            resourceViewButtonHandler(resource)
          }
        />

        {activeResource && (
          <ResourceSection
            visible={sidebarVisible}
            onHideHandler={() => resourceSidebarOnHideHandler()}
            onEvaluationSubmitionHandler={() => mutateResources()}
            resourceId={activeResource.id}
          />
        )}
      </Panel>
    </div>
  );
};

export default ResourcesSection;
