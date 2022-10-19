import React from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import LearningUnitsSection from '@components/learning-units-section/LearningUnitsSection';
import { Skeleton } from 'primereact/skeleton';
import { TabView, TabPanel } from 'primereact/tabview';

function CurriculumPage() {
  const { query, isReady } = useRouter();
  const curriculumId = query.id;

  const Graph = dynamic(() => import('../../components/learning-units-section/Graph'), {
    ssr: false,
  });

  if (!isReady) return <Skeleton shape="rectangle" width="100%" height="100%" />;

  return (
    <div>
      <TabView>
        <TabPanel header="Lista Learning Units">
          <LearningUnitsSection curriculumId={curriculumId} />
        </TabPanel>
        <TabPanel header="Grafo Learning Units">
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <div style={{ height: 600, width: 800, margin: 15, position: 'relative' }}>
              <Graph />
            </div>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default CurriculumPage;
