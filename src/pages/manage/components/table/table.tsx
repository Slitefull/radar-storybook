import { FC, Fragment, memo, useCallback, useMemo, useState } from 'react';
import { CellProps } from "react-table";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PLUMP_PURPLE, RAISIN_BLACK, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import { ADD_DOMAIN_PAGE, MANAGE_PAGE } from "@/constants/routes";
import { mockData } from "./__mock__/data";
import Table from "@/ui-kit/components/table/table";
import RadioGroup from "@/ui-kit/components/inputs/radio-group/radio-group";
import Radio from "@/ui-kit/components/inputs/radio/radio";
import ButtonLink from "@/ui-kit/components/buttons/link/link";
import PlusCircleIcon from "@/ui-kit/customized-icons/plus-circle/plus-circle";
import Input from "@/ui-kit/components/inputs/text/text";
import Meridian from "@/ui-kit/components/inputs/meridian/meridian";
import ColoredText from "@/ui-kit/components/text/colored/colored";
import Button from '@/ui-kit/components/buttons/button/button';

import { Row } from "@/global.css";


interface TableData {
  id: string | number;
  domains: string;
  label: string;
  urls: number;
  weekly_crawls: number;
  credits_used: number;
}

enum RadioTypes {
  domains = "domains",
  keywords = "keywords",
  redirectTesting = "redirect_testing",
}

const ManageTable: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState<RadioTypes>(RadioTypes.domains);

  const columns = useMemo(
    () => [
      {
        id: "domains",
        Header: `${capitalizeFirstLetter(t("domains"))} (101)`,
        accessor: ({ domains }: TableData) => domains,
      },
      {
        id: "label",
        Header: capitalizeFirstLetter(t("label")),
        accessor: ({ label }: TableData) => label,
      },
      {
        id: "urls",
        Header: capitalizeFirstLetter(t("urls")),
        accessor: ({ urls }: TableData) => urls,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        ),
      },
      {
        id: "weekly_crawls",
        Header: capitalizeFirstLetter(t("weekly_crawls")),
        accessor: ({ weekly_crawls }: TableData) => weekly_crawls,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        ),
      },
      {
        id: "credits_used",
        Header: capitalizeFirstLetter(t("credits_used")),
        accessor: ({ credits_used }: TableData) => credits_used,
        Cell: ({ value }: CellProps<TableData>) => (
          <ColoredText
            type={"secondary"}
            weight={"bold"}
            color={RAISIN_BLACK}
          >
            {value}
          </ColoredText>
        )
      },
      {
        id: "id",
        Header: (
          <RadioGroup>
            <Meridian
              name={"meridian"}
              label={"AM"}
              onChange={() => console.log("qwe")}
            />
            <Meridian
              name={"meridian"}
              label={"PM"}
              onChange={() => console.log("qwe")}
            />
          </RadioGroup>
        ),
        accessor: ({ id }: TableData) => id,
        Cell: ({ value }: CellProps<TableData>) => (
          <Button
            color={"secondary"}
            onClick={() => navigate(`${MANAGE_PAGE}/${value}`)}
          >
            Settings
          </Button>
        ),
        disableSortBy: true,
      },
    ],
    [t]
  );

  const paginationOptions = [
    { value: 2, label: "2" },
    { value: 5, label: "5" },
    { value: 10, label: "10" },
  ];

  const data: TableData[] = useMemo(
    () => mockData,
    []
  );

  const onChangeRadioHandler = useCallback(
    (value: RadioTypes) => setSelectedType(value),
    [],
  );

  const onChangeInputHandler = useCallback(
    () => console.log("change input"),
    [],
  );

  const onAddDomainHandler = useCallback(
    () => navigate(ADD_DOMAIN_PAGE),
    [navigate],
  );

  const getLabelColor = (selectedType: RadioTypes, currentType: RadioTypes): Color => {
    if (selectedType === currentType) {
      return PLUMP_PURPLE;
    }

    return ROCKET_METALLIC;
  };

  return (
    <Fragment>
      <Row
        justify={"space-between"}
        align={"center"}
        width={"100%"}
      >
        <RadioGroup gap={40}>
          <Radio
            name={"domains"}
            label={capitalizeFirstLetter(t("domains"))}
            labelColor={getLabelColor(selectedType, RadioTypes.domains)}
            labelSize={"big"}
            labelPosition={"right"}
            labelWeight={"bold"}
            value={"domains"}
            checked={selectedType === RadioTypes.domains}
            onChange={(event) => onChangeRadioHandler(event.target.value as RadioTypes)}
          />
          <Radio
            name={"domains"}
            label={capitalizeFirstLetter(t("keywords"))}
            labelColor={getLabelColor(selectedType, RadioTypes.keywords)}
            labelSize={"big"}
            labelPosition={"right"}
            labelWeight={"bold"}
            value={"keywords"}
            checked={selectedType === RadioTypes.keywords}
            onChange={(event) => onChangeRadioHandler(event.target.value as RadioTypes)}
          />
          <Radio
            name={"domains"}
            label={capitalizeFirstLetter(t("redirect_testing"))}
            labelColor={getLabelColor(selectedType, RadioTypes.redirectTesting)}
            labelSize={"big"}
            labelPosition={"right"}
            labelWeight={"bold"}
            value={"redirect_testing"}
            checked={selectedType === RadioTypes.redirectTesting}
            onChange={(event) => onChangeRadioHandler(event.target.value as RadioTypes)}
          />
        </RadioGroup>
        <Row align={"center"}>
          <ButtonLink
            color={"text"}
            onClick={onAddDomainHandler}
            icon={<PlusCircleIcon size={25}/>}
          >
            {capitalizeFirstLetter(t("add_domains"))}
          </ButtonLink>
          <Input
            onChange={onChangeInputHandler}
            placeholder={capitalizeFirstLetter(t("search_domain"))}
            width={"320px"}
          />
        </Row>
      </Row>
      <Table
        columns={columns}
        data={data}
        withPagination
        paginationOptions={paginationOptions}
      />
    </Fragment>
  );
});

export default ManageTable;
