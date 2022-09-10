import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface LinkFallbackProps {
  animate?: boolean;
  speed?: number;
  width?: number;
  height?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const LinkFallback: FC<LinkFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    height = 35,
    width = 140,
    backgroundColor,
    foregroundColor
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      height={height}
      width={width}
      viewBox={`0 0 ${width} ${height}`}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#c6c3c3") : undefined}
    >
      <rect x="0" y="0" rx="8" ry="8" width={width} height={height}/>
    </ContentLoader>
  )
})

export default LinkFallback;
