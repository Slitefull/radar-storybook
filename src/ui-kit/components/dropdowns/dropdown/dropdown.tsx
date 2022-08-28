import { BaseSyntheticEvent, FC, lazy, memo, Ref, useCallback, useState } from "react";
import useClickOutside from "@/ui-kit/hooks/useClickOutside";
import useHover from "@/ui-kit/hooks/useHover";
import { DARK_LAVA, PLUMP_PURPLE, WHITE } from "@/ui-kit/constants/colors";

import { DropdownColors, DropdownSizes } from "./types";
import {
  DropdownBody,
  DropdownHeader,
  DropdownItem,
  DropdownItemLabel,
  IconWrapper,
  Label,
  Row,
  StyledDropdown
} from "./styled";


interface Element {
  key: string;
  label: string;
}

interface DropdownProps {
  elements: Element[];
  rounded?: boolean;
  color?: DropdownColors;
  size?: DropdownSizes;
  label?: string;
}

const ArrowIcon = lazy(() => import("@/ui-kit/customized-icons/arrow/arrow"));

const IconColorsRecord: Record<DropdownColors, Color> = {
  "primary": WHITE,
  "secondary": PLUMP_PURPLE,
  "ghost": DARK_LAVA,
};

const IconHoveredColorsRecord: Record<DropdownColors, Color> = {
  "primary": PLUMP_PURPLE,
  "secondary": WHITE,
  "ghost": DARK_LAVA,
};

const IconSizeRecord: Record<DropdownSizes, number> = {
  "default": 12,
  "small": 10,
};

const DEFAULT_COLOR = "primary";
const DEFAULT_SIZE = "default";

const Dropdown: FC<DropdownProps> = memo((
  {
    elements,
    rounded,
    color,
    size,
    label
  }
): JSX.Element => {
  const [isOpen, setOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>('');
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  const ref: Ref<HTMLDivElement> = useClickOutside(() => setOpen(false));

  const handleItemClick = useCallback(
    (key: string) => {
      if (selectedItem === key) {
        setSelectedItem('');
        return;
      }
      setSelectedItem(key);
    },
    [selectedItem]
  );

  const openToggle = useCallback(
    () => setOpen(!isOpen),
    [isOpen]
  )

  return (
    <Row>
      {label && <Label>{label}</Label>}
      <StyledDropdown ref={ref}>
        <DropdownHeader
          ref={hoverRef}
          color={color}
          size={size}
          rounded={rounded}
          isOpen={isOpen}
          onClick={openToggle}
        >
          {selectedItem ? elements.find((item: Element) => item.key === selectedItem)?.label : "Select"}
          <IconWrapper size={size}>
            <ArrowIcon
              rotation={isOpen ? "right" : "bottom"}
              color={isHovered
                ? IconHoveredColorsRecord[color || DEFAULT_COLOR]
                : IconColorsRecord[color || DEFAULT_COLOR]
              }
              size={IconSizeRecord[size || DEFAULT_SIZE]}
            />
          </IconWrapper>
        </DropdownHeader>
        <DropdownBody
          isOpen={isOpen}
          color={color}
        >
          {elements.map((element: Element) => (
            <DropdownItem key={element.key}>
              <DropdownItemLabel
                id={element.key}
                color={color}
                onClick={(e: BaseSyntheticEvent) => handleItemClick(e.target.id)}
                isSelected={element.key === selectedItem}
              >
                {element.label}
              </DropdownItemLabel>
            </DropdownItem>
          ))}
        </DropdownBody>
      </StyledDropdown>
    </Row>
  )
});

export default Dropdown;
