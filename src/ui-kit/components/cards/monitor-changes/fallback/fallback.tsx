import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface MonitorChangesCardFallbackProps {
  animate?: boolean;
  speed?: number;
  height?: number;
  width?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const MonitorChangesCardFallback: FC<MonitorChangesCardFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    height = 220,
    width = 280,
    backgroundColor,
    foregroundColor,
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
      <rect x="0" y="0" rx="8" ry="9" width={width} height={height}/>
    </ContentLoader>
  )
})

export default MonitorChangesCardFallback;
