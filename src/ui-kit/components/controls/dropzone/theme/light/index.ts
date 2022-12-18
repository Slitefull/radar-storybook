import { css } from "styled-components/macro";
import { NEUTRAL_90, PRIMARY_60, TRANSPARENT, NEUTRAL_00 } from "@/ui-kit/constants/colors";


const SDropzone = css`
  padding: 8px 27px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;
  background: ${NEUTRAL_00};
  font-weight: 700;
  color: ${PRIMARY_60};
  border: 1px solid ${PRIMARY_60};
  max-width: 200px;

  &:disabled {
    pointer-events: none;
    opacity: .3;
  }

  &:hover {
    background: ${PRIMARY_60};
    border: 1px solid ${TRANSPARENT};
    color: ${NEUTRAL_00};
    transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;
  }
`;

const FileName = css`
  font-family: 'Menlo', serif;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.02em;
  color: ${NEUTRAL_90};
`;

export const dropzone = {
  SDropzone,
  FileName,
};
