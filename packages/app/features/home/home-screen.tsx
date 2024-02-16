import { A, H1, H2, H3, P, Text, TextLink } from 'app/design/typography'
import { Row, Column } from 'app/design/layout'
import { View } from 'app/design/view'
import { Link } from 'solito/link'

import { MotiLink } from 'solito/moti'

export function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-rose-400 p-4">
      <View className="max-w-[500px] flex-1 items-stretch justify-start gap-8">
        <Row className="items-end justify-between">
          <View className="mt-8">
            <H2>Welcome back...</H2>
            <H1>Brittany!</H1>
          </View>
          <View className="absolute bottom-4 right-0 h-16 w-16 rounded-full bg-rose-700"></View>
          <View className="absolute bottom-0 right-10 h-16 w-16 rounded-full bg-rose-600"></View>
        </Row>

        <View className="relative overflow-hidden rounded-lg border border-rose-500 bg-rose-300/40 p-4 sm:p-6 lg:p-8">
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700"></span>

          <P className="mt-1 text-xs font-medium text-rose-950">
            Currently reading...
          </P>

          <Row className="mt-2 gap-4">
            <View>
              <img
                alt=""
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                className="h-24 w-16 rounded-lg object-cover shadow-sm"
              />
            </View>
            <Column className="w-full justify-end">
              <H3 className="text-wrap text-lg font-bold text-gray-900">
                Building a SaaS product as a software developer
              </H3>

              <P className="text-xs font-medium text-rose-900">John Doe</P>
            </Column>
          </Row>

          <Row className="mt-4 h-8 w-full overflow-clip rounded-lg bg-rose-200">
            <Row className=" h-8 w-[75%] rounded-r-lg bg-rose-800"></Row>
          </Row>

          {/* <Link href="#">
            <Row className="mt-2 justify-center gap-1">
              <View className="h-4 w-4 rounded-md bg-rose-800"></View>
              <P className="text-xs font-medium text-rose-800">
                Track Your Progress
              </P>
            </Row>
          </Link> */}
          <TextLink
            className="mt-1 text-center text-sm font-medium text-rose-900"
            href="#"
          >
            Track Your Progress
          </TextLink>
        </View>
      </View>
    </View>
  )
}
