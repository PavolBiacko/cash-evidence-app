import { FC, useState } from 'react'
import { Link } from 'expo-router'
import { AuthFormProps, FormData } from '@/types/types'
import { View, Text, Image, ScrollView } from 'react-native'

import FormField from '@/components/FormField'
import CustomButton from '@/components/CustomButton'

import { images } from "../constants"
import { useCapitalizeWord } from '@/hooks/useUtilHooks'

const AuthForm: FC<AuthFormProps> = ({ title, fields, initialValues, onSubmit, linkText, linkHref }) => {

  const [form, setForm] = useState<FormData>(initialValues);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const submit = async () => {

  };

  return (
    <ScrollView>
      <View className="w-full min-h-[90vh] justify-center px-4 my-6">
        <Image source={images.logo} resizeMode="contain" className="w-[115px] h-[35px]" />
        <Text className="text-2xl text-white mt-10 font-psemibold">{title}</Text>

        {fields.map(({ title, placeholder, keyboardType, otherStyles }) => (
          <FormField
            key={title}
            title={useCapitalizeWord(title)}
            value={form[title]}
            placeholder={placeholder}
            handleChangeText={(e: string) => setForm({ ...form, [title]: e })}
            otherStyles={otherStyles || "mt-7"}
            keyboardType={keyboardType}
          />
        ))}

        <CustomButton
          title={title}
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />

        <View className="justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-pregular">{linkText}</Text>
          <Link href={linkHref} className="text-lg font-psemibold text-secondary">{linkText}</Link>
        </View>
      </View>
    </ScrollView>
  )
}

export default AuthForm
