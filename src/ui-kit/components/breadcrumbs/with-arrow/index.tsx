import { FC, memo, useCallback } from 'react';
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from '@/ui-kit/helpers/capitalizeFirstLetter';
import { getFormatDate } from "@/ui-kit/helpers/getFormatDate";
import { PRIMARY_60, NEUTRAL_100, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import Arrow from "@/ui-kit/customized-icons/arrow";
import Text from "@/ui-kit/components/typography/text";
import ExternalLinkIcon from "@/ui-kit/customized-icons/external-link";
import SettingsIcon from "@/ui-kit/customized-icons/settings";

import { Column, Row } from "@/global.css";
import { BWrapper } from './styled';


interface BreadcrumbProps {
  name: string;
  backLink: string;
  openLink: string;
  lastCrawl: Date;
  nextCrawl: Date;
  withButton?: boolean;
}

const Breadcrumb: FC<BreadcrumbProps> = memo((
  {
    name,
    backLink,
    openLink,
    lastCrawl,
    nextCrawl,
    withButton,
  }
): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onBackHandler = useCallback(() => navigate(backLink), [navigate, backLink]);
  const onOpenLinkHandler = useCallback(() => navigate(openLink), [navigate, openLink]);

  return (
    <Row gap={15}>
      <BWrapper>
        <Arrow
          rotation={"left"}
          color={PRIMARY_60}
          size={7}
          onClick={onBackHandler}
        />
        <Column>
          <Row gap={10} align={"center"} cursor={"pointer"}>
            <Text
              type={"secondary"}
              color={NEUTRAL_100}
              weight={"bold"}
              size={"big"}
              cursor={"pointer"}
              onClick={onBackHandler}
            >
              {name}
            </Text>
            <Row gap={5} align={"center"}>
              <ExternalLinkIcon
                size={15}
                onClick={onOpenLinkHandler}
              />
              <SettingsIcon
                size={12}
                onClick={onOpenLinkHandler}
                hoverColor={PRIMARY_60}
              />
            </Row>
          </Row>
          <Row gap={10}>
            <Text type={"secondary"} size={"small"} color={NEUTRAL_60}>
              {capitalizeFirstLetter(t("last_crawl"))}: {getFormatDate(lastCrawl)}
            </Text>
            <Text type={"secondary"} size={"small"} color={NEUTRAL_60}>
              |
            </Text>
            <Text type={"secondary"} size={"small"} color={NEUTRAL_60}>
              {capitalizeFirstLetter(t("next"))}: {getFormatDate(nextCrawl)}
            </Text>

            {
              withButton
                ? (
                  <Text color={PRIMARY_60} weight={"bold"} cursor={"pointer"}>
                    {capitalizeFirstLetter(t("run_crawl"))}
                  </Text>
                )
                : null
            }
          </Row>
        </Column>
      </BWrapper>
    </Row>
  )
});

export default Breadcrumb;