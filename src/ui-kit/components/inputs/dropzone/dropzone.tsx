import { FC, Fragment, memo } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { BLACK_SHADOWS } from "@/ui-kit/constants/colors";
import Label from "@/ui-kit/components/label/label";
import CloseIcon from "@/ui-kit/customized-icons/close/close";
import LineSeparator from "@/ui-kit/components/separators/line/line";

import { Row } from "@/global.css";
import { FileName, SDropzone } from "./styled";


interface DropzoneProps {
  files: File[];
  onDrop: (acceptedFiles: File[]) => void;
  onClear: () => void;
  multiple?: boolean;
  maxFiles?: number;
  accept?: Accept;
}

const Dropzone: FC<DropzoneProps> = memo((
  {
    files,
    onDrop,
    onClear,
    accept = {
      'image/jpeg': [],
      'image/png': []
    },
    multiple = false,
    maxFiles = 1,
  }
): JSX.Element => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    multiple,
    maxFiles,
  });

  return (
    <Fragment>
      {files.length
        ? (
          <Row align={"center"} gap={0}>
            {files.map((file: File) => (
              <FileName key={file.name}>
                {file.name}
              </FileName>
            ))}
            <LineSeparator
              type={"vertical"}
              variant={"dashed"}
              color={BLACK_SHADOWS}
              width={"20px"}
            />
            <Label onClick={onClear}><CloseIcon/> Remove</Label>
          </Row>
        )
        : (
          <SDropzone {...getRootProps()}>
            <input {...getInputProps()} />
            {
              isDragActive ?
                <p>Drop the files here ...</p> :
                <p>Upload a file</p>
            }
          </SDropzone>
        )
      }
    </Fragment>
  )
});

export default Dropzone;
