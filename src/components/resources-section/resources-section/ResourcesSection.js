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

const ResourcesSection = ({ learningUnitId }) => {
  const router = useRouter();
  const [displayBasic, setDisplayBasic] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [activeResource, setActiveResource] = useState(null);

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

  const resourceViewButtonHandler = (resource) => {
    setActiveResource(resource);
    setSidebarVisible(true);
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
          <Button icon="pi pi-plus" onClick={() => setDisplayBasic(true)} />
        </div>
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <Panel header={header}>
        <LearningUnitInformation learningUnit={learningUnit} />
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
            onHideHandler={() => setSidebarVisible(false)}
            onEvaluationSubmitionHandler={() => mutateResources()}
            resourceId={activeResource.id}
          />
        )}
      </Panel>
    </div>
  );
};

export default ResourcesSection;
