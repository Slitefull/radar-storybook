import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface RadioCollapsibleCardFallbackProps {
  animate?: boolean;
  speed?: number;
  height?: number;
  width?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const RadioCollapsibleCardFallback: FC<RadioCollapsibleCardFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    height = 50,
    width = 450,
    backgroundColor,
    foregroundColor
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#ecebeb") : undefined}
    >
      <rect x="0" y="0" rx="15" ry="15" width={width} height={height}/>
    </ContentLoader>
  )
})

export default RadioCollapsibleCardFallback;
