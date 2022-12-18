import { FC } from "react";
import { components } from "react-select";


const Control: FC = ({ children, ...props }: any): JSX.Element => {
  const { selectProps } = props;
  const { icon } = selectProps;

  return (
    <components.Control {...props}>
      {icon}
      {children}
    </components.Control>
  );
};

export default Control;
