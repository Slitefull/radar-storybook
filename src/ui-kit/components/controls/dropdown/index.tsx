import { FC, memo, ReactNode } from "react";
import { CSSObject } from "styled-components";
import { useTranslation } from "react-i18next";
import { capitalizeFirstLetter } from "@/ui-kit/helpers/capitalizeFirstLetter";
import Select, { StylesConfig } from "react-select";
import DropdownIndicator from "./components/dropdown-indicator/dropdown-indicator";
import Label from "@/ui-kit/components/typography/label";
import { NEUTRAL_90, NEUTRAL_70, NEUTRAL_20, PRIMARY_60, TRANSPARENT, NEUTRAL_00 } from "@/ui-kit/constants/colors";

import { SelectOption } from "@/ui-kit/types/select";
import { LabelPositions, LabelSizes, LabelTypes, LabelWeights } from "../../typography/label/types";
import { OptionContainer, SubElementContainer, WithLabelWrapper } from "./styled";


type Colors = "primary" | "secondary" | "ghost";

//TODO SEARCHABLE LABEL COLOR

interface SelectProps {
  color?: Colors;
  options: SelectOption[];
  isSearchable?: boolean;
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  placeholder?: string;
  disabled?: boolean;
  onChange: (option: any) => void;
  defaultValue?: SelectOption;
  rounded?: boolean;
  label?: string;
  labelPosition?: LabelPositions;
  labelColor?: Color
  labelSize?: LabelSizes;
  labelWeight?: LabelWeights;
  labelType?: LabelTypes;
  subElement?: ReactNode;
  width?: string;
  value?: SelectOption;
}

const baseControlStyles: CSSObject = {
  minWidth: 130,
  height: 40,
  transition: ".2s background ease-in-out, .2s border-radius ease-in-out, .2s border ease-in-out, .2s opacity ease-in-out",
  padding: "0 12px",
  cursor: "pointer",
  gap: "0 10px",
  boxShadow: "none",
  borderColor: TRANSPARENT,

  "&:hover": {
    transition: ".2s background ease-in-out, .2s border-radius ease-in-out, .2s border ease-in-out, .2s opacity ease-in-out",
  },

  "&:focus": {
    border: `1px solid ${TRANSPARENT}`,
  },
};

const baseOptionStyles: CSSObject = {
  fontFamily: "Menlo",
  fontSize: 14,
  fontWeight: 900,
  color: NEUTRAL_70,
  cursor: "pointer",
  padding: "2px 0",
  background: "none",
  transition: ".2s opacity ease-in-out",

  "&:hover": {
    opacity: .7,
    transition: ".2s opacity ease-in-out",
  },

  "&:active": {
    backgroundColor: "transparent",
  }
};

const baseValueContainerStyles: CSSObject = {
  padding: "5px 0",
};

const basePlaceholderStyles: CSSObject = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "-0.02em",
};

const baseSingleValueStyles: CSSObject = {
  fontSize: 14,
  fontWeight: 700,
  lineHeight: "24px",
  letterSpacing: "-0.02em",
};

const baseMenuStyles: CSSObject = {
  margin: 0,
  padding: 10,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: "0 10px",
  borderRadius: "0 0 5px 5px",
  boxShadow: "none",
  zIndex: 99999999,
};

const baseMenuListStyles: CSSObject = {
  display: "flex",
  flexDirection: "column",
  gap: "10px 0",
};

const ControlColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseControlStyles,
    background: PRIMARY_60,

    ".arrow > path": {
      stroke: NEUTRAL_00,
    },

    "&:hover": {
      background: NEUTRAL_00,
      border: `1px solid ${PRIMARY_60}`,

      ".custom-select__placeholder": {
        color: PRIMARY_60,
      },

      ".custom-select__single-value": {
        color: PRIMARY_60,
      },

      ".arrow > path": {
        stroke: PRIMARY_60,
      },
    },
  },
  "secondary": {
    ...baseControlStyles,
    background: NEUTRAL_00,
    border: `1px solid ${PRIMARY_60}`,

    ".arrow > path": {
      stroke: PRIMARY_60,
    },

    "&:hover": {
      background: PRIMARY_60,
      border: `1px solid ${TRANSPARENT}`,

      ".custom-select__placeholder": {
        color: NEUTRAL_00,
      },

      ".custom-select__single-value": {
        color: NEUTRAL_00,
      },

      ".arrow > path": {
        stroke: NEUTRAL_00,
      },
    },
  },
  "ghost": {
    ...baseControlStyles,
    background: NEUTRAL_00,
    border: `1px solid ${NEUTRAL_20}`,
    height: 36,

    ".arrow > path": {
      stroke: NEUTRAL_90,
    },

    "&:hover": {
      background: NEUTRAL_00,
      border: `1px solid ${PRIMARY_60}`,

      ".custom-select__placeholder": {
        color: NEUTRAL_90,
      },

      ".custom-select__single-value": {
        color: NEUTRAL_90,
      },

      ".arrow > path": {
        stroke: NEUTRAL_90,
      },
    }
  },
};

const OptionColorsRecord: Record<Colors, CSSObject> = {
  "primary": { ...baseOptionStyles, fontFamily: "FreightSans Pro" },
  "secondary": { ...baseOptionStyles, fontFamily: "FreightSans Pro" },
  "ghost": {
    ...baseOptionStyles,
    fontFamily: "Menlo",
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: "-0.02em",
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
    color: NEUTRAL_00,
    fontFamily: "FreightSans Pro",
  },
  "secondary": {
    ...baseSingleValueStyles,
    color: PRIMARY_60,
    fontFamily: "FreightSans Pro",
  },
  "ghost": {
    ...baseSingleValueStyles,
    fontFamily: "Menlo",
    color: NEUTRAL_90,
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: "-0.02em",
  },
};

const PlaceholderColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...basePlaceholderStyles,
    color: NEUTRAL_00,
    fontFamily: "FreightSans Pro",

    "&:hover": {
      color: PRIMARY_60,
    },
  },
  "secondary": {
    ...basePlaceholderStyles,
    color: PRIMARY_60,

    "&:hover": {
      color: NEUTRAL_00,
    },
    fontFamily: "FreightSans Pro",
  },
  "ghost": {
    ...basePlaceholderStyles,
    color: NEUTRAL_90,
    fontFamily: "Menlo",
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: "-0.02em",
  },
};

const MenuColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseMenuStyles,
    color: NEUTRAL_00,
    border: `1px solid ${PRIMARY_60}`,
    borderTop: "none",
  },
  "secondary": {
    ...baseMenuStyles,
    color: PRIMARY_60,
    border: `1px solid ${PRIMARY_60}`,
    borderTop: "none",
  },
  "ghost": {
    ...baseMenuStyles,
    color: NEUTRAL_90,
    border: `1px solid ${NEUTRAL_20}`,
    borderTop: "none",
  },
};

const MenuListColorsRecord: Record<Colors, CSSObject> = {
  "primary": {
    ...baseMenuListStyles,
    color: NEUTRAL_00,
  },
  "secondary": {
    ...baseMenuListStyles,
    color: PRIMARY_60,
  },
  "ghost": {
    ...baseMenuListStyles,
    color: NEUTRAL_90,
  },
}

const Dropdown: FC<SelectProps> = memo((
  {
    color = "primary",
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
    labelSize,
    labelType,
    labelWeight,
    subElement,
    width = "fit-content",
    value,
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

  const customStyles: StylesConfig<SelectOption, true> = {
    control: (provided, { selectProps }) => ({
      ...provided,
      ...ControlColorsRecord[color],
      borderRadius: getControlBR(rounded, selectProps.menuIsOpen),
      opacity: disabled ? .3 : 1,
    }),
    container: (provided) => ({
      ...provided,
      width: "100%",
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      ...OptionColorsRecord[color],
      opacity: isSelected ? .7 : 1,
    }),
    singleValue: (provided) => ({
      ...provided,
      ...SingleValueColorsRecord[color],
    }),
    valueContainer: (provided) => ({
      ...provided,
      ...ValueContainerColorsRecord[color],
    }),
    placeholder: (provided) => ({
      ...provided,
      ...PlaceholderColorsRecord[color],
    }),
    menu: (provided) => ({
      ...provided,
      ...MenuColorsRecord[color],
    }),
    menuList: (provided) => ({
      ...provided,
      ...MenuListColorsRecord[color],
    }),
    indicatorSeparator: () => ({ display: "none" }),
  }

  return (
    <WithLabelWrapper
      labelPosition={labelPosition}
      withLabel={!!label}
      width={width}
    >
      {label && (
        <Label
          type={labelType}
          color={labelColor}
          size={labelSize}
          weight={labelWeight}
        >
          {label}
        </Label>
      )}
      <Select
        classNamePrefix={"custom-select"}
        isDisabled={disabled}
        isSearchable={isSearchable || false}
        value={value}
        placeholder={placeholder || capitalizeFirstLetter(t("search"))}
        closeMenuOnSelect={closeMenuOnSelect}
        hideSelectedOptions={hideSelectedOptions}
        options={options}
        // @ts-ignore
        getOptionLabel={(element) => (
          <OptionContainer>
            {element.label}
          </OptionContainer>
        )}
        styles={customStyles}
        onChange={(option) => onChange(option)}
        defaultValue={defaultValue}
        components={{ DropdownIndicator }}
      />
      {subElement && (
        <SubElementContainer>
          {subElement}
        </SubElementContainer>
      )}
    </WithLabelWrapper>
  )
});

export default Dropdown;
