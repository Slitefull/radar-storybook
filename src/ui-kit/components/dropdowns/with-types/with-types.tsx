import { FC, memo, ReactNode } from "react";
import Select, { InputActionMeta, StylesConfig } from "react-select";
import DropdownIndicator from "./components/dropdown-indicator/dropdown-indicator";
import Control from "./components/control/control";
import MultiValueRemove from ".//components/multivalue-remove/multivalue-remove";
import { DARK_LAVA, EBONY, LIGHT_GREY, PLATINUM, PLUMP_PURPLE, ROYAL_PURPLE } from "@/ui-kit/constants/colors";
import { CSSObject } from "styled-components";


type Option = { value: string | number, label: string | number }
type SelectOptions = "searchable" | "multi";

type SelectTypes = "single" | "multi";

interface SelectWithTypesProps {
  options: Option[];
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  onChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  defaultValue?: Option;
  types: SelectOptions[];
  icon?: ReactNode;
}

const baseControlStyles: CSSObject = {
  background: '#FFFFFF',
  width: 350,
  minHeight: 40,
  transition: '.2s border-radius ease-in-out, .2s opacity ease-in-out',
  padding: '0 20px 0 10px',
  cursor: "pointer",
  gap: '0 10px',
  boxShadow: "none",

  "&:focus": {
    border: `1px solid ${PLUMP_PURPLE}`,
    transition: '.2s border-radius ease-in-out, .2s opacity ease-in-out',
  },

  "&:hover": {
    border: `1px solid ${DARK_LAVA}`,
    transition: '.2s border ease-in-out',
  }
}

const baseOptionStyles: CSSObject = {
  fontFamily: "Menlo",
  fontSize: 14,
  fontWeight: 900,
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
}

const baseValueContainerStyles: CSSObject = {
  padding: '5px 0',
}

const baseSingleValueStyles: CSSObject = {
  fontSize: 14,
}

const basePlaceholderStyles: CSSObject = {
  fontFamily: 'Menlo',
  fontWeight: 400,
  fontSize: 14,
  lineHeight: '16px',
  letterSpacing: '-0.02em',
  color: '#423D33',
}

const baseMenuStyles: CSSObject = {
  margin: 0,
  padding: 10,
  display: "flex",
  width: "100%",
  flexDirection: "column",
  gap: '0 10px',
  borderRadius: "0 0 5px 5px",
}

const baseMenuListStyles: CSSObject = {
  display: 'flex',
  flexDirection: "column",
  gap: "10px 0",
}

const baseMultiValueStyles: CSSObject = {
  background: PLATINUM,
  borderRadius: 4,
  fontFamily: 'Menlo',
  fontWeight: 400,
  fontSize: 10,
  letterSpacing: '-0.02em',
  color: DARK_LAVA,
  alignItems: "center",
}

const baseMultiValueRemoveStyles: CSSObject = {
  transition: '.2s background ease-in-out',

  "&:hover": {
    transition: '.2s background ease-in-out',
    background: PLATINUM,
  }
}

const baseInputStyles: CSSObject = {
  fontWeight: 400,
  fontSize: 14,
};

const ControlColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseControlStyles },
  "multi": { ...baseControlStyles },
};

const OptionColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseOptionStyles },
  "multi": {
    ...baseOptionStyles,
    fontFamily: 'Menlo',
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const ValueContainerColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseValueContainerStyles },
  "multi": { ...baseValueContainerStyles },
};

const SingleValueRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseSingleValueStyles },
  "multi": {
    ...baseSingleValueStyles,
    fontFamily: 'Menlo',
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const PlaceholderColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...basePlaceholderStyles },
  "multi": {
    ...basePlaceholderStyles,
    fontFamily: 'Menlo',
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const MenuColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseMenuStyles },
  "multi": { ...baseMenuStyles },
};

const MenuListColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseMenuListStyles },
  "multi": { ...baseMenuListStyles },
};

const MultiValueColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseMultiValueStyles },
  "multi": { ...baseMultiValueStyles },
};

const MultiValueRemoveColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseMultiValueRemoveStyles },
  "multi": { ...baseMultiValueRemoveStyles },
};

const InputColorsRecord: Record<SelectTypes, CSSObject> = {
  "single": { ...baseInputStyles },
  "multi": {
    ...baseInputStyles,
    fontFamily: 'Menlo',
    fontWeight: 400,
    fontSize: 12,
    letterSpacing: '-0.02em',
  },
};

const SelectWithTypes: FC<SelectWithTypesProps> = memo((
  {
    types,
    options,
    closeMenuOnSelect,
    hideSelectedOptions,
    placeholder,
    isDisabled,
    onChange,
    defaultValue,
    icon,
  }
): JSX.Element => {
  const getSelectType = (types: SelectOptions[]): SelectTypes => {
    if (types.includes("multi")) {
      return "multi";
    }
    return "single";
  }

  const customStyles: StylesConfig<Option, true> = {
    control: (provided, { isFocused, selectProps }) => ({
      ...provided,
      ...ControlColorsRecord[getSelectType(types)],
      border: isFocused ? `1px solid ${PLUMP_PURPLE}` : `1px solid ${LIGHT_GREY}`,
      borderRadius: selectProps.menuIsOpen ? '8px 8px 0 0' : 8,
      opacity: selectProps.isDisabled ? .3 : 1,
      pointerEvents: selectProps.isDisabled ? "none" : "auto",
    }),
    option: (provided, { isSelected }) => ({
      ...provided,
      ...OptionColorsRecord[getSelectType(types)],
      color: isSelected ? ROYAL_PURPLE : EBONY,
    }),
    valueContainer: (provided) => ({
      ...provided,
      ...ValueContainerColorsRecord[getSelectType(types)],
    }),
    singleValue: (provided) => ({
      ...provided,
      ...SingleValueRecord[getSelectType(types)],
    }),
    placeholder: (provided) => ({
      ...provided,
      ...PlaceholderColorsRecord[getSelectType(types)],
    }),
    menu: (provided) => ({
      ...provided,
      ...MenuColorsRecord[getSelectType(types)],
    }),
    menuList: (provided) => ({
      ...provided,
      ...MenuListColorsRecord[getSelectType(types)],
    }),
    multiValue: (provided) => ({
      ...provided,
      ...MultiValueColorsRecord[getSelectType(types)],
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      ...MultiValueRemoveColorsRecord[getSelectType(types)],
    }),
    input: (provided) => ({
      ...provided,
      ...InputColorsRecord[getSelectType(types)]
    }),
    indicatorSeparator: () => ({ display: "none" }),
  }

  const getComponents = (icon: ReactNode | undefined) => {
    if (icon) return { DropdownIndicator, Control, MultiValueRemove };
    return { DropdownIndicator, MultiValueRemove };
  }

  return (
    <Select
      // @ts-ignore
      icon={icon}
      menuIsOpen={true}
      isSearchable={types.includes("searchable")}
      isMulti={types.includes("multi") || undefined}
      isDisabled={isDisabled}
      placeholder={placeholder || "Search"}
      closeMenuOnSelect={closeMenuOnSelect}
      hideSelectedOptions={hideSelectedOptions}
      options={options}
      styles={customStyles}
      components={getComponents(icon)}
      onInputChange={onChange}
      defaultValue={defaultValue}
    />
  )
});

export default SelectWithTypes;
