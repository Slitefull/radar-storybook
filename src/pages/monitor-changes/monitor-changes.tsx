import { FC, lazy, memo, Suspense } from 'react';


const PageContainer = lazy(() => import("@/ui-kit/components/page-container/page-container"));
const CardsSection = lazy(() => import("./components/cards-section/cards-section"));
const MonitorTable = lazy(() => import("./components/table/table"));

const MonitorChangesPage: FC = memo((): JSX.Element => {
  return (
    <Suspense fallback={<div>MonitorChangesPage component loading...</div>}>
      <PageContainer>
        <CardsSection/>
        <MonitorTable/>
      </PageContainer>
    </Suspense>
  );
});

export default MonitorChangesPage;
