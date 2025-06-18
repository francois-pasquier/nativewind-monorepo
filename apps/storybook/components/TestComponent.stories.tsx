import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";
import React from "react";
import { View } from "react-native";
import { TestComponent } from "app/components/TestComponent";

const meta = {
  title: "TestComponent",
  component: TestComponent,
  decorators: [
    (Story) => (
      <View style={{ padding: 16 }}>
        <Story />
      </View>
    ),
  ],
} satisfies Meta<typeof TestComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {};
