import { FC, memo, useCallback, useMemo } from 'react';
import { useRecoilState } from "recoil";
import { customCookies } from "@/entity/atoms/add-domain/customize/crawl-settings/custom-cookies";
import { httpHeaders } from "@/entity/atoms/add-domain/customize/crawl-settings/http-headers";
import LineSeparator from "@/ui-kit/components/separators/line/line";
import DropdownWithTypes from "@/ui-kit/components/dropdowns/with-types/with-types";
import FormCreator from "@/ui-kit/components/form-creator/form-creator";
import CustomCookie from './custom-cookie';
import HTTPHeader from './http-header';

import { Column } from "@/global.css";


const CrawlSettings: FC = memo((): JSX.Element => {
  const [customCookieElements, setCustomCookieElements] = useRecoilState<number[]>(customCookies);
  const [httpHeadersElements, setHttpHeadersElements] = useRecoilState<number[]>(httpHeaders);

  const userAgentOptions = [
    { value: "my_domain", label: "12AM - 6AM | Mon - Fri" },
    { value: "my_domain_2", label: "12AM - 6AM | Mon, Wed, Fri" },
    { value: "my_domain_3", label: "12AM - 6AM | Thu" },
    { value: "custom", label: "Custom" },
  ];

  const onAddCustomCookieElementHandler = useCallback(
    () => setCustomCookieElements([...customCookieElements, customCookieElements.length]),
    [customCookieElements]
  );

  const onAddHTTPHeaderElementHandler = useCallback(
    () => setHttpHeadersElements([...httpHeadersElements, httpHeadersElements.length]),
    [httpHeadersElements]
  );

  const onDeleteCustomCookieElementHandler = useCallback(
    (id: number) => setCustomCookieElements(customCookieElements.filter((element) => element !== id)),
    [customCookieElements],
  );

  const onDeleteHTTPHeaderElementHandler = useCallback(
    (id: number) => setHttpHeadersElements(httpHeadersElements.filter((element) => element !== id)),
    [httpHeadersElements],
  );

  const customCookiesComponents = useMemo(
    () => customCookieElements.map((element) => (
      <CustomCookie
        key={element}
        index={element}
        onDelete={onDeleteCustomCookieElementHandler}
      />
    )), [customCookieElements]
  );

  const httpHeaderComponents = useMemo(
    () => httpHeadersElements.map((element) => (
      <HTTPHeader
        key={element}
        index={element}
        onDelete={onDeleteHTTPHeaderElementHandler}
      />
    )), [httpHeadersElements]
  );

  return (
    <Column width={"90%"} margin={"auto"}>
      <LineSeparator/>
      <DropdownWithTypes
        label={"User agent"}
        labelPosition={"top"}
        labelColor={"ghost"}
        subtitleColor={"secondary"}
        subtitle={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."}
        options={userAgentOptions}
      />
      <LineSeparator/>

      <FormCreator
        label={"Custom Cookies"}
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={customCookiesComponents}
        onAddComponentsHandler={onAddCustomCookieElementHandler}
      />
      <LineSeparator/>

      <FormCreator
        label={"HTTP Header"}
        labelColor={"ghost"}
        labelSize={"big"}
        tooltip={<div>Tooltip</div>}
        components={httpHeaderComponents}
        onAddComponentsHandler={onAddHTTPHeaderElementHandler}
      />
    </Column>
  );
});

export default CrawlSettings;
