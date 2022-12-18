import { FC, memo } from 'react';
import loadable from "@loadable/component";
import CardsSectionFallback from "@/pages/monitoring/components/cards-section/fallback";


const CardsSection = loadable(() => import("./components/cards-section"), {
  fallback: <CardsSectionFallback/>
});

const Monitoring: FC = memo((): JSX.Element => {
  return (
    <CardsSection/>
  );
});

export default Monitoring;
