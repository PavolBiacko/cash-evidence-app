import { TabIconProps } from "@/types/tabs/types"
import { View, Image, Text } from "react-native"
import { FC } from "react"

export const TabIcon: FC<TabIconProps> = ({ icon, color, name, focused }) => {
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
