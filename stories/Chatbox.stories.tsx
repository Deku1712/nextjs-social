import type { Meta, StoryObj } from "@storybook/react";
import ChatBox from "../app/components/message/Chatbox/ChatBox";

const meta: Meta<typeof ChatBox> = {
  component: ChatBox,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatBox>;

export const Default: Story = {};
