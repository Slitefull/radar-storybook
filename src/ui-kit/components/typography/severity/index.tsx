import { FC, memo, ReactNode } from 'react';
import { NEUTRAL_00, NEUTRAL_50, NEUTRAL_70, PRIMARY_100, PRIMARY_40, SUPPORT_2_50 } from "@/ui-kit/constants/colors";
import Text, { TextSize, TextWeight } from "@/ui-kit/components/typography/text";

import { Severities } from "@/ui-kit/types/severities";


const SeverityColor: Record<Severities, Color> = {
  [Severities.Red]: SUPPORT_2_50,
  [Severities.Critical]: PRIMARY_100,
  [Severities.High]: PRIMARY_40,
  [Severities.Medium]: NEUTRAL_50,
  [Severities.Low]: NEUTRAL_70,
};

interface SeverityProps {
  severity: Severities;
  size?: TextSize;
  weight?: TextWeight;
  rounded?: boolean;
  children: ReactNode;
}

const Severity: FC<SeverityProps> = memo((
  {
    severity,
    rounded,
    size,
    weight,
    children
  }
): JSX.Element => {
  return (
    <Text
      type={"secondary"}
      background={SeverityColor[severity]}
      size={size}
      weight={weight}
      rounded={rounded}
      color={NEUTRAL_00}
    >
      {children}
    </Text>
  );
});

export default Severity;