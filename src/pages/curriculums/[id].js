import React from 'react';
import { useRouter } from 'next/router';
import LearningUnitsSection from '@components/learning-units-section/learning-units-section/LearningUnitsSection';
import { Skeleton } from 'primereact/skeleton';
import { TabView, TabPanel } from 'primereact/tabview';
import { LoginDialog } from '@components/login-dialog/loginDialog';
import GraphSection from '@components/learning-units-section/graph-section/GraphSection';

function CurriculumPage() {
  const router = useRouter();
  const { query, isReady } = router;

  if (!isReady)
    return <Skeleton shape="rectangle" width="100%" height="100%" />;

  const curriculumId = query.id;

  const handleLearningUnitClick = (id) => {
    router.push(`/learning-units/${id}`);
  };
  return (
    <>
      <TabView>
        <TabPanel header="Lista Learning Units">
          <LearningUnitsSection curriculumId={curriculumId} />
        </TabPanel>
        <TabPanel header="Grafo Learning Units">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div
              style={{
                height: 600,
                width: 800,
                margin: 15,
                position: 'relative',
              }}
            >
              <GraphSection
                cycleId={1}
                handleNodeClick={(id) => handleLearningUnitClick(id)}
              />
            </div>
          </div>
        </TabPanel>
      </TabView>
      <LoginDialog />
    </>
  );
}

export default CurriculumPage;
