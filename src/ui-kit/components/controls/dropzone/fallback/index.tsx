import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface DropzoneFallbackProps {
  animate?: boolean;
  speed?: number;
  height?: number;
  width?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const DropzoneFallback: FC<DropzoneFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    height = 35,
    width = 110,
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
      <rect
        x="0"
        y="0"
        rx="4"
        ry="4"
        width={width}
        height={height}
      />
    </ContentLoader>
  )
})

export default DropzoneFallback;
