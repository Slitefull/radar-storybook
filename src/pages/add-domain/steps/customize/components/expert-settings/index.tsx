import { FC, memo, useCallback, useMemo } from 'react';
import { useRecoilState } from "recoil";
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";
import { pageLoad } from "@/entity/atoms/add-domain/customize/expert-settings/page-load";
import LineSeparator from "@/ui-kit/components/separators/line";
import FormCreator from "@/ui-kit/components/controls/form-creator";
import General from "./general";
import ThresholdSettings from "./threshold-settings";
import PageLoadError from "./page-load-error";

import { Column } from '@/global.css';


const ExpertSettings: FC = memo((): JSX.Element => {
  const [pageLoadElements, setPageLoadElements] = useRecoilState<number[]>(pageLoad);

  const onAddPageLoadElementHandler = useCallback(
    () => setPageLoadElements([...pageLoadElements, pageLoadElements.length]),
    [pageLoadElements]
  );

  const onDeletePageLoadElementsHandler = useCallback(
    (id: number) => setPageLoadElements(pageLoadElements.filter((element) => element !== id)),
    [pageLoadElements],
  );

  const pageLoadComponents = useMemo(
    () => pageLoadElements.map((element) => (
      <PageLoadError
        key={pageLoadElements.length}
        index={element}
        onDelete={onDeletePageLoadElementsHandler}
      />
    )), [pageLoadElements]
  );

  return (
    <Column
      width={"90%"}
      margin={"auto"}
    >
      <General/>
      <LineSeparator/>
      <ThresholdSettings/>
      <LineSeparator/>
      <FormCreator
        label={"Page Load Error Detection"}
        labelColor={NEUTRAL_90}
        labelWeight={"bold"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={pageLoadComponents}
        onAddComponentsHandler={onAddPageLoadElementHandler}
        direction={"column"}
      />
    </Column>
  );
});

export default ExpertSettings;
