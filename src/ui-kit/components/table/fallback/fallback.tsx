import { FC, memo } from "react";
import ContentLoader from "react-content-loader";


interface TableFallbackProps {
  animate?: boolean;
  speed?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const TableFallback: FC<TableFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    backgroundColor,
    foregroundColor,
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      viewBox="0 0 1720 380"
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#c6c3c3") : undefined}
    >
      <rect x="0" y="0" rx="4" ry="4" width="30" height="30"/>
      <rect x="55" y="0" rx="10" ry="10" width="150" height="30"/>
      <rect x="255" y="0" rx="10" ry="10" width="250" height="30"/>
      <rect x="555" y="0" rx="10" ry="10" width="150" height="30"/>
      <rect x="755" y="0" rx="10" ry="10" width="250" height="30"/>
      <rect x="855" y="0" rx="10" ry="10" width="150" height="30"/>
      <rect x="1055" y="0" rx="10" ry="10" width="150" height="30"/>
      <rect x="1255" y="0" rx="10" ry="10" width="250" height="30"/>
      <rect x="1555" y="0" rx="10" ry="10" width="150" height="30"/>

      <rect x="0" y="70" rx="4" ry="4" width="30" height="30"/>
      <rect x="55" y="70" rx="10" ry="10" width="150" height="30"/>
      <rect x="255" y="70" rx="10" ry="10" width="250" height="30"/>
      <rect x="555" y="70" rx="10" ry="10" width="150" height="30"/>
      <rect x="755" y="70" rx="10" ry="10" width="250" height="30"/>
      <rect x="855" y="70" rx="10" ry="10" width="150" height="30"/>
      <rect x="1055" y="70" rx="10" ry="10" width="150" height="30"/>
      <rect x="1255" y="70" rx="10" ry="10" width="250" height="30"/>
      <rect x="1555" y="70" rx="10" ry="10" width="150" height="30"/>

      <rect x="0" y="140" rx="4" ry="4" width="30" height="30"/>
      <rect x="55" y="140" rx="10" ry="10" width="150" height="30"/>
      <rect x="255" y="140" rx="10" ry="10" width="250" height="30"/>
      <rect x="555" y="140" rx="10" ry="10" width="150" height="30"/>
      <rect x="755" y="140" rx="10" ry="10" width="250" height="30"/>
      <rect x="855" y="140" rx="10" ry="10" width="150" height="30"/>
      <rect x="1055" y="140" rx="10" ry="10" width="150" height="30"/>
      <rect x="1255" y="140" rx="10" ry="10" width="250" height="30"/>
      <rect x="1555" y="140" rx="10" ry="10" width="150" height="30"/>

      <rect x="0" y="210" rx="4" ry="4" width="30" height="30"/>
      <rect x="55" y="210" rx="10" ry="10" width="150" height="30"/>
      <rect x="255" y="210" rx="10" ry="10" width="250" height="30"/>
      <rect x="555" y="210" rx="10" ry="10" width="150" height="30"/>
      <rect x="755" y="210" rx="10" ry="10" width="250" height="30"/>
      <rect x="855" y="210" rx="10" ry="10" width="150" height="30"/>
      <rect x="1055" y="210" rx="10" ry="10" width="150" height="30"/>
      <rect x="1255" y="210" rx="10" ry="10" width="250" height="30"/>
      <rect x="1555" y="210" rx="10" ry="10" width="150" height="30"/>

      <rect x="0" y="280" rx="4" ry="4" width="30" height="30"/>
      <rect x="55" y="280" rx="10" ry="10" width="150" height="30"/>
      <rect x="255" y="280" rx="10" ry="10" width="250" height="30"/>
      <rect x="555" y="280" rx="10" ry="10" width="150" height="30"/>
      <rect x="755" y="280" rx="10" ry="10" width="250" height="30"/>
      <rect x="855" y="280" rx="10" ry="10" width="150" height="30"/>
      <rect x="1055" y="280" rx="10" ry="10" width="150" height="30"/>
      <rect x="1255" y="280" rx="10" ry="10" width="250" height="30"/>
      <rect x="1555" y="280" rx="10" ry="10" width="150" height="30"/>

      <rect x="0" y="350" rx="4" ry="4" width="30" height="30"/>
      <rect x="55" y="350" rx="10" ry="10" width="150" height="30"/>
      <rect x="255" y="350" rx="10" ry="10" width="250" height="30"/>
      <rect x="555" y="350" rx="10" ry="10" width="150" height="30"/>
      <rect x="755" y="350" rx="10" ry="10" width="250" height="30"/>
      <rect x="855" y="350" rx="10" ry="10" width="150" height="30"/>
      <rect x="1055" y="350" rx="10" ry="10" width="150" height="30"/>
      <rect x="1255" y="350" rx="10" ry="10" width="250" height="30"/>
      <rect x="1555" y="350" rx="10" ry="10" width="150" height="30"/>
    </ContentLoader>
  );
});

export default TableFallback;
