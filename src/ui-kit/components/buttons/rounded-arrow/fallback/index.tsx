import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface RoundedButtonFallbackProps {
  animate?: boolean;
  speed?: number;
  size?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const RoundedButtonFallback: FC<RoundedButtonFallbackProps> = memo((
  {
    animate = false,
    speed = 0,
    size = 35,
    backgroundColor,
    foregroundColor,
  }
): JSX.Element => {
  return (
    <ContentLoader
      animate={animate}
      speed={speed}
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      backgroundColor={backgroundColor || "#f7f7f7"}
      foregroundColor={animate ? (foregroundColor || "#ecebeb") : undefined}
    >
      <circle cx={size / 2} cy={size / 2} r={size / 2}/>
    </ContentLoader>
  )
})

export default RoundedButtonFallback;
