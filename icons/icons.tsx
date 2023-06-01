import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type IconProps = {
  color: string;
  size: number;
};

export const FeedIcon = ({color, size}: IconProps) => (
  <Icon name="view-stream" color={color} size={size} />
);
export const CalendarIcon = ({color, size}: IconProps) => (
  <Icon name="event" color={color} size={size} />
);
export const SearchIcon = ({color, size}: IconProps) => (
  <Icon name="search" color={color} size={size} />
);
