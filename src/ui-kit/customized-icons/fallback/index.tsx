import { FC, memo } from "react"
import ContentLoader from "react-content-loader";


interface IconFallbackProps {
  animate?: boolean;
  speed?: number;
  size?: number;
  backgroundColor?: Color;
  foregroundColor?: Color;
}

const IconFallback: FC<IconFallbackProps> = memo((
  {
    animate,
    speed,
    size,
    backgroundColor,
    foregroundColor,
  }
): JSX.Element => (
  <ContentLoader
    animate={animate || false}
    speed={speed || 0}
    width={size || 20}
    height={size || 20}
    viewBox={`0 0 ${size || 20} ${size || 20}`}
    backgroundColor={backgroundColor || "#f7f7f7"}
    foregroundColor={animate ? (foregroundColor || "#ecebeb") : undefined}
  >
    <circle
      cx={size ? (size / 2) : 10}
      cy={size ? (size / 2) : 10}
      r={size ? (size / 2) : 10}
    />
  </ContentLoader>
))

export default IconFallback;
