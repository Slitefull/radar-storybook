import { FC, memo, useMemo } from 'react';
import { createMockColumn, createMockTopInfo } from '@/ui-kit/components/monitoring/list-view/__mock__';
import MonitoringListView from "@/ui-kit/components/monitoring/list-view";


const ListView: FC = memo((): JSX.Element => {
  const info = useMemo(() => createMockTopInfo(), []);
  const column = useMemo(() => createMockColumn(), []);

  return (
    <MonitoringListView
      info={info}
      columns={column}
    />
  );
});

export default ListView;