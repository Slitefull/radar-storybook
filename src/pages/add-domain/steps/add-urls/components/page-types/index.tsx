import { FC, memo, useCallback, useMemo } from 'react';
import { useRecoilState } from "recoil";
import { pageTypes } from "@/entity/atoms/add-domain/add-urls/page-types";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";
import PlusCircle from "@/ui-kit/customized-icons/plus-circle";
import PageType from "./page-type";
import Text from "@/ui-kit/components/typography/text";
import Label from "@/ui-kit/components/typography/label";
import RoundedBanner from "@/ui-kit/components/banners/rounded";

import { Column } from "@/global.css";


const PageTypes: FC = memo((): JSX.Element => {
  const [types, setTypes] = useRecoilState<number[]>(pageTypes);

  const onAddPageTypesElementHandler = useCallback(
    () => setTypes([...types, types.length]),
    [types]
  );

  const onDeleteCustomCookieElementHandler = useCallback(
    (id: number) => setTypes(types.filter((element) => element !== id)),
    [types],
  );

  const pageTypeComponents = useMemo(
    () => types.map((element) => (
      <PageType
        key={element}
        index={element}
        onDelete={onDeleteCustomCookieElementHandler}
      />
    )), [types]
  );

  return (
    <Column
      gap={40}
      width={"100%"}
      justify={"space-between"}
      align={"center"}
    >
      <RoundedBanner maxWidth={"550px"}>
        In order to ensure the best performance of SEO radar, please provide at least 1 representative link of your
        website, broken down into specific page types <strong>(minimum 3)</strong>
      </RoundedBanner>
      {pageTypeComponents}
      <Label onClick={onAddPageTypesElementHandler}>
        <PlusCircle/>
        <Text color={PRIMARY_60} weight={"bold"}>Add page type</Text>
      </Label>
    </Column>
  );
});

export default PageTypes;
