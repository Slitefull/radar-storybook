import { FC, memo } from "react";
import { CSSObject } from "styled-components";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Select, { StylesConfig } from "react-select";
import DropdownIndicator from "./components/dropdown-indicator/dropdown-indicator";
import Label from "@/ui-kit/components/label/label";
import { DARK_LAVA, EBONY, PLATINUM, PLUMP_PURPLE, TRANSPARENT, WHITE } from "@/ui-kit/constants/colors";

import { WithLabelWrapper } from "./styled";


type Option = { value: string | number, label: string | number };
type Colors = "primary" | "secondary" | "ghost";
type LabelPosition = "top" | "right" | "bottom" | "left";
type LabelColors = "primary" | "ghost" | "subtly";

//TODO SEARCHABLE LABEL COLOR

interface SelectProps {
  color?: Colors;
  options: Option[];
  isSearchable?: boolean;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange: (option: any) => void;
  defaultValue?: Option;
  rounded?: boolean;
  label?: string;
  labelPosition?: LabelPosition;
  labelColor?: LabelColors;
  width?: string;
}

const DEFAULT_COLOR = "primary";

const baseControlStyles: CSSObject = {
  minWidth: 130,
  height: 40,
  transition: '.2s background ease-in-out, .2s border-radius ease-in-out, .2s border ease-in-out, .2s opacity ease-in-out',
  padding: '0 12px',
  cursor: "pointer",
  gap: '0 10px',
  boxShadow: "none",
  borderColor: TRANSPARENT,

  "&:hover": {
    transition: '.2s background ease-in-out, .2s border-radius ease-in-out, .2s border ease-in-out, .2s opacity ease-in-out',
  },

  "&:focus": {
    border: `1px solid ${TRANSPARENT}`,
  },
};

const baseOptionStyles: CSSObject = {
  fontFamily: "Menlo",
  fontSize: 14,
  fontWeight: 900,
  color: EBONY,
  cursor: 'pointer',
  padding: '2px 0',
  background: "none",
  transition: '.2s opacity ease-in-out',

  "&:hover": {
    opacity: .7,
    transition: '.2s opacity ease-in-out',
  },

  "&:active": {
    backgroundColor: 'transparent',
  }
};

const baseValueContainerStyles: CSSObject = {
  padding: '5px 0',
};

const basePlaceholderStyles: CSSObject = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.02em',
};

const baseSingleValueStyles: CSSObject = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '24px',
  letterSpacing: '-0.02em',
};

const baseMenuStyles: CSSObject = {
  margin: 0,
  padding: 10,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: '0 10px',
  borderRadius: "0 0 5px 5px",
  boxShadow: "none",
};

const baseMenuListStyles: CSSObject = {
  display: 'flex',
  flexDirection: "column",
  gap: "10px 0",
};

const ControlColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseControlStyles,
    background: PLUMP_PURPLE,

    ".arrow > path": {
      stroke: WHITE,
    },

    "&:hover": {
      background: WHITE,
      border: `1px solid ${PLUMP_PURPLE}`,

      ".custom-select__placeholder": {
        color: PLUMP_PURPLE,
      },

      ".custom-select__single-value": {
        color: PLUMP_PURPLE,
      },

      ".arrow > path": {
        stroke: PLUMP_PURPLE,
      },
    },
  },
  "secondary": {
    ...baseControlStyles,
    background: WHITE,
    border: `1px solid ${PLUMP_PURPLE}`,

    ".arrow > path": {
      stroke: PLUMP_PURPLE,
    },

    "&:hover": {
      background: PLUMP_PURPLE,
      border: `1px solid ${TRANSPARENT}`,

      ".custom-select__placeholder": {
        color: WHITE,
      },

      ".custom-select__single-value": {
        color: WHITE,
      },

      ".arrow > path": {
        stroke: WHITE,
      },
    },
  },
  "ghost": {
    ...baseControlStyles,
    background: WHITE,
    border: `1px solid ${PLATINUM}`,
    height: 36,

    ".arrow > path": {
      stroke: DARK_LAVA,
    },

    "&:hover": {
      background: WHITE,
      border: `1px solid ${PLUMP_PURPLE}`,

      ".custom-select__placeholder": {
        color: DARK_LAVA,
      },

      ".custom-select__single-value": {
        color: DARK_LAVA,
      },

      ".arrow > path": {
        stroke: DARK_LAVA,
      },
    }
  },
};

const OptionColorsRecord: Record<Colors, CSSObject> = {
  "primary": { ...baseOptionStyles, fontFamily: 'FreightSans Pro' },
  "secondary": { ...baseOptionStyles, fontFamily: 'FreightSans Pro' },
  "ghost": {
    ...baseOptionStyles,
    fontFamily: 'Menlo',
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const ValueContainerColorsRecord: Record<Colors, CSSObject> = {
  "primary": { ...baseValueContainerStyles },
  "secondary": { ...baseValueContainerStyles },
  "ghost": { ...baseValueContainerStyles },
};

const SingleValueColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseSingleValueStyles,
    color: WHITE,
    fontFamily: 'FreightSans Pro',
  },
  "secondary": {
    ...baseSingleValueStyles,
    color: PLUMP_PURPLE,
    fontFamily: 'FreightSans Pro',
  },
  "ghost": {
    ...baseSingleValueStyles,
    fontFamily: 'Menlo',
    color: DARK_LAVA,
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const PlaceholderColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...basePlaceholderStyles,
    color: WHITE,
    fontFamily: 'FreightSans Pro',

    "&:hover": {
      color: PLUMP_PURPLE,
    },
  },
  "secondary": {
    ...basePlaceholderStyles,
    color: PLUMP_PURPLE,

    "&:hover": {
      color: WHITE,
    },
    fontFamily: 'FreightSans Pro',
  },
  "ghost": {
    ...basePlaceholderStyles,
    color: DARK_LAVA,
    fontFamily: 'Menlo',
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const MenuColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseMenuStyles,
    color: WHITE,
    border: `1px solid ${PLUMP_PURPLE}`,
    borderTop: "none",
  },
  "secondary": {
    ...baseMenuStyles,
    color: PLUMP_PURPLE,
    border: `1px solid ${PLUMP_PURPLE}`,
    borderTop: "none",
  },
  "ghost": {
    ...baseMenuStyles,
    color: DARK_LAVA,
    border: `1px solid ${PLATINUM}`,
    borderTop: "none",
  },
};

const MenuListColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseMenuListStyles,
    color: WHITE,
  },
  "secondary": {
    ...baseMenuListStyles,
    color: PLUMP_PURPLE,
  },
  "ghost": {
    ...baseMenuListStyles,
    color: DARK_LAVA,
  },
}

const Dropdown: FC<SelectProps> = memo((
  {
    color,
    options,
    isSearchable,
    closeMenuOnSelect,
    hideSelectedOptions,
    placeholder,
    disabled,
    onChange,
    defaultValue,
    rounded,
    label,
    labelPosition = "left",
    labelColor,
    width = "fit-content",
  }
): JSX.Element => {
  const { t } = useTranslation();

  const getControlBR = (rounded: boolean | undefined, isOpen: boolean): string => {
    if (isOpen) {
      if (rounded) {
        return "20px 20px 0 0 ";
      }
      return "4px 4px 0 0";
    }

    if (rounded) {
      return "35px";
    }

    return "4px";
  }

  const customStyles: StylesConfig<Option, true> = {
    control: (provided, { selectProps }) => ({
      ...provided,
      ...ControlColorsRecord[color || DEFAULT_COLOR],
      borderRadius: getControlBR(rounded, selectProps.menuIsOpen),
      opacity: disabled ? .3 : 1,
    }),
    container: (provided) => ({
      ...provided,
      width: '100%',
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      ...OptionColorsRecord[color || DEFAULT_COLOR],
      opacity: isSelected ? .7 : 1,
    }),
    singleValue: (provided) => ({
      ...provided,
      ...SingleValueColorsRecord[color || DEFAULT_COLOR],
    }),
    valueContainer: (provided) => ({
      ...provided,
      ...ValueContainerColorsRecord[color || DEFAULT_COLOR],
    }),
    placeholder: (provided) => ({
      ...provided,
      ...PlaceholderColorsRecord[color || DEFAULT_COLOR],
    }),
    menu: (provided) => ({
      ...provided,
      ...MenuColorsRecord[color || DEFAULT_COLOR],
    }),
    menuList: (provided) => ({
      ...provided,
      ...MenuListColorsRecord[color || DEFAULT_COLOR],
    }),
    indicatorSeparator: () => ({ display: "none" }),
  }

  return (
    <WithLabelWrapper
      labelPosition={labelPosition}
      withLabel={!!label}
      width={width}
    >
      {label && <Label color={labelColor}>{label}</Label>}
      <Select
        classNamePrefix={"custom-select"}
        isDisabled={disabled}
        isSearchable={isSearchable || false}
        placeholder={placeholder || capitalizeFirstLetter(t("search"))}
        closeMenuOnSelect={closeMenuOnSelect}
        hideSelectedOptions={hideSelectedOptions}
        options={options}
        styles={customStyles}
        onChange={(option) => onChange(option)}
        defaultValue={defaultValue}
        components={{ DropdownIndicator }}
      />
    </WithLabelWrapper>
  )
});

export default Dropdown;
