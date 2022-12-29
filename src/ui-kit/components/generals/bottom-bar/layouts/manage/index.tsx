import { FC, Fragment, memo, useCallback } from 'react';
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { selectedRowsSelector } from "@/entity/selectors/manage/selected-rows";
import LineSeparator from "@/ui-kit/components/separators/line";
import Tooltip from "@/ui-kit/components/generals/tooltip";
import Input from "@/ui-kit/components/controls/text";

import { Row } from "@/global.css";
import { ActionButton, Count, Selected, TextButton } from "../../styled";


const ManageLayout: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const selectedRows = useRecoilValue(selectedRowsSelector);

  const onAddCommentHandler = useCallback(
    (comment: string) => console.log(comment, 'comment'),
    []
  );

  return (
    <Fragment>
      <Row align={"center"} width={"100%"} gap={15}>
        <Selected>{t("selected")}: <Count>{selectedRows.length}</Count></Selected>
        <LineSeparator
          type={"vertical"}
          width={"25px"}
          variant={"dotted"}
        />
        <TextButton>
          {capitalizeFirstLetter(t("deselect_all"))}
        </TextButton>
        <ActionButton color={"ghost"}>
          {capitalizeFirstLetter(t("enable_search_console"))}
        </ActionButton>
        <Tooltip>Test text</Tooltip>
      </Row>
      <Row align={"center"} gap={15} justify={"flex-end"}>
        <TextButton>
          {capitalizeFirstLetter(t("add_to_group"))}
        </TextButton>
        <LineSeparator
          type={"vertical"}
          width={"25px"}
          variant={"dotted"}
        />
        <TextButton>
          {capitalizeFirstLetter(t("remove_from_group"))}
        </TextButton>
        <Input
          width={"300px"}
          onChange={(event) => onAddCommentHandler(event.target.value)}
          placeholder={capitalizeFirstLetter(t("new_group_name"))}
          withErrors={false}
        />
        <ActionButton color={"ghost"}>
          {capitalizeFirstLetter(t("group_domains"))}
        </ActionButton>
      </Row>
    </Fragment>
  );
});

export default ManageLayout;