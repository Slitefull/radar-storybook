import { FC, memo } from 'react';
import loadable from "@loadable/component";
import PageContainer from "@/ui-kit/components/page-container/simple/simple";
import CardsSectionFallback from "@/pages/monitor-changes/components/cards-section/fallback/fallback";
import MonitorTableFallback from "@/pages/monitor-changes/components/table/fallback/fallback";


const CardsSection = loadable(() => import("./components/cards-section/cards-section"), {
  fallback: <CardsSectionFallback/>
});

const MonitorTable = loadable(() => import("./components/table/table"), {
  fallback: <MonitorTableFallback/>
});

const MonitorChanges: FC = memo((): JSX.Element => {
  return (
    <PageContainer>
      <CardsSection/>
      <MonitorTable/>
    </PageContainer>
  );
});

export default MonitorChanges;
