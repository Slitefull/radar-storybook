import { FC, Fragment, memo } from 'react';
import { DARK_LAVA, ROCKET_METALLIC } from "@/ui-kit/constants/colors";
import Label from "@/ui-kit/components/label";
import CheckboxGroup from "@/ui-kit/components/inputs/checkbox-group";
import Checkbox from "@/ui-kit/components/inputs/checkbox";

import { Row } from "@/global.css";


const General: FC = memo((): JSX.Element => {
  return (
    <Fragment>
      <Label size={"big"} color={DARK_LAVA} weight={"bold"}>General</Label>
      <Row>
        <CheckboxGroup direction={"column"} gap={40}>
          <Checkbox
            checked={false}
            label={"Ignore URL Query Parameters"}
            labelPosition={"right"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Query parameters can cause false link alerts, so we ignore by default.  If your site uses query parameters in your URLs, uncheck this option."}
            subtitleColor={ROCKET_METALLIC}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Exclude Months from comparisons"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Ignores changes that occur based on the month changing."}
            subtitleColor={ROCKET_METALLIC}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Strip Out Numbers Within Text"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Ignore changes that occur based on numbers within HTML tags (ex. dates within H1s, Titles or Meta Descriptions)."}
            subtitleColor={ROCKET_METALLIC}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Consolidate Redirects"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"When a redirect is found, this option only generates a single redirect change."}
            subtitleColor={ROCKET_METALLIC}
          />
        </CheckboxGroup>
        <CheckboxGroup direction={"column"} gap={40}>
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Inhibit Home Page and Robots.Txt Changes"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Use this setting if you have multiple profiles for the same domain and don't want duplicate changes shown for home page and robots."}
            subtitleColor={ROCKET_METALLIC}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Inhibit Search Console Winners & Losers Report"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Use this setting if you have multiple profiles for the same domain to prevent duplicate Search Console Winners & Losers reports."}
            subtitleColor={ROCKET_METALLIC}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Rendered vs Rendered"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Uses the javascript / rendered version of the site.  The first crawl after switching will compare fetched vs. rendered and may show many changes."}
            subtitleColor={ROCKET_METALLIC}
          />
          <Checkbox
            checked={false}
            labelPosition={"right"}
            label={"Disable domain URL redirect"}
            labelColor={DARK_LAVA}
            labelWeight={"bold"}
            subtitle={"Does not follow the redirect to the new URL."}
            subtitleColor={ROCKET_METALLIC}
          />
        </CheckboxGroup>
      </Row>
    </Fragment>
  );
});

export default General;