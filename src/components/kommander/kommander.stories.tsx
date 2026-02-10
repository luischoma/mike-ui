import type { Meta, StoryObj } from "@storybook/react-vite";

import { Kommander } from "./kommander";

const meta = {
  title: "Components/Kommander",
  component: Kommander,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Press Cmd/Ctrl+K to open the Kommander dialog.",
      },
    },
  },
  argTypes: {
    title: { control: "text" },
  },
} satisfies Meta<typeof Kommander>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomTitle: Story = {
  args: {
    title: "My Palette",
  },
};
