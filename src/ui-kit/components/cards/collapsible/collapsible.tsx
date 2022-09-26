import { FC, memo, ReactNode, useCallback, useEffect, useRef, useState, } from "react";
import ArrowIcon from "@/ui-kit/customized-icons/arrow/arrow";
import { PLUMP_PURPLE } from "@/ui-kit/constants/colors";

import { CHeader, Content, ContentContainer, CSubtitle, CTitle, ResizeContainer, SCollapsible } from "./styled";
import { Column, Row } from "@/global.css";


interface MonitorChangesCardProps {
  open?: boolean;
  title: string | ReactNode;
  subTitle?: string | ReactNode;
  children: ReactNode;
}

const Collapsible: FC<MonitorChangesCardProps> = memo((
  {
    open,
    title,
    subTitle,
    children,
  }
): JSX.Element => {
  const ref = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState<number | undefined>(open ? undefined : 0);

  const handleFilterOpening = useCallback(
    () => setIsOpen((prev) => !prev),
    []
  );

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);

  return (
    <SCollapsible>
      <CHeader>
        <Row align={"baseline"} gap={10}>
          <ArrowIcon
            size={14}
            color={PLUMP_PURPLE}
            rotation={isOpen ? "top" : "bottom"}
            onClick={handleFilterOpening}
          />
          <Column gap={5}>
            <CTitle>{title}</CTitle>
            <CSubtitle>{subTitle}</CSubtitle>
          </Column>
        </Row>
      </CHeader>
      <Content style={{ height }}>
        <ResizeContainer ref={ref}>
          <ContentContainer>
            {children}
          </ContentContainer>
        </ResizeContainer>
      </Content>
    </SCollapsible>
  );
});

export default Collapsible;
