import { FC, memo, ReactNode, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { currentMenuItemLS } from "@/constants/local-storage";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import { WHITE } from "@/ui-kit/constants/colors";
import useHover from "@/ui-kit/hooks/useHover";
import ActivityIcon from "@/ui-kit/customized-icons/activity/activity";
import TargetIcon from "@/ui-kit/customized-icons/target/target";
import BarChartIcon from "@/ui-kit/customized-icons/bar-chart/bar-chart";
import ToolIcon from "@/ui-kit/customized-icons/tool/tool";
import BookOpenIcon from "@/ui-kit/customized-icons/book-open/book-open";
import HelpCircleIcon from "@/ui-kit/customized-icons/help-circle/help-circle";
import LogoExpanded from "@/ui-kit/customized-icons/logo-expanded/logo-expanded";
import {
  COMPETITIONS_PAGE,
  HELP_PAGE,
  MANAGE_PAGE,
  REPORTS_PAGE,
  MONITOR_CHANGES_PAGE,
  SEO_AUDIT_PAGE,
  TOOLS_PAGE
} from "@/constants/routes";

import { IconContainer, LinksWrapper, LinkTitle, LogosWrapper, SidebarLink, SSidebar } from "./styled";
import SettingsIcon from "@/ui-kit/customized-icons/settings/settings";


type MenuElements = "monitoring" | "manage" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

interface Menu {
  key: MenuElements;
  link: string;
  icon: ReactNode;
  title: string;
  isChecked: boolean;
}

const Sidebar: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const [currentMenuItem, setCurrentMenuItem] = useRecoilState<MenuElements | null>(currentMenuItemState);

  const menu: Menu[] = useMemo(
    () => [
      {
        key: "monitoring",
        link: MONITOR_CHANGES_PAGE,
        icon: <ActivityIcon size={25} color={currentMenuItem === "monitoring" ? WHITE : ""}/>,
        title: t("monitoring"),
        isChecked: currentMenuItem === "monitoring"
      },
      {
        key: "manage",
        link: MANAGE_PAGE,
        icon: <SettingsIcon size={25} color={currentMenuItem === "manage" ? WHITE : ""}/>,
        title: t("manage"),
        isChecked: currentMenuItem === "manage"
      },
      {
        key: "competitions",
        link: COMPETITIONS_PAGE,
        icon: <TargetIcon size={25} color={currentMenuItem === "competitions" ? WHITE : ""}/>,
        title: t("competitions"),
        isChecked: currentMenuItem === "competitions"
      },
      {
        key: "seoAudit",
        link: SEO_AUDIT_PAGE,
        icon: <BarChartIcon size={25} color={currentMenuItem === "seoAudit" ? WHITE : ""}/>,
        title: t("seo_audit"),
        isChecked: currentMenuItem === "seoAudit"
      },
      {
        key: "tools",
        link: TOOLS_PAGE,
        icon: <ToolIcon size={25} color={currentMenuItem === "tools" ? WHITE : ""}/>,
        title: t("tools"),
        isChecked: currentMenuItem === "tools"
      },
      {
        key: "reports",
        link: REPORTS_PAGE,
        icon: <BookOpenIcon size={25} color={currentMenuItem === "reports" ? WHITE : ""}/>,
        title: t("reports"),
        isChecked: currentMenuItem === "reports"
      },
      {
        key: "help",
        link: HELP_PAGE,
        icon: <HelpCircleIcon size={25} color={currentMenuItem === "help" ? WHITE : ""}/>,
        title: t("help"),
        isChecked: currentMenuItem === "help"
      }
    ],
    [currentMenuItem, t]
  );

  const onClickLinkHandler = useCallback(
    (menuItem: Menu) => {
      navigate(menuItem.link);
      setCurrentMenuItem(menuItem.key);
      localStorage.setItem(currentMenuItemLS, menuItem.key);
    },
    [setCurrentMenuItem]
  );

  return (
    <SSidebar ref={hoverRef}>
      <LogosWrapper>
        <LogoExpanded width={200}/>
      </LogosWrapper>
      <LinksWrapper>
        {menu.map((element) => (
          <SidebarLink
            key={element.key}
            isHovered={isHovered}
            isChecked={element.isChecked}
            onClick={() => onClickLinkHandler(element)}
          >
            <IconContainer isChecked={element.isChecked}>
              {element.icon}
            </IconContainer>
            <LinkTitle isHovered={isHovered}>
              {element.title}
            </LinkTitle>
          </SidebarLink>
        ))}
      </LinksWrapper>
    </SSidebar>
  );
});

export default Sidebar;
