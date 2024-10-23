import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'

import AuthForm from '@/components/AuthForm'
import { FormData, SignUpData } from '@/types/types';

const SignUp: FC = () => {

  const submit = async (data: FormData) => {
    const signUpValues = data as SignUpData;
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <AuthForm
        title="Sign up to Aura"
        fields={[
          { title: "username", placeholder: "MyUsername" },
          { title: "email", placeholder: "email@email.com", keyboardType: "email-address" },
          { title: "password", placeholder: "password123" }
        ]}
        initialValues={{ username: "", email: "", password: "" }}
        onSubmit={submit}
        linkData={{
          prelinkText: "Have an account already?", linkText: "Sign In", linkHref: "/sign-in"
        }}
      />
    </SafeAreaView>
  );
};

export default SignUp;
