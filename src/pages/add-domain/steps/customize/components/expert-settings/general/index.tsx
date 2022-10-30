import { FC, Fragment, memo } from 'react';
import Label from "@/ui-kit/components/label/label";
import CheckboxGroup from "@/ui-kit/components/inputs/checkbox-group/checkbox-group";
import Checkbox from "@/ui-kit/components/inputs/checkbox/checkbox";

import { Row } from "@/global.css";


const General: FC = memo((): JSX.Element => {
  return (
    <Fragment>
      <Label size={"big"} color={"ghost"}>General</Label>
      <Row>
        <CheckboxGroup direction={"column"} gap={40}>
          <Checkbox
            checked={false}
            label={"Ignore URL Query Parameters"}
            labelPosition={"right"}
            labelColor={"ghost"}
            subtitle={"Query parameters can cause false link alerts, so we ignore by default.  If your site uses query parameters in your URLs, uncheck this option."}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Exclude Months from comparisons"}
            labelColor={"ghost"}
            subtitle={"Ignores changes that occur based on the month changing."}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Strip Out Numbers Within Text"}
            labelColor={"ghost"}
            subtitle={"Ignore changes that occur based on numbers within HTML tags (ex. dates within H1s, Titles or Meta Descriptions)."}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Consolidate Redirects"}
            labelColor={"ghost"}
            subtitle={"When a redirect is found, this option only generates a single redirect change."}
          />
        </CheckboxGroup>
        <CheckboxGroup direction={"column"} gap={40}>
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Inhibit Home Page and Robots.Txt Changes"}
            labelColor={"ghost"}
            subtitle={"Use this setting if you have multiple profiles for the same domain and don't want duplicate changes shown for home page and robots."}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Inhibit Search Console Winners & Losers Report"}
            labelColor={"ghost"}
            subtitle={"Use this setting if you have multiple profiles for the same domain to prevent duplicate Search Console Winners & Losers reports."}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Rendered vs Rendered"}
            labelColor={"ghost"}
            subtitle={"Uses the javascript / rendered version of the site.  The first crawl after switching will compare fetched vs. rendered and may show many changes."}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Disable domain URL redirect"}
            labelColor={"ghost"}
            subtitle={"Does not follow the redirect to the new URL."}
          />
        </CheckboxGroup>
      </Row>
    </Fragment>
  );
});

export default General;