import { FC, memo, useCallback, useMemo } from 'react';
import { useRecoilState } from "recoil";
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";
import { excludeCertain } from "@/entity/atoms/add-domain/customize/advanced-customization/exclude-certain";
import { customTests } from '@/entity/atoms/add-domain/customize/advanced-customization/custom-tests';
import { ignoreCertain } from '@/entity/atoms/add-domain/customize/advanced-customization/ignore-certain';
import { ignoreLinks } from '@/entity/atoms/add-domain/customize/advanced-customization/ignore-links';
import FormCreator from "@/ui-kit/components/controls/form-creator";
import LineSeparator from "@/ui-kit/components/separators/line";
import ExcludeCertain from './exclude-certain';
import CustomTests from './custom-tests';
import IgnoreCertain from "./ignore-certain";
import IgnoreLinks from "./ignore-links";

import { Column } from '@/global.css';


const AdvancedCustomization: FC = memo((): JSX.Element => {
  const [excludeCertainElements, setExcludeCertainElements] = useRecoilState<number[]>(excludeCertain);
  const [customTestsElements, setCustomTestsElements] = useRecoilState<number[]>(customTests);
  const [ignoreCertainElements, setIgnoreCertainElements] = useRecoilState<number[]>(ignoreCertain);
  const [ignoreLinksElements, setIgnoreLinksElements] = useRecoilState<number[]>(ignoreLinks);

  const onAddExcludeCertainElementHandler = useCallback(
    () => setExcludeCertainElements([...excludeCertainElements, excludeCertainElements.length]),
    [excludeCertainElements]
  );

  const onAddCustomTestsElementHandler = useCallback(
    () => setCustomTestsElements([...customTestsElements, customTestsElements.length]),
    [customTestsElements]
  );

  const onAddIgnoreCertainElementHandler = useCallback(
    () => setIgnoreCertainElements([...ignoreCertainElements, ignoreCertainElements.length]),
    [ignoreCertainElements]
  );

  const onAddIgnoreLinksElementHandler = useCallback(
    () => setIgnoreLinksElements([...ignoreLinksElements, ignoreLinksElements.length]),
    [ignoreLinksElements]
  );

  const onDeleteExcludeCertainElementsHandler = useCallback(
    (id: number) => setExcludeCertainElements(excludeCertainElements.filter((element) => element !== id)),
    [excludeCertainElements],
  );

  const onDeleteCustomTestsElementsHandler = useCallback(
    (id: number) => setCustomTestsElements(customTestsElements.filter((element) => element !== id)),
    [customTestsElements],
  );

  const onDeleteIgnoreCertainElementsHandler = useCallback(
    (id: number) => setIgnoreCertainElements(ignoreCertainElements.filter((element) => element !== id)),
    [ignoreCertainElements],
  );

  const onDeleteIgnoreLinksElementsHandler = useCallback(
    (id: number) => setIgnoreLinksElements(ignoreLinksElements.filter((element) => element !== id)),
    [ignoreLinksElements],
  );

  const excludeCertainComponents = useMemo(
    () => excludeCertainElements.map((element) => (
      <ExcludeCertain
        key={element}
        index={element}
        onDelete={onDeleteExcludeCertainElementsHandler}
      />
    )), [excludeCertainElements]
  );

  const customTestsComponents = useMemo(
    () => customTestsElements.map((element) => (
      <CustomTests
        key={element}
        index={element}
        onDelete={onDeleteCustomTestsElementsHandler}
      />
    )), [customTestsElements]
  );

  const ignoreCertainComponents = useMemo(
    () => ignoreCertainElements.map((element) => (
      <IgnoreCertain
        key={element}
        index={element}
        onDelete={onDeleteIgnoreCertainElementsHandler}
      />
    )), [ignoreCertainElements]
  );

  const ignoreLinksComponents = useMemo(
    () => ignoreLinksElements.map((element) => (
      <IgnoreLinks
        key={element}
        index={element}
        onDelete={onDeleteIgnoreLinksElementsHandler}
      />
    )), [ignoreLinksElements]
  );

  return (
    <Column width={"90%"} margin={"auto"}>
      <LineSeparator/>
      <FormCreator
        label={"Exclude certain sections of URL"}
        labelColor={NEUTRAL_90}
        labelWeight={"bold"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={excludeCertainComponents}
        onAddComponentsHandler={onAddExcludeCertainElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
      <FormCreator
        label={"Custom tests"}
        labelColor={NEUTRAL_90}
        labelWeight={"bold"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={customTestsComponents}
        onAddComponentsHandler={onAddCustomTestsElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
      <FormCreator
        label={"Ignore Certain Types of Changes"}
        labelColor={NEUTRAL_90}
        labelSize={"big"}
        labelWeight={"bold"}
        tooltip={<div>Tooltip</div>}
        components={ignoreCertainComponents}
        onAddComponentsHandler={onAddIgnoreCertainElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
      <FormCreator
        label={"Ignore Links"}
        labelColor={NEUTRAL_90}
        labelSize={"big"}
        labelWeight={"bold"}
        tooltip={<div>Tooltip</div>}
        components={ignoreLinksComponents}
        onAddComponentsHandler={onAddIgnoreLinksElementHandler}
        direction={"column"}
      />
      <LineSeparator/>
    </Column>
  );
});

export default AdvancedCustomization;
