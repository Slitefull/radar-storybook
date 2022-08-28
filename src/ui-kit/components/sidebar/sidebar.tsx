import { FC, lazy, memo, ReactNode, useCallback, useMemo } from 'react';
import { useRecoilState } from "recoil";
import { currentMenuItemLS } from "@/constants/local-storage";
import useHover from "@/ui-kit/hooks/useHover";
import { currentMenuItemState } from "@/entity/atoms/currentMenuItem";
import logoCollapsed from "@/ui-kit/icons/logo-primary-collapsed.svg";
import logoExpanded from "@/ui-kit/icons/logo-primary-expanded.svg";
import { WHITE } from "@/ui-kit/constants/colors";

import {
  IconContainer,
  LinksWrapper,
  LinkTitle,
  LogosWrapper,
  SidebarLink,
  SidebarLogoCollapsed,
  SidebarLogoExpanded,
  StyledSidebar
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
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const [currentMenuItem, setCurrentMenuItem] = useRecoilState<MenuElements | null>(currentMenuItemState);

  const menu: Menu[] = useMemo(
    () => [
      {
        key: "monitoring",
        link: '/',
        icon: <ActivityIcon color={currentMenuItem === "monitoring" ? WHITE : ""}/>,
        title: 'Monitoring',
        isChecked: currentMenuItem === "monitoring"
      },
      {
        key: "domains",
        link: '/',
        icon: <AtSignIcon color={currentMenuItem === "domains" ? WHITE : ""}/>,
        title: 'Domains',
        isChecked: currentMenuItem === "domains"
      },
      {
        key: "competitions",
        link: '/',
        icon: <TargetIcon color={currentMenuItem === "competitions" ? WHITE : ""}/>,
        title: 'Competitions',
        isChecked: currentMenuItem === "competitions"
      },
      {
        key: "seoAudit",
        link: '/',
        icon: <BarChartIcon color={currentMenuItem === "seoAudit" ? WHITE : ""}/>,
        title: 'SEO Audit',
        isChecked: currentMenuItem === "seoAudit"
      },
      {
        key: "tools",
        link: '/',
        icon: <ToolIcon color={currentMenuItem === "tools" ? WHITE : ""}/>,
        title: 'Tools',
        isChecked: currentMenuItem === "tools"
      },
      {
        key: "reports",
        link: '/',
        icon: <BookOpenIcon color={currentMenuItem === "reports" ? WHITE : ""}/>,
        title: 'Reports',
        isChecked: currentMenuItem === "reports"
      },
      {
        key: "help",
        link: '/',
        icon: <HelpCircleIcon color={currentMenuItem === "help" ? WHITE : ""}/>,
        title: 'Help',
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
    <StyledSidebar
      ref={hoverRef}
      isHovered={isHovered}
    >
      <LogosWrapper>
        <SidebarLogoCollapsed
          src={logoCollapsed}
          isHovered={isHovered}
        />
        <SidebarLogoExpanded
          src={logoExpanded}
          isHovered={isHovered}
        />
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
    </StyledSidebar>
  );
});

export default Sidebar;
