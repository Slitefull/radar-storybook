import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface TextAreaFallbackProps {
  animate?: boolean;
  speed?: number;
  height?: number;
  width?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const TextAreaFallback: FC<TextAreaFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    height = 35,
    width = 200,
    backgroundColor,
    foregroundColor,
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      height={height}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#c6c3c3") : undefined}
    >
      <rect
        x="0"
        y="0"
        rx="8"
        ry="8"
        width={width}
        height={height}
      />
    </ContentLoader>
  )
})

export default TextAreaFallback;
