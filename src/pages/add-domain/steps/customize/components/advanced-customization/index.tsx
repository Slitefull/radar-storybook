import { FC, memo, ReactNode, useCallback } from 'react';
import { useRecoilState } from "recoil";
import { excludeCertain } from "@/entity/atoms/add-domain/customize/advanced-customization/exclude-certain";
import { customTests } from '@/entity/atoms/add-domain/customize/advanced-customization/custom-tests';
import { ignoreCertain } from '@/entity/atoms/add-domain/customize/advanced-customization/ignore-certain';
import { ignoreLinks } from '@/entity/atoms/add-domain/customize/advanced-customization/ignore-links';
import FormCreator from "@/ui-kit/components/form-creator/form-creator";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import ExcludeCertain from './exclude-certain';
import CustomTests from './custom-tests';
import IgnoreCertain from "./ignore-certain";
import IgnoreLinks from "./ignore-links";

import { Column } from '@/global.css';


const AdvancedCustomization: FC = memo((): JSX.Element => {
  const [excludeCertainElements, setExcludeCertainElements] = useRecoilState<ReactNode[]>(excludeCertain);
  const [customTestsElements, setCustomTestsElements] = useRecoilState<ReactNode[]>(customTests);
  const [ignoreCertainElements, setIgnoreCertainElements] = useRecoilState<ReactNode[]>(ignoreCertain);
  const [ignoreLinksElements, setIgnoreLinksElements] = useRecoilState<ReactNode[]>(ignoreLinks);

  const onAddExcludeCertainElementHandler = useCallback(
    () => setExcludeCertainElements(excludeCertainElements.concat(
      <ExcludeCertain key={excludeCertainElements.length}/>
    )),
    [excludeCertainElements]
  );

  const onAddCustomTestsElementHandler = useCallback(
    () => setCustomTestsElements(customTestsElements.concat(
      <CustomTests key={customTestsElements.length}/>
    )),
    [customTestsElements]
  );

  const onAddIgnoreCertainElementHandler = useCallback(
    () => setIgnoreCertainElements(ignoreCertainElements.concat(
      <IgnoreCertain key={ignoreCertainElements.length}/>
    )),
    [ignoreCertainElements]
  );

  const onAddIgnoreLinksElementHandler = useCallback(
    () => setIgnoreLinksElements(ignoreLinksElements.concat(
      <IgnoreLinks key={ignoreLinksElements.length}/>
    )),
    [ignoreLinksElements]
  );

  return (
    <Column width={"90%"} margin={"auto"}>
      <LineSeparator/>
      <FormCreator
        label={"Exclude certain sections of URL"}
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={excludeCertainElements}
        onAddComponentsHandler={onAddExcludeCertainElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
      <FormCreator
        label={"Custom tests"}
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={customTestsElements}
        onAddComponentsHandler={onAddCustomTestsElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
      <FormCreator
        label={"Ignore Certain Types of Changes"}
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={ignoreCertainElements}
        onAddComponentsHandler={onAddIgnoreCertainElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
      <FormCreator
        label={"Ignore Links"}
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={ignoreLinksElements}
        onAddComponentsHandler={onAddIgnoreLinksElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
    </Column>
  );
});

export default AdvancedCustomization;
