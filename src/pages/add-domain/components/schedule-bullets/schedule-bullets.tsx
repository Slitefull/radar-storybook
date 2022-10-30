import { FC, memo } from 'react';
import ScheduleBullet from "../schedule-bullet/schedule-bullet";

import { Column } from '@/global.css';


const ScheduleBullets: FC = memo((): JSX.Element => {
  return (
    <Column>
      <ScheduleBullet/>
      <ScheduleBullet/>
      <ScheduleBullet/>
      <ScheduleBullet/>
      <ScheduleBullet/>
      <ScheduleBullet/>
      <ScheduleBullet/>
    </Column>
  );
});

export default ScheduleBullets;
