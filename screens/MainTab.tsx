import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FeedIcon, CalendarIcon, SearchIcon} from '../icons/icons';
import FeedScreen from './FeedScreen';
import CalendarScreen from './CalendarScreen';
import SearchScreen from './SearchScreen';

type MainTabScreenParamList = {
  Feed: undefined;
  Calendar: undefined;
  Search: undefined;
};
const Tab = createBottomTabNavigator<MainTabScreenParamList>();

const MainTab = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    screenOptions={{
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#46c4ea',
      tabBarHideOnKeyboard: true,
    }}>
    <Tab.Screen
      name="Feed"
      component={FeedScreen}
      options={{
        tabBarIcon: FeedIcon,
        title: '피드',
      }}
    />
    <Tab.Screen
      name="Calendar"
      component={CalendarScreen}
      options={{
        tabBarIcon: CalendarIcon,
        title: '달력',
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: SearchIcon,
        title: '검색',
      }}
    />
  </Tab.Navigator>
);
export default MainTab;
