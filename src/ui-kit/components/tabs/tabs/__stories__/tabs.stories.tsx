import { BaseSyntheticEvent, Fragment, useCallback, useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Tabs from "@/ui-kit/components/tabs/tabs/tabs";
import styled from "styled-components/macro";
import TabPanel from "../../tab-panel/tab-panel";
import Tab from "../../tab/tab";

import { Column } from "@/global.css";


export default {
  title: "ui-kit/Tabs",
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const TabsContainer = styled.div`
  display: flex;
  padding: 0 0 40px;
`;

const Template: ComponentStory<typeof Tabs> = () => {
  const [activeTab, setActiveTab] = useState<number>(1);

  const handleChange = useCallback(
    (e: BaseSyntheticEvent, value: number) => setActiveTab(value),
    []
  );

  return (
    <Column>
      <TabsContainer>
        <Tabs selectedTab={activeTab} onChange={handleChange}>
          <Tab label="Tab 1" value={0}/>
          <Tab label="Tab 2" value={1}/>
          <Tab label="Tab 3" value={2}/>
          <Tab label="Tab 4" value={3}/>
        </Tabs>
      </TabsContainer>
      <Fragment>
        <TabPanel value={activeTab} selectedIndex={0}>
          <h1>Tab 1</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={1}>
          <h1>Tab 2</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={2}>
          <h1>Tab 3</h1>
        </TabPanel>
        <TabPanel value={activeTab} selectedIndex={3}>
          <h1>Tab 4</h1>
        </TabPanel>
      </Fragment>
    </Column>
  )
};

export const Default = Template.bind({});
Default.args = {
  selectedTab: 1,
};

Default.argTypes = {
  selectedTab: {
    name: "selectedTab",
    table: {
      type: { summary: "Selected tab" },
      defaultValue: {
        summary: 1,
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Tabs with any children",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1463%3A3893",
  },
};
