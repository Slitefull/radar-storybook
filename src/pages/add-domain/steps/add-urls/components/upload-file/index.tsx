import { FC, memo, useCallback, useState } from 'react';
import { NEUTRAL_90 } from "@/ui-kit/constants/colors";
import Dropzone from "@/ui-kit/components/controls/dropzone";
import Checkbox from "@/ui-kit/components/controls/checkbox";

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
        name="file"
        onChange={() => console.log(1)}
        checked={false}
        label={"Allow inaccessible URLs"}
        labelColor={NEUTRAL_90}
        labelPosition={"right"}
      />
    </Column>
  );
});

export default UploadFile;