import { A, H1, H2, H3, H4, P, Text, TextLink } from 'app/design/typography'
import { Row, Column, ScrollView } from 'app/design/layout'
import { View, View as Card } from 'app/design/view'
import { Link } from 'solito/link'
import { Button } from 'app/design/components/Button'
import {
  ArrowRight as ArrowRightIcon,
  Book as BookIcon,
  Star as StarIcon,
} from 'feather-icons-react'

import { MotiLink } from 'solito/moti'

const CurrentlyReadingCard = () => {
  return (
    <Card className="relative overflow-hidden rounded-lg border border-rose-500 bg-rose-300/40 p-6">
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-rose-500 via-rose-600 to-rose-700"></span>

      <Row className="mt-1 items-start justify-between">
        <P className="text-xs font-medium text-rose-950">
          Currently reading...
        </P>
        <TextLink
          className="text-right text-xs font-medium text-rose-800"
          href="#"
        >
          More by the Author
        </TextLink>
      </Row>

      <Row className="mt-2 gap-4">
        <View>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="h-24 w-16 rounded-sm object-cover shadow-sm"
          />
        </View>
        <Column className="h-full w-full justify-end">
          <H3 className="text-wrap text-lg font-bold text-gray-900">
            Building a SaaS product as a software developer
          </H3>

          <P className="text-xs font-medium text-rose-900">John Doe</P>
        </Column>
      </Row>

      <Row className="mt-4 h-4 w-full overflow-clip rounded-lg bg-rose-200">
        <Row className=" h-4 w-[75%] rounded-r-lg bg-rose-800"></Row>
      </Row>

      <TextLink
        className="p-1 text-center text-xs font-medium text-rose-900/80"
        href="#"
      >
        Track Your Progress
      </TextLink>
    </Card>
  )
}

const ViewBookshelfLink = () => {
  return (
    <Link href="#" className="">
      <Row className="justify-center gap-2 hover:opacity-60 active:scale-[99%]">
        <BookIcon />
        <H4 className="font-semibold">View your Bookshelf</H4>
        <ArrowRightIcon />
      </Row>
    </Link>
  )
}

export function HomeScreen() {
  return (
    <ScrollView className="flex-1 items-center bg-rose-400 p-4">
      <View className="max-w-[500px] flex-1 items-stretch justify-start gap-8">
        <Row className="items-end justify-between">
          <View className="mt-8">
            <H2>Welcome back...</H2>
            <H1>Brittany!</H1>
          </View>
          <BookIcon className="absolute bottom-4 right-0 h-16 w-16 text-rose-800"></BookIcon>
          <StarIcon className="absolute bottom-0 right-10 h-16 w-16 text-rose-600"></StarIcon>
        </Row>

        <CurrentlyReadingCard />
        <ViewBookshelfLink />
      </View>
    </ScrollView>
  )
}
