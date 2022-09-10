import { FC, memo, ReactNode } from "react";
import Select, { InputActionMeta, StylesConfig } from "react-select";
import DropdownIndicator from "./components/dropdown-indicator/dropdown-indicator";
import Control from "./components/control/control";
import MultiValueRemove from ".//components/multivalue-remove/multivalue-remove";
import { DARK_LAVA, EBONY, LIGHT_GREY, PLATINUM, PLUMP_PURPLE } from "@/ui-kit/constants/colors";


type Option = { value: string | number, label: string | number }
type SelectTypes = "searchable" | "multi";

interface SelectWithTypesProps {
  options: Option[];
  closeMenuOnSelect?: boolean;
  hideSelectedOptions?: boolean;
  placeholder?: string;
  isDisabled?: boolean;
  onChange?: (newValue: string, actionMeta: InputActionMeta) => void;
  defaultValue?: Option;
  types: SelectTypes[];
  icon?: ReactNode;
}

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
  const customStyles: StylesConfig<Option, true> = {
    control: (provided, state) => ({
      ...provided,
      background: '#FFFFFF',
      border: state.isFocused ? `1px solid ${PLUMP_PURPLE}` : `1px solid ${LIGHT_GREY}`,
      width: 350,
      minHeight: 40,
      borderRadius: state.selectProps.menuIsOpen ? '8px 8px 0 0' : 8,
      transition: '.2s border-radius ease-in-out, .2s opacity ease-in-out',
      padding: '0 10px',
      cursor: "pointer",
      gap: '0 10px',
      opacity: state.selectProps.isDisabled ? .3 : 1,
      pointerEvents: state.selectProps.isDisabled ? "none" : "auto",
      boxShadow: "none",

      "&:focus": {
        border: `1px solid ${PLUMP_PURPLE}`,
        transition: '.2s border-radius ease-in-out, .2s opacity ease-in-out',
      },

      "&:hover": {
        border: `1px solid ${DARK_LAVA}`,
        transition: '.2s border ease-in-out',
      }
    }),
    option: (provided, state) => ({
      ...provided,
      fontFamily: "Menlo",
      fontSize: 14,
      fontWeight: 900,
      color: EBONY,
      cursor: 'pointer',
      padding: '2px 0',
      opacity: state.isSelected ? .7 : 1,
      background: "none",
      transition: '.2s opacity ease-in-out',

      "&:hover": {
        opacity: .7,
        transition: '.2s opacity ease-in-out',
      },

      "&:active": {
        backgroundColor: 'transparent',
      }
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: '5px 0',
    }),
    singleValue: (provided) => ({
      ...provided,
      fontSize: 14,
    }),
    placeholder: (provided) => ({
      ...provided,
      fontFamily: 'Menlo',
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '16px',
      letterSpacing: '-0.02em',
      color: '#423D33',
    }),
    menu: (provided) => ({
      ...provided,
      margin: 0,
      padding: 10,
      display: "flex",
      width: "100%",
      flexDirection: "column",
      gap: '0 10px',
      borderRadius: "0 0 5px 5px",
    }),
    menuList: (provided) => ({
      ...provided,
      display: 'flex',
      flexDirection: "column",
      gap: "10px 0",
    }),
    multiValue: (provided) => ({
      ...provided,
      background: PLATINUM,
      borderRadius: 4,
      fontFamily: 'Menlo',
      fontWeight: 400,
      fontSize: 10,
      letterSpacing: '-0.02em',
      color: DARK_LAVA,
      alignItems: "center",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      transition: '.2s background ease-in-out',

      "&:hover": {
        transition: '.2s background ease-in-out',
        background: PLATINUM,
      }
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
