import { ComponentMeta, ComponentStory } from "@storybook/react";
import Dropzone from "../index";


export default {
  title: "inputs/Dropzone",
  component: Dropzone,
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => <Dropzone {...args}/>;

export const Default = Template.bind({});
Default.args = {
  files: [],
  onDrop: (acceptedFiles: File[]) => console.log(acceptedFiles, 'files'),
  onClear: () => console.log("clear"),
  multiple: false,
  maxFiles: 1,
  accept: {
    'image/jpeg': [],
    'image/png': []
  },
};

Default.argTypes = {
  files: {
    name: "files",
    table: {
      type: { summary: "Accepted files" },
    },
  },
  onDrop: {
    name: "onDrop",
    table: {
      type: { summary: "On drop file handler" },
    },
  },
  onClear: {
    name: "onClear",
    table: {
      type: { summary: "On clear dropzone handler" },
    },
  },
  multiple: {
    name: "multiple",
    table: {
      type: { summary: "Set is multiple dropdown" },
      defaultValue: { summary: false },
    },
  },
  maxFiles: {
    name: "maxFiles",
    table: {
      type: { summary: "Set max files for accept" },
      defaultValue: { summary: 1 },
    },
  },
  accept: {
    name: "accept",
    table: {
      type: { summary: "Set accepted formats" },
      defaultValue: {
        summary: `{
          'image/jpeg': [],
          'image/png': []
        }`
      },
    },
  },
};

Default.parameters = {
  docs: {
    description: {
      component: "Files dropzone",
    },
  },
}
