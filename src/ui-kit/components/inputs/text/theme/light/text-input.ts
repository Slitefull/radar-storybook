import { SimpleInterpolation } from "styled-components";
import { css } from "styled-components/macro";
import { PLATINUM, RAISIN_BLACK, VENETIAN_RED } from "@/ui-kit/constants/colors";


const TextInputWrapper: ReadonlyArray<SimpleInterpolation> = css` && {
  display: flex;
  flex-direction: column;
  gap: 5px 0;
}`

const WithIconWrapper: ReadonlyArray<SimpleInterpolation> = css` && {
  font-family: 'Menlo', serif;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  color: ${RAISIN_BLACK};
  border: 1px solid ${PLATINUM};
  width: auto;
  height: 35px;
  border-radius: 8px;
  padding: 0 12px;
}`

const SFormInput: ReadonlyArray<SimpleInterpolation> = css` && {
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 8px;
  outline: none;
}`

const HelperText: ReadonlyArray<SimpleInterpolation> = css` && {
  font-size: 11px;
  font-weight: 400;
  color: ${VENETIAN_RED};
}`

export const textInput = {
  TextInputWrapper,
  WithIconWrapper,
  SFormInput,
  HelperText,
}
