import { ComponentMeta, ComponentStory } from "@storybook/react";
import RadioCollapsible from "../index";
import { PRIMARY_60 } from "@/ui-kit/constants/colors";


export default {
  title: "cards/RadioCollapsible",
  component: RadioCollapsible,
} as ComponentMeta<typeof RadioCollapsible>;

const Template: ComponentStory<typeof RadioCollapsible> = (args) => <RadioCollapsible {...args}>
  Consectetur adipiscing elit pellentesque habitant morbi tristique.
  Pulvinar pellentesque habitant morbi tristique. Vel quam elementum
  pulvinar etiam. Pulvinar pellentesque habitant morbi tristique senectus
</RadioCollapsible>;

export const Default = Template.bind({});
Default.args = {
  name: "test",
  label: "Crawl settings",
  labelColor: PRIMARY_60,
  labelSize: "default",
  labelWeight: "bold",
  labelPosition: "right",
  onChangeRadio: (name: string) => console.log(name),
  checked: false,
};

Default.argTypes = {
  name: {
    name: "name",
    table: {
      type: { summary: "Set name for card" },
      defaultValue: { summary: "test" },
    },
  },
  label: {
    name: "label",
    table: {
      type: { summary: "Set label for the card" },
      defaultValue: { summary: "Crawl setting" },
    },
  },
  labelColor: {
    name: "color",
    table: {
      type: { summary: "Set color for the label" },
      defaultValue: {
        summary: "primary",
      },
    },
  },
  labelSize: {
    name: "size",
    options: ["default", "small"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set size for the label" },
      defaultValue: {
        summary: "default",
      },
    },
  },
  labelWeight: {
    name: "weight",
    options: ["default", "bold"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set weight for the label" },
      defaultValue: {
        summary: "default",
      },
    },
  },
  labelPosition: {
    name: "position",
    options: ["top", "right", "bottom", "left"],
    control: { type: "radio" },
    table: {
      type: { summary: "Set position of the label" },
      defaultValue: {
        summary: "left",
      },
    },
  },
  checked: {
    name: "checked",
    table: {
      type: { summary: "Set header`s subtitle" },
      defaultValue: { summary: "Any string" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Radio collapsible card with any children (ReactNode or string)",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=952%3A51493",
  }
}
