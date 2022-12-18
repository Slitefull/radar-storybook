import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import { NEUTRAL_60, NEUTRAL_00 } from "@/ui-kit/constants/colors";
import { getRoutesMatch } from "@/ui-kit/helpers/getRoutesMatch";
import { useLocation } from "react-router-dom";
import useHover from "@/ui-kit/hooks/useHover";
import SettingsIcon from "@/ui-kit/customized-icons/settings";
import ActivityIcon from "@/ui-kit/customized-icons/activity";
import TargetIcon from "@/ui-kit/customized-icons/target";
import HelpCircle from "@/ui-kit/customized-icons/help-circle";
import BookOpen from "@/ui-kit/customized-icons/book-open";
import ToolIcon from "@/ui-kit/customized-icons/tool";
import BarChartIcon from "@/ui-kit/customized-icons/bar-chart";
import collapsedLogo from "@/ui-kit/icons/logo-primary-collapsed.svg";
import expandableLogo from "@/ui-kit/icons/logo-primary-expanded.svg";
import {
  COMPETITORS_PAGE,
  HELP_PAGE, MANAGE_DOMAIN_PAGE,
  MANAGE_PAGE,
  MONITORING_PAGE,
  REPORTS_PAGE,
  SEO_AUDIT_PAGE,
  TOOLS_PAGE,
} from "@/constants/routes";

import { IconContainer, LinksWrapper, LinkText, Logo, SLink, SSidebar } from "./styled";


const Sidebar: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const location = useLocation();
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();

  const getColor = (paths: string[]) => {
    if (getRoutesMatch(location, paths)) {
      return NEUTRAL_00;
    }

    return NEUTRAL_60;
  };

  return (
    <SSidebar ref={hoverRef}>
      <Logo
        src={isHovered ? expandableLogo : collapsedLogo}
        isHovered={isHovered}
      />
      <LinksWrapper>
        <SLink to={MONITORING_PAGE} end>
          <IconContainer>
            <ActivityIcon size={24} color={getColor([MONITORING_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("monitoring"))}
            </LinkText>
          )}
        </SLink>
        <SLink to={COMPETITORS_PAGE}>
          <IconContainer>
            <TargetIcon size={24} color={getColor([COMPETITORS_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("competitors"))}
            </LinkText>
          )}
        </SLink>
        <SLink to={MANAGE_PAGE}>
          <IconContainer>
            <SettingsIcon size={24} color={getColor([MANAGE_PAGE, MANAGE_DOMAIN_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("manage"))}
            </LinkText>
          )}
        </SLink>
        <SLink to={SEO_AUDIT_PAGE}>
          <IconContainer>
            <BarChartIcon size={24} color={getColor([SEO_AUDIT_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("seo_audit"))}
            </LinkText>
          )}
        </SLink>
        <SLink to={TOOLS_PAGE}>
          <IconContainer>
            <ToolIcon size={24} color={getColor([TOOLS_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("tools"))}
            </LinkText>
          )}
        </SLink>
        <SLink to={REPORTS_PAGE}>
          <IconContainer>
            <BookOpen size={24} color={getColor([REPORTS_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("reports"))}
            </LinkText>
          )}
        </SLink>
        <SLink to={HELP_PAGE}>
          <IconContainer>
            <HelpCircle size={24} color={getColor([HELP_PAGE])}/>
          </IconContainer>
          {isHovered && (
            <LinkText>
              {capitalizeFirstLetter(t("help"))}
            </LinkText>
          )}
        </SLink>
      </LinksWrapper>
    </SSidebar>
  );
});

export default Sidebar;
