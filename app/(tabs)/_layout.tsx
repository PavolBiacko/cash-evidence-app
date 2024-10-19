import { View, Text, Image, ImageProps } from 'react-native'
import { Tabs, Redirect } from 'expo-router'

import { icons } from "../../constants"
import { FC } from 'react'

type TabIconProps = {
  icon: ImageProps,
  color: string,
  name: string,
  focused: boolean
}

const tabData = [
  { name: 'home', icon: icons.home },
  { name: 'bookmark', icon: icons.bookmark },
  { name: 'create', icon: icons.plus },
  { name: 'profile', icon: icons.profile },
];

const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const TabIcon: FC<TabIconProps> = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}>
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false
        }}
      >
        {tabData.map((tab) => (
          <Tabs.Screen
            key={tab.name}
            name={tab.name}
            options={{
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={tab.icon}
                  color={color}
                  name={capitalizeFirstLetter(tab.name)}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  )
}

export default TabsLayout