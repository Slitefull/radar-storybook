import { FC, memo } from 'react';

import { SDayBullet } from "./styled";


interface DayProps {
  name: string;
  active: boolean;
}

const DayBullet: FC<DayProps> = memo(({ name, active }): JSX.Element => {
  return (
    <SDayBullet active={active}>
      {name}
    </SDayBullet>
  );
});

export default DayBullet;
