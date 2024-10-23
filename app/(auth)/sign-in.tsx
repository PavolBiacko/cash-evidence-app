import { FC } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context'

import AuthForm from '@/components/AuthForm'
import { FormData, SignInData } from '@/types/types';

const SignIn: FC = () => {

  const submit = async (data: SignInData) => {

  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <AuthForm
        title="Log in to Aura"
        fields={[
          { title: "email", placeholder: "email@email.com", keyboardType: "email-address" },
          { title: "password", placeholder: "password123" }
        ]}
        initialValues={{ email: "", password: "" }}
        onSubmit={submit}
        linkData={{
          prelinkText: "Don't have an account?", linkText: "Sign Up", linkHref: "/sign-up"
        }}
      />
    </SafeAreaView>
  );
};

export default SignIn;
