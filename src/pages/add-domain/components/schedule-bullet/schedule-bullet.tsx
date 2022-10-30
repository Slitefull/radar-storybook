import { FC, memo, useState } from 'react';
import Day from "@/ui-kit/components/inputs/day/day";
import Input from "@/ui-kit/components/inputs/text/text";
import PlusCircle from "@/ui-kit/customized-icons/plus-circle/plus-circle";
import Meridian from "@/ui-kit/components/inputs/meridian/meridian";
import RadioGroup from "@/ui-kit/components/inputs/radio-group/radio-group";

import { Row } from '@/global.css';


const ScheduleBullet: FC = memo((): JSX.Element => {
  const [time, setTime] = useState<string>("12:00");

  return (
    <Row
      gap={10}
      align={"center"}
    >
      <Day
        label={'Mon'}
        name={"day"}
        onChange={() => console.log("qwe")}
      />
      <Input
        type={"time"}
        inputSize={"small"}
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <RadioGroup gap={0}>
        <Meridian
          label={'AM'}
          name={"meridian"}
          onChange={() => console.log("qwe")}
        />
        <Meridian
          label={'PM'}
          name={"meridian"}
          onChange={() => console.log("qwe")}
        />
      </RadioGroup>
      <PlusCircle size={24}/>
    </Row>
  );
});

export default ScheduleBullet;
