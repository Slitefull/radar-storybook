import { FC, memo, ReactNode, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import useHover from "@/ui-kit/hooks/useHover";
import { currentMenuItemLS } from "@/constants/local-storage";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import { WHITE } from "@/ui-kit/constants/colors";
import ActivityIcon from "@/ui-kit/customized-icons/activity/activity";
import AtSignIcon from "@/ui-kit/customized-icons/at-sign/at-sign";
import TargetIcon from "@/ui-kit/customized-icons/target/target";
import BarChartIcon from "@/ui-kit/customized-icons/bar-chart/bar-chart";
import ToolIcon from "@/ui-kit/customized-icons/tool/tool";
import BookOpenIcon from "@/ui-kit/customized-icons/book-open/book-open";
import HelpCircleIcon from "@/ui-kit/customized-icons/help-circle/help-circle";
import LogoExpanded from "@/ui-kit/customized-icons/logo-expanded/logo-expanded";

import { IconContainer, LinksWrapper, LinkTitle, LogosWrapper, SidebarLink, SSidebar } from "./styled";


type MenuElements = "monitoring" | "domains" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

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
        link: '/',
        icon: <ActivityIcon size={25} color={currentMenuItem === "monitoring" ? WHITE : ""}/>,
        title: t("monitoring"),
        isChecked: currentMenuItem === "monitoring"
      },
      {
        key: "domains",
        link: '/domains',
        icon: <AtSignIcon size={25} color={currentMenuItem === "domains" ? WHITE : ""}/>,
        title: t("domains"),
        isChecked: currentMenuItem === "domains"
      },
      {
        key: "competitions",
        link: '/competitions',
        icon: <TargetIcon size={25} color={currentMenuItem === "competitions" ? WHITE : ""}/>,
        title: t("competitions"),
        isChecked: currentMenuItem === "competitions"
      },
      {
        key: "seoAudit",
        link: '/seo-audit',
        icon: <BarChartIcon size={25} color={currentMenuItem === "seoAudit" ? WHITE : ""}/>,
        title: t("seo_audit"),
        isChecked: currentMenuItem === "seoAudit"
      },
      {
        key: "tools",
        link: '/tools',
        icon: <ToolIcon size={25} color={currentMenuItem === "tools" ? WHITE : ""}/>,
        title: t("tools"),
        isChecked: currentMenuItem === "tools"
      },
      {
        key: "reports",
        link: '/reports',
        icon: <BookOpenIcon size={25} color={currentMenuItem === "reports" ? WHITE : ""}/>,
        title: t("reports"),
        isChecked: currentMenuItem === "reports"
      },
      {
        key: "help",
        link: '/help',
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
