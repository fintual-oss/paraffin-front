import React from 'react';
import { useRouter } from 'next/router';
import LearningUnitsSection from '@components/learning-units-section/LearningUnitsSection';
import { Skeleton } from 'primereact/skeleton';
import { TabView, TabPanel } from 'primereact/tabview';

function CurriculumPage() {
  const { query, isReady } = useRouter();
  const curriculumId = query.id;

  if (!isReady) return <Skeleton shape="rectangle" width="100%" height="100%" />;

  const frameUrl = `http://${process.env.NEXT_PUBLIC_FRONT_URL}/curriculums/cycleGraph`;

  return (
    <div>
      <TabView>
        <TabPanel header="Lista Lerning Units">
          <div>
            <LearningUnitsSection curriculumId={curriculumId} />
          </div>
        </TabPanel>
        <TabPanel header="Grafo Lerning Units">
          <div>
            <iframe title="frameGraph" src={frameUrl}></iframe>
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default CurriculumPage;
