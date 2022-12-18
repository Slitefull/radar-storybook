import { FC, Fragment, memo } from 'react';
import { NEUTRAL_90, NEUTRAL_60 } from "@/ui-kit/constants/colors";
import Label from "@/ui-kit/components/typography/label";
import CheckboxGroup from "@/ui-kit/components/controls/checkbox-group";
import Checkbox from "@/ui-kit/components/controls/checkbox";

import { Row } from "@/global.css";


const General: FC = memo((): JSX.Element => {
  return (
    <Fragment>
      <Label size={"big"} color={NEUTRAL_90} weight={"bold"}>General</Label>
      <Row>
        <CheckboxGroup direction={"column"} gap={40}>
          <Checkbox
            checked={false}
            label={"Ignore URL Query Parameters"}
            labelPosition={"right"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Query parameters can cause false link alerts, so we ignore by default.  If your site uses query parameters in your URLs, uncheck this option."}
            subtitleColor={NEUTRAL_60}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Exclude Months from comparisons"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Ignores changes that occur based on the month changing."}
            subtitleColor={NEUTRAL_60}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Strip Out Numbers Within Text"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Ignore changes that occur based on numbers within HTML tags (ex. dates within H1s, Titles or Meta Descriptions)."}
            subtitleColor={NEUTRAL_60}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Consolidate Redirects"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"When a redirect is found, this option only generates a single redirect change."}
            subtitleColor={NEUTRAL_60}
          />
        </CheckboxGroup>
        <CheckboxGroup direction={"column"} gap={40}>
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Inhibit Home Page and Robots.Txt Changes"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Use this setting if you have multiple profiles for the same domain and don't want duplicate changes shown for home page and robots."}
            subtitleColor={NEUTRAL_60}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Inhibit Search Console Winners & Losers Report"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Use this setting if you have multiple profiles for the same domain to prevent duplicate Search Console Winners & Losers reports."}
            subtitleColor={NEUTRAL_60}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Rendered vs Rendered"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Uses the javascript / rendered version of the site.  The first crawl after switching will compare fetched vs. rendered and may show many changes."}
            subtitleColor={NEUTRAL_60}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Disable domain URL redirect"}
            labelColor={NEUTRAL_90}
            labelWeight={"bold"}
            subtitle={"Does not follow the redirect to the new URL."}
            subtitleColor={NEUTRAL_60}
          />
        </CheckboxGroup>
      </Row>
    </Fragment>
  );
});

export default General;