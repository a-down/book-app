import { createParam } from 'solito'
import { Link } from 'solito/link'
import { H1, H3, P, Text, TextLink } from 'app/design/typography'
import { View } from 'app/design/view'
import { TextInput } from 'app/design/components/TextInput'
import { Button } from 'app/design/components/Button'
import { Form } from 'app/design/components/Form'

export const LoginScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-pink-500 p-12">
      <Form style="w-full max-w-[400px] gap-2 rounded-2xl border border-pink-600 bg-slate-100/80 p-8 py-10">
        <H1>Login</H1>
        <Text>Enter your email to login or signup</Text>
        <TextInput placeholder="Email" className="mb-12 mt-8" />
        <Link href={'/home'}>
          <Button>Click Me</Button>
        </Link>
      </Form>
    </View>
  )
}
