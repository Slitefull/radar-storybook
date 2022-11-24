import { ComponentMeta, ComponentStory } from "@storybook/react";
import RangeDatepicker from "@/ui-kit/components/datepickers/range";


export default {
  title: "datepicker/Range",
  component: RangeDatepicker,
} as ComponentMeta<typeof RangeDatepicker>;

const Template: ComponentStory<typeof RangeDatepicker> = (args) => <RangeDatepicker {...args}/>;

export const Default = Template.bind({});
Default.args = {
  numberOfMonths: 3,
  showOutsideDays: true,
};

Default.argTypes = {
  numberOfMonths: {
    name: "numberOfMonths",
    table: {
      type: { summary: "Set calendars count" },
      defaultValue: {
        summary: 3,
      },
    },
  },
  showOutsideDays: {
    name: "showOutsideDays",
    table: {
      type: { summary: "Set is show outside days" },
      defaultValue: {
        summary: true,
      },
    },
  },
  onSubmit: {
    name: "onSubmit",
    table: {
      type: { summary: "Submit handler" },
      defaultValue: {
        summary: (date: Date) => console.log(date),
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Range datepicker with bullets and custom count of calendars",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/Mh82FuIXtyc3kicOff4J5V/SEORadar-Design-System?node-id=1461%3A5105",
  },
}
