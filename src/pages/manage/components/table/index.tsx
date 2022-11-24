import { FC, Fragment, memo, ReactNode } from 'react';
import { useRecoilValue } from "recoil";
import loadable from "@loadable/component";
import { selectedTableTypeSelector } from "@/entity/selectors/manage/table-type";
import TableFallback from "@/ui-kit/components/table/fallback";
import TableControlFallback from "@/pages/manage/components/table/components/control/fallback";


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

enum TableTypes {
  domainsUrls = "domainsUrls",
  keywords = "keywords",
  redirectTesting = "redirectTesting",
}

const TableTypesRecord: Record<TableTypes, ReactNode> = {
  [TableTypes.domainsUrls]: <DomainUrlsTable/>,
  [TableTypes.keywords]: <KeywordsTable/>,
  [TableTypes.redirectTesting]: <RedirectTestingTable/>,
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
