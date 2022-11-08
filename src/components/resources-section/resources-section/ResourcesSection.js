import React, { useState } from 'react';
import { endpoints } from '@utils/endpoints';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';
import { useRouter } from 'next/router';
import AddNewResourceModal from '@components/resources-section/add-new-resource-modal/AddNewResourceModal';
import LearningUnitInformation from '@components/resources-section/learning-unit-information/LearningUnitInformation';
import ResourcesScroller from '../resources-scroller/ResourcesScroller';
import ResourceSection from '@components/resource-section/resource-section/ResourceSection';
import styles from './ResourcesSection.module.scss';
import { LoginDialog } from '@components/login-dialog/loginDialog';
import AddNewResourceButton from '../add-new-resource-button/addNewResourceButton';

const ResourcesSection = ({ learningUnit, resources, isError }) => {
  const router = useRouter();
  const learningUnitId = learningUnit.id;
  const [displayBasic, setDisplayBasic] = useState(false);
  const [activeResource, setActiveResource] = useState(null);

  if (isError) {
    return 'error';
  }

  const refreshResources = () => {
    router.replace(router.asPath);
  };

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
      refreshResources();
      setDisplayBasic(false);
    });
  };

  const modalHandlers = {
    onHide: () => setDisplayBasic(false),
    onSave: saveResourceHandler,
  };

  const resourceSidebarOnHideHandler = () => {
    setActiveResource(null);
  };

  const resourceViewButtonHandler = (resource) => {
    setActiveResource(resource);
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
          <AddNewResourceButton setDisplayBasic={setDisplayBasic} />
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
          resourceViewButtonHandler={resourceViewButtonHandler}
        />
        {activeResource && (
          <ResourceSection
            onHideHandler={resourceSidebarOnHideHandler}
            resourceId={activeResource.id}
            onEvaluationSubmitionHandler={refreshResources}
          />
        )}
      </Panel>
      <LoginDialog />
    </div>
  );
};

export default ResourcesSection;
