import { FC, memo } from "react";
import ListIcon from "@/ui-kit/customized-icons/list/list";
import GridIcon from "@/ui-kit/customized-icons/grid/grid";
import useHover from "@/ui-kit/hooks/useHover";
import { PLUMP_PURPLE, ROCKET_METALLIC, WHITE } from "@/ui-kit/constants/colors";

import { Row, SButton } from "./styled";


type Views = "list" | "grid";

interface ListGridViewProps {
  activeView: Views;
  onListChooseHandler: VoidFunction;
  onGridChooseHandler: VoidFunction;
}

interface ButtonViewProps {
  isActive: boolean;
  onClick: VoidFunction;
}

const getIconColor = (isActive: boolean, isHovered: boolean): Color => {
  if (isActive) {
    if (isHovered) {
      return WHITE;
    }
    return WHITE;
  }

  if (isHovered) {
    return PLUMP_PURPLE;
  }

  return ROCKET_METALLIC;
};

const ListView: FC<ButtonViewProps> = memo(({ isActive }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLButtonElement>();

  return (
    <SButton
      isActive={isActive}
      isHovered={isHovered}
      ref={hoverRef}
    >

      <ListIcon
        size={24}
        color={getIconColor(isActive, isHovered)}
      />
    </SButton>
  );
});

const GridView: FC<ButtonViewProps> = memo(({ isActive }): JSX.Element => {
  const [hoverRef, isHovered] = useHover<HTMLButtonElement>();

  return (
    <SButton
      isActive={isActive}
      isHovered={isHovered}
      ref={hoverRef}
    >
      <GridIcon
        size={24}
        color={getIconColor(isActive, isHovered)}
      />
    </SButton>
  );
});

const ListGridView: FC<ListGridViewProps> = memo((
  {
    activeView,
    onListChooseHandler,
    onGridChooseHandler
  }
): JSX.Element => {
  return (
    <Row>
      <ListView
        isActive={activeView === "list"}
        onClick={onListChooseHandler}
      />
      <GridView
        isActive={activeView === "grid"}
        onClick={onGridChooseHandler}
      />
    </Row>
  );
});

export default ListGridView;
