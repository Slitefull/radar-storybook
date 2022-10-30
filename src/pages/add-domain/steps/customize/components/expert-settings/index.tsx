import { FC, memo, ReactNode, useCallback } from 'react';
import { useRecoilState } from "recoil";
import { pageLoad } from "@/entity/atoms/add-domain/customize/expert-settings/page-load";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import FormCreator from "@/ui-kit/components/form-creator/form-creator";
import General from "./general";
import ThresholdSettings from "./threshold-settings";
import PageLoadError from "./page-load-error";

import { Column } from '@/global.css';


const ExpertSettings: FC = memo((): JSX.Element => {
  const [pageLoadElements, setPageLoadElements] = useRecoilState<ReactNode[]>(pageLoad);

  const onAddPageLoadErrorElementHandler = useCallback(
    () => setPageLoadElements(pageLoadElements.concat(
      <PageLoadError key={pageLoadElements.length}/>
    )),
    [pageLoadElements]
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
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={pageLoadElements}
        onAddComponentsHandler={onAddPageLoadErrorElementHandler}
        direction={"column"}
      />
    </Column>
  );
});

export default ExpertSettings;
