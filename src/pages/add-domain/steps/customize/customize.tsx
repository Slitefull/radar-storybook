import { FC, memo } from 'react';
import Collapsible from "@/ui-kit/components/cards/collapsible/collapsible";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import AddDomainSlider from "@/pages/add-domain/components/text-slider/text-slider";
import CrawlSettings from "./components/crawl-settings";
import AdvancedCustomization from "./components/advanced-customization";
import ExpertSettings from "./components/expert-settings";
import AccessLevels from "./components/access-levels";

import { Column } from '@/global.css';


const Customize: FC = memo((): JSX.Element => {
  return (
    <Column align={"center"} width={"90%"}>
      <AddDomainSlider/>
      <Column width={"85%"} gap={0} margin={"20px 0 0"}>
        <LineSeparator/>
        <Collapsible
          title={"Crawl settings"}
          subTitle={"How SEO Radar fetches your site's pages."}
        >
          <CrawlSettings/>
        </Collapsible>
        <LineSeparator/>
        <Collapsible
          title={"Advanced customisation"}
          subTitle={"Setup specific criteria to avoid noisy changes."}
        >
          <AdvancedCustomization/>
        </Collapsible>
        <LineSeparator/>
        <Collapsible
          title={"Expert settings"}
          subTitle={"Domain wide options, thresholds and more..."}
        >
          <ExpertSettings/>
        </Collapsible>
        <LineSeparator/>
        <AccessLevels/>
      </Column>
    </Column>
  );
});

export default Customize;
