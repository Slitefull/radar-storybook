import { FC, memo, ReactNode, useEffect, useRef, useState, } from "react";
import Radio from "@/ui-kit/components/inputs/radio";

import { LabelPositions, LabelSizes, LabelWeights } from "@/ui-kit/components/label/types";
import { Row } from "@/global.css";
import { CHeader, Content, ContentContainer, ResizeContainer, SCollapsible } from "./styled";


interface RadioCollapsibleProps {
  name: string;
  label: string;
  labelColor?: Color;
  labelSize?: LabelSizes;
  labelWeight?: LabelWeights;
  labelPosition?: LabelPositions;
  onChangeRadio: (name: string) => void;
  checked: boolean;
  children: ReactNode;
}

const RadioCollapsible: FC<RadioCollapsibleProps> = memo((
  {
    name,
    label,
    labelColor,
    labelSize,
    labelWeight,
    labelPosition = "right",
    checked,
    onChangeRadio,
    children,
  }
): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(checked ? undefined : 0);

  useEffect(() => {
    if (!height || !checked || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [height, checked]);

  useEffect(() => {
    if (checked) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [checked]);

  return (
    <SCollapsible>
      <CHeader>
        <Row
          align={"baseline"}
          gap={10}
        >
          <Radio
            name={name}
            onChange={() => onChangeRadio(name)}
            label={label}
            labelColor={labelColor}
            labelSize={labelSize}
            labelWeight={labelWeight}
            labelPosition={labelPosition}
            checked={checked}
          />
        </Row>
      </CHeader>
      <Content
        style={{ height }}
        isOpen={checked}
      >
        <ResizeContainer ref={ref}>
          <ContentContainer>
            {children}
          </ContentContainer>
        </ResizeContainer>
      </Content>
    </SCollapsible>
  );
});

export default RadioCollapsible;
