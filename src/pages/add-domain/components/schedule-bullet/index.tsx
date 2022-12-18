import { FC, memo, useState } from 'react';
import Day from "@/ui-kit/components/controls/day";
import Input from "@/ui-kit/components/controls/text";
import PlusCircle from "@/ui-kit/customized-icons/plus-circle";
import Meridian from "@/ui-kit/components/controls/meridian";
import RadioGroup from "@/ui-kit/components/controls/radio-group";

import { Row } from '@/global.css';
import CloseIcon from "@/ui-kit/customized-icons/close";


interface ScheduleBulletProps {
  index: number;
  onAdd: () => void;
  onDelete: (index: number) => void;
}

const ScheduleBullet: FC<ScheduleBulletProps> = memo(({ index, onAdd, onDelete }): JSX.Element => {
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
      <PlusCircle size={24} onClick={onAdd}/>
      <CloseIcon size={24} onClick={() => onDelete(index)}/>
    </Row>
  );
});

export default ScheduleBullet;
