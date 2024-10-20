import { ImageProps } from "react-native"

export type TabIconProps = {
  icon: ImageProps,
  color: string,
  name: string,
  focused: boolean
}

export type CustomButtonProps = {
  title: string,
  handlePress: () => void,
  containerStyles: string,
  textStyles?: string,
  isLoading?: boolean
}
