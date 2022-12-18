import { FC, Fragment, memo, ReactNode } from 'react';
import { useRecoilValue } from "recoil";
import { selectedTableTypeSelector } from "@/entity/selectors/manage/table-type";
import loadable from "@loadable/component";
import TableFallback from "@/ui-kit/components/generals/table/fallback";
import TableControlFallback from "@/pages/manage/components/table/components/control/fallback";

import { LayoutTypes } from "@/entity/types/manage";


const TableControl = loadable(() => import("./components/control"), {
  fallback: <TableControlFallback/>
});

const DomainUrlsTable = loadable(() => import("./layouts/domain-urls"), {
  fallback: <TableFallback animate speed={1}/>
});

const KeywordsTable = loadable(() => import("./layouts/keywords"), {
  fallback: <TableFallback animate speed={1}/>
});

const RedirectTestingTable = loadable(() => import("./layouts/redirect-testing"), {
  fallback: <TableFallback animate speed={1}/>
});

const TableTypesRecord: Record<LayoutTypes, ReactNode> = {
  [LayoutTypes.DomainsUrls]: <DomainUrlsTable/>,
  [LayoutTypes.Keywords]: <KeywordsTable/>,
  [LayoutTypes.RedirectTesting]: <RedirectTestingTable/>,
};

const ManageTable: FC = memo((): JSX.Element => {
  const tableType = useRecoilValue(selectedTableTypeSelector);

  return (
    <Fragment>
      <TableControl/>
      {TableTypesRecord[tableType]}
    </Fragment>
  );
});

export default ManageTable;
