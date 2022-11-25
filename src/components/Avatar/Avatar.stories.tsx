import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Avatar } from "./Avatar";

export default {
  title: "ReactComponentLibrary/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const DefaultProps = Template.bind({});
DefaultProps.args = {};

export const DisplayName = Template.bind({});
DisplayName.args = {
  displayName: "Marcio Cesar Corrêa",
};

export const PhotoUrl = Template.bind({});
PhotoUrl.args = {
  displayName: "Marcio Cesar Corrêa",
  src: "https://picsum.photos/200/300",
};

export const CustomStylesComponent = Template.bind({});
CustomStylesComponent.args = {
  displayName: "Marcio Cesar Corrêa",
  src: "https://picsum.photos/200/300",
  sx: {
    width: 300,
    height: 300,
  },
};
