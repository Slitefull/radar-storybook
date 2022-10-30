import { ComponentMeta, ComponentStory } from "@storybook/react";
import Stepper from "../stepper";


export default {
  title: "ui-kit/Stepper",
  component: Stepper,
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args}/>;

export const Default = Template.bind({});

const steps = [
  {
    label: "Add domain",
    component: <div>this is step 1 and it is good</div>,
    exitValidation: false
  },
  {
    label: "Schedule",
    component: <div>this is step 2 and it is even better</div>
  },
  {
    label: "Customize",
    component: <div>this is step 3 and... WOW</div>
  },
  {
    label: "Add URLs",
    component: <div>this is step 4 and it is 3l33t</div>
  }
]

Default.args = {
  steps,
  onFinish: () => console.log("finish"),
  isClickable: false,
};

Default.argTypes = {
  steps: {
    table: {
      type: { summary: "Steps for stepper (ReactNode)" },
    },
  },
  onFinish: {
    table: {
      type: { summary: "On finish handler" },
    },
  },
  isClickable: {
    table: {
      type: { summary: "Set is clickable stepper" },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Stepper with react nodes",
    },
  },
  design: {
    type: "figma",
    url: "https://www.figma.com/file/6HhomvxbGrw7P6EX03KM7i/Final-designs-14.07?node-id=947%3A49544",
  },
};
