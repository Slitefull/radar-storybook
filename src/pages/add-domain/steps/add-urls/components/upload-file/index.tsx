import { FC, memo, useCallback, useState } from 'react';
import { DARK_LAVA } from "@/ui-kit/constants/colors";
import Dropzone from "@/ui-kit/components/inputs/dropzone/dropzone";
import Checkbox from "@/ui-kit/components/inputs/checkbox/checkbox";

import { Column } from '@/global.css';


const UploadFile: FC = memo((): JSX.Element => {
  const [files, setFiles] = useState<File[]>([]);

  const onDropHandler = useCallback(
    (files: File[]) => setFiles(files),
    [setFiles],
  );

  const onClearHandler = useCallback(
    () => setFiles([]),
    [],
  );

  return (
    <Column>
      <Dropzone
        files={files}
        onDrop={onDropHandler}
        onClear={onClearHandler}
      />
      <Checkbox
        checked={false}
        label={"Allow inaccessible URLs"}
        labelColor={DARK_LAVA}
        labelPosition={"right"}
      />
    </Column>
  );
});

export default UploadFile;