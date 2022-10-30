import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface ButtonFallbackProps {
  animate?: boolean;
  speed?: number;
  height?: number;
  width?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const ButtonFallback: FC<ButtonFallbackProps> = memo((
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
      foregroundColor={animate ? (foregroundColor || "#c6c3c3") : undefined}
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

export default ButtonFallback;
