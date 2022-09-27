import { FC, memo } from 'react';
import loadable from "@loadable/component";
import PageContainer from "@/ui-kit/components/page-container/page-container";
import CardsSectionFallback from "@/pages/monitor-changes/components/cards-section/fallback/fallback";
import MonitorTableFallback from "@/pages/monitor-changes/components/table/fallback/fallback";
import Collapsible from "@/ui-kit/components/cards/collapsible/collapsible";


const CardsSection = loadable(() => import("./components/cards-section/cards-section"), {
  fallback: <CardsSectionFallback/>
});

const MonitorTable = loadable(() => import("./components/table/table"), {
  fallback: <MonitorTableFallback/>
});

const MonitorChangesPage: FC = memo((): JSX.Element => {
  return (
    <PageContainer>
      <CardsSection/>
      <Collapsible title={"Crawl settings"} subTitle={"How SEO Radar fetches your site's pages."}>
        Consectetur adipiscing elit pellentesque habitant morbi tristique.
        Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
        pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
      </Collapsible>
      <MonitorTable/>
    </PageContainer>
  );
});

export default MonitorChangesPage;
