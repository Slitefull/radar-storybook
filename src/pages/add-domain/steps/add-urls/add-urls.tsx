import { FC, memo } from 'react';
import { useRecoilState } from "recoil";
import { selectedUrlsRadio } from "@/entity/atoms/add-domain/add-urls/selected-urls-radio";
import { PLUMP_PURPLE, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import RadioCollapsible from "@/ui-kit/components/cards/radio-collapsible/collapsible";
import PageTypes from "@/pages/add-domain/steps/add-urls/components/page-types";
import UploadFile from "@/pages/add-domain/steps/add-urls/components/upload-file";
import PasteUrls from "@/pages/add-domain/steps/add-urls/components/paste-urls";

import { Column } from '@/global.css';


const AddUrls: FC = memo((): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useRecoilState<string>(selectedUrlsRadio);

  return (
    <Column width={"90%"} gap={10}>
      <RadioCollapsible
        name={"page_types"}
        label={"Add page types (recommended)"}
        labelColor={selectedRadio === "page_types" ? PLUMP_PURPLE : ROCKET_METALLIC}
        labelSize={"big"}
        labelWeight={"bold"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "page_types"}
      >
        <PageTypes/>
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"upload_file"}
        label={"Upload an XLSX file"}
        labelColor={selectedRadio === "upload_file" ? PLUMP_PURPLE : ROCKET_METALLIC}
        labelSize={"big"}
        labelWeight={"bold"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "upload_file"}
      >
        <UploadFile/>
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"paste_urls"}
        label={"Paste your URLs"}
        labelColor={selectedRadio === "paste_urls" ? PLUMP_PURPLE : ROCKET_METALLIC}
        labelSize={"big"}
        labelWeight={"bold"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "paste_urls"}
      >
        <PasteUrls/>
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"search_console"}
        label={"Top Pages / Search console"}
        labelColor={selectedRadio === "search_console" ? PLUMP_PURPLE : ROCKET_METALLIC}
        labelSize={"big"}
        labelWeight={"bold"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "search_console"}
      >
        qwe
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"sitemaps"}
        label={"Sitemaps"}
        labelColor={selectedRadio === "sitemaps" ? PLUMP_PURPLE : ROCKET_METALLIC}
        labelSize={"big"}
        labelWeight={"bold"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "sitemaps"}
      >
        qwe
      </RadioCollapsible>
      <LineSeparator/>
    </Column>
  );
});

export default AddUrls;
