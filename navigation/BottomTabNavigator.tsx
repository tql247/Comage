/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { SearchBar } from 'react-native-elements';

import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ProfileScreen from '../screens/ProfileScreen';
import MainScreen from '../screens/MainScreen';
import FollowScreen from '../screens/FollowScreen';
import SearchScreen from '../screens/SearchScreen';
import { BottomTabParamList, NotificationParamList, ProfileParamList, MainParamList, FollowParamList, SearchParamList } from '../types';
import LogoTitle from '../components/LogoTitle';
import SearchBarHeader from '../components/SearchBarHeader';
import {StyleSheet} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import GradientHeaderTitle from "../components/GradientHeaderTitle";


const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Main"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Main"
        component={MainNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-flame-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-search-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Follow"
        component={FollowNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-heart-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notification"
        component={NotificationNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-notifications-outline" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-person-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const MainStack = createStackNavigator<MainParamList>();

function MainNavigator() {
  return (
    <MainStack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerBackground: () =>
                <GradientHeaderTitle />,
            headerStyle: { backgroundColor: 'white' },
        }}
    >
      <MainStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ headerTitle: "Main", headerStyle: styles.container }}
      />
    </MainStack.Navigator>
  );
}


const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
  return (
    <SearchStack.Navigator
        screenOptions={{
            headerTintColor: 'white',
            headerBackground: () =>
                <GradientHeaderTitle />,
            headerStyle: { backgroundColor: 'white' },
        }}
    >
      <SearchStack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{ headerTitle: () => <SearchBarHeader />, headerStyle: styles.container}}
      />
    </SearchStack.Navigator>
  );
}


const FollowStack = createStackNavigator<FollowParamList>();

function FollowNavigator() {
  return (
    <FollowStack.Navigator>
      <FollowStack.Screen
        name="FollowScreen"
        component={FollowScreen}
        options={{ headerTitle: "Following", headerStyle: styles.container }}
      />
    </FollowStack.Navigator>
  );
}



const NotificationStack = createStackNavigator<NotificationParamList>();

function NotificationNavigator() {
  return (
    <NotificationStack.Navigator>
      <NotificationStack.Screen
        name="NotificationScreen"
        component={ProfileScreen}
        options={{ headerTitle: 'Notifications'}}
      />
    </NotificationStack.Navigator>
  );
}


const ProfileStack = createStackNavigator<ProfileParamList>();

function ProfileNavigator() {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{  headerTitle: 'Profile Title', headerStyle: styles.container}}
      />
    </ProfileStack.Navigator>
  );
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'white',
        // borderBottomWidth: 0,
        // shadowColor: 'transparent', //no effect
        // // borderTopColor: 'white',
        // borderWidth: 0
    }
});
