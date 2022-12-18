import { FC, memo, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { PRIMARY_40, PRIMARY_60 } from "@/ui-kit/constants/colors";
import Text from "@/ui-kit/components/typography/text";
import Arrow from "@/ui-kit/customized-icons/arrow";

import { BackIconWrapper, SBorderedLayout } from "./styled";


interface BorderedLayoutProps {
  children: ReactNode;
  margin?: string;
  padding?: string;
  width?: string;
  height?: string;
  shadow?: string;
  backText?: string;
  minHeight?: string;
  onBack?: VoidFunction;
}

const BorderedLayout: FC<BorderedLayoutProps> = memo((
  {
    children,
    margin = "auto",
    padding = "30px",
    width = "100%",
    height = "100%",
    shadow = "none",
    minHeight = "auto",
    backText,
    onBack,
  }
): JSX.Element => {
  const { t } = useTranslation();

  return (
    <SBorderedLayout
      margin={margin}
      padding={padding}
      width={width}
      height={height}
      shadow={shadow}
      minHeight={minHeight}
    >
      {onBack && (
        <BackIconWrapper onClick={onBack}>
          <Arrow
            size={12}
            rotation={"left"}
            color={PRIMARY_60}
          />
          <Text
            color={PRIMARY_60}
            hoverColor={PRIMARY_40}
            size={"big"}
            weight={"bold"}
            cursor={"pointer"}
          >
            {capitalizeFirstLetter(t(backText || "back"))}
          </Text>
        </BackIconWrapper>
      )}
      {children}
    </SBorderedLayout>
  )
});

export default BorderedLayout;
