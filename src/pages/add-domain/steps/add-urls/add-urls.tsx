import { FC, memo } from 'react';
import { useRecoilState } from "recoil";
import { selectedUrlsRadio } from "@/entity/atoms/add-domain/add-urls/selected-urls-radio";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import RadioCollapsible from "@/ui-kit/components/cards/radio-collapsible/collapsible";

import { Column } from '@/global.css';


const AddUrls: FC = memo((): JSX.Element => {
  const [selectedRadio, setSelectedRadio] = useRecoilState<string>(selectedUrlsRadio);

  return (
    <Column width={"90%"} gap={10}>
      <RadioCollapsible
        name={"page_types"}
        label={"Add page types (recommended)"}
        labelColor={selectedRadio === "page_types" ? "primary" : "ghost"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "page_types"}
      >
        qwe
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"upload_file"}
        label={"Upload an XLSX file"}
        labelColor={selectedRadio === "upload_file" ? "primary" : "ghost"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "upload_file"}
      >
        qwe
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"paste_urls"}
        label={"Paste your URLs"}
        labelColor={selectedRadio === "paste_urls" ? "primary" : "ghost"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "paste_urls"}
      >
        qwe
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"search_console"}
        label={"Top Pages / Search console"}
        labelColor={selectedRadio === "search_console" ? "primary" : "ghost"}
        onChangeRadio={(name) => setSelectedRadio(name)}
        checked={selectedRadio === "search_console"}
      >
        qwe
      </RadioCollapsible>
      <LineSeparator/>

      <RadioCollapsible
        name={"sitemaps"}
        label={"Sitemaps"}
        labelColor={selectedRadio === "sitemaps" ? "primary" : "ghost"}
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
