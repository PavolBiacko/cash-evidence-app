import { Href } from "expo-router"
import { ImageProps, KeyboardTypeOptions } from "react-native"

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

type FieldBasics = {
  title: string;
  otherStyles?: string;
  placeholder?: string,
  keyboardType?: KeyboardTypeOptions,
};

export type FormFieldProps = FieldBasics & {
  value: string,
  handleChangeText: (e: string) => void,
}

export type FormData = {
  [key: string]: string;
};

export type AuthFormProps = {
  title: string;
  fields: FieldBasics[];
  initialValues: FormData;  // Add this to pass initial values
  onSubmit: (values: FormData) => void;  // Callback with form values
  isSubmitting: boolean;
  linkText: string;
  linkHref: Href<string>;
};
