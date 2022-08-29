import { FC, lazy, memo, ReactNode, useCallback, useMemo } from 'react';
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";
import { currentMenuItemLS } from "@/constants/local-storage";
import useHover from "@/ui-kit/hooks/useHover";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import logoExpanded from "@/ui-kit/icons/logo-primary-expanded.svg";
import { WHITE } from "@/ui-kit/constants/colors";

import {
  IconContainer,
  LinksWrapper,
  LinkTitle,
  LogosWrapper,
  SidebarLink,
  SidebarLogoExpanded,
  SSidebar
} from "./styled";


type MenuElements = "monitoring" | "domains" | "competitions" | "seoAudit" | "tools" | "reports" | "help";

interface Menu {
  key: MenuElements;
  link: string;
  icon: ReactNode;
  title: string;
  isChecked: boolean;
}

const ActivityIcon = lazy(() => import("@/ui-kit/customized-icons/activity/activity"));
const AtSignIcon = lazy(() => import("@/ui-kit/customized-icons/at-sign/at-sign"));
const TargetIcon = lazy(() => import("@/ui-kit/customized-icons/target/target"));
const BarChartIcon = lazy(() => import("@/ui-kit/customized-icons/bar-chart/bar-chart"));
const ToolIcon = lazy(() => import("@/ui-kit/customized-icons/tool/tool"));
const BookOpenIcon = lazy(() => import("@/ui-kit/customized-icons/book-open/book-open"));
const HelpCircleIcon = lazy(() => import("@/ui-kit/customized-icons/help-circle/help-circle"));

const Sidebar: FC = memo((): JSX.Element => {
  const { t } = useTranslation();
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
        link: '/',
        icon: <AtSignIcon size={25} color={currentMenuItem === "domains" ? WHITE : ""}/>,
        title: t("domains"),
        isChecked: currentMenuItem === "domains"
      },
      {
        key: "competitions",
        link: '/',
        icon: <TargetIcon size={25} color={currentMenuItem === "competitions" ? WHITE : ""}/>,
        title: t("competitions"),
        isChecked: currentMenuItem === "competitions"
      },
      {
        key: "seoAudit",
        link: '/',
        icon: <BarChartIcon size={25} color={currentMenuItem === "seoAudit" ? WHITE : ""}/>,
        title: t("seo_audit"),
        isChecked: currentMenuItem === "seoAudit"
      },
      {
        key: "tools",
        link: '/',
        icon: <ToolIcon size={25} color={currentMenuItem === "tools" ? WHITE : ""}/>,
        title: t("tools"),
        isChecked: currentMenuItem === "tools"
      },
      {
        key: "reports",
        link: '/',
        icon: <BookOpenIcon size={25} color={currentMenuItem === "reports" ? WHITE : ""}/>,
        title: t("reports"),
        isChecked: currentMenuItem === "reports"
      },
      {
        key: "help",
        link: '/',
        icon: <HelpCircleIcon size={25} color={currentMenuItem === "help" ? WHITE : ""}/>,
        title: t("help"),
        isChecked: currentMenuItem === "help"
      }
    ],
    [currentMenuItem]
  );

  const onClickLinkHandler = useCallback(
    (menuItem: MenuElements) => {
      setCurrentMenuItem(menuItem);
      localStorage.setItem(currentMenuItemLS, menuItem);
    },
    [setCurrentMenuItem]
  );

  return (
    <SSidebar ref={hoverRef}>
      <LogosWrapper>
        <SidebarLogoExpanded src={logoExpanded}/>
      </LogosWrapper>
      <LinksWrapper>
        {menu.map((element) => (
          <SidebarLink
            key={element.key}
            isHovered={isHovered}
            isChecked={element.isChecked}
            onClick={() => onClickLinkHandler(element.key)}
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
