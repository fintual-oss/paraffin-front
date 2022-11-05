import React from 'react';
import { useRouter } from 'next/router';
import CurriculumInfoSection from '@components/curriculum-section/curriculum-info-section/CurriculumInfoSection';
import { Skeleton } from 'primereact/skeleton';
import { LoginDialog } from '@components/login-dialog/loginDialog';

function CurriculumPage() {
  const router = useRouter();
  const { query, isReady } = router;

  if (!isReady)
    return <Skeleton shape="rectangle" width="100%" height="100%" />;

  const curriculumId = query.id;

  return (
    <>
      <CurriculumInfoSection curriculumId={curriculumId} />
      <LoginDialog />
    </>
  );
}

export default CurriculumPage;
