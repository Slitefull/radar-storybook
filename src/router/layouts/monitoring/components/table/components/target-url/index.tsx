import { ChangeEvent, FC, memo, useCallback } from 'react';
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedRowsAtom } from "@/entity/atoms/monitoring/selected-rows";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";
import ExternalLinkIcon from "@/ui-kit/customized-icons/external-link";
import Checkbox from "@/ui-kit/components/controls/checkbox";
import SettingsIcon from "@/ui-kit/customized-icons/settings";
import LinkIcon from "@/ui-kit/customized-icons/link";

import { Column, Row } from '@/global.css';
import { STargetURL, Subtext, URLName } from "../../../../styled";


interface TargetURLProps {
  name: string;
  link: string;
  subtext: string;
}

const TargetURL: FC<TargetURLProps> = memo((
  {
    name,
    link,
    subtext,
  }
): JSX.Element => {
  const navigate = useNavigate();
  const [selectedRows, setSelectedRows] = useRecoilState(selectedRowsAtom);

  const onOpenLinkHandler = useCallback((url: string) => navigate(url), [navigate]);

  const onCheckHandler = useCallback((event: any) => {
    if (selectedRows.find((element) => element === event.target.name)) {
      setSelectedRows(selectedRows.filter((element) => element !== event.target.name));
      return;
    }

    setSelectedRows([...selectedRows, event.target.name])
  }, [selectedRows]);

  return (
    <STargetURL>
      <Checkbox
        name={name}
        checked={!!selectedRows.find((element) => element === name)}
        onChange={(event) => onCheckHandler(event)}
      />
      <Column gap={4}>
        <Row gap={10} align={"center"}>
          <URLName>
            {name}
          </URLName>
          <ExternalLinkIcon
            size={15}
            onClick={() => onOpenLinkHandler(link)}
          />
          <SettingsIcon
            size={12}
            onClick={() => onOpenLinkHandler(link)}
            hoverColor={PRIMARY_60}
          />
          <LinkIcon size={12}/>
        </Row>
        <Subtext>
          {subtext}
        </Subtext>
      </Column>
    </STargetURL>
  );
});

export default TargetURL;