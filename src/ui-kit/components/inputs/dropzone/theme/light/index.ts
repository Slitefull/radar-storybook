import { css } from "styled-components/macro";
import { DARK_LAVA, PLUMP_PURPLE, TRANSPARENT, WHITE } from "@/ui-kit/constants/colors";


const SDropzone = css`
  padding: 8px 27px;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
  text-align: center;
  transition: 0.2s background ease-out, 0.2s border ease-in, 0.2s color ease-in, 0.2s border-radius ease-in;
  background: ${WHITE};
  font-weight: 700;
  color: ${PLUMP_PURPLE};
  border: 1px solid ${PLUMP_PURPLE};

  &:disabled {
    pointer-events: none;
    opacity: .3;
  }

  &:hover {
    background: ${PLUMP_PURPLE};
    border: 1px solid ${TRANSPARENT};
    color: ${WHITE};
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
  color: ${DARK_LAVA};
`;

export const dropzone = {
  SDropzone,
  FileName,
};
